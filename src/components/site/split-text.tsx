"use client";

import { motion, type Variants } from "framer-motion";

const wordVariants: Variants = {
  hidden: { y: "115%", rotate: 4 },
  visible: { y: "0%", rotate: 0 },
};

export function SplitText({
  text,
  className,
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "h2" | "h3";
}) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="inline-block overflow-hidden pb-[0.15em] align-top mr-[0.28em] last:mr-0"
        >
          <motion.span
            variants={wordVariants}
            transition={{
              duration: 0.75,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
