import { planetMaterials } from "../data/materials";
import { motion, type Variants } from "framer-motion";

const Planets = () => {

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
            <section id = "intro_planets">
                <h3>Earth</h3>

                <p>
                    La terra ha circa 4,54 miliardi di anni, per noi sembra una eternita'
                    ma non lo stesso per l'universo
                </p>
            </section>

            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="content_planets"
            >
                <h3>Struttura della Terra: Elementi principali</h3>

                <div className="article_planet">
                    <h5>Geosfera, la struttura interna ed esterna:</h5>

                    <article className="text_planets">
                        <div id="crosta" className="text_planet_div">
                            <p>Crosta terrestre; strato superficiale in continuo movimento</p>
                        </div>

                        <div id="mantello" className="text_planet_div">
                            <p>Mantello; strato intermedio</p>
                        </div>

                        <div id="nucleo" className="text_planet_div">
                            <p>Nucleo; parte centrale del pianeta</p>
                        </div>
                    </article>
                </div>

                <div className="article_planet">
                    <h5>Idrosfera e Atmosfera:</h5>

                    <article className="text_planets">
                        <div id="idrosfera" className="text_planet_div">
                            <p>Idrosfera; insieme di oceani, fiumi, laghi e ghiacciai</p>
                        </div>

                        <div id="atmosfera" className="text_planet_div">
                            <p>Atmosfera; il gas che avvolge la Terra</p>
                        </div>
                    </article>
                </div>

                <div className="article_planet">
                    <h5>Caratteristiche uniche:</h5>

                    <article className="text_planets">
                        <div id="biosfera" className="text_planet_div">
                            <p>Biosfera; la vita</p>
                        </div>

                        <div id="acqua-liquida" className="text_planet_div">
                            <p>Acqua liquida</p>
                        </div>

                        <div id="campo-magnetico" className="text_planet_div">
                            <p>Campo magnetico; lo scudo invisibile</p>
                        </div>
                    </article>
                </div>

                <div className="article_planet">
                    <h5>Satelliti naturali:</h5>

                    <article className="text_planets">
                        <div id="luna" className="text_planet_div">
                            <p>Luna; genera le maree oceaniche e stabilizza l'asse di rotazione terrestre</p>
                        </div>
                    </article>
                </div>
            </motion.section>

            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className = "materiali_planets"
            >
                <h4>Elementi che compongono la Terra</h4>

                <section className="materials_Carousel">
                    {planetMaterials.map((category) => (
                        <section key={category.title}>
                            <div className="intro_material_planet">
                                <h5>{category.title}</h5>
                                <p>{category.intro}</p>
                            </div>

                            <ul className="list_material_planet">
                                {category.materials.map((material) => (
                                    <li
                                        key={material.id}
                                        id={material.id}
                                        className="single_material_planet"
                                    >
                                        <div className = "background_materials_planet">
                                            <div className="d-flex justify-content-around">
                                                <span>
                                                    {material.name} ({material.symbol})
                                                </span>

                                                <strong>— {material.amount} —</strong>
                                            </div>

                                            <p>{material.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </section>
            </motion.section>

            <motion.article
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                id = "timeline_planets"
            >
                <h3>Il processo di formazione della terra</h3>

                    <section>
                        <div className = "w-50 processo_terra" id = "accumulo_materia">
                            <p>Accumulo di materia</p>
                        </div>
                        <div className = "w-50 processo_terra" id = "nascita_luna">
                            <p>La nascita della Luna</p>
                        </div>
                    </section>
                    <div className = "processo_terra" id = "raffreddamento_oceani">
                        <p>Raffreddamento e oceani</p>
                    </div>
            </motion.article>
        </>
    )
}

export default Planets;