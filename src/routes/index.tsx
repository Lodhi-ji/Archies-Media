import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Instagram, Linkedin } from "lucide-react";
import archiesLogo from "../assets/archies-logo.png";

function LogoBoxIcon() {
  return (
    <svg className="logo-box-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Archies Media — Smart Digital Marketing Agency in India" },
      { name: "description", content: "Performance-driven digital marketing. SEO, paid ads, social, content & web. Grow your brand with Archies Media." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: "📊", title: "Social Media Management", desc: "Strategy, content, and community management that builds your brand voice." },
  { icon: "🔍", title: "SEO Optimization", desc: "Rank higher on Google with technical SEO, content and authority building." },
  { icon: "🎯", title: "Paid Ads (Google & Meta)", desc: "ROI-focused campaigns that turn ad spend into measurable revenue." },
  { icon: "✏️", title: "Content & Design", desc: "Scroll-stopping creatives, reels and brand-aligned design systems." },
  { icon: "</>", title: "Web Development", desc: "Fast, modern websites engineered to convert visitors into customers." },
  { icon: "✉️", title: "Email & WhatsApp", desc: "Automated funnels that nurture leads and re-engage your audience." },
];

const testimonials = [
  { quote: "Archies Media transformed our online presence. ROI tripled in 3 months!", who: "Rahul S., E-Commerce Brand" },
  { quote: "Best investment we made for our business. Their team is incredibly responsive.", who: "Sneha T., EdTech Startup" },
  { quote: "Finally, a marketing agency that delivers what they promise.", who: "Amit K., D2C Brand" },
  { quote: "Our paid ads finally make sense. CAC down 40% in 60 days.", who: "Megha P., SaaS Founder" },
  { quote: "They feel like an extension of our team, not a vendor.", who: "Vikram J., Fintech" },
];

const team = [
  { initials: "AM", name: "Arjun M.", role: "Founder & CEO", bio: "Visionary behind Archies Media's growth strategy" },
  { initials: "PS", name: "Priya S.", role: "Head of SEO", bio: "Helping brands dominate search rankings since 2019" },
  { initials: "RK", name: "Rahul K.", role: "Creative Lead", bio: "Crafting visuals that stop the scroll" },
];

const brandLogos = ["NORDIC", "PULSE", "VERTEX", "OASIS", "MERIDIAN", "STELLAR", "ATLAS", "EMBER", "QUANTUM", "HORIZON"];

const navLinks = [
  ["Services", "#services", "services"],
  ["About", "#about", "about"],
  ["Why Archies", "#why", "why"],
  ["Team", "#team", "team"],
  ["Pricing", "#pricing", "pricing"],
  ["Contact", "#contact", "contact"],
] as const;

function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="badge">
      <span className="badge-dot" aria-hidden="true" />
      {children}
    </span>
  );
}

