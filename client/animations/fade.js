import gsap from 'gsap';

export default function fade(ref) {
  gsap.from(ref.current, {
    opacity: 0, // initial opacity
    duration: 2.5, // secs
    ease: "power2.inOut" // easing function
  });
}