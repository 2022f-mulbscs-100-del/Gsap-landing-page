import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";
import gsap from "gsap";
export default function Cocktail() {

    useGSAP(() => {
        const parllaxTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            }
        })


        parllaxTimeLine.from("#c-left-leaf", {
            x: -100,
            y: 100,
        })
        .from("#c-right-leaf", {
            x: 100,
            y: 100,
        })
    })

    return (
        <>
            <section id="cocktails" className="noisy">
                <img src="/images/cocktail-left-leaf.png" id="c-left-leaf" alt="" />
                <img src="/images/cocktail-right-leaf.png" id="c-right-leaf" alt="" />

                <div className="list">
                    <div className="popular">
                        <h2>Mist popular coctails</h2>
                        <ul>
                            {cocktailLists.map((drink) => (
                                <li key={drink.name}>
                                    <div className="md:me-28">
                                        <h3>{drink.name}</h3>
                                        <p>{drink.country}</p>
                                    </div>
                                    <span>-{drink.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                       <div className="loved">
                        <h2>Mist loved coctails</h2>
                        <ul>
                            {mockTailLists.map((drink) => (
                                <li key={drink.name}>
                                    <div className="me-28">
                                        <h3>{drink.name}</h3>
                                        <p>{drink.country}</p>
                                    </div>
                                    <span>-{drink.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>)
}