function SplitHeading({
  bold,
  accent,
  as: Tag = "h2",
  className = "",
  size = "section",
}: {
  bold: string;
  accent: string;
  as?: "h1" | "h2";
  className?: string;
  size?: "hero" | "section";
}) {
  return (
    <Tag className={`split-heading split-heading--${size} ${className}`.trim()}>
      <span className="split-heading-bold">{bold}</span>
      <span className="split-heading-accent">{accent}</span>
    </Tag>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = navLinks.map(([, , id]) => id);
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .slide-l, .slide-r, .contact-section");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = parseFloat(el.dataset.delay || "0") || i * 0.05;
            el.style.transitionDelay = `${delay}s`;
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const dur = 1800;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [to]);
  return <>{prefix}{n}{suffix}</>;
}

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,input,select,textarea,.svc-card,.team-card,.price-card,.testi-card")) el.classList.add("shrunk");
      else el.classList.remove("shrunk");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);
  return <div ref={ref} className="cursor" />;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
        <div className="nav-bar">
          <a href="#top" className="nav-logo">
            <img src={archiesLogo} alt="Archies Media" />
          </a>

          <div className="nav-pill">
            <div className="nav-links">
              {navLinks.map(([l, h, id]) => (
                <a key={l} href={h} className={activeSection === id ? "active" : ""}>{l}</a>
              ))}
            </div>
          </div>

          <div className="nav-end">
            <a href="#contact" className="btn btn-primary btn-pill nav-cta">Book a Free Call</a>
            <button className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        {navLinks.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary btn-pill">Book a Free Call</a>
      </div>
    </>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = testimonials.length;
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % slides), 4000);
    return () => clearInterval(id);
  }, [paused, slides]);
  const prev = () => setIdx((i) => (i - 1 + slides) % slides);
  const next = () => setIdx((i) => (i + 1) % slides);
  return (
    <section id="testimonials" className="section-major reveal">
      <div className="container">
        <div className="section-head">
          <SectionBadge>Client Love</SectionBadge>
          <SplitHeading bold="WHAT CLIENTS" accent="Say About Us" />
        </div>
        <div className="testi-shell" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <button className="testi-arrow left" onClick={prev} aria-label="Previous">←</button>
          <div className="testi-wrap">
            <div className="testi-track" style={{ transform: `translateX(-${idx * (100 / 3)}%)` }}>
              {[...testimonials, ...testimonials.slice(0, 2)].map((t, i) => (
                <div className="testi" key={i}>
                  <div className="testi-card">
                    <div className="stars">★★★★★</div>
                    <p className="quote">"{t.quote}"</p>
                    <p className="who">— {t.who}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="testi-arrow right" onClick={next} aria-label="Next">→</button>
        </div>
        <div className="dots">
          {testimonials.map((_, i) => (
            <button key={i} className={i === idx ? "active" : ""} onClick={() => setIdx(i)} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const plans = [
    { name: "Starter", price: 15000, features: ["Social Media (2 platforms)", "Basic SEO", "Monthly Report", "Email Support"] },
    { name: "Growth", price: 30000, popular: true, features: ["Everything in Starter", "Paid Ads Management", "Weekly Reports", "Dedicated Manager", "Content Creation"] },
    { name: "Scale", price: 60000, features: ["Everything in Growth", "Full-Stack Marketing", "Daily Reports", "Priority Support", "Custom Strategy"] },
  ];
  return (
    <section id="pricing" className="section-major reveal" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div className="section-head">
          <SectionBadge>Simple Pricing</SectionBadge>
          <SplitHeading bold="TRANSPARENT PLANS," accent="Real Results" />
          <p>No surprises. No hidden fees. Just clear pricing built for ROI.</p>
        </div>
        <div className="pricing-toggle">
          <button className={!annual ? "active" : ""} onClick={() => setAnnual(false)}>Monthly</button>
          <button className={annual ? "active" : ""} onClick={() => setAnnual(true)}>Annual (-20%)</button>
        </div>
        <div className="price-grid">
          {plans.map((p) => {
            const price = annual ? Math.round(p.price * 0.8) : p.price;
            return (
              <div key={p.name} className={`price-card ${p.popular ? "popular" : ""}`}>
                {p.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3>{p.name}</h3>
                <p style={{ fontSize: 13 }}>For {p.name === "Starter" ? "new brands" : p.name === "Growth" ? "scaling teams" : "ambitious brands"}</p>
                <div className="price-amount">₹{price.toLocaleString("en-IN")}<span>/mo</span></div>
                <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <a href="#contact" className={`btn ${p.popular ? "btn-primary" : "btn-outline"}`}>Get Started</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FloatField({ type = "text", name, label, as }: { type?: string; name: string; label: string; as?: "textarea" | "select" }) {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const float = focused || val.length > 0;
  const common = {
    required: true,
    value: val,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: any) => setVal(e.target.value),
    className: focused ? "focused" : "",
  };
  return (
    <div className={`float-field ${float ? "float" : ""} ${focused ? "is-focused" : ""}`}>
      <label htmlFor={name}>{label}</label>
      {as === "textarea" ? (
        <textarea id={name} name={name} {...common} />
      ) : as === "select" ? (
        <select id={name} name={name} {...common}>
          <option value="" disabled></option>
          <option>Social Media Management</option><option>SEO</option><option>Paid Ads</option>
          <option>Content & Design</option><option>Web Development</option><option>Email & WhatsApp</option>
        </select>
      ) : (
        <input id={name} name={name} type={type} {...common} />
      )}
    </div>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSent(true); }, 1200); }}>
      <FloatField name="name" label="Your Name" />
      <FloatField name="email" type="email" label="Email Address" />
      <FloatField name="phone" type="tel" label="Phone Number" />
      <FloatField name="service" label="Select a Service" as="select" />
      <FloatField name="msg" label="Tell us about your project..." as="textarea" />
      <div className="field">
        <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`}>
          {loading ? <><span className="spinner" /> Sending...</> : sent ? "✓ Message Sent!" : <>Send Message <span className="arrow">→</span></>}
        </button>
        <p className="resp-time">⚡ Average response time: 2 hours</p>
      </div>
    </form>
  );
}

function Home() {
  useReveal();
  return (
    <div id="top">
      <Cursor />
      <Navbar />

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg" />
        <span className="hero-sparkle hero-sparkle-1" aria-hidden="true">✦</span>
        <span className="hero-sparkle hero-sparkle-2" aria-hidden="true">✦</span>
        <span className="hero-sparkle hero-sparkle-3" aria-hidden="true">✦</span>
        <div className="container hero-grid">
          <div>
            <div className="tag hero-anim d1 bounce-in">🚀 India's Fastest Growing Digital Agency</div>
            <SplitHeading
              as="h1"
              size="hero"
              className="hero-anim d2"
              bold="GROW YOUR BRAND"
              accent="With Smart Marketing"
            />
            <p className="sub hero-anim d3">Performance-driven strategies that turn clicks into customers. We help brands scale with data-backed marketing.</p>
            <div className="hero-cta hero-anim d4">
              <a href="#contact" className="btn btn-primary">Book a Free Call</a>
              <a href="#services" className="btn btn-outline">See Our Work</a>
            </div>
            <div className="hero-stats hero-anim d5">
              <div><div className="stat-num"><Counter to={50} suffix="+" /></div><div className="stat-label">Brands</div></div>
              <div><div className="stat-num"><Counter to={2} prefix="₹" suffix="Cr+" /></div><div className="stat-label">Revenue</div></div>
              <div><div className="stat-num"><Counter to={3} suffix="+" /></div><div className="stat-label">Years</div></div>
              <div><div className="stat-num"><Counter to={98} suffix="%" /></div><div className="stat-label">Retention</div></div>
            </div>
          </div>
          <div className="hero-right hero-anim d3">
            <div className="blob amber" />
            <div className="blob navy" />
            <div className="float-mini tl"><span className="dot" /> <div><strong style={{ color: "var(--navy)" }}>+187%</strong><div style={{ fontSize: 11 }}>Traffic</div></div></div>
            <div className="dashcard">
              <h4>Monthly Revenue</h4>
              <div className="big" style={{ fontFamily: "Plus Jakarta Sans", fontWeight: 800 }}>₹12.4L</div>
              <div className="chart">
                {[30, 45, 38, 62, 55, 78, 90].map((h, i) => (
                  <div className="bar" key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div className="mini-cards">
                <div className="mini"><strong>4.2x</strong>ROAS</div>
                <div className="mini"><strong>12.8k</strong>Conversions</div>
              </div>
            </div>
            <div className="float-mini br"><span className="dot" style={{ background: "var(--navy)" }} /> <div><strong style={{ color: "var(--navy)" }}>5.0</strong><div style={{ fontSize: 11 }}>★★★★★</div></div></div>
          </div>
        </div>
      </header>

      {/* TRUST / LOGO MARQUEE */}
      <section className="trust">
        <div className="container">
          <p className="trust-label">Trusted by 50+ Growing Brands</p>
        </div>
        <div className="marquee-rows">
          <div className="marquee">
            <div className="marquee-track left">
              {[...Array(2)].map((_, k) => (
                <div key={k} className="lrow">
                  {brandLogos.map((b) => (
                    <div className="logo-box" key={`l1-${k}-${b}`}>
                      <LogoBoxIcon />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="marquee">
            <div className="marquee-track right">
              {[...Array(2)].map((_, k) => (
                <div key={k} className="lrow">
                  {[...brandLogos].reverse().map((b) => (
                    <div className="logo-box" key={`l2-${k}-${b}`}>
                      <LogoBoxIcon />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-major">
        <div className="container">
          <div className="section-head reveal">
            <SectionBadge>What We Do</SectionBadge>
            <SplitHeading bold="SERVICES" accent="That Drive Real Results" />
            <p>From strategy to execution — every channel covered, every metric measured.</p>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <div className="svc-card reveal" key={s.title} data-delay={i * 0.1}>
                <div className="svc-icon" style={{ fontSize: 22 }}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about section-major" style={{ background: "var(--bg-soft)" }}>
        <div className="container about-grid">
          <div className="about-img reveal slide-l">
            <div className="about-img-frame">
              <span className="about-team-label">Our Team</span>
            </div>
            <div className="floating-badge"><span>★</span> 3+ Years of Excellence</div>
          </div>
          <div className="reveal slide-r">
            <SectionBadge>Who We Are</SectionBadge>
            <SplitHeading bold="WE ARE" accent="Archies Media" />
            <p>We're a results-driven digital marketing agency helping brands grow online through data-backed strategies, creative content, and performance marketing.</p>
            <div className="about-stats">
              <div className="stat-card"><strong>50+</strong><span>Brands Served</span></div>
              <div className="stat-card"><strong>₹2Cr+</strong><span>Revenue Generated</span></div>
              <div className="stat-card"><strong>98%</strong><span>Client Retention</span></div>
            </div>
            <a href="#contact" className="link-cta">Learn More About Us →</a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section-major">
        <div className="container">
          <div className="section-head reveal">
            <SectionBadge>Why Choose Us</SectionBadge>
            <SplitHeading bold="ARCHIES MEDIA" accent="vs. The Rest" />
            <p>See the difference a focused, modern agency makes.</p>
          </div>
          <div className="compare-grid">
            <div className="compare bad slide-l">
              <div className="compare-tag">The Old Way</div>
              <h3>Other Agencies</h3>
              <ul>
                {["Slow turnaround times","Generic copy-paste strategies","No transparent reporting","Vanity metrics, no real ROI","One-size-fits-all approach"].map((t) => (
                  <li key={t}><span className="x">✕</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="compare good slide-r">
              <div className="winner-ribbon">★ The Archies Way</div>
              <h3>Archies Media</h3>
              <ul>
                {["Fast delivery & quick responses","Custom strategies per brand","Clear, honest reporting","ROI-focused campaigns","Dedicated account manager"].map((t) => (
                  <li key={t}><span className="check">✓</span><span>{t}</span></li>
                ))}
              </ul>
              <div className="compare-foot">Built different. Built for results.</div>
            </div>
          </div>

        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section-major" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="section-head reveal">
            <SectionBadge>Meet The Team</SectionBadge>
            <SplitHeading bold="THE PEOPLE" accent="Behind Your Growth" />
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={t.name} className="team-card reveal" data-delay={i * 0.1}>
                <div className="avatar" aria-hidden="true">
                  <span className="avatar-initials">{t.initials}</span>
                </div>
                <h3>{t.name}</h3>
                <div className="role">{t.role}</div>
                <p className="bio">{t.bio}</p>
                <div className="team-socials">
                  <a href="#" aria-label="LinkedIn" className="ts li"><Linkedin size={16} strokeWidth={2.25} /></a>
                  <a href="#" aria-label="Instagram" className="ts ig"><Instagram size={16} strokeWidth={2.25} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Pricing />

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="contact-section reveal">
            <div className="contact-pattern" />
            <div className="contact-quote">"</div>
            <div className="contact-wrap">
              <div className="contact-left">
                <SectionBadge>Get In Touch</SectionBadge>
                <SplitHeading bold="READY TO GROW" accent="Your Brand?" />
                <p>Let's build something great together. Book a free strategy call today.</p>
                <div className="contact-rows">
                  <a href="mailto:contact@archiesmedia.in" className="crow">
                    <span className="cicon">📧</span>
                    <span className="ctext"><span className="clabel">Email</span><span className="cval">contact@archiesmedia.in</span></span>
                  </a>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="crow wa">
                    <span className="cicon wa">💬</span>
                    <span className="ctext"><span className="clabel">WhatsApp</span><span className="cval">Click to Chat</span></span>
                  </a>
                  <div className="crow">
                    <span className="cicon">📍</span>
                    <span className="ctext"><span className="clabel">Location</span><span className="cval">India</span></span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div className="foot-col">
              <div className="nav-logo">
                <img src={archiesLogo} alt="" aria-hidden="true" style={{ height: 42 }} />
                {/* <span className="nav-brand-text">Archies Media</span> */}
              </div>
              <p className="foot-tag">Growing Brands, Digitally.</p>
              <div className="socials">
                <a href="#" aria-label="Instagram" className="soc-ig"><Instagram size={20} /></a>
                <a href="#" aria-label="LinkedIn" className="soc-li"><Linkedin size={20} /></a>
                <a href="#" aria-label="X" className="soc-x"><XIcon /></a>
              </div>
            </div>
            <div className="foot-col">
              <h4>Quick Links</h4>
              <ul><li><a href="#about">About</a></li><li><a href="#services">Services</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#contact">Contact</a></li></ul>
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              <ul><li><a href="#services">SEO</a></li><li><a href="#services">Paid Ads</a></li><li><a href="#services">Social Media</a></li><li><a href="#services">Web Dev</a></li></ul>
            </div>
            <div className="foot-col">
              <h4>Newsletter</h4>
              <p style={{ fontSize: 13, marginBottom: 12 }}>Get marketing tips straight to your inbox</p>
              <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="foot-bottom">
            <div>© 2025 Archies Media. All rights reserved.</div>
            <div className="foot-legal"><a href="#">Privacy Policy</a> <span>|</span> <a href="#">Terms</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
