import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <section id="home" className="py-24 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Text Column */}
          <div className="text-rose-600 leading-relaxed space-y-6">
            <h1 className="text-5xl font-serif font-bold text-rose-500">
              About Sunny Delights
            </h1>

            <p>
              At <strong>Sunny Delights</strong>, we bring joy through
              handcrafted sweets, chocolates, and candies. Our passion is
              creating treats that brighten your day.
            </p>

            <p>
              Founded in 2023, Sunny Delights started as a small home-based
              candy project. We believe every sweet deserves love, care, and a
              sprinkle of happiness.
            </p>

            <p>
              Our mission is simple: deliver high-quality, delicious treats to
              every corner of the world. Each candy is crafted to bring smiles
              and delight.
            </p>

            <p>
              We use only the finest ingredients, sourced responsibly, ensuring
              every bite is fresh, tasty, and memorable. We love sharing our
              sweets at local events and engaging with our community. Join us
              for seasonal creations that celebrate the joy of sweetness.
            </p>
          </div>

          {/* Image Column */}
          <div className="flex justify-center items-center mx-auto md:justify-end">
            <img
              src="/store.png"
              alt="Sunny Delights storefront"
              className="rounded-lg shadow-md w-80 md:w-[24rem] object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
