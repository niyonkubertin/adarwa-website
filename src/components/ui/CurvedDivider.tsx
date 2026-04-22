"use client";

interface CurvedDividerProps {
  direction?: "down" | "up";
  fill?: string;
}

export default function CurvedDivider({ direction = "down", fill = "#F8F4EE" }: CurvedDividerProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "100px" }}>
      <svg
        className="absolute w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{
          height: "100px",
          transform: direction === "down" ? "rotate(0deg)" : "rotate(180deg)",
          bottom: direction === "down" ? 0 : "auto",
          top: direction === "up" ? 0 : "auto",
        }}
      >
        <path
          d="M0,50 C240,100 480,0 720,50 C960,100 1200,50 1440,50 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

interface WaveDividerProps {
  waves?: 1 | 2;
  primary?: string;
  secondary?: string;
}

export function WaveDivider({ waves = 1, primary = "#FFFFFF", secondary = "#F8F4EE" }: WaveDividerProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: waves === 2 ? "150px" : "100px" }}>
      <svg
        className="absolute w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: "100px" }}
      >
        <path
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,75 1440,50 L1440,100 L0,100 Z"
          fill={primary}
        />
      </svg>
      {waves === 2 && (
        <svg
          className="absolute w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ height: "100px", bottom: 0, opacity: 0.5 }}
        >
          <path
            d="M0,60 C480,120 960,0 1440,60 L1440,100 L0,100 Z"
            fill={secondary}
          />
        </svg>
      )}
    </div>
  );
}