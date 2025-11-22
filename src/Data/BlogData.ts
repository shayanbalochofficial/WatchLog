export type Blog = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imgUrl: string;
  content: string;
  featured: boolean;
  author: string;
  category: string;
  categorySlug: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Art of Luxury Watchmaking",
    slug: "art-of-luxury-watchmaking",
    description:
      "Discover the intricate craftsmanship behind luxury watches. Learn what sets these timeless pieces apart from the rest.",
    imgUrl: "/d-1.jpg",
    content: `
      <main style="padding: 14px; border-radius: 8px;">
          <section style="margin-bottom: 32px;">
              <h2 style="color: #ffffff; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Introduction</h2>
              <p>Luxury watches are more than just timekeeping devices; they are masterpieces of design and engineering. This blog explores the artistry and precision that define the world of luxury watchmaking.</p>
          </section>

          <section style="margin-bottom: 32px;">
              <h2 style="color: #ffffff; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">What Makes a Watch Luxury?</h2>
              <p>Luxury watches combine exceptional craftsmanship, premium materials, and innovative technology. Brands like Rolex, Patek Philippe, and Audemars Piguet have set the standard for excellence in horology.</p>
          </section>

          <section style="margin-bottom: 32px;">
              <h2 style="color: #ffffff; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Craftsmanship and Materials</h2>
              <p>From hand-polished cases to intricate movements, every detail of a luxury watch showcases the skill and dedication of its makers. Premium materials like 18k gold, platinum, and sapphire crystal ensure durability and elegance.</p>
              <ul style="list-style-type: disc; margin-left: 20px;">
                  <li><strong>Handcrafted Movements:</strong> Each component is meticulously crafted and assembled by skilled artisans.</li>
                  <li><strong>Exquisite Design:</strong> Attention to detail in aesthetics and functionality sets luxury watches apart.</li>
              </ul>
          </section>

          <section style="margin-bottom: 20px;">
              <h2 style="color: #ffffff; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Iconic Luxury Watch Models</h2>
              <p>Explore iconic models that have defined the industry:</p>
              <ul style="list-style-type: disc; margin-left: 20px;">
                  <li><strong>Rolex Submariner:</strong> The quintessential dive watch.</li>
                  <li><strong>Patek Philippe Nautilus:</strong> A symbol of luxury sports watches.</li>
                  <li><strong>Audemars Piguet Royal Oak:</strong> Known for its unique octagonal design.</li>
              </ul>
          </section>

          <section>
              <h2 style="color: #ffffff ; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Conclusion</h2>
              <p>Luxury watchmaking is an art form that combines tradition, innovation, and unparalleled craftsmanship. Owning a luxury watch is not just about telling time; it's about celebrating a legacy of excellence.</p>
          </section>
      </main>
    `,
    featured: true,
    author: "John Doe",
    category: "luxury-watchmaking",
    categorySlug: "luxury-watchmaking",
  },
  {
    id: 2,
    title: "The Evolution of Luxury Watch Designs",
    slug: "evolution-of-watch-designs",
    description:
      "Explore how luxury watch designs have changed over the decades, blending timeless traditions with modern innovation.",
    imgUrl: "/d-2.jpg",
    content: `
      <main style="padding: 14px; border-radius: 8px;">
          <section style="margin-bottom: 32px;">
              <h2 style="color: #8a7968; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Historical Beginnings</h2>
              <p>Luxury watches have evolved from pocket watches in the 19th century to the wristwatches of today, showcasing innovation in both design and functionality.</p>
          </section>

          <section style="margin-bottom: 32px;">
              <h2 style="color: #8a7968; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Key Milestones</h2>
              <p>From the introduction of quartz movements to the rise of smartwatches, the evolution of luxury watches highlights the industry's adaptability.</p>
          </section>

          <section>
              <h2 style="color: #8a7968; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Conclusion</h2>
              <p>The evolution of luxury watch design is a testament to the balance between preserving tradition and embracing innovation.</p>
          </section>
      </main>
    `,
    featured: true,
    author: "Jane Smith",
    category: "watch-history",
    categorySlug: "watch-history",
  },
  {
    id: 3,
    title: "The Role of Innovation in Modern Watchmaking",
    slug: "innovation-in-watchmaking",
    description:
      "Understand how technological advancements are shaping the future of luxury watchmaking.",
    imgUrl: "/d-3.jpg",
    content: `
      <main style="padding: 14px; border-radius: 8px;">
          <section style="margin-bottom: 32px;">
              <h2 style="color: #8a7968; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Revolutionizing Movements</h2>
              <p>Technologies like silicon escapements and high-frequency calibers have redefined accuracy and durability in luxury watches.</p>
          </section>

          <section>
              <h2 style="color: #8a7968; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Conclusion</h2>
              <p>Innovation continues to drive the luxury watch industry forward, ensuring timeless appeal for generations to come.</p>
          </section>
      </main>
    `,
    featured: true,
    author: "Robert Lee",
    category: "watch-technology",
    categorySlug: "watch-technology",
  },
  {
    id: 4,
    title: "Top Luxury Watch Brands to Know",
    slug: "top-luxury-watch-brands",
    description:
      "A guide to the most prestigious luxury watch brands that every enthusiast should know.",
    imgUrl: "/d-4.jpg",
    content: `
      <main style="padding: 14px; border-radius: 8px;">
          <section style="margin-bottom: 32px;">
              <h2 style="color: #8a7968; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Industry Leaders</h2>
              <p>From Rolex to Audemars Piguet, explore the brands that have set the gold standard in luxury watchmaking.</p>
          </section>

          <section>
              <h2 style="color: #8a7968; border-bottom: 2px solid #8a7968; padding-bottom: 5px;">Conclusion</h2>
              <p>Familiarizing yourself with these iconic brands is a step towards appreciating the world of luxury watches.</p>
          </section>
      </main>
    `,
    featured: true,
    author: "Emily Davis",
    category: "luxury-watch-brands",
    categorySlug: "luxury-watch-brands",
  },
  {
    id: 5,
    title: "The Most Expensive Luxury Watches Ever Sold",
    slug: "most-expensive-luxury-watches",
    description:
      "Discover the record-breaking luxury watches that have fetched millions at auctions, and the stories behind them.",
    imgUrl: "/d-5.jpg",
    content: `
      <main style="padding: 14px; border-radius: 8px;">
          <section style="margin-bottom: 32px;">
              <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Iconic Record Holders</h2>
              <p>From Paul Newman's Rolex Daytona to Patek Philippe's Grandmaster Chime, these watches represent unparalleled artistry and history.</p>
          </section>

          <section style="margin-bottom: 32px;">
              <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">What Drives the Price?</h2>
              <p>Factors such as rarity, brand legacy, and craftsmanship contribute to the jaw-dropping prices of luxury watches.</p>
          </section>

          <section>
              <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Conclusion</h2>
              <p>Owning one of the world’s most expensive watches is a privilege reserved for a few, but their stories inspire all watch enthusiasts.</p>
          </section>
      </main>
    `,
    featured: true,
    author: "Samantha Blake",
    category: "expensive-watches",
    categorySlug: "expensive-watches",
  },
  {
    id: 6,
    title: "Sustainable Luxury Watchmaking",
    slug: "sustainable-luxury-watchmaking",
    description:
      "Learn how luxury watch brands are adopting sustainable practices to create eco-friendly timepieces.",
    imgUrl: "/d-6.jpg",
    content: `
      <main style="padding: 14px; border-radius: 8px;">
          <section style="margin-bottom: 32px;">
              <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">The Shift Towards Sustainability</h2>
              <p>Brands like Panerai and IWC are leading the way by using recycled materials and reducing their environmental impact.</p>
          </section>

          <section>
              <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Conclusion</h2>
              <p>Sustainability in luxury watchmaking showcases a harmonious balance between tradition and modern responsibility.</p>
          </section>
      </main>
    `,
    featured: true,
    author: "David Green",
    category: "sustainable-watches",
    categorySlug: "sustainable-watches",
  },
  {
    id: 7,
    title: "How to Maintain Your Luxury Watch",
    slug: "how-to-maintain-luxury-watch",
    description:
      "A comprehensive guide to preserving the longevity and value of your luxury timepiece.",
    imgUrl: "/d-7.jpg",
    content: `
      <main style="padding: 14px; border-radius: 8px;">
          <section style="margin-bottom: 32px;">
              <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Regular Servicing</h2>
              <p>Luxury watches need regular maintenance to ensure precision and durability. Learn the signs that indicate servicing is required.</p>
          </section>

          <section>
              <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Conclusion</h2>
              <p>Proper care ensures your luxury watch remains a prized possession for generations.</p>
          </section>
      </main>
    `,
    featured: false,
    author: "Liam Carter",
    category: "watch-maintenance",
    categorySlug: "watch-maintenance",
  },
  {
    id: 8,
    title: "The Science Behind Water Resistance in Luxury Watches",
    slug: "science-of-water-resistance",
    description:
      "Understand the technology and innovation behind water resistance in luxury timepieces.",
    imgUrl: "/d-4.jpg",
    content: `
    <main style="padding: 14px; border-radius: 8px;">
      <section style="margin-bottom: 32px;">
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">What Does Water Resistance Mean?</h2>
        <p>Discover how luxury watches achieve various levels of water resistance through seals, gaskets, and case construction.</p>
      </section>

      <section>
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Conclusion</h2>
        <p>Understanding water resistance helps you make informed choices about your next luxury timepiece.</p>
      </section>
    </main>
  `,
    featured: false,
    author: "Olivia Brooks",
    category: "watch-technology",
    categorySlug: "watch-technology",
  },
  {
    id: 9,
    title: "Luxury Dive Watches: Combining Function and Style",
    slug: "luxury-dive-watches",
    description:
      "Explore the world of luxury dive watches, their features, and why they remain popular among collectors.",
    imgUrl: "/d-2.jpg",
    content: `
    <main style="padding: 14px; border-radius: 8px;">
      <section style="margin-bottom: 32px;">
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Defining Dive Watches</h2>
        <p>Luxury dive watches are designed for underwater adventures while maintaining a stylish aesthetic.</p>
      </section>

      <section>
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Conclusion</h2>
        <p>Whether you're a diver or a collector, these watches blend function with timeless style.</p>
      </section>
    </main>
  `,
    featured: false,
    author: "Sophia Harris",
    category: "dive-watches",
    categorySlug: "dive-watches",
  },
  {
    id: 10,
    title: "The Impact of Swiss Watchmaking on Luxury",
    slug: "swiss-watchmaking-impact",
    description:
      "Learn why Switzerland is synonymous with luxury watches and the legacy of Swiss watchmaking.",
    imgUrl: "/d-1.jpg",
    content: `
    <main style="padding: 14px; border-radius: 8px;">
      <section style="margin-bottom: 32px;">
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">A Legacy of Excellence</h2>
        <p>Switzerland is home to legendary brands such as Rolex, Omega, and TAG Heuer, known for unmatched quality and innovation.</p>
      </section>

      <section>
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Conclusion</h2>
        <p>Swiss watchmaking continues to define and shape the luxury watch industry globally.</p>
      </section>
    </main>
  `,
    featured: false,
    author: "Ethan Clark",
    category: "swiss-watchmaking",
    categorySlug: "swiss-watchmaking",
  },
  {
    id: 11,
    title: "Why Collectors Love Vintage Luxury Watches",
    slug: "vintage-luxury-watches",
    description:
      "Explore the allure of vintage luxury watches and why they are coveted by collectors worldwide.",
    imgUrl: "/d-3.jpg",
    content: `
    <main style="padding: 14px; border-radius: 8px;">
      <section style="margin-bottom: 32px;">
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Timeless Appeal</h2>
        <p>Vintage luxury watches offer a glimpse into history and showcase timeless craftsmanship that modern pieces often emulate.</p>
      </section>

      <section>
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Conclusion</h2>
        <p>Collectors value vintage watches for their rarity, history, and enduring beauty.</p>
      </section>
    </main>
  `,
    featured: false,
    author: "Emma Wilson",
    category: "vintage-watches",
    categorySlug: "vintage-watches",
  },
  {
    id: 12,
    title: "The Rise of Smart Luxury Watches",
    slug: "rise-of-smart-luxury-watches",
    description:
      "Discover how luxury brands are embracing smart technology to create hybrid timepieces.",
    imgUrl: "/d-5.jpg",
    content: `
    <main style="padding: 14px; border-radius: 8px;">
      <section style="margin-bottom: 32px;">
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">The Intersection of Tradition and Innovation</h2>
        <p>Luxury brands like TAG Heuer and Montblanc are merging traditional craftsmanship with cutting-edge smart technology.</p>
      </section>

      <section>
        <h2 style="color: #3FFCEE; border-bottom: 2px solid #3FFCEE; padding-bottom: 5px;">Conclusion</h2>
        <p>Smart luxury watches prove that tradition and technology can coexist, offering the best of both worlds.</p>
      </section>
    </main>
  `,
    featured: false,
    author: "James Lee",
    category: "smart-watches",
    categorySlug: "smart-watches",
  },
];
export default blogs;
