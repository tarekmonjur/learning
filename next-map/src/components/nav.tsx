import Link from 'next/link'

export default function Nabvar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://github.com/tarekmonjur"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://avatars.githubusercontent.com/u/12637955?s=96&v=4"
              className="h-8"
              alt="Tarek Monjur"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Share Location
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              01832308565
            </a>
            <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link className="text-gray-900 dark:text-white hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 dark:text-white hover:underline" href="/share">
                  Share Location
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 dark:text-white hover:underline" href="/find">
                  Find Location
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
