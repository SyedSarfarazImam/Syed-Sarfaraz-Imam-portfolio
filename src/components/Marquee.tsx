import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({ items, speed = 20, reverse = false }: MarqueeProps) {
  return (
    <div className="relative flex overflow-hidden py-4 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
      <motion.div
        animate={{
          x: reverse ? [0, 1000] : [0, -1000],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-8">
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-gold/60">{item}</span>
            <span className="mx-8 text-gold/20">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
