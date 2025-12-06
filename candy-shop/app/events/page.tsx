import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function EventsPage() {
  return (
    <>
      <Header />

      <section className="py-24 bg-rose-50 mt-10">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif font-bold text-rose-500 mb-12 text-center">
            Upcoming Events
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-rose-100 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-rose-600 mb-2">
                Candy Making Workshop
              </h2>
              <p className="text-rose-700 mb-2">Date: October 20, 2025</p>
              <p className="text-rose-700">
                Join our hands-on candy making workshop. Learn to craft
                chocolates and sweets from our expert team.
              </p>
            </div>

            <div className="bg-rose-100 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-rose-600 mb-2">
                Halloween Sweet Sale
              </h2>
              <p className="text-rose-700 mb-2">Date: October 31, 2025</p>
              <p className="text-rose-700">
                Enjoy spooky-themed candies and exclusive Halloween discounts at
                Sunny Delights.
              </p>
            </div>

            <div className="bg-rose-100 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-rose-600 mb-2">
                Christmas Treats Pop-Up
              </h2>
              <p className="text-rose-700 mb-2">Date: December 15, 2025</p>
              <p className="text-rose-700">
                Celebrate the holiday season with our limited-edition Christmas
                treats and sweets.
              </p>
            </div>

            <div className="bg-rose-100 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-rose-600 mb-2">
                Valentine's Day Special
              </h2>
              <p className="text-rose-700 mb-2">Date: February 14, 2026</p>
              <p className="text-rose-700">
                Gift your loved ones handcrafted candies and chocolates made
                with love at Sunny Delights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
