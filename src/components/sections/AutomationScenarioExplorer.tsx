"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Maximize2,
  Move,
  Play,
  RotateCcw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

export interface WorkflowImage {
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface AutomationScenario {
  label: string;
  trigger: string;
  steps: string[];
  outcome: string;
  imageIndex?: number;
}

export interface AutomationShowcase {
  workflowImages: WorkflowImage[];
  scenarios: AutomationScenario[];
  comparison: Array<{
    label: string;
    before: string;
    after: string;
  }>;
  safeguards: string[];
}

interface AutomationScenarioExplorerProps {
  showcase: AutomationShowcase;
}

interface WorkflowCanvasProps {
  image: WorkflowImage;
}

const MIN_SCALE = 0.5;
const MAX_SCALE = 4;

function WorkflowCanvas({ image }: WorkflowCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const changeZoom = (nextScale: number) => {
    const clampedScale = Math.min(
      MAX_SCALE,
      Math.max(MIN_SCALE, nextScale)
    );
    setScale(clampedScale);
    if (clampedScale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (event: WheelEvent) => {
      const isZoomingIn = event.deltaY < 0;
      const isAtZoomLimit = isZoomingIn
        ? scale >= MAX_SCALE
        : scale <= MIN_SCALE;

      if (isAtZoomLimit) return;

      event.preventDefault();
      changeZoom(scale + (event.deltaY < 0 ? 0.2 : -0.2));
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", handleWheel);
  }, [scale]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (scale <= 1) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointerStart.current = { x: event.clientX, y: event.clientY };
    positionStart.current = position;
    setIsDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPosition({
      x: positionStart.current.x + event.clientX - pointerStart.current.x,
      y: positionStart.current.y + event.clientY - pointerStart.current.y,
    });
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  const enterFullscreen = async () => {
    await canvasRef.current?.requestFullscreen();
  };

  return (
    <div
      ref={canvasRef}
      className="group/canvas relative h-[55vh] min-h-[420px] max-h-[720px] overflow-hidden rounded bg-[#f7f7f7] fullscreen:h-screen fullscreen:max-h-none"
    >
      <div
        className={`flex h-full w-full items-center justify-center touch-none select-none ${
          scale > 1
            ? isDragging
              ? "cursor-grabbing"
              : "cursor-grab"
            : "cursor-zoom-in"
        }`}
        onDoubleClick={() => changeZoom(scale === 1 ? 2 : 1)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="100vw"
          className="pointer-events-none h-auto max-h-full w-auto max-w-full object-contain"
          draggable={false}
          unoptimized
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            transition: isDragging ? "none" : "transform 180ms ease-out",
          }}
        />
      </div>

      <div className="absolute right-3 top-3 flex items-center overflow-hidden rounded border border-black/15 bg-white/95 text-black shadow-sm backdrop-blur sm:right-4 sm:top-4">
        <button
          type="button"
          onClick={() => changeZoom(scale - 0.25)}
          disabled={scale <= MIN_SCALE}
          className="flex h-10 w-10 items-center justify-center border-r border-black/10 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-300"
          aria-label="Zoom out"
        >
          <ZoomOut size={16} />
        </button>
        <span className="w-14 text-center font-mono text-[10px]">
          {Math.round(scale * 100)}%
        </span>
        <button
          type="button"
          onClick={() => changeZoom(scale + 0.25)}
          disabled={scale >= MAX_SCALE}
          className="flex h-10 w-10 items-center justify-center border-l border-black/10 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-300"
          aria-label="Zoom in"
        >
          <ZoomIn size={16} />
        </button>
        <button
          type="button"
          onClick={resetView}
          className="flex h-10 w-10 items-center justify-center border-l border-black/10 transition-colors hover:bg-neutral-100"
          aria-label="Reset view"
        >
          <RotateCcw size={15} />
        </button>
        <button
          type="button"
          onClick={enterFullscreen}
          className="flex h-10 w-10 items-center justify-center border-l border-black/10 transition-colors hover:bg-neutral-100"
          aria-label="View fullscreen"
        >
          <Maximize2 size={15} />
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-600 opacity-100 backdrop-blur transition-opacity sm:bottom-4 sm:opacity-0 sm:group-hover/canvas:opacity-100">
        <Move size={12} />
        {scale <= MIN_SCALE
          ? "Keep scrolling to continue down the page"
          : "Scroll to zoom · Drag to move · Double-click to zoom"}
      </div>
    </div>
  );
}

export default function AutomationScenarioExplorer({
  showcase,
}: AutomationScenarioExplorerProps) {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeScenario = showcase.scenarios[activeScenarioIndex];
  const activeImage = showcase.workflowImages[activeImageIndex];

  const selectScenario = (index: number) => {
    const scenario = showcase.scenarios[index];
    setActiveScenarioIndex(index);
    if (scenario.imageIndex !== undefined) {
      setActiveImageIndex(scenario.imageIndex);
    }
  };

  return (
    <>
      <section className="bg-white px-4 pb-24 text-black dark:bg-black dark:text-white sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                Inside the Build
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                The complete workflow canvas.
              </h2>
            </div>
            {showcase.workflowImages.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {showcase.workflowImages.map((image, index) => (
                  <button
                    key={image.label}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${
                      activeImageIndex === index
                        ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                        : "border-black/15 text-neutral-500 hover:border-black hover:text-black dark:border-white/15 dark:text-neutral-400 dark:hover:border-white dark:hover:text-white"
                    }`}
                  >
                    {image.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded border border-black/10 bg-[#f7f7f7] dark:border-white/15">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage.src}
                initial={{ opacity: 0, scale: 0.995 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <WorkflowCanvas image={activeImage} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-3 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            <span>{activeImage.label}</span>
            <span>n8n · Redacted workflow view</span>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Scenario Replay
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                See how the logic responds.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
                Choose a real-world situation to follow the path from trigger
                to outcome.
              </p>
              <div className="mt-8 flex flex-col gap-2">
                {showcase.scenarios.map((scenario, index) => (
                  <button
                    key={scenario.label}
                    type="button"
                    onClick={() => selectScenario(index)}
                    className={`flex items-center justify-between border px-4 py-3 text-left text-sm transition-colors ${
                      activeScenarioIndex === index
                        ? "border-white bg-white text-black"
                        : "border-white/15 text-neutral-400 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {scenario.label}
                    <Play size={13} fill="currentColor" />
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="min-w-0"
              >
                <div className="border border-white/15 p-5 sm:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Trigger
                  </p>
                  <p className="mt-2 text-base font-medium sm:text-lg">
                    {activeScenario.trigger}
                  </p>
                </div>

                <div className="relative my-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {activeScenario.steps.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.12, duration: 0.3 }}
                      className="relative border border-white/15 bg-white/[0.03] p-5"
                    >
                      <div className="mb-8 flex items-center justify-between">
                        <span className="font-mono text-xs text-neutral-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {index < activeScenario.steps.length - 1 && (
                          <ArrowRight
                            size={14}
                            className="text-neutral-600 xl:absolute xl:-right-[22px] xl:top-1/2 xl:z-10 xl:-translate-y-1/2"
                          />
                        )}
                      </div>
                      <p className="text-sm font-medium">{step}</p>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.12 + 0.2 }}
                        className="absolute bottom-5 right-5 h-1.5 w-1.5 rounded-full bg-emerald-400"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-4 border border-emerald-400/30 bg-emerald-400/[0.06] p-5 sm:p-7">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-black">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                      Outcome
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-200 sm:text-base">
                      {activeScenario.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
