import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type ChangeEvent } from "react";
import { Instagram, Linkedin, Megaphone, Search, Target, Palette, Code, Mail } from "lucide-react";
import archiesLogo from "../assets/archies-logo.png";
import teamWorkspace from "../assets/team_workspace.png";

function BrandLogo({ name }: { name: string }) {
  switch (name) {
    case "NORDIC":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 20V4l16 16V4" />
        </svg>
      );
    case "PULSE":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 12h3l3-9 4 18 3-12h5" />
        </svg>
      );
    case "VERTEX":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m3 20 9-16 9 16H3z" />
          <path d="m12 4-6 11h12z" />
        </svg>
      );
    case "OASIS":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "MERIDIAN":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "STELLAR":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z" />
        </svg>
      );
    case "ATLAS":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" />
        </svg>
      );
    case "EMBER":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "QUANTUM":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="19" rx="9" ry="3" transform="rotate(-30 12 19)" />
        </svg>
      );
    case "HORIZON":
      return (
        <svg
          className="brand-logo-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 20h20" />
          <path d="M17 14A5 5 0 0 0 7 14" />
          <path d="M12 2v4M5.2 6.8l2.8 2.8M18.8 6.8l-2.8 2.8" />
        </svg>
      );
    default:
      return null;
  }
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
      {
        name: "description",
        content:
          "Performance-driven digital marketing. SEO, paid ads, social, content & web. Grow your brand with Archies Media.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: <Megaphone size={24} />,
    title: "Social Media Management",
    desc: "Strategy, content, and community management that builds your brand voice.",
  },
  {
    icon: <Search size={24} />,
    title: "SEO Optimization",
    desc: "Rank higher on Google with technical SEO, content and authority building.",
  },
  {
    icon: <Target size={24} />,
    title: "Paid Ads (Google & Meta)",
    desc: "ROI-focused campaigns that turn ad spend into measurable revenue.",
  },
  {
    icon: <Palette size={24} />,
    title: "Content & Design",
    desc: "Scroll-stopping creatives, reels and brand-aligned design systems.",
  },
  {
    icon: <Code size={24} />,
    title: "Web Development",
    desc: "Fast, modern websites engineered to convert visitors into customers.",
  },
  {
    icon: <Mail size={24} />,
    title: "Email & WhatsApp",
    desc: "Automated funnels that nurture leads and re-engage your audience.",
  },
];

const testimonials = [
  {
    quote: "Archies Media transformed our online presence. ROI tripled in 3 months!",
    who: "Rahul S., E-Commerce Brand",
  },
  {
    quote: "Best investment we made for our business. Their team is incredibly responsive.",
    who: "Sneha T., EdTech Startup",
  },
  {
    quote: "Finally, a marketing agency that delivers what they promise.",
    who: "Amit K., D2C Brand",
  },
  {
    quote: "Our paid ads finally make sense. CAC down 40% in 60 days.",
    who: "Megha P., SaaS Founder",
  },
  { quote: "They feel like an extension of our team, not a vendor.", who: "Vikram J., Fintech" },
];

const team = [
  {
    initials: "SS",
    name: "Siddharth Singh",
    role: "Founder & CEO",
    bio: "Visionary behind Archies Media's growth strategy",
  },
  {
    initials: "VP",
    name: "Vivek Patel",
    role: "Head of SEO",
    bio: "Helping brands dominate search rankings since 2023",
  },
  {
    initials: "H",
    name: "Himanshu",
    role: "Creative Lead",
    bio: "Crafting visuals that stop the scroll",
  },
];

const brandLogos = [
  "NORDIC",
  "PULSE",
  "VERTEX",
  "OASIS",
  "MERIDIAN",
  "STELLAR",
  "ATLAS",
  "EMBER",
  "QUANTUM",
  "HORIZON",
];

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
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
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
  return (
    <>
      {prefix}
      {n}
      {suffix}
    </>
  );
}

