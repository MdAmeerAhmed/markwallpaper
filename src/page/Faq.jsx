import React, { useState } from "react";
import Contact from "../Component/Contact";

const faqs = [
  {
    question: "How long does it take to install wallpaper?",
    answer:
      "The duration of wallpaper installation typically ranges from a few hours to two days. Smaller rooms or accent walls can often be finished within half a day, while larger spaces or intricate patterns may require more time. Hiring professionals ensures the work is completed efficiently with a smooth finish."
  },
  {
    question: "Where can I get wallpaper installation services?",
    answer:
      "Wallpaper installation services are available in most major Indian cities, including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Jaipur, Coimbatore, and Ahmedabad. To confirm service availability in your area, you can check our installation service page for location-specific listings."
  },
  {
    question: "Which wallpapers work best for Indian homes?",
    answer:
      "Vinyl and washable wallpapers are ideal for Indian homes because they’re durable and easy to clean. Textured designs can hide minor wall flaws, and moisture-resistant wallpapers are a good choice for humid climates, particularly in coastal cities."
  },
  {
    question: "Is it okay to install wallpaper in kitchens or bathrooms?",
    answer:
      "Yes, but it’s important to choose moisture-resistant or vinyl wallpapers in humid spaces like kitchens and bathrooms. These types are designed to withstand humidity and prevent peeling. Proper ventilation also helps maintain their longevity."
  },
  {
    question: "Do you provide custom wallpaper designs?",
    answer:
      "Yes, we offer a wide range of designs, from abstract and botanical to damask, plain, and geometric styles. You can browse through our collection online and pick a design that blends with your home’s aesthetics."
  },
  {
    question: "How long does wallpaper last?",
    answer:
      "With proper installation and care, good-quality wallpaper can last between 10 and 15 years, which is significantly longer than most paint finishes. Vinyl wallpapers are especially durable and ideal for high-use spaces."
  },
  {
    question: "What’s the best way to clean wallpapers?",
    answer:
      "For regular upkeep, lightly dust the wallpaper using a soft cloth or vacuum with a brush attachment. Washable or vinyl wallpapers can be cleaned with a damp sponge and mild soap. Avoid abrasive cleaners to prevent damage."
  },
  {
    question: "Can I install wallpaper on uneven walls?",
    answer:
      "Yes, but only if the unevenness is minor. Heavier or textured wallpapers can mask small imperfections. For heavily uneven walls, plastering or applying a skim coat before installation is recommended for a flawless finish."
  },
  {
    question: "How does wallpaper compare to paint in durability?",
    answer:
      "Wallpaper is generally longer-lasting than paint, staying intact for 10–15 years, whereas painted walls often need touch-ups every 3–5 years. Wallpapers are more resistant to stains and wear, although high-quality washable paints can be a decent alternative."
  },
  {
    question: "Is wallpaper removable? Will it ruin my walls?",
    answer:
      "Most modern wallpapers, especially peel-and-stick varieties, can be removed easily without damaging the walls. Traditional wallpapers may need professional removal, but if the wall was prepped correctly, damage is minimal."
  },
  {
    question: "How should walls be prepared before wallpapering?",
    answer:
      "The walls need to be clean, smooth, and free of dust or grease. Fill cracks or holes, sand down rough spots, and apply a primer to ensure proper adhesion. Good preparation ensures a long-lasting result."
  },
  {
    question: "Are wallpapers eco-friendly?",
    answer:
      "Yes, many options are now made from recycled paper or printed with water-based, non-toxic inks. These are safe for your home and better for the environment. Look for eco-certifications when choosing wallpapers."
  },
  {
    question: "Is there a warranty for wallpaper installation?",
    answer:
      "Most professional installers offer warranties of 1–3 years that cover peeling or poor adhesion. Always check the warranty terms with your contractor to ensure quality assurance. Note: Some suppliers, like Asian Paints, don’t provide a warranty on contractor services."
  },
  {
    question: "Can damaged wallpaper be repaired?",
    answer:
      "Minor tears or loose edges can often be fixed with wallpaper adhesive or patch kits. For significant damage, replacing the affected strip is usually the best solution. Keeping extra rolls from your original purchase makes repairs seamless."
  },
  {
    question: "What affects the cost of wallpaper installation?",
    answer:
      "The price depends on the room size, wall condition, wallpaper type, labor charges, and whether customization is needed. Getting quotes from multiple contractors can help you budget accurately and choose the right service."
  },
  {
    question: "Are services available in smaller towns?",
    answer:
      "Yes, in many cases. Instead of searching online for “wallpaper service near me,” you can simply enter your city or pincode on our contractor page to see available installers in your area."
  },
  {
    question: "Is wallpaper safe for children’s rooms?",
    answer:
      "Absolutely. Wallpapers designed for kids’ rooms come in fun themes such as cartoon characters, florals, and geometric shapes. Just ensure the walls are well-prepared for a smooth and secure finish."
  },
  {
    question: "Can I combine wallpaper and paint in the same room?",
    answer:
      "Yes, mixing wallpaper with painted walls is a popular design choice. A contractor can help you select patterns and colors that complement your existing décor."
  },
  {
    question: "What if I’m not satisfied with the contractor’s work?",
    answer:
      "Communicate your concerns directly to the contractor and request a resolution. If terms for rework were agreed upon in your contract, you can have the work redone. It’s best to finalize these conditions before the project begins."
  }
];

function Faq() {
const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 10);
  return (
    <div>
       <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5">
            <div className="container">
                <div className="w3breadcrumb-right">
                    <ul className="breadcrumbs-custom-path">
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><span className="fas fa-angle-double-right mx-2"></span>FAQ</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
      <section className="w3l-gallery" id="gallery">
        <div className="destionation-innf py-5">
            <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
                <div className="title-content text-center">
                    <h6 className="title-subw3hny text-center">Gallery</h6>
                    <h3 className="title-w3l mb-5 text-center">Frequently Asked Questions</h3>
                </div>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div>
        {displayedFaqs.map((faq, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #ccc",
              padding: "10px 0",
              cursor: "pointer"
            }}
          >
            <div
              onClick={() => handleToggle(index)}
              style={{
                fontWeight: "bold",
                color: "#333",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p style={{ marginTop: "10px", color: "#555" }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      {faqs.length > 10 && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
            </div>
        </div>
    </section>
    <Contact />
    </div>
  )
}

export default Faq
