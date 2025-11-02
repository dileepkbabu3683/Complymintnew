import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)'}}>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <img src="/logo.png" alt="Complymint Logo" style={{height:48}} />
          <h1 style={{color:'#0f766e', fontSize:24, margin:0}}>Complymint</h1>
        </div>
        <nav style={{display:'flex', gap:20}}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About */}
      <section id="about" style={{padding:'64px 32px', textAlign:'center'}}>
        <h2 style={{color:'#0f766e', fontSize:28}}>About Complymint</h2>
        <p style={{maxWidth:900, margin:'20px auto', lineHeight:1.6}}>
          We’re Complymint — a team of experienced AML consultants helping small and medium businesses across Ireland stay compliant, confident, and stress-free.
          <br/><br/>
          Navigating Anti-Money Laundering (AML) regulations can feel overwhelming, especially for growing businesses. That’s where we come in. We simplify compliance by offering practical, easy-to-understand guidance tailored to your business.
          <br/><br/>
          Our team brings real-world experience, industry know-how, and a genuine passion for helping businesses build strong, compliant foundations. With Complymint, you get more than just consultancy — you get a trusted partner who’s here to support your growth every step of the way.
        </p>
      </section>

      {/* Services */}
      <section id="services" style={{padding:'40px 32px', background:'#f0fdf4'}}>
        <h2 style={{textAlign:'center', color:'#0f766e', fontSize:28}}>Our Services</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:20, padding:20, maxWidth:1100, margin:'20px auto'}}>
          {[
            {title:'AML Policy & Procedure Setup', desc:'We’ll design clear and practical AML policies that fit your business — not just the rulebook.'},
            {title:'AML Risk Assessment', desc:'Identify and manage risks before they become issues, with tailored AML risk reviews and gap analysis.'},
            {title:'Staff Training & Awareness', desc:'Keep your team confident and up to date with simple, engaging AML training sessions.'},
            {title:'Client Due Diligence (CDD & EDD)', desc:'Get support in verifying clients and maintaining ongoing due diligence with the right tools and processes.'},
            {title:'Independent AML Audits', desc:'We’ll review your AML framework to make sure everything is compliant and ready for regulators.'},
            {title:'Ongoing Compliance Support', desc:'Stay compliant as you grow — we’re always here for ongoing advice, updates, and expert guidance.'},
          ].map((s, i) => (
            <div key={i} style={{background:'#fff', padding:20, borderRadius:12, boxShadow:'0 6px 18px rgba(15,23,42,0.06)'}}>
              <h3 style={{color:'#065f46', marginTop:0}}>{s.title}</h3>
              <p style={{margin:0}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{padding:'48px 32px', textAlign:'center'}}>
        <h2 style={{color:'#0f766e', fontSize:28}}>Contact Us</h2>
        <p style={{maxWidth:700, margin:'16px auto'}}>Let’s make AML compliance simple, clear, and effective for your business. Get in touch with us today — we’d love to help.</p>
        <div style={{display:'flex', flexDirection:'column', gap:8, alignItems:'center'}}>
          <div>📧 <a href="mailto:info@complymint.eu">info@complymint.eu</a></div>
          <div>📍 The Academy Building, Park West, Dublin 12, Ireland</div>
        </div>
      </section>

      <footer style={{textAlign:'center', padding:20, color:'#6b7280', borderTop:'1px solid #e6e6e6'}}>
        © {new Date().getFullYear()} Complymint. All rights reserved.
      </footer>
    </div>
  );
}
