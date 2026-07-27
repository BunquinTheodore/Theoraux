"use client";

import { motion } from "framer-motion";

type IconType =
  | "sparkle"
  | "loop"
  | "globe"
  | "phone"
  | "gear"
  | "bars"
  | "trend"
  | "shield";

function Glyph({ type }: { type: IconType }) {
  const common = {
    fill: "none",
    stroke: "#22d3ee",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    opacity: 0.75,
  };
  switch (type) {
    case "sparkle":
      return (
        <g {...common}>
          <path d="M0,-11 L0,11 M-11,0 L11,0 M-7.5,-7.5 L7.5,7.5 M-7.5,7.5 L7.5,-7.5" />
        </g>
      );
    case "loop":
      return (
        <g {...common}>
          <path d="M -8,-2 A 8,8 0 1 1 -2,8" />
          <path d="M -2,8 L -6,4 M -2,8 L -1,2" />
        </g>
      );
    case "globe":
      return (
        <g {...common}>
          <circle cx="0" cy="0" r="8" />
          <ellipse cx="0" cy="0" rx="3.2" ry="8" />
          <path d="M-8,0 L8,0" />
        </g>
      );
    case "phone":
      return (
        <g {...common}>
          <rect x="-5" y="-9" width="10" height="18" rx="2" />
          <path d="M-2,6 L2,6" />
        </g>
      );
    case "gear":
      return (
        <g {...common}>
          <circle cx="0" cy="0" r="4.5" />
          <path d="M0,-9 L0,-6 M0,9 L0,6 M-9,0 L-6,0 M9,0 L6,0 M-6.3,-6.3 L-4.2,-4.2 M6.3,6.3 L4.2,4.2 M-6.3,6.3 L-4.2,4.2 M6.3,-6.3 L4.2,-4.2" />
        </g>
      );
    case "bars":
      return (
        <g {...common}>
          <path d="M-7,8 L-7,0 M0,8 L0,-8 M7,8 L7,-4" />
        </g>
      );
    case "trend":
      return (
        <g {...common}>
          <path d="M-8,6 L-2,-2 L2,2 L8,-7" />
          <path d="M2,-7 L8,-7 L8,-1" />
        </g>
      );
    case "shield":
      return (
        <g {...common}>
          <path d="M0,-9 L8,-5 V2 C8,7 4,10 0,11 C-4,10 -8,7 -8,2 V-5 Z" />
          <path d="M-3.5,0 L-1,3 L4,-3.5" />
        </g>
      );
    default:
      return null;
  }
}

interface IsoStackProps {
  x: number;
  y: number;
  size?: number;
  plateHeight?: number;
  gap?: number;
  layers?: number;
  icon: IconType;
}

function IsoStack({
  x,
  y,
  size = 150,
  plateHeight = 14,
  gap = 30,
  layers = 3,
  icon,
}: IsoStackProps) {
  const half = size / 2;
  const quarter = size / 4;

  return (
    <g>
      {Array.from({ length: layers }).map((_, i) => {
        const cy = y - i * gap;
        const top = `${x},${cy}`;
        const right = `${x + half},${cy + quarter}`;
        const bottom = `${x},${cy + half}`;
        const left = `${x - half},${cy + quarter}`;
        const leftFace = `${left} ${bottom} ${x},${cy + half + plateHeight} ${
          x - half
        },${cy + quarter + plateHeight}`;
        const rightFace = `${right} ${bottom} ${x},${
          cy + half + plateHeight
        } ${x + half},${cy + quarter + plateHeight}`;
        const topFace = `${top} ${right} ${bottom} ${left}`;
        return (
          <g key={i}>
            <polygon
              points={leftFace}
              fill="#cffafe"
              opacity={0.55}
              stroke="#a5f3fc"
              strokeWidth={1}
            />
            <polygon
              points={rightFace}
              fill="#a5f3fc"
              opacity={0.6}
              stroke="#a5f3fc"
              strokeWidth={1}
            />
            <polygon
              points={topFace}
              fill="#ecfeff"
              stroke="#67e8f9"
              strokeWidth={1.2}
            />
          </g>
        );
      })}
      <g transform={`translate(${x}, ${y - (layers - 1) * gap + quarter})`}>
        <Glyph type={icon} />
      </g>
    </g>
  );
}

