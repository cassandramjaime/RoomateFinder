import React from "react";

const images = [
  process.env.PUBLIC_URL + "/images/living-room.jpg",     
  process.env.PUBLIC_URL + "/images/dining-room.jpg",     
  process.env.PUBLIC_URL + "/images/kitchen.jpg",         
  process.env.PUBLIC_URL + "/images/bathroom.jpg"         
];

const roomImages = [
  process.env.PUBLIC_URL + "/images/bedroom-1.jpg",
  process.env.PUBLIC_URL + "/images/bedroom-2.jpg",
  process.env.PUBLIC_URL + "/images/bedroom-3.jpg"
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
  faqCard: { background: "#fff", padding: 16, borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" },
  applyCard: { background: "#fff", padding: 16, borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginBottom: "1.2em", fontSize: "1rem", color: "#374151" },
  footer: { background: "linear-gradient(90deg,#C06C84 0%, #F67280 100%)", color: "#fff", padding: "1rem 0", textAlign: "center", marginTop: "2rem", fontSize: "1.1rem" }
};

export default function LandingPageMobile() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [currentRoomImageIndex, setCurrentRoomImageIndex] = React.useState(0);
  const handleApply = () => {
    const googleFormUrl = "https://forms.gle/2Sveitghada5sHDa8";
    window.open(googleFormUrl, '_blank');
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoomImageIndex((prev) => (prev + 1) % roomImages.length);
    }, 5000); // Change room image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.wrapper}>
      <section style={{
        position: 'relative',
        height: '60vh',
        minHeight: '400px',
        width: '100%',
        overflow: 'hidden'
      }}>
        {/* Image slideshow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}>
          {images.map((url, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: i === currentImageIndex ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                backgroundColor: '#000'
              }}
            >
              <img
                src={url}
                alt={`House view ${i + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(1.12)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Decorative overlay gradient (no text/buttons) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.15))',
          pointerEvents: 'none'
        }} />

        {/* Dots navigation */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          zIndex: 2
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                background: i === currentImageIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                padding: 0,
                margin: 0
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Property header: title, subtitle, facts and apply sidebar */}
      <section style={{ padding: '1.25rem 1rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
          {/* Left: title, subtitle, facts */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'inline-block', background: '#E8F3FF', color: '#0366d6', padding: '6px 10px', borderRadius: 8, fontWeight: 700, fontSize: '0.85rem', marginBottom: 8 }}>Special offer</div>
                <h2 style={{ margin: '6px 0 6px', fontSize: '1.6rem' }}>Maple Run</h2>
                <div style={{ color: '#6b7280', marginBottom: 12 }}>Near William Cannon and Loop 1</div>
              </div>
            </div>

            {/* Facts / Highlights cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '12px', marginTop: 12 }}>
              <div style={{ background: '#fff', padding: 12, borderRadius: 10, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                <strong>Single-family home</strong>
                <div style={{ color: '#6b7280', marginTop: 6 }}>1–2 bedrooms available in a shared home</div>
              </div>
              <div style={{ background: '#fff', padding: 12, borderRadius: 10, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                <strong>No pets</strong>
                <div style={{ color: '#6b7280', marginTop: 6 }}>This home does not accept pets</div>
              </div>
              <div style={{ background: '#fff', padding: 12, borderRadius: 10, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                <strong>Private backyard</strong>
                <div style={{ color: '#6b7280', marginTop: 6 }}>Quarter-acre yard, garage storage & private outdoor space</div>
              </div>
              <div style={{ background: '#fff', padding: 12, borderRadius: 10, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                <strong>Easy access to downtown</strong>
                <div style={{ color: '#6b7280', marginTop: 6 }}>~10 minutes to downtown; Whole Foods, parks & restaurants nearby</div>
              </div>
            </div>
          </div>

          {/* Right: apply card */}
          <aside style={{ width: 260, flexShrink: 0 }}>
            <div style={{ background: '#fff', padding: 14, borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
              <button onClick={handleApply} style={{ width: '100%', background: '#F67280', color: '#fff', padding: '0.8rem 1rem', borderRadius: 8, border: 'none', fontWeight: 700, cursor: 'pointer' }}>Apply Now</button>
              <div style={{ marginTop: 12, color: '#6b7280', fontSize: '0.95rem' }}>
                <div style={{ fontWeight: 700, color: '#111827' }}>Your dream home is waiting</div>
                <div style={{ marginTop: 6 }}>One new room was recently added to this listing.</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      {/* Reorganized info: four sections using existing copy */}
      <section style={{ padding: '1.25rem 1rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {/* The Perks */}
            <div style={{ background: '#fff', padding: 16, borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ margin: '0 0 8px', color: '#C06C84' }}>The Perks</h3>
              <p style={{ margin: 0, color: '#374151' }}>
                Cozy home a short drive from downtown Austin. Includes a ¼ acre backyard, garage storage, and on-site parking in the driveway plus street guest parking. The household is quiet and welcoming — Cristina is a professional who enjoys dancing, cooking, and local events.
              </p>
            </div>

            {/* Amenities & Features */}
            <div style={{ background: '#fff', padding: 16, borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ margin: '0 0 8px', color: '#F67280' }}>Amenities &amp; Features</h3>
              <ul style={{ margin: 0, paddingLeft: '1.1em', color: '#374151' }}>
                <li>New windows, updated flooring, and A/C unit</li>
                <li>Modern kitchen with updated cabinets</li>
                <li>Outdoor furniture and private shared spaces</li>
                <li>Options: 1–2 bedroom setups, some with private baths</li>
              </ul>
            </div>

            {/* Getting Around */}
            <div style={{ background: '#fff', padding: 16, borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ margin: '0 0 8px', color: '#355C7D' }}>Getting Around</h3>
              <p style={{ margin: 0, color: '#374151' }}>
                Located near William Cannon and Loop 1 — about 10 minutes to downtown. Nearby transit and major roads make commutes easy. Close to grocery and retail: Whole Foods, H‑E‑B, Costco and a variety of local restaurants.
              </p>
            </div>

            {/* Nearby Schools */}
            <div style={{ background: '#fff', padding: 16, borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ margin: '0 0 8px', color: '#6C5B7B' }}>Nearby Schools</h3>
              <p style={{ margin: 0, color: '#374151' }}>
                The neighborhood is served by Austin-area schools and has several nearby options for K–12. If you need exact school zoning or recommendations, reach out and we can share local school information.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Rent a Room section with slideshow */}
      <section style={{ padding: '1.25rem 1rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ color: "#6C5B7B", fontWeight: 700, fontSize: "1.14rem", marginBottom: "1em" }}>Rent a Room</h2>
          {/* Slideshow container */}
          <div style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '66.67%',
            background: '#000',
            borderRadius: 10,
            overflow: 'hidden',
            marginBottom: '1em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}>
              {roomImages.map((url, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: i === currentRoomImageIndex ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    backgroundColor: '#000'
                  }}
                >
                  <img
                    src={url}
                    alt={`Room ${i + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Dots navigation */}
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '0',
              right: '0',
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              zIndex: 2
            }}>
              {roomImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentRoomImageIndex(i)}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    background: i === currentRoomImageIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    padding: 0,
                    margin: 0
                  }}
                  aria-label={`Go to room image ${i + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Pricing information card */}
          <div style={{ ...styles.applyCard, width: '100%' }}>
            <p style={{ fontSize: "1rem", color: '#374151', margin: '0 0 1em' }}>
              <strong>For lease options:</strong>
            </p>
            <ul style={{ fontSize: "1rem", color: "#374151", margin: '0', paddingLeft: '1.2em' }}>
              <li style={{ marginBottom: '0.6em' }}><strong>Bedroom + Shared Bathroom:</strong> $750 (smaller bedroom) or $800 (bigger bedroom)</li>
              <li><strong>Two Rooms + Private Bathroom:</strong> $1,400/month (10% savings)</li>
            </ul>
          </div>
        </div>
      </section>
      <section style={{ padding: '1.25rem 1rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ color: "#6C5B7B", fontWeight: 700, fontSize: "1.14rem", marginBottom: "1em" }}>Ready to Apply?</h2>
          <div style={{ ...styles.applyCard, width: '100%' }}>
            <p style={{ fontSize: "1rem", color: '#374151', margin: 0 }}>
              Fill out a quick application!
              <br />
              <button onClick={handleApply} style={{ display: "inline-block", background: "#F67280", color: "#fff", borderRadius: "2rem", fontWeight: 600, fontSize: "1.05rem", margin: "1em 0 0", padding: "0.6em 1.2em", textDecoration: "none", border: 'none', cursor: 'pointer' }}>Apply Now</button>
            </p>
            <ul style={{ fontSize: "1rem", marginTop: "0.8em", color: "#374151" }}>
              <li>Women only please</li>
              <li>No pets</li>
              <li>Serious inquiries welcomed!</li>
            </ul>
          </div>
        </div>
      </section>
      <section style={{ padding: '1.25rem 1rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h3 style={{ color: "#F67280", fontWeight: 700, fontSize: "1.02rem", marginBottom: "0.4em" }}>FAQ</h3>
          <div style={{ ...styles.faqCard, width: '100%', color: '#374151', fontSize: '1rem' }}>
            <dl>
              <dt style={{ fontWeight: "bold", marginTop: "0.6em" }}>Can I view the room?</dt>
              <dd>Yes! After reaching out, we'll set up a virtual or in-person tour with Cristina.</dd>
              <dt style={{ fontWeight: "bold", marginTop: "0.6em" }}>Are utilities included?</dt>
              <dd>Please inquire for details.</dd>
              <dt style={{ fontWeight: "bold", marginTop: "0.6em" }}>Is parking available?</dt>
              <dd>Yes - driveway spot &amp; some street parking for guests.</dd>
            </dl>
          </div>
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
    </div>
  );
}