import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Felipe — Sitios web que venden";

export default async function OgImage() {
  const photoBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/assets/fotoperfil.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#0a0a0a",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={photoSrc}
          width={440}
          height={440}
          style={{
            borderRadius: "50%",
            border: "4px solid #00FF88",
            marginRight: "70px",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: "#00FF88",
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 28,
              fontWeight: 600,
            }}
          >
            Desarrollo Web · IA · Finanzas
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Sitios web
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#00FF88",
            }}
          >
            que venden.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#888",
              marginTop: 34,
            }}
          >
            Felipe · WhatsApp +54 9 11 3292-4310
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
