import {
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsFillSignpost2Fill,
  BsFillTelephoneFill,
  BsMailbox,
} from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#EEEEEE] dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Kampanyalarımızdan haberdar olmak için bültenimize kaydolun.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Adresiniz"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Kaydol
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Hizli Linkler
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Ana Sayfa
                </a>
                <a
                  href="/rooms"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Odalar
                </a>
                <a
                  href="/gallery"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Galeri
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Iletisim
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="s"
                  className="text-gray-600 inline-flex items-center transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  <BsFillSignpost2Fill className="mr-2" />
                  <span>Marmaris, Mugla</span>
                </a>
                <a
                  href="s"
                  className="text-gray-600 inline-flex items-center transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  <BsMailbox className="mr-2" />
                  <span>info@marmarisotel.com</span>
                </a>
                <a
                  href="s"
                  className="text-gray-600 inline-flex items-center transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  <BsFillTelephoneFill className="mr-2" />
                  <span>+90 252 412 00 00</span>
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex items-center justify-between">
            <a href="s">
              <span className="w-auto h-7 font-bold" alt="">
                Marmaris Otel
              </span>
            </a>

            <div className="flex -mx-2">
              <a
                href="s"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                <BsInstagram />
              </a>

              <a
                href="s"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <BsWhatsapp />
              </a>

              <a
                href="s"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Github"
              >
                <BsFacebook />
              </a>
              <a
                href="s"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Github"
              >
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
