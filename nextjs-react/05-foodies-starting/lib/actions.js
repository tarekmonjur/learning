'use server';
import { saveMeal } from '@/data/meals';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import slugify from 'slugify';
import xss from 'xss';
import z from 'zod';

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

const ShareMealSchema = z.object({
  name: z.string().min(3).max(45),
  title: z.string().min(3).max(50),
  email: z.email().max(100),
  summary: z.string().max(200),
  instructions: z.string(),
  image: z
   .instanceof(File, { message: 'Image is required' })
   .refine((file) => file.size > 0, 'Image is required')
   .refine((file) => file.size <= MAX_FILE_SIZE, 'Max 5MB allowed')
   .refine(
      (file) => ACCEPTED_TYPES.includes(file.type),
      'Only.jpg,.png,.webp allowed'
    ),
}).required();

export async function shareMeal(_prevData, formData) {
  // 'use server';

  const meal = {
    title: xss(formData.get('title')),
    name: xss(formData.get('name')),
    email: formData.get('email'),
    summary: xss(formData.get('summary')),
    image: formData.get('image'),
    instructions: xss(formData.get('instructions')),
  };

  const validate = ShareMealSchema.safeParse(meal);
  if (!validate.success) {
    return { error: validate.error.flatten().fieldErrors, values: meal };
  }

  await new Promise((resolve, reject) => setTimeout(resolve(), 2000));

  meal.slug = slugify(meal.title, { lower: true });
  meal.slug = meal.slug + new Date().getTime();
  try {
    const uploadPaths = await resizeAndUploadImage(meal.slug, meal.image);
    meal.image = uploadPaths.imagePathWebp;
  } catch (error) {
    console.warn('file upload error', error.message);
    meal.image = '/images/default.png';
  }

  await saveMeal(meal);
  revalidatePath('/meals')
  redirect('/meals/'+ meal.slug);
}

async function resizeAndUploadImage(name, image, resize = [], optimize = 75, uploadDir = 'images') {
  const rootFolder = 'public';
  const uploadDirPath = path.join(process.cwd(), rootFolder, uploadDir);
  await mkdirSync(uploadDirPath, { recursive: true });

  const extension = image.name.split('.').pop();
  const imageName = `${name}.${extension}`;
  const imageNameWebp = `${name}.webp`;

  const uploadPath =  path.join(uploadDirPath, imageName);
  const uploadPathWeb =  path.join(uploadDirPath, imageNameWebp);

  const imageBytes = await image.arrayBuffer();
  const imageBuffer = Buffer.from(imageBytes);

  // upload webp image
  const upload = sharp(imageBuffer).webp({ quality: optimize });
  if (resize.length)
    upload.resize({ width: resize[0], height: resize[1] })

  await upload.toFile(uploadPathWeb);

  // upload original image
  await writeFileSync(uploadPath, imageBuffer);

  const imagePath = path.posix.join('/', uploadDir, imageName);
  const imagePathWebp = path.posix.join('/', uploadDir, imageNameWebp);

  return {
    imagePath,
    imagePathWebp
  }

}