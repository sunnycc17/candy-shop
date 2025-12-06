import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="py-24 bg-rose-50 mt-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-serif font-bold text-rose-500 mb-12 text-center">
            Contact Us
          </h1>

          <form className="bg-rose-100 p-8 rounded-lg shadow-md space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 font-semibold text-rose-600"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 font-semibold text-rose-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="p-3 rounded-md border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 font-semibold text-rose-600"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows={6}
                className="p-3 rounded-md border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