interface TagProps {
  x: number;
  y: number;
  rotate: number;
  label: string;
  icon: IconType;
}

function Tag({ x, y, rotate, label, icon }: TagProps) {
  const w = 148;
  const h = 44;
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotate})`}>
      <rect
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        rx={14}
        fill="white"
        stroke="#e0f7fa"
        strokeWidth={1.5}
      />
      <g transform={`translate(${-w / 2 + 26}, 0)`}>
        <Glyph type={icon} />
      </g>
      <text
        x={-w / 2 + 46}
        y={5}
        fontSize="14"
        fontWeight={600}
        fill="#94a3b8"
        fontFamily="var(--font-sans, sans-serif)"
      >
        {label}
      </text>
    </g>
  );
}

function Dot({
  cx,
  cy,
  r = 3,
  ring,
  delay = 0,
}: {
  cx: number;
  cy: number;
  r?: number;
  ring?: boolean;
  delay?: number;
}) {
  return (
    <g>
      {ring && (
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#22d3ee"
          strokeWidth={1}
          initial={{ r, opacity: 0.5 }}
          animate={{ r: r + 10, opacity: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
            delay,
          }}
        />
      )}
      <circle cx={cx} cy={cy} r={r} fill="#22d3ee" opacity={0.55} />
    </g>
  );
}

export default function HeroBackground() {
  return (
    <svg
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      {/* connector lines */}
      <g stroke="#cbd5e1" strokeWidth={1} strokeDasharray="3 5" opacity={0.7}>
        <path d="M120,300 L120,420 L155,470 L200,530" fill="none" />
        <path d="M225,180 L120,300" fill="none" />
        <path d="M95,70 L60,120" fill="none" />
        <path d="M1230,260 L1195,390 L1155,450 L1140,510" fill="none" />
        <path d="M1230,260 L1290,190" fill="none" />
        <path d="M1330,80 L1290,190" fill="none" />
        <path d="M300,90 L340,140" fill="none" />
        <path d="M980,90 L1030,150" fill="none" />
      </g>

      <IsoStack x={210} y={150} icon="sparkle" />
      <Tag x={140} y={478} rotate={-14} label="Web Apps" icon="globe" />
      <Tag x={200} y={538} rotate={-14} label="Mobile Apps" icon="phone" />
      <Tag x={260} y={598} rotate={-14} label="Automation" icon="gear" />

      <IsoStack x={1190} y={130} icon="loop" />
      <Tag x={1120} y={358} rotate={16} label="Performance" icon="bars" />
      <Tag x={1170} y={438} rotate={16} label="Scalability" icon="trend" />
      <Tag x={1220} y={518} rotate={16} label="Security" icon="shield" />

      <Dot cx={95} cy={70} r={3} ring delay={0} />
      <Dot cx={60} cy={120} r={2.5} />
      <Dot cx={225} cy={180} r={2.5} />
      <Dot cx={120} cy={300} r={4} ring delay={0.8} />
      <Dot cx={155} cy={470} r={2.5} />
      <Dot cx={300} cy={90} r={2.5} />
      <Dot cx={340} cy={140} r={2.5} />

      <Dot cx={1330} cy={80} r={3} ring delay={1.4} />
      <Dot cx={1290} cy={190} r={4} ring delay={0.5} />
      <Dot cx={1230} cy={260} r={2.5} />
      <Dot cx={1155} cy={450} r={2.5} />
      <Dot cx={980} cy={90} r={2.5} />
      <Dot cx={1030} cy={150} r={2.5} />
    </svg>
  );
}
