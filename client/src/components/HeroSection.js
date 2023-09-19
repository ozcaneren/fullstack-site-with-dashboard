import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="container mx-auto pt-24">
      <section className="relative w-full h-[700px] rounded-xl bg-[url(https://wallpapercave.com/wp/wp8685859.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center pb-64">
            <h1 className="text-3xl uppercase font-extrabold sm:text-5xl">
              Marmaris Otel
            </h1>
            <p className="mt-4 sm:text-xl/relaxed">
              Hayalinizdeki Otele Kavuşun
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center text-center">
              <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-blue-300 to-blue-500 hover:from-gray-300 hover:to-gray-500 hover:text-black  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">
                <Link to="/rooms">Oda Bul</Link>
                <span className="animate-ping absolute right-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-gray-400 to-blue-700 "></span>
              </button>

              <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-blue-300 to-blue-500 hover:from-gray-300 hover:to-gray-500 hover:text-black  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">
                <Link to="/rooms">Bize Ulasin</Link>
                <span className="animate-ping absolute right-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-gray-400 to-blue-700 "></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
