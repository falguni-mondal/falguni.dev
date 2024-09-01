"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
function SmoothScrolling({ children }) {
  const lenis = useRef(null);
  useEffect(() => {
    lenis.current = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smooth: true,
      // easing: (x)=> x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2
    });
    function raf(time){
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return ()=> lenis.current.destroy();
  },[])

  useEffect(()=>{
    const onScroll = ()=>{
      ScrollTrigger.update();
    };
    lenis.current.on('scroll', onScroll);
    return ()=> lenis.current.off('scroll', onScroll);
  },[]);
  // lenis options for configuration
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
