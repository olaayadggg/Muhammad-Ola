import Link from "next/link";
import type { Lang } from "../pages/index";
import Animate from "./Animate";

interface Props {
  lang: Lang;
}

export default function VenueSection({ lang }: Props) {
  const isAr = lang === "ar";

  return (
    // <section style={{ padding: '100px 24px', textAlign: 'center', background: 'var(--off-white)', position: 'relative' }}>
    <section
      className="gm-section"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        position: "relative",
        flexDirection: isAr ? "row-reverse" : "row",
        minHeight: "680px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .gm-section { flex-direction: column !important; min-height: unset !important; }
          .gm-image-wrap { order: -1 !important; flex: 0 0 300px !important; width: 100% !important; }
          .gm-image-fade {
            top: auto !important; left: 0 !important; right: 0 !important;
            bottom: 0 !important; width: 100% !important; height: 80px !important;
            background: linear-gradient(to bottom, transparent, var(--cream)) !important;
          }
          .gm-card-col { padding: 40px 24px 60px !important; }
          .gm-venue-card { text-align: center !important; padding: 40px 28px !important; }
        }
      `}</style>

      <Animate
        from={isAr ? "right" : "left"}
        delay={0.15}
        duration={1.1}
        distance={50}
        className="gm-card-col"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 40px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <Animate delay={0} duration={0.9}>
          <p
            style={{
              fontFamily: isAr
                ? "Noto Naskh Arabic, serif"
                : "var(--font-montserrat)",
              fontSize: "11px",
              letterSpacing: isAr ? "0" : "4px",
              textTransform: isAr ? "none" : "uppercase",
              color: "var(--gold)",
              marginBottom: "48px",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr ? "مكان الاحتفال" : "Venue"}
          </p>
        </Animate>

        <Animate delay={0.2} duration={1.0} distance={24}>
          <div
            className="gm-venue-card"
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              border: "1px solid var(--border)",
              padding: "56px 48px",
              position: "relative",
              background: "var(--cream)",
              boxShadow: "0 4px 40px rgba(201,168,76,0.08)",
            }}
          >
            {(["tl", "tr", "bl", "br"] as const).map((pos) => (
              <FrameCorner key={pos} pos={pos} />
            ))}

            <div
              style={{
                marginBottom: "28px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
                <path
                  d="M14 0C6.268 0 0 6.268 0 14c0 9.8 14 22 14 22S28 23.8 28 14C28 6.268 21.732 0 14 0z"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="14"
                  cy="14"
                  r="5"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle
                  cx="14"
                  cy="14"
                  r="2"
                  fill="var(--gold)"
                  opacity="0.5"
                />
              </svg>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-great-vibes)",
                fontSize: "clamp(40px,8vw,60px)",
                fontWeight: 400,
                color: "var(--text-dark)",
                marginBottom: "12px",
                lineHeight: 1,
              }}
            >
              The Grand Mariout
            </h2>

            <div
              className="ornament"
              style={{ maxWidth: "200px", margin: "20px auto" }}
            >
              <div className="ornament-line" />
              <div className="ornament-diamond" />
              <div className="ornament-line right" />
            </div>

            <p
              style={{
                fontFamily: isAr
                  ? "Noto Naskh Arabic, serif"
                  : "var(--font-cormorant)",
                fontSize: isAr ? "18px" : "20px",
                fontStyle: isAr ? "normal" : "italic",
                fontWeight: 300,
                color: "var(--text-mid)",
                letterSpacing: "1px",
                lineHeight: 1.8,
                direction: isAr ? "rtl" : "ltr",
                marginBottom: "8px",
                textAlign:"center"
              }}
            >
              {isAr ? "الإسكندرية، مصر" : "Alexandria, Egypt"}
            </p>

            <p
              style={{
                fontFamily: isAr
                  ? "Noto Naskh Arabic, serif"
                  : "var(--font-cormorant)",
                fontSize: isAr ? "17px" : "18px",
                fontWeight: 300,
                color: "var(--text-light)",
                direction: isAr ? "rtl" : "ltr",
                lineHeight: 1.8,
                textAlign:"center"
              }}
            >
              {isAr ? "٦:٠٠ مساءً" : "Saturday, 26 September 2026 · 6:00 PM"}
            </p>

            <div style={{ marginTop: "32px" , textAlign:"center" }}>
              <Link
                href="http://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KQWt82QAj_UUMR3-aHv_ADed&daddr=XMJF%2B88,+Bahig,+Second+Al+Amreya,+Alexandria+Governorate+5244741"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  fontFamily: isAr
                    ? "Noto Naskh Arabic, serif"
                    : "var(--font-montserrat)",
                  fontSize: "11px",
                  letterSpacing: isAr ? "0" : "2.5px",
                  textTransform: isAr ? "none" : "uppercase",
                  color: "var(--gold-dark)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--gold-muted)",
                  paddingBottom: "3px",
                  textAlign:"center"
                }}
              >
                {isAr ? "عرض على الخريطة ↗" : "View on Map ↗"}
              </Link>
            </div>
          </div>
        </Animate>

        <Animate delay={0.4} duration={1.0} distance={20}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              marginTop: "64px",
              flexWrap: "wrap",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {[
              {
                icon: "♡",
                title: isAr ? "حفل الزفاف" : "Ceremony",
                detail: isAr ? "٦:٠٠ مساءً" : "6:00 PM",
              },
              {
                icon: "◇",
                title: isAr ? "العشاء والرقص" : "Reception",
                detail: isAr ? "٧:٣٠ مساءً" : "7:30 PM",
              },
              {
                icon: "✦",
                title: isAr ? "اللباس" : "Dress Code",
                detail: isAr ? "رسمي فاخر" : "Black Tie",
              },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center", minWidth: "120px" }}>
                <div
                  style={{
                    fontSize: "18px",
                    color: "var(--gold)",
                    marginBottom: "10px",
                  }}
                >
                  {item.icon}
                </div>
                <p
                  style={{
                    fontFamily: isAr
                      ? "Noto Naskh Arabic, serif"
                      : "var(--font-montserrat)",
                    fontSize: "10px",
                    letterSpacing: isAr ? "0" : "2px",
                    textTransform: isAr ? "none" : "uppercase",
                    color: "var(--text-light)",
                    marginBottom: "6px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: isAr
                      ? "Noto Naskh Arabic, serif"
                      : "var(--font-cormorant)",
                    fontSize: isAr ? "17px" : "18px",
                    color: "var(--text-dark)",
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Animate>
      </Animate>

      <Animate
        from={isAr ? "right" : "left"}
        delay={0.15}
        duration={1.1}
        distance={50}
        className="gm-image-wrap"
        style={{ flex: "0 0 44%", position: "relative", overflow: "hidden" }}
      >
        <img
          src="/venue.webp"
          alt="Muhammad & Ola"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
        {/* soft fade into the form background */}
        <div
          className="gm-image-fade"
          style={{
            position: "absolute",
            top: 0,
            ...(isAr ? { right: 0 } : { left: 0 }),
            bottom: 0,
            width: "100px",
            background: isAr
              ? "linear-gradient(to right, transparent, var(--cream))"
              : "linear-gradient(to left, transparent, var(--cream))",
            pointerEvents: "none",
          }}
        />
      </Animate>
    </section>
  );
}

function FrameCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const s: React.CSSProperties = {
    position: "absolute",
    width: "20px",
    height: "20px",
    ...(pos === "tl" && {
      top: "12px",
      left: "12px",
      borderTop: "1px solid var(--gold-muted)",
      borderLeft: "1px solid var(--gold-muted)",
    }),
    ...(pos === "tr" && {
      top: "12px",
      right: "12px",
      borderTop: "1px solid var(--gold-muted)",
      borderRight: "1px solid var(--gold-muted)",
    }),
    ...(pos === "bl" && {
      bottom: "12px",
      left: "12px",
      borderBottom: "1px solid var(--gold-muted)",
      borderLeft: "1px solid var(--gold-muted)",
    }),
    ...(pos === "br" && {
      bottom: "12px",
      right: "12px",
      borderBottom: "1px solid var(--gold-muted)",
      borderRight: "1px solid var(--gold-muted)",
    }),
  };
  return <div style={s} />;
}
