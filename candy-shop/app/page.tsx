"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Pagination, Navigation, Autoplay],
      loop: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: { slidesPerView: 1.5, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      },
    });
  }, []);

  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center pt-36 py-12 my-12">
        <div className="w-full max-w-7xl px-4 sm:px-6">
          {/* INTRO */}
          <div className="text-center">
            <h1 className="uppercase text-rose-600 font-bold text-2xl sm:text-3xl mb-4">
              Soft as a Cloud Sweet as a Dream
            </h1>
            <p className="text-gray-700/80 sm:text-base md:text-lg font-medium">
              Indulge in sweetness crafted with love
            </p>
            <p className="text-gray-700/80 sm:text-base md:text-lg font-medium pb-10">
              From fluffy marshmallows to rich chocolates, every treat brightens
              your day.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="/shop"
              className="relative inline-block font-bold text-white px-12 py-4 rounded-full bg-linear-to-b from-[#A80054] via-[#FF1E66] to-[#FF5C99] shadow-lg transition duration-300 hover:scale-105"
            >
              Shop Now
            </a>
          </div>

          {/* SWIPER */}
          <div className="swiper w-full mt-12 z-10">
            <div className="swiper-wrapper">
              {[
                "https://images.pexels.com/photos/6798343/pexels-photo-6798343.jpeg",
                "https://images.pexels.com/photos/5469041/pexels-photo-5469041.jpeg",
                "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
                "https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg",
                "https://images.pexels.com/photos/1693027/pexels-photo-1693027.jpeg",
                "https://images.pexels.com/photos/5386671/pexels-photo-5386671.jpeg",
                "https://images.pexels.com/photos/4161223/pexels-photo-4161223.jpeg",
              ].map((img, i) => (
                <div key={i} className="swiper-slide">
                  <img
                    src={img}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="swiper-pagination mt-4"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="w-full py-16 bg-rose-300">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="uppercase font-bold text-2xl sm:text-3xl mb-12 text-center text-rose-600">
            Best Sellers
          </h1>
          <div id="bestSellers" className="w-full" />
        </div>
      </section>

      {/* BLOG */}

      <section id="blog" className="flex flex-col items-center py-16">
        {/* Intro Block */}
        <div className="w-full max-w-4xl rounded-3xl p-8 sm:p-10 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600 mb-4 tracking-tight">
            Sweet Cakes & Delicious Treats
          </h2>
          <p className="text-gray-700/80 sm:text-base md:text-lg font-medium">
            From layered cakes to handcrafted candies, every bite is made to
            delight
          </p>
          <p className="text-gray-700/80 sm:text-base md:text-lg font-medium">
            Savor the sweetness that makes life a little brighter
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="w-full max-w-7xl mt-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col">
              <img
                src="https://images.pexels.com/photos/2236703/pexels-photo-2236703.jpeg"
                alt="Blog 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-rose-600 mb-2">
                  5 Sweet Treats to Try This Summer
                </h3>
                <p className="text-gray-700 text-sm mb-3 flex-1">
                  Discover refreshing candies and chocolates perfect for sunny
                  days. Your taste buds will thank you!
                </p>
                <a
                  href="/blog#blog-1"
                  className="text-rose-700 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col">
              <img
                src="https://images.pexels.com/photos/6441630/pexels-photo-6441630.jpeg"
                alt="Blog 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-rose-600 mb-2">
                  The Art of Chocolate Making
                </h3>
                <p className="text-gray-700 text-sm mb-3 flex-1">
                  Dive into the process of creating rich, decadent chocolates
                  from bean to bar.
                </p>
                <a
                  href="/blog#blog-2"
                  className="text-rose-700 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col">
              <img
                src="https://images.pexels.com/photos/10477126/pexels-photo-10477126.jpeg"
                alt="Blog 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-rose-600 mb-2">
                  Candy Pairings with Your Drinks
                </h3>
                <p className="text-gray-700 text-sm mb-3 flex-1">
                  Enhance your coffee, tea, or wine with the perfect candy
                  pairing tips from our experts.
                </p>
                <a
                  href="/blog#blog-3"
                  className="text-rose-700 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
