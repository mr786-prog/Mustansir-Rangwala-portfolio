import { motion } from 'framer-motion';
import LazyVideo from './LazyVideo';

export default function Interlude() {
  return (
    <section className="interlude" aria-label="Small steps, big impact">
      <LazyVideo className="interlude-video" src="/media/hill.mp4" poster="/media/hill-poster.jpg" />
      <motion.p
        className="interlude-quote"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        Small steps.<br /><em>Big impact.</em>
      </motion.p>
    </section>
  );
}
