'use client'
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();
  const imageRef = useRef();
  const handlePickClick = () => {
    imageRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickImage(null);
      return;
    }

    const maxSizeBytes = 1 * 1024 * 1024; // 1 MB in bytes

    if (file.size > maxSizeBytes) {
      alert(`File is too large! Maximum allowed size is 1 MB. Your file is ${(file.size / (1024 * 1024)).toFixed(2)} MB.`)
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)

  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p> No image picked yet.</p>}
          {pickImage && <Image src={pickImage} alt="User selected image" fill />}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={imageRef}
          onChange={handleImageChange}
        />
        <button type="button" className={classes.button} onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
