import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const jobs = [
  {
    title: "Candy Maker",
    location: "Sunny Delights HQ",
    type: "Full-Time",
    description:
      "Craft handmade candies and chocolates, ensuring quality and creativity in every product.",
  },
  {
    title: "Store Manager",
    location: "Sunny Delights Main Store",
    type: "Full-Time",
    description:
      "Oversee daily store operations, manage staff, and ensure an excellent customer experience.",
  },
  {
    title: "Marketing Assistant",
    location: "Remote / Onsite",
    type: "Part-Time",
    description:
      "Support digital marketing campaigns, social media management, and promotional events.",
  },
  {
    title: "Delivery Driver",
    location: "Sunny Delights HQ",
    type: "Full-Time / Part-Time",
    description:
      "Ensure timely delivery of orders to customers while maintaining high service standards.",
  },
];

export default function JobsPage() {
  return (
    <>
      <Header />

      <section className="py-24 bg-rose-50 mt-10">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif font-bold text-rose-500 mb-12 text-center">
            Careers at Sunny Delights
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            {jobs.map((job, index) => (
              <div key={index} className="bg-rose-100 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-rose-600 mb-2">
                  {job.title}
                </h2>
                <p className="text-rose-700 mb-2">Location: {job.location}</p>
                <p className="text-rose-700 mb-2">{job.type}</p>
                <p className="text-rose-700">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
