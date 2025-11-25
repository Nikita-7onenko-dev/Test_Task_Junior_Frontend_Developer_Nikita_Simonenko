import './loadingBar.scss'
import { useEffect, useRef } from "react"
import {gsap} from 'gsap';


export function LoadingBar() {

  const barsRef = useRef<SVGSVGElement[]>([]);
  barsRef.current = [];
  console.log(barsRef.current);

  function pushElement(el: SVGSVGElement | null): void {
    if(el && !barsRef.current.includes(el)) {
      barsRef.current.push(el)
    }
  }
  
  useEffect(() => {
    const bars = barsRef.current;

    const timeLine = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.25
    });

    timeLine.fromTo(bars, {
      opacity: 0,
      scaleY: 0.2,
    }, {
      opacity: 1,
      scaleY: 1,
      stagger: 0.25,
      duration: 0.3,
    })

    timeLine.to(bars, {
      opacity: 0,
      scaleY: 0.2,
      stagger: 0.25,
      duration: 0.3,
    })

    return () => {
      timeLine.kill()
    }

  }, [])

  return (
    <div className="loading-bar">
      <svg ref={el => pushElement(el)} width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15C2.7 15 0 12.3529 0 9.11764V5.88236C0 2.64706 2.7 0 6 0C9.3 0 12 2.64706 12 5.88236V9.11764C12 12.3529 9.3 15 6 15Z" fill="url(#paint0_linear_1_112)" />
        <defs>
          <linearGradient id="paint0_linear_1_112" x1="0.5625" y1="-3.48677e-07" x2="14.8759" y2="3.61586" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BCE8FF" />
            <stop offset="0.485577" stopColor="#DAF4FF" stopOpacity="0.94" />
            <stop offset="0.783654" stopColor="#BFD8FF" stopOpacity="0.895" />
            <stop offset="1" stopColor="#A4BCFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      <svg ref={el => pushElement(el)} width="12" height="49" viewBox="0 0 12 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 49C2.7 49 0 46.416 0 43.2578V5.74219C0 2.58399 2.7 0 6 0C9.3 0 12 2.58399 12 5.74219V43.2578C12 46.3203 9.3 49 6 49Z" fill="url(#paint0_linear_1_107)" />
        <defs>
          <linearGradient id="paint0_linear_1_107" x1="0.5625" y1="-1.13901e-06" x2="15.6988" y2="1.17053" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BCE8FF" />
            <stop offset="0.485577" stopColor="#DAF4FF" stopOpacity="0.94" />
            <stop offset="0.783654" stopColor="#BFD8FF" stopOpacity="0.895" />
            <stop offset="1" stopColor="#A4BCFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      <svg ref={el => pushElement(el)} width="12" height="89" viewBox="0 0 12 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 89C2.7 89 0 85.492 0 81.2044V7.79562C0 3.50803 2.7 0 6 0C9.3 0 12 3.50803 12 7.79562V81.2044C12 85.492 9.3 89 6 89Z" fill="url(#paint0_linear_1_114)" />
        <defs>
          <linearGradient id="paint0_linear_1_114" x1="0.5625" y1="-2.06882e-06" x2="15.7618" y2="0.64713" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BCE8FF" />
            <stop offset="0.485577" stopColor="#DAF4FF" stopOpacity="0.94" />
            <stop offset="0.783654" stopColor="#BFD8FF" stopOpacity="0.895" />
            <stop offset="1" stopColor="#A4BCFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      <svg ref={el => pushElement(el)} width="12" height="33" viewBox="0 0 12 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 33C2.7 33 0 30.2156 0 26.8125V6.1875C0 2.78438 2.7 0 6 0C9.3 0 12 2.78438 12 6.1875V26.8125C12 30.2156 9.3 33 6 33Z" fill="url(#paint0_linear_1_111)" />
        <defs>
          <linearGradient id="paint0_linear_1_111" x1="0.5625" y1="-7.6709e-07" x2="15.5912" y2="1.72571" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BCE8FF" />
            <stop offset="0.485577" stopColor="#DAF4FF" stopOpacity="0.94" />
            <stop offset="0.783654" stopColor="#BFD8FF" stopOpacity="0.895" />
            <stop offset="1" stopColor="#A4BCFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      <svg ref={el => pushElement(el)} width="12" height="49" viewBox="0 0 12 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 49C2.7 49 0 46.416 0 43.2578V5.74219C0 2.58399 2.7 0 6 0C9.3 0 12 2.58399 12 5.74219V43.2578C12 46.3203 9.3 49 6 49Z" fill="url(#paint0_linear_1_106)" />
        <defs>
          <linearGradient id="paint0_linear_1_106" x1="0.5625" y1="-1.13901e-06" x2="15.6988" y2="1.17053" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BCE8FF" />
            <stop offset="0.485577" stopColor="#DAF4FF" stopOpacity="0.94" />
            <stop offset="0.783654" stopColor="#BFD8FF" stopOpacity="0.895" />
            <stop offset="1" stopColor="#A4BCFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      <svg ref={el => pushElement(el)} width="12" height="85" viewBox="0 0 12 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 85C2.7 85 0 81.6496 0 77.5547V7.44525C0 3.35036 2.7 0 6 0C9.3 0 12 3.35036 12 7.44525V77.5547C12 81.6496 9.3 85 6 85Z" fill="url(#paint0_linear_1_108)" />
        <defs>
          <linearGradient id="paint0_linear_1_108" x1="0.5625" y1="-1.97584e-06" x2="15.7591" y2="0.677466" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BCE8FF" />
            <stop offset="0.485577" stopColor="#DAF4FF" stopOpacity="0.94" />
            <stop offset="0.783654" stopColor="#BFD8FF" stopOpacity="0.895" />
            <stop offset="1" stopColor="#A4BCFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      <svg ref={el => pushElement(el)} width="12" height="81" viewBox="0 0 12 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 81C2.7 81 0 77.8073 0 73.9051V7.09489C0 3.1927 2.7 0 6 0C9.3 0 12 3.1927 12 7.09489V73.9051C12 77.8073 9.3 81 6 81Z" fill="url(#paint0_linear_1_113)" />
        <defs>
          <linearGradient id="paint0_linear_1_113" x1="0.5625" y1="-1.88286e-06" x2="15.7561" y2="0.710778" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BCE8FF" />
            <stop offset="0.485577" stopColor="#DAF4FF" stopOpacity="0.94" />
            <stop offset="0.783654" stopColor="#BFD8FF" stopOpacity="0.895" />
            <stop offset="1" stopColor="#A4BCFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      <svg ref={el => pushElement(el)} width="12" height="29" viewBox="0 0 12 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 29C2.7 29 0 26.5531 0 23.5625V5.4375C0 2.44688 2.7 0 6 0C9.3 0 12 2.44688 12 5.4375V23.5625C12 26.5531 9.3 29 6 29Z" fill="url(#paint0_linear_1_110)" />
        <defs>
          <linearGradient id="paint0_linear_1_110" x1="0.5625" y1="-6.7411e-07" x2="15.5337" y2="1.95623" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BCE8FF" />
            <stop offset="0.485577" stopColor="#DAF4FF" stopOpacity="0.94" />
            <stop offset="0.783654" stopColor="#BFD8FF" stopOpacity="0.895" />
            <stop offset="1" stopColor="#A4BCFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      <svg ref={el => pushElement(el)} width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15C2.7 15 0 12.3529 0 9.11764V5.88236C0 2.64706 2.7 0 6 0C9.3 0 12 2.64706 12 5.88236V9.11764C12 12.3529 9.3 15 6 15Z" fill="url(#paint0_linear_1_109)" />
        <defs>
          <linearGradient id="paint0_linear_1_109" x1="0.5625" y1="-3.48677e-07" x2="14.8759" y2="3.61586" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BCE8FF" />
            <stop offset="0.485577" stopColor="#DAF4FF" stopOpacity="0.94" />
            <stop offset="0.783654" stopColor="#BFD8FF" stopOpacity="0.895" />
            <stop offset="1" stopColor="#A4BCFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}