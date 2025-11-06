import React, { useState } from "react";
import ApplyForm from './ApplyForm';

const images = [
  process.env.PUBLIC_URL + "/images/living-room.jpg",     
  process.env.PUBLIC_URL + "/images/dining-room.jpg",     
  process.env.PUBLIC_URL + "/images/kitchen.jpg",         
  process.env.PUBLIC_URL + "/images/bathroom.jpg"         
];

const styles = {
  wrapper: { fontFamily: "Inter, Arial, sans-serif", background: "#F9FAFB", minHeight: "100vh" },
  hero: { color: "#fff", background: "linear-gradient(90deg,#F67280 0%, #C06C84 100%)", padding: "2.5rem 0 1.5rem 0", textAlign: "center" },
  title: { fontSize: "2.3rem", fontWeight: 700, marginBottom: "0.8rem" },
  subtitle: { fontSize: "1.1rem", fontWeight: 500, margin: "0 0 1.5rem" },
  imagesFlex: { display: "flex", gap: "1.2rem", justifyContent: "center", marginBottom: "2rem", flexWrap: "wrap" },
  imageBox: { width: "175px", height: "115px", objectFit: "cover", borderRadius: "0.8rem", boxShadow: "0 4px 20px rgba(0,0,0,0.09)", background: "#fff" },
  applyBtn: { display: "inline-block", background: "#6C5B7B", color: "#fff", borderRadius: "2rem", fontWeight: 600, fontSize: "1.1rem", padding: "0.8em 2em", textDecoration: "none", margin: "1.2em 0 0", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
  section: { maxWidth: 700, margin: "0 auto", padding: "1.5rem 1rem 0" },
  aboutCard: { background: "#FFF0F3", padding: "1rem 1rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginBottom: "2rem" },
  optionsCard: { background: "#E2ECEC", borderRadius: "1rem", padding: "1rem", marginBottom: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", fontSize: "1.07rem" },
  homeFeatureCard: { background: "#fff", borderRadius: "1rem", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.03)", marginBottom: "2rem", fontSize: "1.03rem" },
  faqCard: { background: "#fff", borderRadius: "1rem", padding: "1.1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" },
  applyCard: { background: "#F9F6F2", borderRadius: "1rem", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.03)", marginBottom: "1.2em" },
  footer: { background: "linear-gradient(90deg,#C06C84 0%, #F67280 100%)", color: "#fff", padding: "1rem 0", textAlign: "center", marginTop: "2rem", fontSize: "1.1rem" }
};

export default function LandingPageMobile() {
  const [showApply, setShowApply] = useState(false);
  return (
    <div style={styles.wrapper}>
      <section style={styles.hero}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1rem" }}>
          <h1 style={styles.title}>Cozy Room for Rent in Austin, TX</h1>
          <p style={styles.subtitle}>Just 10 minutes from downtown &amp; right off Loop 1! 🌳</p>
          <div style={styles.imagesFlex} className="images-flex">
            {images.map((url, i) => (
              <img src={url} key={i} alt={`House view ${i + 1}`} style={{ ...styles.imageBox, width: "100%", maxWidth: "175px" }} />
            ))}
          </div>
          <button onClick={() => setShowApply(true)} style={{ ...styles.applyBtn, border: 'none', cursor: 'pointer' }}>Apply Now</button>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={{ color: "#C06C84", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.9rem" }}>Meet Cristina!</h2>
        <div style={styles.aboutCard}>
          <p style={{ fontSize: "1.1rem", margin: 0 }}>
            Hi, my name is <span style={{ fontWeight: 600 }}>Cristina</span>! I am 33, I grew up in Austin, and I am a full-time professional. While I lead a more quiet life, I do love Latin dance (Brazilian Zouk is my latest love!), cooking, attending local festivals, and spending quality time with loved ones in my free time.
            <br /><br />I am looking forward to meeting you! If you are interested in renting or have any questions, I would love to chat.
          </p>
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={{ color: "#F67280", fontWeight: 700, fontSize: "1.16rem", marginBottom: "1rem" }}>Room and Lease Options</h2>
        <div style={styles.optionsCard}>
          <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
            <li><strong>Bedroom + Shared Bathroom:</strong> $750 smaller / $800 bigger</li>
            <li><strong>Two Rooms + Private Bathroom:</strong> $1,450 rent</li>
          </ul>
          <div style={{ marginTop: "0.8em", fontSize: "1rem" }}>
            <span style={{ fontWeight: "bold" }}>Included:</span> <br />- ¼ acre backyard<br />- Garage storage<br />- Parking space in driveway &amp; street guest parking
          </div>
        </div>
        <h2 style={{ color: "#355C7D", fontWeight: 700, fontSize: "1.08rem", marginBottom: "0.8rem" }}>Home Features & Neighborhood Perks</h2>
        <div style={styles.homeFeatureCard}>
          <ul style={{ margin: 0, paddingLeft: "1.1em", columnCount: 1 }}>
            <li>New windows, flooring, A/C unit</li>
            <li>Modern kitchen &amp; cabinets</li>
            <li>Outdoor furniture</li>
            <li>No traffic noise</li>
            <li><strong>No pets please.</strong></li>
            <li>Women preferred</li>
          </ul>
          <div style={{ marginTop: "1em" }}>
            <span style={{ fontWeight: "bold" }}>Nearby:</span> Whole Foods, H-E-B, Costco, Chuys, Mandolas, Tiffs Treats, P. Terrys, Hand &amp; Stone Massage, Club Pilates, Life Time Fitness, Marshalls, Dick Nichols Park, Deer Park, Maple Run.
          </div>
        </div>
      </section>
      <section id="apply" style={styles.section}>
        <h2 style={{ color: "#6C5B7B", fontWeight: 700, fontSize: "1.14rem", marginBottom: "1em" }}>Ready to Apply?</h2>
        <div style={styles.applyCard}>
          <p style={{ fontSize: "1.12rem" }}>
            Fill out a quick application!
            <br />
            <button onClick={() => setShowApply(true)} style={{ display: "inline-block", background: "#F67280", color: "#fff", borderRadius: "2rem", fontWeight: 600, fontSize: "1.05rem", margin: "1em 0 0", padding: "0.6em 1.2em", textDecoration: "none", border: 'none', cursor: 'pointer' }}>Apply Now</button>
          </p>
          <ul style={{ fontSize: "1rem", marginTop: "0.8em", color: "#555" }}>
            <li>Women only please</li>
            <li>No pets</li>
            <li>Serious inquiries welcomed!</li>
          </ul>
        </div>
      </section>
      <section style={styles.section}>
        <h3 style={{ color: "#F67280", fontWeight: 700, fontSize: "1.02rem", marginBottom: "0.4em" }}>FAQ</h3>
        <div style={styles.faqCard}>
          <dl>
            <dt style={{ fontWeight: "bold", marginTop: "0.6em" }}>Can I view the room?</dt>
            <dd>Yes! After reaching out, we'll set up a virtual or in-person tour with Cristina.</dd>
            <dt style={{ fontWeight: "bold", marginTop: "0.6em" }}>Are utilities included?</dt>
            <dd>Please inquire for details.</dd>
            <dt style={{ fontWeight: "bold", marginTop: "0.6em" }}>Is parking available?</dt>
            <dd>Yes - driveway spot &amp; some street parking for guests.</dd>
          </dl>
        </div>
      </section>
      <footer style={styles.footer}>
        Ready to make Austin your home? <span role="img" aria-label="dance">💃</span> <span role="img" aria-label="home">🏡</span>
        <div style={{ opacity: 0.85 }}>Share this listing with a friend!</div>
      </footer>
      {/* Mobile Media Query Styles */}
      <style>
        {`
          @media (max-width: 600px) {
            .images-flex { flex-direction: column; gap: 1.1rem; align-items: center; }
            img { max-width: 96vw !important; width: 100% !important; height: 28vw !important; min-height: 100px !important; }
            h1 { font-size: 1.43rem !important; }
            h2, h3 { font-size: 1.05rem !important; }
            section { padding: 1.2rem 0.5rem 0!important; }
          }
        `}
      </style>
      <ApplyModalWrapper show={showApply} onClose={() => setShowApply(false)} />
    </div>
  );
}

// Render the modal at the end so it's on top
function ApplyModalWrapper({ show, onClose }) {
  if (!show) return null;
  return <ApplyForm onClose={onClose} />;
}