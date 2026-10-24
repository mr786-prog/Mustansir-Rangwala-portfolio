import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/** Full-width cinematic image that drifts slowly as you scroll past it. */
export default function SceneBand({ src, alt, position = '50% 50%' }: { src: string; alt: string; position?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.08, 1.14]);

  return (
    <div ref={ref} className="scene-band">
      <motion.img src={src} alt={alt} loading="lazy" style={{ y, scale, objectPosition: position }} />
      <span className="scene-vignette" aria-hidden="true" />
    </div>
  );
}
