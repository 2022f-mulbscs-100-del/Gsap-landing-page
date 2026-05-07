import React from 'react'
import { allCocktails } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function Menu() {

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const totalCocktails = allCocktails.length;
    useGSAP(() => {
        gsap.fromTo("#title", {
            yPercent: 100,
            opacity: 0,
        }, {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "expo.out",
        })

        gsap.fromTo(".cocktail img", {
            xPercent: -100,
            opacity: 0,
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        })

        gsap.fromTo(".details ", {
            yPercent: 50,
            // opacity: 0,
        }, {
            yPercent: 0,
            // opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        })

         gsap.fromTo(".details p", {
            yPercent: 50,
            // opacity: 0,
        }, {
            yPercent: 0,
            // opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        })
    }, [currentIndex])

    function gotoSlide(index: number) {
        const newIndex = (index + totalCocktails) % totalCocktails; // made a loop
        setCurrentIndex(newIndex);
    }

    const getCocktaiAt = (index: number) => {
        return allCocktails[(currentIndex + index + totalCocktails) % totalCocktails]; //so it make sure the index remain in the array boundry
    }
    const currentCocktail = getCocktaiAt(0);
    const prevCocktail = getCocktaiAt(-1);
    const nextCocktail = getCocktaiAt(1);

    return (
        <section id='menu' aria-labelledby='menu-heading'>
            <img src="/images/slider-left-leaf.png" alt="" id='m-left-leaf' />
            <img src="/images/slider-right-leaf.png" alt="" id='m-right-leaf' />

            <h2 id='menu-heading' className='sr-only'>
                Cocktail Menu
            </h2>

            <nav className='cocktail-tabs !bg-transparent' aria-label='Cocktail Menu'>
                {allCocktails.map((cocktail, index) => {
                    console.log(cocktail)
                    return (
                        <button key={cocktail.id} className={`cocktail-tab ${currentIndex === index ? 'text-white border-white' : 'text-white/50 border-white/50'}`} onClick={() => { gotoSlide(index) }}>
                            {cocktail.name}
                        </button>

                    )
                })}
            </nav>
            <div className='content'>
                <div className="arrows">
                    <button className="text-left"
                        onClick={() => { gotoSlide(currentIndex - 1) }}
                    >
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="" />
                    </button>
                    <button className="text-left"
                        onClick={() => { gotoSlide(currentIndex + 1) }}
                    >
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="" />
                    </button>
                </div>

                <div className='cocktail'>
                    <img src={currentCocktail.image} className='object-contain' alt="" />
                </div>
                <div className='recipe'>
                        <div ref={contentRef} className="info">
                            <p>Recipe for:</p>
                            <p id="title">{currentCocktail.name}</p>
                        </div>
                        <div className="details">
                            <h2>
                                {currentCocktail.title}
                            </h2>
                            <p>{currentCocktail.description}</p>
                        </div>
                    </div>
                </div>

        </section>
    )
}

export default Menu