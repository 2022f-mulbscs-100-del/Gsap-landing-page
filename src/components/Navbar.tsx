import { useGSAP } from '@gsap/react';
import { navLinks } from '../constants';
import gsap from 'gsap';
function Navbar() {

  useGSAP(()=>{
    const tl = gsap.timeline({
  
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top", // start the animation working when the bottom of the navbar reaches the top of the viewport
        // end: "+=500",
        scrub: true,
      },
    });
      tl.fromTo('nav',{backgroundColor: "transparent"},
        {backgroundColor: "green",
          duration: 1,
          backgroundFilter: "blur(10px)",
          ease:'power1.inOut'
        })



  })


  return (
    <nav>
      <div>
        <a href="" className="flex  items-center gap-2">
        <img src="/images/logo.png" alt="" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar