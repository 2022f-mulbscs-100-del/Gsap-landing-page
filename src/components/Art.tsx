import gsap from 'gsap'
import { featureLists, goodLists } from '../constants'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'


export default function Art() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = isMobile ? "top 20%" : "top top";
        const maskTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start,
                end: "bottom top",
                scrub: 3,
                pin: true,
            }


        });


        //         Scroll distance
        // start: "top top",
        // end: "bottom center"
        // 👉 Bigger gap = slower animation

        //         If you want slower animation
        // 👉 Increase scroll distance, NOT duration:
        // end: "+=1500",


        //         Adds smooth delay, not duration
        // scrub: true → direct sync
        // scrub: 1.5 → takes 1.5s to catch up

        maskTimeLine.to(".will-fade", {
            opacity: 0,
            stagger: 0.2,
            // end: "+=2000"
            ease: "power1.inOut",
        }).to(".masked-img",{
            scale: 1.3,
            maskPosition: "center ",
            maskSize: "400%",
        // duration:2,
        ease:"power1.inOut",
        }).to("#masked-content",{
            opacity: 1,
            // duration: 2,
            ease: "power1.inOut",
        })

    })

    return (
        <>

            <div id="art" className='art'>
                <div className="container mx-auto h-full  pt-20">
                    <h2 className='will-fade'>The Art</h2>

                    <div className='content'>
                        <ul className='space-y-4 will-fade'>
                            {goodLists.map((feature, index) => (
                                <li key={index} className='flex items-center gap-2'>
                                    <img src="/images/check.png" alt="" />
                                    <p>{feature}</p>
                                </li>
                            ))
                            }
                        </ul>
                        <div className='cocktail-img'>
                            <img src="/images/under-img.jpg" alt="" className='abs-center masked-img size-full object-contain' />
                        </div>
                        <ul className='space-y-4 will-fade'>
                            {featureLists.map((feature, index) => (
                                <li key={index} className='flex items-center justify-start gap-2'>
                                    <img src="/images/check.png" alt="" />
                                    <p className='md:w-fit w-60'>{feature}</p>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className='masked-container'>
                        <h2 className="will-fade">
                            sip-worthy perfection
                        </h2>
                        <div id='masked-content'>
                            <h3>MAde with , poured with passion</h3>
                            <p>this isn't just a drink its a carefull crafted</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
