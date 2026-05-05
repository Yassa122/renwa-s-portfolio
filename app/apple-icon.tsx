import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(148deg, #1c1819 0%, #2a2628 38%, #6a3d4a 72%, #9b4d5c 100%)",
          borderRadius: "22%",
          boxShadow: "inset 0 0 0 1.5px rgba(201, 169, 98, 0.35)",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1,
            color: "#c9a962",
            fontFamily:
              'Georgia, "Times New Roman", "Liberation Serif", ui-serif, serif',
            letterSpacing: "-0.06em",
            textShadow:
              "0 0 20px rgba(201, 169, 98, 0.55), 0 3px 10px rgba(0,0,0,0.45)",
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size }
  );
}