function Cursor() {
  const [isMobile, setIsMobile] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    setIsMobile(touch);
    if (touch) return;

    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,input,select,textarea,.svc-card,.team-card,.price-card,.testi-card"))
        el.classList.add("shrunk");
      else el.classList.remove("shrunk");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (isMobile) return null;
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
                <a key={l} href={h} className={activeSection === id ? "active" : ""}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div className="nav-end">
            <a href="#contact" className="btn btn-primary btn-pill nav-cta">
              Book a Free Call
            </a>
            <button
              className={`hamburger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        {navLinks.map(([l, h]) => (
          <a key={l} href={h} onClick={() => setOpen(false)}>
            {l}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary btn-pill">
          Book a Free Call
        </a>
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
        <div
          className="testi-shell"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="testi-arrow left" onClick={prev} aria-label="Previous">
            ←
          </button>
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
          <button className="testi-arrow right" onClick={next} aria-label="Next">
            →
          </button>
        </div>
        <div className="dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={i === idx ? "active" : ""}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const plans = [
    {
      name: "Starter",
      price: 15000,
      features: ["Social Media (2 platforms)", "Basic SEO", "Monthly Report", "Email Support"],
    },
    {
      name: "Growth",
      price: 30000,
      popular: true,
      features: [
        "Everything in Starter",
        "Paid Ads Management",
        "Weekly Reports",
        "Dedicated Manager",
        "Content Creation",
      ],
    },
    {
      name: "Scale",
      price: 60000,
      features: [
        "Everything in Growth",
        "Full-Stack Marketing",
        "Daily Reports",
        "Priority Support",
        "Custom Strategy",
      ],
    },
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
          <button className={!annual ? "active" : ""} onClick={() => setAnnual(false)}>
            Monthly
          </button>
          <button className={annual ? "active" : ""} onClick={() => setAnnual(true)}>
            Annual (-20%)
          </button>
        </div>
        <div className="price-grid">
          {plans.map((p) => {
            const price = annual ? Math.round(p.price * 0.8) : p.price;
            return (
              <div key={p.name} className={`price-card ${p.popular ? "popular" : ""}`}>
                {p.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3>{p.name}</h3>
                <p style={{ fontSize: 13 }}>
                  For{" "}
                  {p.name === "Starter"
                    ? "new brands"
                    : p.name === "Growth"
                      ? "scaling teams"
                      : "ambitious brands"}
                </p>
                <div className="price-amount">
                  ₹{price.toLocaleString("en-IN")}
                  <span>/mo</span>
                </div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className={`btn ${p.popular ? "btn-primary" : "btn-outline"}`}>
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FloatField({
  type = "text",
  name,
  label,
  as,
}: {
  type?: string;
  name: string;
  label: string;
  as?: "textarea" | "select";
}) {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const float = focused || val.length > 0;
  const common = {
    required: true,
    value: val,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setVal(e.target.value),
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
          <option>Social Media Management</option>
          <option>SEO</option>
          <option>Paid Ads</option>
          <option>Content & Design</option>
          <option>Web Development</option>
          <option>Email & WhatsApp</option>
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
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setSent(true);
        }, 1200);
      }}
    >
      <FloatField name="name" label="Your Name" />
      <FloatField name="email" type="email" label="Email Address" />
      <FloatField name="phone" type="tel" label="Phone Number" />
      <FloatField name="service" label="Select a Service" as="select" />
      <FloatField name="msg" label="Tell us about your project..." as="textarea" />
      <div className="field">
        <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`}>
          {loading ? (
            <>
              <span className="spinner" /> Sending...
            </>
          ) : sent ? (
            "✓ Message Sent!"
          ) : (
            <>
              Send Message <span className="arrow">→</span>
            </>
          )}
        </button>
        <p className="resp-time">⚡ Average response time: 2 hours</p>
      </div>
    </form>
  );
}

