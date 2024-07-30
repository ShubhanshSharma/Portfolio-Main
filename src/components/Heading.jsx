import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HeadingBig(props) {
  const wordRefs = useRef([]);

  useEffect(() => {
    wordRefs.current.forEach((wordRef, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wordRef,
          start: "bottom bottom",
          end: "bottom top",
          scrub: false, // Adjust scrub for desired effect,
          toggleActions: 'play none none reverse',
          markers: true
        },
      });

      tl.fromTo(wordRef.children, { opacity: 0, xPercent: 120 }, { opacity: 1, xPercent: 0, duration: 0.8, delay: 0, stagger: 0.08, ease:'back.out' });
    });
  }, [wordRefs]);

  return (
    <div className="HEADING_TEXT text-white mix-blend-difference font-bold" style={{ fontSize: `${props.size}px`, width: `${props.width}` }}>
      {props.content.split(" ").map((word, index) => (
        <div key={index} className="word" ref={(el) => (wordRefs.current[index] = el)}>
          {word.split("").map((alphabet, index) => (
            <span key={index} className="alphabet">{alphabet}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
