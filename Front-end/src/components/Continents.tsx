import { useState } from 'react';

import img from '../img/continents/Alfred Wegener.jpg'

import { today_continents } from "../data/today_continents";
import { supercontinenti } from "../data/supercontinenti"


const Continents = () => {

    const [selectedContinent, setSelectedContinent] = useState(null);

    return (
        <>
            <section>
                <div id = "intro_continents">
                    <p>
                        I continenti non sono immobili. Le enormi masse di roccia che oggi formano 
                        Europa, Asia, Africa e gli altri continenti si muovono lentamente grazie 
                        al movimento delle placche tettoniche. Nel corso di miliardi di anni si sono unite, 
                        separate e ricongiunte più volte, modificando profondamente l'aspetto della Terra.
                    </p>
                </div>

                <article id = 'continent'>
                    <h3>La deriva dei continenti</h3>

                    <div id = 'first_text'>
                        <img src = {img} alt = "Alfred Wegener" className = 'w-50'/>

                        <section>
                            <h3>Alfred Wegener (1880–1930)</h3>

                            <p>
                                Un geofisico, meteorologo ed esploratore tedesco, padre fondatore della teoria della
                                deriva dei continenti.
                            </p>
                        </section>
                    </div>

                    <div id = 'second_text'>
                        <h3>La deriva dei continenti è dimostrata da quattro prove principali:</h3>

                        <p>
                            Geografiche (la forma a incastro dei continenti, come Sud America e Africa), 
                            paleontologiche (fossili identici ritrovati su coste separate dall'oceano), 
                            geologiche (continuità di catene montuose e tipi di roccia) e paleoclimatiche.
                        </p>
                    </div>
                </article>

                <div>
                    <section className = "intro_supercontinenti">
                        <h2>I Supercontinenti della Terra</h2>

                        <p>
                            Prima che i continenti si separassero nella disposizione attuale, erano
                            uniti in grandi masse continentali chiamate <strong>supercontinenti</strong>.
                            Questo fenomeno si è verificato più volte nella storia della Terra a
                            causa del movimento delle placche tettoniche.
                        </p>
                    </section>

                    <div className = "Carousel">
                        {supercontinenti.map((continente) => (
                        <div className = "Carousel_slide" key={continente.id}>
                            <article id = {continente.nome} className = 'text_supercontinets'>
                                <h3>{continente.nome}</h3>

                                <p>
                                <strong>Età:</strong> {continente.eta}
                                </p>

                                <p>
                                <strong>Formazione:</strong> {continente.formato}
                                </p>

                                <p>
                                <strong>Divisione:</strong> {continente.diviso}
                                </p>

                                <p>
                                <strong>Particolarità:</strong> {continente.particolarita}
                                </p>
                            </article>
                        </div>
                        ))}
                    </div>
                </div>

                <div className = 'modern_continents'>
                    <h2>I continenti di oggi</h2>


                    <div className = 'box_continents_modern'>

                        {selectedContinent ? (
                            <>
                                <section id = {selectedContinent.nome} className = 'today_continents_modern'>

                                    <h3>{selectedContinent.nome}</h3>

                                    <div>
                                        <p>{selectedContinent.popolazione}</p>
                                        <p>{selectedContinent.superficie}</p>
                                    </div>

                                    <article>
                                        <h3>Curiosita</h3>

                                        <p>{selectedContinent.curiosita}</p>
                                    </article>
                                </section>
                            </>
                        ) : (
                            <>
                                <p className = 'text-center'>
                                    I continenti sono pochi, eppure la loro popolazione, cultura,
                                    storia, fauna e molto altro, fanno sembrare anche il piu' piccolo 
                                    continente, in un gigante, che cosa vuoi scoprire oggi?
                                </p>
                            </>
                        )}

                    </div>

                    <div className = "group_button_story">
                        {today_continents?.map((item) => (
                            <button
                            className={
                                selectedContinent?.id === item.id
                                    ? "button_active_story"
                                    : "button_story"
                            }
                            key={item.id}
                            onClick={() => setSelectedContinent(item)}
                        >
                            {item.nome}
                        </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Continents;