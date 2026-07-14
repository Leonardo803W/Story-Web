import { useState } from "react";

import { uniqueEnvironments } from "../data/enviroment_nature";
import { livingOrganisms } from "../data/living_organism";
import { endangeredAnimals } from "../data/living_organism_risk";
import { naturalDisasters } from "../data/nature_disaster";
import { motion, type Variants } from "framer-motion";

const Nature = () => {

    const [selectedOrganism, setSelectedOrganism] =
    useState<(typeof livingOrganisms)[number] | null>(null);

    const fadeIn: Variants = {
        hidden: {
        opacity: 0,
        y: 50,
        },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
        },
    };

    return(
        <>
            <section id="intro_nature">
                <h3>Nature</h3>

                <p>
                    La natura è l'insieme di tutti gli ambienti, degli organismi
                    viventi e dei processi naturali che rendono possibile la vita
                    sulla Terra. Ogni ecosistema è collegato agli altri e anche
                    eventi molto lontani possono influenzarsi reciprocamente.
                </p>

                <p>
                    Inoltre ospita ecosistemi estremamente diversi tra loro.
                    Sebbene possano sembrare indipendenti, molti sono collegati
                    attraverso il clima, le correnti oceaniche e l'atmosfera.
                </p>
            </section>

            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                id="ambienti_unici"
            >
                <h4>Ambienti unici della Terra</h4>

                <div>
                    {uniqueEnvironments.map((environment) => (
                        <article
                            key={environment.id}
                            id={environment.articleId}
                            className = "environment_article"
                        >
                            <h5>{environment.title}</h5>

                            <p>{environment.description}</p>
                        </article>
                    ))}
                </div>
            </motion.section>

            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className = "big_section"
            >
                <h4 className = "text-center">Catastrofi naturali</h4>

                <p className = "text-center">
                    Le catastrofi naturali sono eventi causati dai processi
                    geologici, atmosferici o climatici della Terra. Alcune
                    fanno parte del normale ciclo del pianeta, mentre altre
                    possono essere aggravate dai cambiamenti climatici.
                </p>

                <div className = "Carousel">
                    {naturalDisasters.map((disaster) => (
                        <article 
                            key={disaster.id} 
                            className = " Carousel_slide natural_disaster"
                        >
                            <div className = "img_disaster" id={disaster.id}></div>
                            <div className = "p-3">
                                <h3>{disaster.name}</h3>

                                <p>{disaster.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </motion.section>

            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className = "big_section" id="organismi_viventi"
            >
                <h4 className = "text-center">Gli organismi viventi</h4>

                <p className = "text-center">
                    Attualmente sono state descritte dalla scienza circa
                    <strong> 2,2 milioni di specie</strong>, ma si stima che
                    sulla Terra possano esisterne tra gli 8 e i 10 milioni.
                    Molte specie, soprattutto negli oceani e nelle foreste
                    tropicali, non sono ancora state scoperte.
                </p>

                <div className="organism-circle">

                    <div className="organism-content">

                        {selectedOrganism ? (
                            <>
                                <div
                                    className = "card kindoms"
                                    style={{ backgroundImage: `url(${selectedOrganism.img})` }}
                                >
                                    <h3>{selectedOrganism.name}</h3>
                                    <p>{selectedOrganism.description}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3>Gli organismi viventi</h3>
                                <p>Seleziona una categoria.</p>
                            </>
                        )}

                    </div>

                </div>

                <div className="organism-buttons">

                    {livingOrganisms.map((organism) => (

                        <button
                            key={organism.id}
                            onClick={() => setSelectedOrganism(organism)}
                        >
                            {organism.name}
                        </button>

                    ))}

                </div>
            </motion.section>

            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className = "big_section" id="animali_estinzione"
            >
                <h4 className = "text-center">Animali a rischio di estinzione</h4>

                <p className = "text-center">
                    Molte specie stanno diminuendo a causa della perdita del
                    loro habitat, del cambiamento climatico, dell'inquinamento,
                    della caccia e del commercio illegale.
                </p>

                <div className = "Carousel">
                    {endangeredAnimals.map((animal) => (
                        <article 
                            key={animal.id} 
                            className = " Carousel_slide risked_animal"
                        >
                            <div className = "img_animals" id={animal.id}></div>
                            <div className = "p-3">
                                <h3>{animal.name}</h3>

                                <p>{animal.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </motion.section>
        </>
    );
}

export default Nature;