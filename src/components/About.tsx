import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"

function About() {

  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2",{ type: " words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger:{
        trigger: "#about",
        start: "top center",
        end: "bottom top",
      }
    })

    scrollTimeline.from(titleSplit.words, {
      yPercent: 100, //Moves element using percentage of its OWN height
      opacity: 0,
      duration: 1,
      stagger: 0.02,
      ease: "expo.out",
    })
    .from('.top-grid div , .bottom-grid div',{
    opacity: 0,  
    duration: 1,
    stagger: 0.1,
    ease: "power2.out",
    
    },'-=0.5') //This means start this animation 0.5 seconds before the previous animation ends
  })
  return (
    <div id="about">
      <div className="mb-15 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>where  every detail matters <span className="text-white">-</span>
              from muddlee to garnish</h2>

          </div>
          <div className="sub-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              accusantium autem laboriosam, quia quae quidem. Quos accusantium
              autem laboriosam, quia quae quidem.
            </p>
            <div>
              <p className="md-text:3xl text-xl font-bold">
                <span>4.5</span>

              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="" />
        </div>

      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="" />
        </div>


      </div>


    </div>
  )
}

export default About