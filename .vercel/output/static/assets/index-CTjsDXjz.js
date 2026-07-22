import { r as c, j as e } from "./index-D5trECYw.js";
const S = (...s) =>
  s
    .filter((a, n, i) => !!a && a.trim() !== "" && i.indexOf(a) === n)
    .join(" ")
    .trim();
const C = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const E = (s) =>
  s.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, n, i) => (i ? i.toUpperCase() : n.toLowerCase()));
const g = (s) => {
  const a = E(s);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
var R = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const L = (s) => {
  for (const a in s) if (a.startsWith("aria-") || a === "role" || a === "title") return !0;
  return !1;
};
const M = c.forwardRef(
  (
    {
      color: s = "currentColor",
      size: a = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: i,
      className: r = "",
      children: t,
      iconNode: h,
      ...l
    },
    o,
  ) =>
    c.createElement(
      "svg",
      {
        ref: o,
        ...R,
        width: a,
        height: a,
        stroke: s,
        strokeWidth: i ? (Number(n) * 24) / Number(a) : n,
        className: S("lucide", r),
        ...(!t && !L(l) && { "aria-hidden": "true" }),
        ...l,
      },
      [...h.map(([d, m]) => c.createElement(d, m)), ...(Array.isArray(t) ? t : [t])],
    ),
);
const k = (s, a) => {
  const n = c.forwardRef(({ className: i, ...r }, t) =>
    c.createElement(M, {
      ref: t,
      iconNode: a,
      className: S(`lucide-${C(g(s))}`, `lucide-${s}`, i),
      ...r,
    }),
  );
  return ((n.displayName = g(s)), n);
};
const O = [
    ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
    ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  f = k("instagram", O);
const I = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  b = k("linkedin", I),
  A = "/assets/archies-logo-CwM0oobt.png";
function y() {
  return e.jsxs("svg", {
    className: "logo-box-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [
      e.jsx("rect", {
        x: "3",
        y: "7",
        width: "18",
        height: "14",
        rx: "2",
        stroke: "currentColor",
        strokeWidth: "1.5",
      }),
      e.jsx("path", {
        d: "M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7",
        stroke: "currentColor",
        strokeWidth: "1.5",
      }),
      e.jsx("circle", { cx: "12", cy: "14", r: "2", stroke: "currentColor", strokeWidth: "1.5" }),
    ],
  });
}
function T() {
  return e.jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    children: e.jsx("path", {
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    }),
  });
}
const W = [
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
  ],
  v = [
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
  ],
  F = [
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
  ],
  w = [
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
  ],
  N = [
    ["Services", "#services", "services"],
    ["About", "#about", "about"],
    ["Why Archies", "#why", "why"],
    ["Team", "#team", "team"],
    ["Pricing", "#pricing", "pricing"],
    ["Contact", "#contact", "contact"],
  ];
function j({ children: s }) {
  return e.jsxs("span", {
    className: "badge",
    children: [e.jsx("span", { className: "badge-dot", "aria-hidden": "true" }), s],
  });
}
function x({ bold: s, accent: a, as: n = "h2", className: i = "", size: r = "section" }) {
  return e.jsxs(n, {
    className: `split-heading split-heading--${r} ${i}`.trim(),
    children: [
      e.jsx("span", { className: "split-heading-bold", children: s }),
      e.jsx("span", { className: "split-heading-accent", children: a }),
    ],
  });
}
function P() {
  const [s, a] = c.useState("");
  return (
    c.useEffect(() => {
      const n = N.map(([, , r]) => r),
        i = () => {
          const r = window.scrollY + window.innerHeight * 0.35;
          let t = "";
          for (const h of n) {
            const l = document.getElementById(h);
            l && l.offsetTop <= r && (t = h);
          }
          a(t);
        };
      return (
        i(),
        window.addEventListener("scroll", i, { passive: !0 }),
        () => window.removeEventListener("scroll", i)
      );
    }, []),
    s
  );
}
function B() {
  c.useEffect(() => {
    const s = document.querySelectorAll(".reveal, .slide-l, .slide-r, .contact-section"),
      a = new IntersectionObserver(
        (n) => {
          n.forEach((i, r) => {
            if (i.isIntersecting) {
              const t = i.target,
                h = parseFloat(t.dataset.delay || "0") || r * 0.05;
              ((t.style.transitionDelay = `${h}s`), t.classList.add("in"), a.unobserve(t));
            }
          });
        },
        { threshold: 0.15 },
      );
    return (s.forEach((n) => a.observe(n)), () => a.disconnect());
  }, []);
}
function p({ to: s, suffix: a = "", prefix: n = "" }) {
  const [i, r] = c.useState(0);
  return (
    c.useEffect(() => {
      let t = null;
      const h = 1800,
        l = (d) => {
          t === null && (t = d);
          const m = Math.min((d - t) / h, 1);
          (r(Math.floor(m * s)), m < 1 && requestAnimationFrame(l));
        },
        o = requestAnimationFrame(l);
      return () => cancelAnimationFrame(o);
    }, [s]),
    e.jsxs(e.Fragment, { children: [n, i, a] })
  );
}
function $() {
  const s = c.useRef(null);
  return (
    c.useEffect(() => {
      const a = s.current;
      if (!a) return;
      const n = (r) => {
          a.style.transform = `translate(${r.clientX}px, ${r.clientY}px) translate(-50%, -50%)`;
        },
        i = (r) => {
          r.target.closest(
            "a,button,input,select,textarea,.svc-card,.team-card,.price-card,.testi-card",
          )
            ? a.classList.add("shrunk")
            : a.classList.remove("shrunk");
        };
      return (
        window.addEventListener("mousemove", n),
        window.addEventListener("mouseover", i),
        () => {
          (window.removeEventListener("mousemove", n), window.removeEventListener("mouseover", i));
        }
      );
    }, []),
    e.jsx("div", { ref: s, className: "cursor" })
  );
}
function D() {
  const [s, a] = c.useState(!1),
    [n, i] = c.useState(!1),
    [r, t] = c.useState(!1),
    h = P(),
    l = c.useRef(0);
  return (
    c.useEffect(() => {
      const o = () => {
        const d = window.scrollY;
        (a(d > 30), i(d > l.current && d > 200), (l.current = d));
      };
      return (
        window.addEventListener("scroll", o, { passive: !0 }),
        () => window.removeEventListener("scroll", o)
      );
    }, []),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("nav", {
          className: `nav ${s ? "scrolled" : ""} ${n ? "hidden" : ""}`,
          children: e.jsxs("div", {
            className: "nav-bar",
            children: [
              e.jsx("a", {
                href: "#top",
                className: "nav-logo",
                children: e.jsx("img", { src: A, alt: "Archies Media" }),
              }),
              e.jsx("div", {
                className: "nav-pill",
                children: e.jsx("div", {
                  className: "nav-links",
                  children: N.map(([o, d, m]) =>
                    e.jsx("a", { href: d, className: h === m ? "active" : "", children: o }, o),
                  ),
                }),
              }),
              e.jsxs("div", {
                className: "nav-end",
                children: [
                  e.jsx("a", {
                    href: "#contact",
                    className: "btn btn-primary btn-pill nav-cta",
                    children: "Book a Free Call",
                  }),
                  e.jsxs("button", {
                    className: `hamburger ${r ? "open" : ""}`,
                    onClick: () => t(!r),
                    "aria-label": "Menu",
                    children: [e.jsx("span", {}), e.jsx("span", {}), e.jsx("span", {})],
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: `mobile-drawer ${r ? "open" : ""}`,
          children: [
            N.map(([o, d]) => e.jsx("a", { href: d, onClick: () => t(!1), children: o }, o)),
            e.jsx("a", {
              href: "#contact",
              onClick: () => t(!1),
              className: "btn btn-primary btn-pill",
              children: "Book a Free Call",
            }),
          ],
        }),
      ],
    })
  );
}
function q() {
  const [s, a] = c.useState(0),
    [n, i] = c.useState(!1),
    r = v.length;
  c.useEffect(() => {
    if (n) return;
    const l = setInterval(() => a((o) => (o + 1) % r), 4e3);
    return () => clearInterval(l);
  }, [n, r]);
  const t = () => a((l) => (l - 1 + r) % r),
    h = () => a((l) => (l + 1) % r);
  return e.jsx("section", {
    id: "testimonials",
    className: "section-major reveal",
    children: e.jsxs("div", {
      className: "container",
      children: [
        e.jsxs("div", {
          className: "section-head",
          children: [
            e.jsx(j, { children: "Client Love" }),
            e.jsx(x, { bold: "WHAT CLIENTS", accent: "Say About Us" }),
          ],
        }),
        e.jsxs("div", {
          className: "testi-shell",
          onMouseEnter: () => i(!0),
          onMouseLeave: () => i(!1),
          children: [
            e.jsx("button", {
              className: "testi-arrow left",
              onClick: t,
              "aria-label": "Previous",
              children: "←",
            }),
            e.jsx("div", {
              className: "testi-wrap",
              children: e.jsx("div", {
                className: "testi-track",
                style: { transform: `translateX(-${s * (100 / 3)}%)` },
                children: [...v, ...v.slice(0, 2)].map((l, o) =>
                  e.jsx(
                    "div",
                    {
                      className: "testi",
                      children: e.jsxs("div", {
                        className: "testi-card",
                        children: [
                          e.jsx("div", { className: "stars", children: "★★★★★" }),
                          e.jsxs("p", { className: "quote", children: ['"', l.quote, '"'] }),
                          e.jsxs("p", { className: "who", children: ["— ", l.who] }),
                        ],
                      }),
                    },
                    o,
                  ),
                ),
              }),
            }),
            e.jsx("button", {
              className: "testi-arrow right",
              onClick: h,
              "aria-label": "Next",
              children: "→",
            }),
          ],
        }),
        e.jsx("div", {
          className: "dots",
          children: v.map((l, o) =>
            e.jsx(
              "button",
              {
                className: o === s ? "active" : "",
                onClick: () => a(o),
                "aria-label": `Testimonial ${o + 1}`,
              },
              o,
            ),
          ),
        }),
      ],
    }),
  });
}
function G() {
  const [s, a] = c.useState(!1),
    n = [
      {
        name: "Starter",
        price: 15e3,
        features: ["Social Media (2 platforms)", "Basic SEO", "Monthly Report", "Email Support"],
      },
      {
        name: "Growth",
        price: 3e4,
        popular: !0,
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
  return e.jsx("section", {
    id: "pricing",
    className: "section-major reveal",
    style: { background: "var(--bg-soft)" },
    children: e.jsxs("div", {
      className: "container",
      children: [
        e.jsxs("div", {
          className: "section-head",
          children: [
            e.jsx(j, { children: "Simple Pricing" }),
            e.jsx(x, { bold: "TRANSPARENT PLANS,", accent: "Real Results" }),
            e.jsx("p", {
              children: "No surprises. No hidden fees. Just clear pricing built for ROI.",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "pricing-toggle",
          children: [
            e.jsx("button", {
              className: s ? "" : "active",
              onClick: () => a(!1),
              children: "Monthly",
            }),
            e.jsx("button", {
              className: s ? "active" : "",
              onClick: () => a(!0),
              children: "Annual (-20%)",
            }),
          ],
        }),
        e.jsx("div", {
          className: "price-grid",
          children: n.map((i) => {
            const r = s ? Math.round(i.price * 0.8) : i.price;
            return e.jsxs(
              "div",
              {
                className: `price-card ${i.popular ? "popular" : ""}`,
                children: [
                  i.popular &&
                    e.jsx("div", { className: "popular-badge", children: "MOST POPULAR" }),
                  e.jsx("h3", { children: i.name }),
                  e.jsxs("p", {
                    style: { fontSize: 13 },
                    children: [
                      "For ",
                      i.name === "Starter"
                        ? "new brands"
                        : i.name === "Growth"
                          ? "scaling teams"
                          : "ambitious brands",
                    ],
                  }),
                  e.jsxs("div", {
                    className: "price-amount",
                    children: ["₹", r.toLocaleString("en-IN"), e.jsx("span", { children: "/mo" })],
                  }),
                  e.jsx("ul", { children: i.features.map((t) => e.jsx("li", { children: t }, t)) }),
                  e.jsx("a", {
                    href: "#contact",
                    className: `btn ${i.popular ? "btn-primary" : "btn-outline"}`,
                    children: "Get Started",
                  }),
                ],
              },
              i.name,
            );
          }),
        }),
      ],
    }),
  });
}
function u({ type: s = "text", name: a, label: n, as: i }) {
  const [r, t] = c.useState(""),
    [h, l] = c.useState(!1),
    o = h || r.length > 0,
    d = {
      required: !0,
      value: r,
      onFocus: () => l(!0),
      onBlur: () => l(!1),
      onChange: (m) => t(m.target.value),
      className: h ? "focused" : "",
    };
  return e.jsxs("div", {
    className: `float-field ${o ? "float" : ""} ${h ? "is-focused" : ""}`,
    children: [
      e.jsx("label", { htmlFor: a, children: n }),
      i === "textarea"
        ? e.jsx("textarea", { id: a, name: a, ...d })
        : i === "select"
          ? e.jsxs("select", {
              id: a,
              name: a,
              ...d,
              children: [
                e.jsx("option", { value: "", disabled: !0 }),
                e.jsx("option", { children: "Social Media Management" }),
                e.jsx("option", { children: "SEO" }),
                e.jsx("option", { children: "Paid Ads" }),
                e.jsx("option", { children: "Content & Design" }),
                e.jsx("option", { children: "Web Development" }),
                e.jsx("option", { children: "Email & WhatsApp" }),
              ],
            })
          : e.jsx("input", { id: a, name: a, type: s, ...d }),
    ],
  });
}
function z() {
  const [s, a] = c.useState(!1),
    [n, i] = c.useState(!1);
  return e.jsxs("form", {
    className: "contact-form",
    onSubmit: (r) => {
      (r.preventDefault(),
        a(!0),
        setTimeout(() => {
          (a(!1), i(!0));
        }, 1200));
    },
    children: [
      e.jsx(u, { name: "name", label: "Your Name" }),
      e.jsx(u, { name: "email", type: "email", label: "Email Address" }),
      e.jsx(u, { name: "phone", type: "tel", label: "Phone Number" }),
      e.jsx(u, { name: "service", label: "Select a Service", as: "select" }),
      e.jsx(u, { name: "msg", label: "Tell us about your project...", as: "textarea" }),
      e.jsxs("div", {
        className: "field",
        children: [
          e.jsx("button", {
            type: "submit",
            className: `submit-btn ${s ? "loading" : ""}`,
            children: s
              ? e.jsxs(e.Fragment, {
                  children: [e.jsx("span", { className: "spinner" }), " Sending..."],
                })
              : n
                ? "✓ Message Sent!"
                : e.jsxs(e.Fragment, {
                    children: [
                      "Send Message ",
                      e.jsx("span", { className: "arrow", children: "→" }),
                    ],
                  }),
          }),
          e.jsx("p", { className: "resp-time", children: "⚡ Average response time: 2 hours" }),
        ],
      }),
    ],
  });
}
function Y() {
  return (
    B(),
    e.jsxs("div", {
      id: "top",
      children: [
        e.jsx($, {}),
        e.jsx(D, {}),
        e.jsxs("header", {
          className: "hero",
          children: [
            e.jsx("div", { className: "hero-bg" }),
            e.jsx("span", {
              className: "hero-sparkle hero-sparkle-1",
              "aria-hidden": "true",
              children: "✦",
            }),
            e.jsx("span", {
              className: "hero-sparkle hero-sparkle-2",
              "aria-hidden": "true",
              children: "✦",
            }),
            e.jsx("span", {
              className: "hero-sparkle hero-sparkle-3",
              "aria-hidden": "true",
              children: "✦",
            }),
            e.jsxs("div", {
              className: "container hero-grid",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("div", {
                      className: "tag hero-anim d1 bounce-in",
                      children: "🚀 India's Fastest Growing Digital Agency",
                    }),
                    e.jsx(x, {
                      as: "h1",
                      size: "hero",
                      className: "hero-anim d2",
                      bold: "GROW YOUR BRAND",
                      accent: "With Smart Marketing",
                    }),
                    e.jsx("p", {
                      className: "sub hero-anim d3",
                      children:
                        "Performance-driven strategies that turn clicks into customers. We help brands scale with data-backed marketing.",
                    }),
                    e.jsxs("div", {
                      className: "hero-cta hero-anim d4",
                      children: [
                        e.jsx("a", {
                          href: "#contact",
                          className: "btn btn-primary",
                          children: "Book a Free Call",
                        }),
                        e.jsx("a", {
                          href: "#services",
                          className: "btn btn-outline",
                          children: "See Our Work",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "hero-stats hero-anim d5",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "stat-num",
                              children: e.jsx(p, { to: 50, suffix: "+" }),
                            }),
                            e.jsx("div", { className: "stat-label", children: "Brands" }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "stat-num",
                              children: e.jsx(p, { to: 2, prefix: "₹", suffix: "Cr+" }),
                            }),
                            e.jsx("div", { className: "stat-label", children: "Revenue" }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "stat-num",
                              children: e.jsx(p, { to: 3, suffix: "+" }),
                            }),
                            e.jsx("div", { className: "stat-label", children: "Years" }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "stat-num",
                              children: e.jsx(p, { to: 98, suffix: "%" }),
                            }),
                            e.jsx("div", { className: "stat-label", children: "Retention" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "hero-right hero-anim d3",
                  children: [
                    e.jsx("div", { className: "blob amber" }),
                    e.jsx("div", { className: "blob navy" }),
                    e.jsxs("div", {
                      className: "float-mini tl",
                      children: [
                        e.jsx("span", { className: "dot" }),
                        " ",
                        e.jsxs("div", {
                          children: [
                            e.jsx("strong", { style: { color: "var(--navy)" }, children: "+187%" }),
                            e.jsx("div", { style: { fontSize: 11 }, children: "Traffic" }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "dashcard",
                      children: [
                        e.jsx("h4", { children: "Monthly Revenue" }),
                        e.jsx("div", {
                          className: "big",
                          style: { fontFamily: "Plus Jakarta Sans", fontWeight: 800 },
                          children: "₹12.4L",
                        }),
                        e.jsx("div", {
                          className: "chart",
                          children: [30, 45, 38, 62, 55, 78, 90].map((s, a) =>
                            e.jsx(
                              "div",
                              {
                                className: "bar",
                                style: { height: `${s}%`, animationDelay: `${a * 0.1}s` },
                              },
                              a,
                            ),
                          ),
                        }),
                        e.jsxs("div", {
                          className: "mini-cards",
                          children: [
                            e.jsxs("div", {
                              className: "mini",
                              children: [e.jsx("strong", { children: "4.2x" }), "ROAS"],
                            }),
                            e.jsxs("div", {
                              className: "mini",
                              children: [e.jsx("strong", { children: "12.8k" }), "Conversions"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "float-mini br",
                      children: [
                        e.jsx("span", { className: "dot", style: { background: "var(--navy)" } }),
                        " ",
                        e.jsxs("div", {
                          children: [
                            e.jsx("strong", { style: { color: "var(--navy)" }, children: "5.0" }),
                            e.jsx("div", { style: { fontSize: 11 }, children: "★★★★★" }),
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
        e.jsxs("section", {
          className: "trust",
          children: [
            e.jsx("div", {
              className: "container",
              children: e.jsx("p", {
                className: "trust-label",
                children: "Trusted by 50+ Growing Brands",
              }),
            }),
            e.jsxs("div", {
              className: "marquee-rows",
              children: [
                e.jsx("div", {
                  className: "marquee",
                  children: e.jsx("div", {
                    className: "marquee-track left",
                    children: [...Array(2)].map((s, a) =>
                      e.jsx(
                        "div",
                        {
                          className: "lrow",
                          children: w.map((n) =>
                            e.jsxs(
                              "div",
                              {
                                className: "logo-box",
                                children: [e.jsx(y, {}), e.jsx("span", { children: n })],
                              },
                              `l1-${a}-${n}`,
                            ),
                          ),
                        },
                        a,
                      ),
                    ),
                  }),
                }),
                e.jsx("div", {
                  className: "marquee",
                  children: e.jsx("div", {
                    className: "marquee-track right",
                    children: [...Array(2)].map((s, a) =>
                      e.jsx(
                        "div",
                        {
                          className: "lrow",
                          children: [...w].reverse().map((n) =>
                            e.jsxs(
                              "div",
                              {
                                className: "logo-box",
                                children: [e.jsx(y, {}), e.jsx("span", { children: n })],
                              },
                              `l2-${a}-${n}`,
                            ),
                          ),
                        },
                        a,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsx("section", {
          id: "services",
          className: "section-major",
          children: e.jsxs("div", {
            className: "container",
            children: [
              e.jsxs("div", {
                className: "section-head reveal",
                children: [
                  e.jsx(j, { children: "What We Do" }),
                  e.jsx(x, { bold: "SERVICES", accent: "That Drive Real Results" }),
                  e.jsx("p", {
                    children:
                      "From strategy to execution — every channel covered, every metric measured.",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "svc-grid",
                children: W.map((s, a) =>
                  e.jsxs(
                    "div",
                    {
                      className: "svc-card reveal",
                      "data-delay": a * 0.1,
                      children: [
                        e.jsx("div", {
                          className: "svc-icon",
                          style: { fontSize: 22 },
                          children: s.icon,
                        }),
                        e.jsx("h3", { children: s.title }),
                        e.jsx("p", { children: s.desc }),
                      ],
                    },
                    s.title,
                  ),
                ),
              }),
            ],
          }),
        }),
        e.jsx("section", {
          id: "about",
          className: "about section-major",
          style: { background: "var(--bg-soft)" },
          children: e.jsxs("div", {
            className: "container about-grid",
            children: [
              e.jsxs("div", {
                className: "about-img reveal slide-l",
                children: [
                  e.jsx("div", {
                    className: "about-img-frame",
                    children: e.jsx("span", {
                      className: "about-team-label",
                      children: "Our Team",
                    }),
                  }),
                  e.jsxs("div", {
                    className: "floating-badge",
                    children: [e.jsx("span", { children: "★" }), " 3+ Years of Excellence"],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "reveal slide-r",
                children: [
                  e.jsx(j, { children: "Who We Are" }),
                  e.jsx(x, { bold: "WE ARE", accent: "Archies Media" }),
                  e.jsx("p", {
                    children:
                      "We're a results-driven digital marketing agency helping brands grow online through data-backed strategies, creative content, and performance marketing.",
                  }),
                  e.jsxs("div", {
                    className: "about-stats",
                    children: [
                      e.jsxs("div", {
                        className: "stat-card",
                        children: [
                          e.jsx("strong", { children: "50+" }),
                          e.jsx("span", { children: "Brands Served" }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "stat-card",
                        children: [
                          e.jsx("strong", { children: "₹2Cr+" }),
                          e.jsx("span", { children: "Revenue Generated" }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "stat-card",
                        children: [
                          e.jsx("strong", { children: "98%" }),
                          e.jsx("span", { children: "Client Retention" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("a", {
                    href: "#contact",
                    className: "link-cta",
                    children: "Learn More About Us →",
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("section", {
          id: "why",
          className: "section-major",
          children: e.jsxs("div", {
            className: "container",
            children: [
              e.jsxs("div", {
                className: "section-head reveal",
                children: [
                  e.jsx(j, { children: "Why Choose Us" }),
                  e.jsx(x, { bold: "ARCHIES MEDIA", accent: "vs. The Rest" }),
                  e.jsx("p", { children: "See the difference a focused, modern agency makes." }),
                ],
              }),
              e.jsxs("div", {
                className: "compare-grid",
                children: [
                  e.jsxs("div", {
                    className: "compare bad slide-l",
                    children: [
                      e.jsx("div", { className: "compare-tag", children: "The Old Way" }),
                      e.jsx("h3", { children: "Other Agencies" }),
                      e.jsx("ul", {
                        children: [
                          "Slow turnaround times",
                          "Generic copy-paste strategies",
                          "No transparent reporting",
                          "Vanity metrics, no real ROI",
                          "One-size-fits-all approach",
                        ].map((s) =>
                          e.jsxs(
                            "li",
                            {
                              children: [
                                e.jsx("span", { className: "x", children: "✕" }),
                                e.jsx("span", { children: s }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "compare good slide-r",
                    children: [
                      e.jsx("div", { className: "winner-ribbon", children: "★ The Archies Way" }),
                      e.jsx("h3", { children: "Archies Media" }),
                      e.jsx("ul", {
                        children: [
                          "Fast delivery & quick responses",
                          "Custom strategies per brand",
                          "Clear, honest reporting",
                          "ROI-focused campaigns",
                          "Dedicated account manager",
                        ].map((s) =>
                          e.jsxs(
                            "li",
                            {
                              children: [
                                e.jsx("span", { className: "check", children: "✓" }),
                                e.jsx("span", { children: s }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                      e.jsx("div", {
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
        e.jsx("section", {
          id: "team",
          className: "section-major",
          style: { background: "var(--bg-soft)" },
          children: e.jsxs("div", {
            className: "container",
            children: [
              e.jsxs("div", {
                className: "section-head reveal",
                children: [
                  e.jsx(j, { children: "Meet The Team" }),
                  e.jsx(x, { bold: "THE PEOPLE", accent: "Behind Your Growth" }),
                ],
              }),
              e.jsx("div", {
                className: "team-grid",
                children: F.map((s, a) =>
                  e.jsxs(
                    "div",
                    {
                      className: "team-card reveal",
                      "data-delay": a * 0.1,
                      children: [
                        e.jsx("div", {
                          className: "avatar",
                          "aria-hidden": "true",
                          children: e.jsx("span", {
                            className: "avatar-initials",
                            children: s.initials,
                          }),
                        }),
                        e.jsx("h3", { children: s.name }),
                        e.jsx("div", { className: "role", children: s.role }),
                        e.jsx("p", { className: "bio", children: s.bio }),
                        e.jsxs("div", {
                          className: "team-socials",
                          children: [
                            e.jsx("a", {
                              href: "#",
                              "aria-label": "LinkedIn",
                              className: "ts li",
                              children: e.jsx(b, { size: 16, strokeWidth: 2.25 }),
                            }),
                            e.jsx("a", {
                              href: "#",
                              "aria-label": "Instagram",
                              className: "ts ig",
                              children: e.jsx(f, { size: 16, strokeWidth: 2.25 }),
                            }),
                          ],
                        }),
                      ],
                    },
                    s.name,
                  ),
                ),
              }),
            ],
          }),
        }),
        e.jsx(q, {}),
        e.jsx(G, {}),
        e.jsx("section", {
          id: "contact",
          children: e.jsx("div", {
            className: "container",
            children: e.jsxs("div", {
              className: "contact-section reveal",
              children: [
                e.jsx("div", { className: "contact-pattern" }),
                e.jsx("div", { className: "contact-quote", children: '"' }),
                e.jsxs("div", {
                  className: "contact-wrap",
                  children: [
                    e.jsxs("div", {
                      className: "contact-left",
                      children: [
                        e.jsx(j, { children: "Get In Touch" }),
                        e.jsx(x, { bold: "READY TO GROW", accent: "Your Brand?" }),
                        e.jsx("p", {
                          children:
                            "Let's build something great together. Book a free strategy call today.",
                        }),
                        e.jsxs("div", {
                          className: "contact-rows",
                          children: [
                            e.jsxs("a", {
                              href: "mailto:contact@archiesmedia.in",
                              className: "crow",
                              children: [
                                e.jsx("span", { className: "cicon", children: "📧" }),
                                e.jsxs("span", {
                                  className: "ctext",
                                  children: [
                                    e.jsx("span", { className: "clabel", children: "Email" }),
                                    e.jsx("span", {
                                      className: "cval",
                                      children: "contact@archiesmedia.in",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("a", {
                              href: "https://wa.me/919999999999",
                              target: "_blank",
                              rel: "noreferrer",
                              className: "crow wa",
                              children: [
                                e.jsx("span", { className: "cicon wa", children: "💬" }),
                                e.jsxs("span", {
                                  className: "ctext",
                                  children: [
                                    e.jsx("span", { className: "clabel", children: "WhatsApp" }),
                                    e.jsx("span", { className: "cval", children: "Click to Chat" }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "crow",
                              children: [
                                e.jsx("span", { className: "cicon", children: "📍" }),
                                e.jsxs("span", {
                                  className: "ctext",
                                  children: [
                                    e.jsx("span", { className: "clabel", children: "Location" }),
                                    e.jsx("span", { className: "cval", children: "India" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(z, {}),
                  ],
                }),
              ],
            }),
          }),
        }),
        e.jsx("footer", {
          children: e.jsxs("div", {
            className: "container",
            children: [
              e.jsxs("div", {
                className: "foot-grid",
                children: [
                  e.jsxs("div", {
                    className: "foot-col",
                    children: [
                      e.jsx("div", {
                        className: "nav-logo",
                        children: e.jsx("img", {
                          src: A,
                          alt: "",
                          "aria-hidden": "true",
                          style: { height: 42 },
                        }),
                      }),
                      e.jsx("p", { className: "foot-tag", children: "Growing Brands, Digitally." }),
                      e.jsxs("div", {
                        className: "socials",
                        children: [
                          e.jsx("a", {
                            href: "#",
                            "aria-label": "Instagram",
                            className: "soc-ig",
                            children: e.jsx(f, { size: 20 }),
                          }),
                          e.jsx("a", {
                            href: "#",
                            "aria-label": "LinkedIn",
                            className: "soc-li",
                            children: e.jsx(b, { size: 20 }),
                          }),
                          e.jsx("a", {
                            href: "#",
                            "aria-label": "X",
                            className: "soc-x",
                            children: e.jsx(T, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "foot-col",
                    children: [
                      e.jsx("h4", { children: "Quick Links" }),
                      e.jsxs("ul", {
                        children: [
                          e.jsx("li", {
                            children: e.jsx("a", { href: "#about", children: "About" }),
                          }),
                          e.jsx("li", {
                            children: e.jsx("a", { href: "#services", children: "Services" }),
                          }),
                          e.jsx("li", {
                            children: e.jsx("a", { href: "#pricing", children: "Pricing" }),
                          }),
                          e.jsx("li", {
                            children: e.jsx("a", { href: "#contact", children: "Contact" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "foot-col",
                    children: [
                      e.jsx("h4", { children: "Services" }),
                      e.jsxs("ul", {
                        children: [
                          e.jsx("li", {
                            children: e.jsx("a", { href: "#services", children: "SEO" }),
                          }),
                          e.jsx("li", {
                            children: e.jsx("a", { href: "#services", children: "Paid Ads" }),
                          }),
                          e.jsx("li", {
                            children: e.jsx("a", { href: "#services", children: "Social Media" }),
                          }),
                          e.jsx("li", {
                            children: e.jsx("a", { href: "#services", children: "Web Dev" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "foot-col",
                    children: [
                      e.jsx("h4", { children: "Newsletter" }),
                      e.jsx("p", {
                        style: { fontSize: 13, marginBottom: 12 },
                        children: "Get marketing tips straight to your inbox",
                      }),
                      e.jsxs("form", {
                        className: "newsletter",
                        onSubmit: (s) => s.preventDefault(),
                        children: [
                          e.jsx("input", {
                            type: "email",
                            placeholder: "Your email",
                            required: !0,
                          }),
                          e.jsx("button", {
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
              e.jsxs("div", {
                className: "foot-bottom",
                children: [
                  e.jsx("div", { children: "© 2025 Archies Media. All rights reserved." }),
                  e.jsxs("div", {
                    className: "foot-legal",
                    children: [
                      e.jsx("a", { href: "#", children: "Privacy Policy" }),
                      " ",
                      e.jsx("span", { children: "|" }),
                      " ",
                      e.jsx("a", { href: "#", children: "Terms" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
export { Y as component };
