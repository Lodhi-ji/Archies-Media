import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Linkedin, I as Instagram } from "../_libs/lucide-react.mjs";
const archiesLogo = "/assets/archies-logo-CwM0oobt.png";
function LogoBoxIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", {
    className: "logo-box-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", {
        x: "3",
        y: "7",
        width: "18",
        height: "14",
        rx: "2",
        stroke: "currentColor",
        strokeWidth: "1.5",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
        d: "M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7",
        stroke: "currentColor",
        strokeWidth: "1.5",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", {
        cx: "12",
        cy: "14",
        r: "2",
        stroke: "currentColor",
        strokeWidth: "1.5",
      }),
    ],
  });
}
function XIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    }),
  });
}
const services = [
  {
    icon: "📊",
    title: "Social Media Management",
    desc: "Strategy, content, and community management that builds your brand voice.",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    desc: "Rank higher on Google with technical SEO, content and authority building.",
  },
  {
    icon: "🎯",
    title: "Paid Ads (Google & Meta)",
    desc: "ROI-focused campaigns that turn ad spend into measurable revenue.",
  },
  {
    icon: "✏️",
    title: "Content & Design",
    desc: "Scroll-stopping creatives, reels and brand-aligned design systems.",
  },
  {
    icon: "</>",
    title: "Web Development",
    desc: "Fast, modern websites engineered to convert visitors into customers.",
  },
  {
    icon: "✉️",
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
  {
    quote: "They feel like an extension of our team, not a vendor.",
    who: "Vikram J., Fintech",
  },
];
const team = [
  {
    initials: "AM",
    name: "Arjun M.",
    role: "Founder & CEO",
    bio: "Visionary behind Archies Media's growth strategy",
  },
  {
    initials: "PS",
    name: "Priya S.",
    role: "Head of SEO",
    bio: "Helping brands dominate search rankings since 2019",
  },
  {
    initials: "RK",
    name: "Rahul K.",
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
];
function SectionBadge({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
    className: "badge",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "badge-dot",
        "aria-hidden": "true",
      }),
      children,
    ],
  });
}
function SplitHeading({ bold, accent, as: Tag = "h2", className = "", size = "section" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, {
    className: `split-heading split-heading--${size} ${className}`.trim(),
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "split-heading-bold",
        children: bold,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "split-heading-accent",
        children: accent,
      }),
    ],
  });
}
function useActiveSection() {
  const [active, setActive] = reactExports.useState("");
  reactExports.useEffect(() => {
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
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal, .slide-l, .slide-r, .contact-section");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            const el = e.target;
            const delay = parseFloat(el.dataset.delay || "0") || i * 0.05;
            el.style.transitionDelay = `${delay}s`;
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Counter({ to, suffix = "", prefix = "" }) {
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let start = null;
    const dur = 1800;
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [prefix, n, suffix],
  });
}
function Cursor() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    const over = (e) => {
      const t = e.target;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "cursor" });
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [hidden, setHidden] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const activeSection = useActiveSection();
  const lastY = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", {
        className: `nav ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "nav-bar",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
              href: "#top",
              className: "nav-logo",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                src: archiesLogo,
                alt: "Archies Media",
              }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "nav-pill",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "nav-links",
                children: navLinks.map(([l, h, id]) =>
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    { href: h, className: activeSection === id ? "active" : "", children: l },
                    l,
                  ),
                ),
              }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "nav-end",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                  href: "#contact",
                  className: "btn btn-primary btn-pill nav-cta",
                  children: "Book a Free Call",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                  className: `hamburger ${open ? "open" : ""}`,
                  onClick: () => setOpen(!open),
                  "aria-label": "Menu",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: `mobile-drawer ${open ? "open" : ""}`,
        children: [
          navLinks.map(([l, h]) =>
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              { href: h, onClick: () => setOpen(false), children: l },
              l,
            ),
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
            href: "#contact",
            onClick: () => setOpen(false),
            className: "btn btn-primary btn-pill",
            children: "Book a Free Call",
          }),
        ],
      }),
    ],
  });
}
function Testimonials() {
  const [idx, setIdx] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  const slides = testimonials.length;
  reactExports.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % slides), 4e3);
    return () => clearInterval(id);
  }, [paused, slides]);
  const prev = () => setIdx((i) => (i - 1 + slides) % slides);
  const next = () => setIdx((i) => (i + 1) % slides);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
    id: "testimonials",
    className: "section-major reveal",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "container",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "section-head",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBadge, { children: "Client Love" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SplitHeading, {
              bold: "WHAT CLIENTS",
              accent: "Say About Us",
            }),
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "testi-shell",
          onMouseEnter: () => setPaused(true),
          onMouseLeave: () => setPaused(false),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              className: "testi-arrow left",
              onClick: prev,
              "aria-label": "Previous",
              children: "←",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "testi-wrap",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "testi-track",
                style: {
                  transform: `translateX(-${idx * (100 / 3)}%)`,
                },
                children: [...testimonials, ...testimonials.slice(0, 2)].map((t, i) =>
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "testi",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "testi-card",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "stars",
                            children: "★★★★★",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                            className: "quote",
                            children: ['"', t.quote, '"'],
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                            className: "who",
                            children: ["— ", t.who],
                          }),
                        ],
                      }),
                    },
                    i,
                  ),
                ),
              }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              className: "testi-arrow right",
              onClick: next,
              "aria-label": "Next",
              children: "→",
            }),
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "dots",
          children: testimonials.map((_, i) =>
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: i === idx ? "active" : "",
                onClick: () => setIdx(i),
                "aria-label": `Testimonial ${i + 1}`,
              },
              i,
            ),
          ),
        }),
      ],
    }),
  });
}
function Pricing() {
  const [annual, setAnnual] = reactExports.useState(false);
  const plans = [
    {
      name: "Starter",
      price: 15e3,
      features: ["Social Media (2 platforms)", "Basic SEO", "Monthly Report", "Email Support"],
    },
    {
      name: "Growth",
      price: 3e4,
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
      price: 6e4,
      features: [
        "Everything in Growth",
        "Full-Stack Marketing",
        "Daily Reports",
        "Priority Support",
        "Custom Strategy",
      ],
    },
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
    id: "pricing",
    className: "section-major reveal",
    style: {
      background: "var(--bg-soft)",
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "container",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "section-head",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBadge, { children: "Simple Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SplitHeading, {
              bold: "TRANSPARENT PLANS,",
              accent: "Real Results",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              children: "No surprises. No hidden fees. Just clear pricing built for ROI.",
            }),
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "pricing-toggle",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              className: !annual ? "active" : "",
              onClick: () => setAnnual(false),
              children: "Monthly",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              className: annual ? "active" : "",
              onClick: () => setAnnual(true),
              children: "Annual (-20%)",
            }),
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "price-grid",
          children: plans.map((p) => {
            const price = annual ? Math.round(p.price * 0.8) : p.price;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `price-card ${p.popular ? "popular" : ""}`,
                children: [
                  p.popular &&
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className: "popular-badge",
                      children: "MOST POPULAR",
                    }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                    style: {
                      fontSize: 13,
                    },
                    children: [
                      "For ",
                      p.name === "Starter"
                        ? "new brands"
                        : p.name === "Growth"
                          ? "scaling teams"
                          : "ambitious brands",
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "price-amount",
                    children: [
                      "₹",
                      price.toLocaleString("en-IN"),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/mo" }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
                    children: p.features.map((f) =>
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: f }, f),
                    ),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                    href: "#contact",
                    className: `btn ${p.popular ? "btn-primary" : "btn-outline"}`,
                    children: "Get Started",
                  }),
                ],
              },
              p.name,
            );
          }),
        }),
      ],
    }),
  });
}
function FloatField({ type = "text", name, label, as }) {
  const [val, setVal] = reactExports.useState("");
  const [focused, setFocused] = reactExports.useState(false);
  const float = focused || val.length > 0;
  const common = {
    required: true,
    value: val,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e) => setVal(e.target.value),
    className: focused ? "focused" : "",
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: `float-field ${float ? "float" : ""} ${focused ? "is-focused" : ""}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, children: label }),
      as === "textarea"
        ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: name, name, ...common })
        : as === "select"
          ? /* @__PURE__ */ jsxRuntimeExports.jsxs("select", {
              id: name,
              name,
              ...common,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
                  children: "Social Media Management",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "SEO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Paid Ads" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Content & Design" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Web Development" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Email & WhatsApp" }),
              ],
            })
          : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, ...common }),
    ],
  });
}
function ContactForm() {
  const [loading, setLoading] = reactExports.useState(false);
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
    className: "contact-form",
    onSubmit: (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSent(true);
      }, 1200);
    },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatField, { name: "name", label: "Your Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatField, {
        name: "email",
        type: "email",
        label: "Email Address",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatField, {
        name: "phone",
        type: "tel",
        label: "Phone Number",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatField, {
        name: "service",
        label: "Select a Service",
        as: "select",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatField, {
        name: "msg",
        label: "Tell us about your project...",
        as: "textarea",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "field",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
            type: "submit",
            className: `submit-btn ${loading ? "loading" : ""}`,
            children: loading
              ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "spinner" }),
                    " Sending...",
                  ],
                })
              : sent
                ? "✓ Message Sent!"
                : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: [
                      "Send Message ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "arrow",
                        children: "→",
                      }),
                    ],
                  }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
            className: "resp-time",
            children: "⚡ Average response time: 2 hours",
          }),
        ],
      }),
    ],
  });
}
function Home() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    id: "top",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Cursor, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", {
        className: "hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-bg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "hero-sparkle hero-sparkle-1",
            "aria-hidden": "true",
            children: "✦",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "hero-sparkle hero-sparkle-2",
            "aria-hidden": "true",
            children: "✦",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "hero-sparkle hero-sparkle-3",
            "aria-hidden": "true",
            children: "✦",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "container hero-grid",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "tag hero-anim d1 bounce-in",
                    children: "🚀 India's Fastest Growing Digital Agency",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SplitHeading, {
                    as: "h1",
                    size: "hero",
                    className: "hero-anim d2",
                    bold: "GROW YOUR BRAND",
                    accent: "With Smart Marketing",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                    className: "sub hero-anim d3",
                    children:
                      "Performance-driven strategies that turn clicks into customers. We help brands scale with data-backed marketing.",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "hero-cta hero-anim d4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                        href: "#contact",
                        className: "btn btn-primary",
                        children: "Book a Free Call",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                        href: "#services",
                        className: "btn btn-outline",
                        children: "See Our Work",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "hero-stats hero-anim d5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "stat-num",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, {
                              to: 50,
                              suffix: "+",
                            }),
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "stat-label",
                            children: "Brands",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "stat-num",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, {
                              to: 2,
                              prefix: "₹",
                              suffix: "Cr+",
                            }),
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "stat-label",
                            children: "Revenue",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "stat-num",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, {
                              to: 3,
                              suffix: "+",
                            }),
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "stat-label",
                            children: "Years",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "stat-num",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, {
                              to: 98,
                              suffix: "%",
                            }),
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "stat-label",
                            children: "Retention",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "hero-right hero-anim d3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blob amber" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blob navy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "float-mini tl",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot" }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", {
                            style: {
                              color: "var(--navy)",
                            },
                            children: "+187%",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            style: {
                              fontSize: 11,
                            },
                            children: "Traffic",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "dashcard",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Monthly Revenue" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "big",
                        style: {
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                        },
                        children: "₹12.4L",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "chart",
                        children: [30, 45, 38, 62, 55, 78, 90].map((h, i) =>
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "bar",
                              style: {
                                height: `${h}%`,
                                animationDelay: `${i * 0.1}s`,
                              },
                            },
                            i,
                          ),
                        ),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "mini-cards",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                            className: "mini",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4.2x" }),
                              "ROAS",
                            ],
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                            className: "mini",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", {
                                children: "12.8k",
                              }),
                              "Conversions",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "float-mini br",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "dot",
                        style: {
                          background: "var(--navy)",
                        },
                      }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", {
                            style: {
                              color: "var(--navy)",
                            },
                            children: "5.0",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            style: {
                              fontSize: 11,
                            },
                            children: "★★★★★",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
        className: "trust",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "container",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "trust-label",
              children: "Trusted by 50+ Growing Brands",
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "marquee-rows",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "marquee",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: "marquee-track left",
                  children: [...Array(2)].map((_, k) =>
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "lrow",
                        children: brandLogos.map((b) =>
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "logo-box",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(LogoBoxIcon, {}),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b }),
                              ],
                            },
                            `l1-${k}-${b}`,
                          ),
                        ),
                      },
                      k,
                    ),
                  ),
                }),
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "marquee",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: "marquee-track right",
                  children: [...Array(2)].map((_, k) =>
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "lrow",
                        children: [...brandLogos].reverse().map((b) =>
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "logo-box",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(LogoBoxIcon, {}),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b }),
                              ],
                            },
                            `l2-${k}-${b}`,
                          ),
                        ),
                      },
                      k,
                    ),
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
        id: "services",
        className: "section-major",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "container",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "section-head reveal",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBadge, { children: "What We Do" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SplitHeading, {
                  bold: "SERVICES",
                  accent: "That Drive Real Results",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  children:
                    "From strategy to execution — every channel covered, every metric measured.",
                }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "svc-grid",
              children: services.map((s, i) =>
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "svc-card reveal",
                    "data-delay": i * 0.1,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "svc-icon",
                        style: {
                          fontSize: 22,
                        },
                        children: s.icon,
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: s.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: s.desc }),
                    ],
                  },
                  s.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
        id: "about",
        className: "about section-major",
        style: {
          background: "var(--bg-soft)",
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "container about-grid",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "about-img reveal slide-l",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: "about-img-frame",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "about-team-label",
                    children: "Our Team",
                  }),
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "floating-badge",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★" }),
                    " 3+ Years of Excellence",
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "reveal slide-r",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBadge, { children: "Who We Are" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SplitHeading, {
                  bold: "WE ARE",
                  accent: "Archies Media",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  children:
                    "We're a results-driven digital marketing agency helping brands grow online through data-backed strategies, creative content, and performance marketing.",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "about-stats",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "stat-card",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "50+" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          children: "Brands Served",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "stat-card",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹2Cr+" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          children: "Revenue Generated",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "stat-card",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "98%" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          children: "Client Retention",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                  href: "#contact",
                  className: "link-cta",
                  children: "Learn More About Us →",
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
        id: "why",
        className: "section-major",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "container",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "section-head reveal",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBadge, { children: "Why Choose Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SplitHeading, {
                  bold: "ARCHIES MEDIA",
                  accent: "vs. The Rest",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  children: "See the difference a focused, modern agency makes.",
                }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "compare-grid",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "compare bad slide-l",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className: "compare-tag",
                      children: "The Old Way",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Other Agencies" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
                      children: [
                        "Slow turnaround times",
                        "Generic copy-paste strategies",
                        "No transparent reporting",
                        "Vanity metrics, no real ROI",
                        "One-size-fits-all approach",
                      ].map((t) =>
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "li",
                          {
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                className: "x",
                                children: "✕",
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "compare good slide-r",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className: "winner-ribbon",
                      children: "★ The Archies Way",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Archies Media" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
                      children: [
                        "Fast delivery & quick responses",
                        "Custom strategies per brand",
                        "Clear, honest reporting",
                        "ROI-focused campaigns",
                        "Dedicated account manager",
                      ].map((t) =>
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "li",
                          {
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                className: "check",
                                children: "✓",
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className: "compare-foot",
                      children: "Built different. Built for results.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
        id: "team",
        className: "section-major",
        style: {
          background: "var(--bg-soft)",
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "container",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "section-head reveal",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBadge, { children: "Meet The Team" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SplitHeading, {
                  bold: "THE PEOPLE",
                  accent: "Behind Your Growth",
                }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "team-grid",
              children: team.map((t, i) =>
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "team-card reveal",
                    "data-delay": i * 0.1,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "avatar",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className: "avatar-initials",
                          children: t.initials,
                        }),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "role",
                        children: t.role,
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className: "bio",
                        children: t.bio,
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "team-socials",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#",
                            "aria-label": "LinkedIn",
                            className: "ts li",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, {
                              size: 16,
                              strokeWidth: 2.25,
                            }),
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#",
                            "aria-label": "Instagram",
                            className: "ts ig",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, {
                              size: 16,
                              strokeWidth: 2.25,
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  t.name,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
        id: "contact",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "container",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "contact-section reveal",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "contact-pattern" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "contact-quote",
                children: '"',
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "contact-wrap",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "contact-left",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBadge, {
                        children: "Get In Touch",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SplitHeading, {
                        bold: "READY TO GROW",
                        accent: "Your Brand?",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        children:
                          "Let's build something great together. Book a free strategy call today.",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "contact-rows",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                            href: "mailto:contact@archiesmedia.in",
                            className: "crow",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                className: "cicon",
                                children: "📧",
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                                className: "ctext",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "clabel",
                                    children: "Email",
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "cval",
                                    children: "contact@archiesmedia.in",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                            href: "https://wa.me/919999999999",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "crow wa",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                className: "cicon wa",
                                children: "💬",
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                                className: "ctext",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "clabel",
                                    children: "WhatsApp",
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "cval",
                                    children: "Click to Chat",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                            className: "crow",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                className: "cicon",
                                children: "📍",
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                                className: "ctext",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "clabel",
                                    children: "Location",
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "cval",
                                    children: "India",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}),
                ],
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", {
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "container",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "foot-grid",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "foot-col",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className: "nav-logo",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                        src: archiesLogo,
                        alt: "",
                        "aria-hidden": "true",
                        style: {
                          height: 42,
                        },
                      }),
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className: "foot-tag",
                      children: "Growing Brands, Digitally.",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "socials",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                          href: "#",
                          "aria-label": "Instagram",
                          className: "soc-ig",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 20 }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                          href: "#",
                          "aria-label": "LinkedIn",
                          className: "soc-li",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 20 }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                          href: "#",
                          "aria-label": "X",
                          className: "soc-x",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(XIcon, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "foot-col",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Quick Links" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#about",
                            children: "About",
                          }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#services",
                            children: "Services",
                          }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#pricing",
                            children: "Pricing",
                          }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#contact",
                            children: "Contact",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "foot-col",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Services" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#services",
                            children: "SEO",
                          }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#services",
                            children: "Paid Ads",
                          }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#services",
                            children: "Social Media",
                          }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#services",
                            children: "Web Dev",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "foot-col",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Newsletter" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      style: {
                        fontSize: 13,
                        marginBottom: 12,
                      },
                      children: "Get marketing tips straight to your inbox",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
                      className: "newsletter",
                      onSubmit: (e) => e.preventDefault(),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                          type: "email",
                          placeholder: "Your email",
                          required: true,
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                          type: "submit",
                          className: "btn btn-primary",
                          children: "Subscribe",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "foot-bottom",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  children: "© 2025 Archies Media. All rights reserved.",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "foot-legal",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                      href: "#",
                      children: "Privacy Policy",
                    }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "|" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Terms" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { Home as component };