function HeroDashboard() {
  const [activeMetric, setActiveMetric] = useState<"rev" | "roas" | "conv">("rev");

  const metrics = {
    rev: {
      title: "Monthly Revenue",
      value: "₹12.4L",
      sub: "+18.7% vs last month",
      color: "var(--amber)",
      path: "M10,90 Q40,60 80,75 T160,40 T240,15 T320,10",
      gradientId: "revGrad",
      dots: [
        [10, 90],
        [80, 75],
        [160, 40],
        [240, 15],
        [320, 10],
      ],
    },
    roas: {
      title: "Average ROAS",
      value: "4.2x",
      sub: "+0.8x drop-off reduction",
      color: "#10b981",
      path: "M10,70 Q40,80 80,45 T160,35 T240,55 T320,20",
      gradientId: "roasGrad",
      dots: [
        [10, 70],
        [80, 45],
        [160, 35],
        [240, 55],
        [320, 20],
      ],
    },
    conv: {
      title: "Conversions",
      value: "12.8k",
      sub: "+31.2% ad conversion",
      color: "#3b82f6",
      path: "M10,80 Q40,50 80,60 T160,45 T240,30 T320,12",
      gradientId: "convGrad",
      dots: [
        [10, 80],
        [80, 60],
        [160, 45],
        [240, 30],
        [320, 12],
      ],
    },
  };

  const curr = metrics[activeMetric];

  return (
    <div className="dashcard">
      <div className="dashcard-header">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <div>
            <h4>{curr.title}</h4>
            <div
              className="big"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                color: "var(--navy)",
                marginTop: 4,
              }}
            >
              {curr.value}
            </div>
            <div
              className="sub"
              style={{ fontSize: 11, color: curr.color, fontWeight: 600, marginTop: 2 }}
            >
              {curr.sub}
            </div>
          </div>
          <div className="dashcard-tabs">
            {(["rev", "roas", "conv"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setActiveMetric(m)}
                className={`dash-tab ${activeMetric === m ? "active" : ""}`}
                style={
                  {
                    "--tab-color": metrics[m].color,
                  } as React.CSSProperties
                }
              >
                {m === "rev" ? "Revenue" : m === "roas" ? "ROAS" : "Conversions"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="chart-container" style={{ position: "relative", marginTop: 16 }}>
        <svg viewBox="0 0 330 110" width="100%" height="110" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id={curr.gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={curr.color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={curr.color} stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d={`${curr.path} L320,105 L10,105 Z`}
            fill={`url(#${curr.gradientId})`}
            style={{ transition: "d 0.5s ease-in-out", fillOpacity: 0.8 }}
          />
          <path
            d={curr.path}
            fill="none"
            stroke={curr.color}
            strokeWidth="3"
            strokeLinecap="round"
            style={{ transition: "d 0.5s ease-in-out" }}
          />
          {curr.dots.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="4.5"
              fill="#fff"
              stroke={curr.color}
              strokeWidth="2.5"
              style={{ transition: "cx 0.5s ease-in-out, cy 0.5s ease-in-out" }}
            />
          ))}
        </svg>
      </div>

      <div className="mini-cards" style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <div
          className={`mini ${activeMetric === "rev" ? "highlight" : ""}`}
          onClick={() => setActiveMetric("rev")}
          style={{
            flex: 1,
            padding: "8px 12px",
            border: "1px solid var(--border)",
            borderRadius: 6,
            cursor: "pointer",
            background: activeMetric === "rev" ? "rgba(245,158,11,0.08)" : "transparent",
            borderColor: activeMetric === "rev" ? "var(--amber)" : "var(--border)",
            transition: "all 0.2s ease",
          }}
        >
          <strong>₹12.4L</strong>
          Revenue
        </div>
        <div
          className={`mini ${activeMetric === "roas" ? "highlight" : ""}`}
          onClick={() => setActiveMetric("roas")}
          style={{
            flex: 1,
            padding: "8px 12px",
            border: "1px solid var(--border)",
            borderRadius: 6,
            cursor: "pointer",
            background: activeMetric === "roas" ? "rgba(16,185,129,0.08)" : "transparent",
            borderColor: activeMetric === "roas" ? "#10b981" : "var(--border)",
            transition: "all 0.2s ease",
          }}
        >
          <strong>4.2x</strong>
          ROAS
        </div>
        <div
          className={`mini ${activeMetric === "conv" ? "highlight" : ""}`}
          onClick={() => setActiveMetric("conv")}
          style={{
            flex: 1,
            padding: "8px 12px",
            border: "1px solid var(--border)",
            borderRadius: 6,
            cursor: "pointer",
            background: activeMetric === "conv" ? "rgba(59,130,246,0.08)" : "transparent",
            borderColor: activeMetric === "conv" ? "#3b82f6" : "var(--border)",
            transition: "all 0.2s ease",
          }}
        >
          <strong>12.8k</strong>
          Conversions
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What digital marketing services do you specialize in?",
      a: "We specialize in end-to-end digital growth, including Search Engine Optimization (SEO), Paid Ads (Google, Meta, LinkedIn), Social Media Management & Branding, Content & Design, Web Development, and Marketing Automation (Email/WhatsApp funnels).",
    },
    {
      q: "How do you measure and report campaign success?",
      a: "We set clear Key Performance Indicators (KPIs) before launching any campaign—focusing on conversions, CPA (Cost Per Acquisition), ROAS (Return on Ad Spend), and net revenue. You'll receive real-time dashboard access and comprehensive weekly reports explaining the data in plain English.",
    },
    {
      q: "Do you require long-term contracts?",
      a: "No, we believe in earning your trust month-over-month. While we recommend a 3-6 month window to fully optimize campaigns (especially for SEO and organic scaling), we offer flexible rolling agreements with a simple 30-day notice period.",
    },
    {
      q: "What is your typical onboarding timeline?",
      a: "We can typically kick off within 7-10 business days. The first week is dedicated to audit & setup: analyzing your current accounts, competitor research, installing conversion tracking, and presenting your custom marketing strategy roadmap.",
    },
    {
      q: "Who will I be working with directly?",
      a: "You will have a dedicated Account Manager who coordinates with our execution specialists (SEO lead, creative designers, copywriters, and developers) and acts as your single point of contact for daily updates and strategic queries.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-major" style={{ background: "var(--bg)" }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <div className="section-head reveal" style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionBadge>FAQs</SectionBadge>
          <SplitHeading bold="FREQUENTLY ASKED" accent="Questions" />
          <p>Everything you need to know about partnering with Archies Media.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="reveal" data-delay={idx * 0.05}>
                <div
                  className={`faq-item ${isOpen ? "open" : ""}`}
                  style={{
                    marginBottom: 16,
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    background: isOpen ? "var(--bg-soft)" : "transparent",
                  }}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "18px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      outline: "none",
                    }}
                  >
                    <span style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)" }}>
                      {faq.q}
                    </span>
                    <span
                      className="faq-icon"
                      style={{
                        fontSize: 10,
                        color: "var(--body)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className="faq-answer-wrapper"
                    style={{
                      maxHeight: isOpen ? 200 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <div
                      className="faq-answer"
                      style={{
                        padding: "0 24px 20px 24px",
                        fontSize: 14,
                        color: "var(--body)",
                        lineHeight: 1.6,
                      }}
                    >
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
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
        <span className="hero-sparkle hero-sparkle-1" aria-hidden="true">
          ✦
        </span>
        <span className="hero-sparkle hero-sparkle-2" aria-hidden="true">
          ✦
        </span>
        <span className="hero-sparkle hero-sparkle-3" aria-hidden="true">
          ✦
        </span>
        <div className="container hero-grid">
          <div>
            <div className="tag hero-anim d1 bounce-in">
              🚀 India's Fastest Growing Digital Agency
            </div>
            <SplitHeading
              as="h1"
              size="hero"
              className="hero-anim d2"
              bold="GROW YOUR BRAND"
              accent="With Smart Marketing"
            />
            <p className="sub hero-anim d3">
              Performance-driven strategies that turn clicks into customers. We help brands scale
              with data-backed marketing.
            </p>
            <div className="hero-cta hero-anim d4">
              <a href="#contact" className="btn btn-primary">
                Book a Free Call
              </a>
              <a href="#services" className="btn btn-outline">
                See Our Work
              </a>
            </div>
            <div className="hero-stats hero-anim d5">
              <div>
                <div className="stat-num">
                  <Counter to={50} suffix="+" />
                </div>
                <div className="stat-label">Brands</div>
              </div>
              <div>
                <div className="stat-num">
                  <Counter to={2} prefix="₹" suffix="Cr+" />
                </div>
                <div className="stat-label">Revenue</div>
              </div>
              <div>
                <div className="stat-num">
                  <Counter to={3} suffix="+" />
                </div>
                <div className="stat-label">Years</div>
              </div>
              <div>
                <div className="stat-num">
                  <Counter to={98} suffix="%" />
                </div>
                <div className="stat-label">Retention</div>
              </div>
            </div>
          </div>
          <div className="hero-right hero-anim d3">
            <div className="blob amber" />
            <div className="blob navy" />
            <div className="float-mini tl">
              <span className="dot" />{" "}
              <div>
                <strong style={{ color: "var(--navy)" }}>+187%</strong>
                <div style={{ fontSize: 11 }}>Traffic</div>
              </div>
            </div>
            <HeroDashboard />
            <div className="float-mini br">
              <span className="dot" style={{ background: "var(--navy)" }} />{" "}
              <div>
                <strong style={{ color: "var(--navy)" }}>5.0</strong>
                <div style={{ fontSize: 11 }}>★★★★★</div>
              </div>
            </div>
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
                      <BrandLogo name={b} />
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
                      <BrandLogo name={b} />
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
                <div className="svc-icon" style={{ fontSize: 22 }}>
                  {s.icon}
                </div>
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
              <img
                src={teamWorkspace}
                alt="Archies Media Workspace"
                className="about-workspace-img"
              />
              <span className="about-team-label">Our Team</span>
            </div>
            <div className="floating-badge">
              <span>★</span> 3+ Years of Excellence
            </div>
          </div>
          <div className="reveal slide-r">
            <SectionBadge>Who We Are</SectionBadge>
            <SplitHeading bold="WE ARE" accent="Archies Media" />
            <p>
              We're a results-driven digital marketing agency helping brands grow online through
              data-backed strategies, creative content, and performance marketing.
            </p>
            <div className="about-stats">
              <div className="stat-card">
                <strong>50+</strong>
                <span>Brands Served</span>
              </div>
              <div className="stat-card">
                <strong>₹2Cr+</strong>
                <span>Revenue Generated</span>
              </div>
              <div className="stat-card">
                <strong>98%</strong>
                <span>Client Retention</span>
              </div>
            </div>
            <a href="#contact" className="link-cta">
              Learn More About Us →
            </a>
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
                {[
                  "Slow turnaround times",
                  "Generic copy-paste strategies",
                  "No transparent reporting",
                  "Vanity metrics, no real ROI",
                  "One-size-fits-all approach",
                ].map((t) => (
                  <li key={t}>
                    <span className="x">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="compare good slide-r">
              <div className="winner-ribbon">★ The Archies Way</div>
              <h3>Archies Media</h3>
              <ul>
                {[
                  "Fast delivery & quick responses",
                  "Custom strategies per brand",
                  "Clear, honest reporting",
                  "ROI-focused campaigns",
                  "Dedicated account manager",
                ].map((t) => (
                  <li key={t}>
                    <span className="check">✓</span>
                    <span>{t}</span>
                  </li>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Pricing />
      <FAQSection />

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
                  <a href="mailto:contact@archiesmedia.com" className="crow">
                    <span className="cicon">📧</span>
                    <span className="ctext">
                      <span className="clabel">Email</span>
                      <span className="cval">contact@archiesmedia.com</span>
                    </span>
                  </a>
                  <a
                    href="https://wa.me/919183191221"
                    target="_blank"
                    rel="noreferrer"
                    className="crow wa"
                  >
                    <span className="cicon wa">💬</span>
                    <span className="ctext">
                      <span className="clabel">WhatsApp / Phone</span>
                      <span className="cval">+91 9183191221</span>
                    </span>
                  </a>
                  <a
                    href="https://www.archiesmedia.com"
                    target="_blank"
                    rel="noreferrer"
                    className="crow"
                  >
                    <span className="cicon">🌐</span>
                    <span className="ctext">
                      <span className="clabel">Website</span>
                      <span className="cval">www.archiesmedia.com</span>
                    </span>
                  </a>
                  <div className="crow">
                    <span className="cicon">📍</span>
                    <span className="ctext">
                      <span className="clabel">Location</span>
                      <span className="cval">219/B, Indrapuri Sector C, Bhopal, MP</span>
                    </span>
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
            </div>
            <div className="foot-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">SEO</a>
                </li>
                <li>
                  <a href="#services">Paid Ads</a>
                </li>
                <li>
                  <a href="#services">Social Media</a>
                </li>
                <li>
                  <a href="#services">Web Dev</a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Newsletter</h4>
              <p style={{ fontSize: 13, marginBottom: 12 }}>
                Get marketing tips straight to your inbox
              </p>
              <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email" required />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="foot-bottom">
            <div>© 2025 Archies Media. All rights reserved.</div>
            <div className="foot-legal">
              <a href="#">Privacy Policy</a> <span>|</span> <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
