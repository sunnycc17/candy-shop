import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function BlogPage() {
  return (
    <>
      <Header />

      <div className="py-20 text-center mt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-rose-700 tracking-tight">
          Sweet Blog
        </h1>
      </div>

      <main className="max-w-6xl mx-auto px-6 space-y-32 mb-20">
        {/* ARTICLE 1 */}
        <article className="space-y-6">
          <header>
            <h2 className="text-3xl sm:text-4xl font-bold text-rose-600 mb-2">
              5 Sweet Treats to Try This Summer
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Published: January 15, 2025 • Author: Candy Delight Magazine
            </p>
          </header>

          <img
            src="https://images.pexels.com/photos/2236703/pexels-photo-2236703.jpeg"
            alt="5 Sweet Treats"
            className="w-full h-80 sm:h-112 object-cover rounded-lg"
          />

          <div className="text-lg sm:text-xl leading-relaxed sm:leading-loose space-y-6 text-gray-700">
            <p>
              When the sun shines brighter and the air turns warmer, summer
              invites us to embrace a lighter, fruitier world of sweetness. Gone
              are the rich, heavy desserts of winter—this is the season for
              refreshing candies that burst with flavor and melt in your mouth
              with delightful ease. Whether you're heading to a picnic, relaxing
              by the pool, or enjoying a quiet afternoon at home, the right
              treat can heighten the moment with joy.
            </p>

            <p>
              One trend making waves this season is citrus-infused gummies.
              Their zesty lemon, lime, and grapefruit notes deliver a refreshing
              pop, especially when paired with iced lemonade. Coconut
              marshmallow bites, on the other hand, bring a fluffy, tropical
              touch that feels like a mini vacation in every chew. For chocolate
              lovers, chilled truffle pops filled with raspberry or passionfruit
              provide a balance of richness and coolness.
            </p>

            <p>
              Frozen yogurt candy clusters are also gaining popularity for their
              creamy yet crunchy texture, combining fruity freshness with a
              slight snap. Meanwhile, rainbow swirl hard candies continue to
              hold nostalgic appeal, offering long-lasting sweetness with visual
              charm that brightens any summer day.
            </p>

            <p>
              From fruity to creamy, chewy to crunchy, these five treats offer
              something delightful for every summer mood. Try them, mix them,
              and let your taste buds discover a new seasonal favorite.
            </p>
          </div>
        </article>

        {/* ARTICLE 2 */}
        <article className="space-y-6">
          <header>
            <h2 className="text-3xl sm:text-4xl font-bold text-rose-600 mb-2">
              The Art of Chocolate Making
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Published: February 2, 2025 • Author: Cocoa Crafts Journal
            </p>
          </header>

          <img
            src="https://images.pexels.com/photos/6441630/pexels-photo-6441630.jpeg"
            alt="Chocolate Making"
            className="w-full h-80 sm:h-112 object-cover rounded-lg"
          />

          <div className="text-lg sm:text-xl leading-relaxed sm:leading-loose space-y-6 text-gray-700">
            <p>
              Behind every piece of fine chocolate lies a delicate process that
              transforms simple cocoa beans into a luxurious experience. The
              journey begins in lush regions such as Ghana, Madagascar, or
              Ecuador, where beans are harvested with care, each location
              lending its own flavor profile to the final product.
            </p>

            <p>
              The beans undergo fermentation to enhance flavor depth before
              being dried and roasted to release their signature aroma.
              Following this, they are cracked and ground into a thick paste
              known as chocolate liquor. This liquor is refined to achieve a
              smooth texture, preparing it for the conching stage.
            </p>

            <p>
              Conching—a process involving continuous mixing—can take hours or
              days, depending on the desired final result. It softens acidity,
              rounds out flavors, and creates the velvety mouthfeel associated
              with high-end chocolate. Tempering is the final step, ensuring a
              glossy shine and satisfying snap.
            </p>

            <p>
              Master chocolatiers often elevate this process with unique
              additions such as sea salt flakes, chili undertones, caramel
              layers, or infused botanicals. Knowing how much care goes into
              each bar deepens every bite, turning chocolate from a snack into a
              true sensory experience.
            </p>
          </div>
        </article>

        {/* ARTICLE 3 */}
        <article className="space-y-6">
          <header>
            <h2 className="text-3xl sm:text-4xl font-bold text-rose-600 mb-2">
              Candy Pairings with Your Drinks
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Published: March 10, 2025 • Author: Sweet Harmony Digest
            </p>
          </header>

          <img
            src="https://images.pexels.com/photos/10477126/pexels-photo-10477126.jpeg"
            alt="Candy Pairings"
            className="w-full h-80 sm:h-112 object-cover rounded-lg"
          />

          <div className="text-lg sm:text-xl leading-relaxed sm:leading-loose space-y-6 text-gray-700">
            <p>
              Pairing candy with drinks is more than a playful experiment—it’s a
              subtle art of balancing textures, intensities, and aftertastes. A
              well-planned pairing can transform an everyday beverage into a
              layered tasting experience, enhancing both the drink and the candy
              with new richness.
            </p>

            <p>
              Dark chocolate truffles work beautifully with espresso, as the
              bitterness of the coffee intensifies the chocolate’s smooth
              richness. Soft caramel candies pair well with black tea, adding a
              creamy contrast that softens the tea’s edge while enhancing its
              warmth.
            </p>

            <p>
              For lighter drinks such as sparkling water, rosé, or fruit-infused
              iced teas, fruity gummies or sour belts add a fun, tangy dimension
              that plays well with effervescence. Mint candies, when paired with
              hot cocoa or herbal infusions, leave a refreshing cooling
              aftertaste that elevates the moment.
            </p>

            <p>
              The right pairing encourages mindful tasting, turning a simple
              sip-and-snack moment into an intentional, sensory ritual. With
              just a bit of curiosity, your favorite drink could become the
              perfect stage for a sweet companion.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
