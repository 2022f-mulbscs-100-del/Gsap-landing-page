import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
// import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";


// gsap.registerPlugin(SplitText);
function Hero() {
    const videRef = useRef<HTMLVideoElement>(null);
    // const videoTimelineRef = useRef<gsap.core.Timeline | null>(null);
    // const containerRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(
        () => {
            // 🔤 TEXT ANIMATION
            const heroSplit = new SplitText(".title", { type: "chars,words" });
            const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

            heroSplit.chars.forEach((char) => {
                char.classList.add("text-gradient");
            });

            gsap.from(heroSplit.chars, {
                yPercent: 100,
                duration: 1,
                ease: "expo.out",
                stagger: 0.05,
                opacity: 0,
            });

            gsap.from(paragraphSplit.lines, {
                yPercent: 100,
                duration: 1,
                ease: "expo.out",
                stagger: 0.05,
                opacity: 0,
                delay: 1,
            });

            // 🍃 LEAF SCROLL ANIMATION
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    // reverse: true,
                    scrub: true, //Animation is linked to scroll
                    // Scroll down → animation plays
                    //  Scroll up → animation reverses

                },
            })
                .to(".left.leaf", { y: 200 }, 0)
                .to(".right-leaf", { y: -200 }, 0);
            // This is timeline position 0 mean start of the animation
            //the first parameter is the element and the second parameter is the screen
            //it say when the top of the element reach the 50% of the screxen the animation start and when the top of the element reach the 120% of the screen the animation end

            // 📱 RESPONSIVE VALUES
            const startValue = isMobile ? "top 50%" : "center 60%";
            const endValue = isMobile ? "120% top" : "bottom top";

            // 🎥 VIDEO TIMELINE SETUP
            const video = videRef.current;
            if (!video) return;

            //setting time line so we can control animation plus adding scroll trigger to it so can control the animation with scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "video",
                    start: startValue,
                    end: endValue,
                    scrub: 2,
                    pin: true,
                    // opacity: 0,
                    // onEnter: () => video.play(),
                    // onEnterBack: () => video.play(),
                    // onLeave: () => video.pause(),
                    // onLeaveBack: () => video.pause(),
                },
            })


            video.onloadedmetadata = () => {
                tl.to(video,
                    {
                        currentTime: video.duration,
                        // scale: isMobile ? 0.2 : 0.5,
                        ease: "none",
                        

                    }

                )
            }
            // video.onloadedmetadata = () => {
            //     const tl = gsap.timeline({
            //         scrollTrigger: {
            //             trigger: "video",
            //             start: startValue,
            //             end: endValue,
            //             scrub: 1,
            //             pin: true,
            //         },
            //     });

            //     tl.to(video, {
            //         currentTime: video.duration,
            //         scale: isMobile ? 0.2 : 0.5,
            //         ease: "none",
            //     });
            // };


        },
        []
    );

    return (
        <>
        
            <div id="hero" className="noisy relative ">
                {/* 🔥 TITLE */}
                <h1 className="title">MOJITO</h1>

                {/* 🍃 LEAVES */}
                <img
                    src="/images/hero-left-leaf.png"
                    className="left leaf absolute"
                    alt=""
                />
                <img
                    src="/images/hero-right-leaf.png"
                    className="right-leaf absolute"
                    alt=""
                />

                {/* 📝 CONTENT */}
                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic</p>
                            <p className="subtitle">
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail on our menu is a blend of premium ingredients,
                                creative flair, and timeless recipes — designed to delight your
                                senses.
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>

            </div>
            {/* 🎥 VIDEO */}
            <div className="video absolute inset-0">
                <video
                    ref={videRef}
                    src="./videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                />
            </div>
        </>
    );
}

export default Hero;