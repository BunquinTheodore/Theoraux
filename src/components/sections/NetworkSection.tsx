"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, MessageCircle, Quote } from "lucide-react";
import { network } from "@/lib/data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

// Design canvas the diagram is authored against; card/dot positions below
// are expressed in these units and converted to percentages for layout.
const CANVAS_W = 1200;
const CANVAS_H = 380;

interface CardLayout {
  left: number;
  top: number;
  width: number;
  height: number;
  anchor: [number, number]; // point the connector line starts from
}

const layout: CardLayout[] = [
  { left: 155, top: 0, width: 342, height: 104, anchor: [326, 104] }, // Aaros
  { left: 700, top: 0, width: 360, height: 104, anchor: [880, 104] }, // Troy
  { left: 32, top: 146, width: 336, height: 100, anchor: [368, 196] }, // Eric
  { left: 805, top: 146, width: 355, height: 100, anchor: [805, 196] }, // Bryl
  { left: 245, top: 291, width: 303, height: 88, anchor: [397, 291] }, // Carl
  { left: 675, top: 291, width: 310, height: 88, anchor: [830, 291] }, // Ian
];

const HUB = { x: 600, y: 196, r: 62 };

function pct(value: number, of: number) {
  return `${(value / of) * 100}%`;
}

const stats = [
  { icon: Users, label: "Vetted founders & operators" },
  { icon: Sparkles, label: "Cross-industry perspectives" },
  { icon: MessageCircle, label: "Open exchange of ideas" },
];

export default function NetworkSection() {
  return (
    <section className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600">
            Our Network
          </span>
          <h2 className="mt-4 text-3xl font-bold text-dark sm:text-4xl">
            People We Learn From
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-dark/60">
            Beyond our core team, our founder Theodore has built real
            relationships with founders and operators across industries —
            people whose work we respect and regularly exchange ideas with.
          </p>
        </motion.div>

        {/* Orbit diagram — desktop */}
        <div
          className="relative mx-auto mt-16 hidden w-full lg:block"
          style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
        >
          <svg
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {layout.map((card, i) => {
              const [x, y] = card.anchor;
              const midX = (x + HUB.x) / 2;
              const midY = (y + HUB.y) / 2;
              return (
                <path
                  key={i}
                  d={`M ${x},${y} Q ${midX},${midY} ${HUB.x},${HUB.y}`}
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth={1.5}
                  strokeDasharray="2 6"
                  opacity={0.5}
                />
              );
            })}
            {layout.map((card, i) => (
              <circle
                key={i}
                cx={card.anchor[0]}
                cy={card.anchor[1]}
                r={3}
                fill="#22d3ee"
                opacity={0.7}
              />
            ))}
          </svg>

          {/* Center hub */}
          <div
            className="absolute flex flex-col items-center justify-center rounded-full border border-primary-100 bg-white text-center shadow-sm"
            style={{
              left: pct(HUB.x - HUB.r, CANVAS_W),
              top: pct(HUB.y - HUB.r, CANVAS_H),
              width: pct(HUB.r * 2, CANVAS_W),
              height: pct(HUB.r * 2, CANVAS_H),
            }}
          >
            <Users size={20} className="text-primary-500" />
            <p className="mt-1.5 px-2 text-[11px] font-medium leading-tight text-dark/60">
              Meaningful relationships.
              <br />
              Shared growth.
            </p>
          </div>

          {/* Person cards */}
          {network.map((person, index) => {
            const card = layout[index];
            if (!card) return null;
            return (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="absolute flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                style={{
                  left: pct(card.left, CANVAS_W),
                  top: pct(card.top, CANVAS_H),
                  width: pct(card.width, CANVAS_W),
                  height: pct(card.height, CANVAS_H),
                }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
                  {getInitials(person.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-dark">
                    {person.name}
                  </p>
                  <p className="truncate text-xs text-dark/50">
                    {person.role}, {person.company}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-primary-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-600">
                    {person.industry}
                  </span>
                </div>
                <Quote size={14} className="shrink-0 text-primary-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Simple stacked list — mobile/tablet fallback */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {network.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
                {getInitials(person.name)}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-dark">
                  {person.name}
                </p>
                <p className="truncate text-sm text-dark/50">
                  {person.role}, {person.company}
                </p>
                <span className="mt-1.5 inline-block rounded-full bg-primary-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-600">
                  {person.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-6 rounded-2xl bg-white px-8 py-6 shadow-sm sm:flex-row sm:gap-0 sm:divide-x sm:divide-gray-100"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-6 first:pl-0 last:pr-0"
            >
              <stat.icon size={16} className="shrink-0 text-primary-500" />
              <span className="text-sm text-dark/60">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
