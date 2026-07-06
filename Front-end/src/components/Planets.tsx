const Planets = () => {

    return(
        <>
            <section id = "intro_planets">
                <h3>Earth</h3>

                <p>
                    La terra ha circa 4,54 miliardi di anni, per noi sembra una eternita'
                    ma non lo stesso per l'universo
                </p>
            </section>

            <section className="content_planets">
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
            </section>

            <section className = "materiali_planets">
                <h4>Elementi che compongono la Terra</h4>

                <section>

                    <div className = "intro_material_planet">
                        <h5>Elementi comuni</h5>

                        <p>
                            Circa il 99% della massa della Terra è costituita da pochi elementi
                            chimici. Essi formano il nucleo, il mantello, la crosta terrestre,
                            gli oceani e l'atmosfera, rendendo possibile l'esistenza del pianeta
                            così come lo conosciamo oggi.
                        </p>
                    </div>

                    <ul className = "list_material_planet">
                        <li id = "ferro" className = "single_material_planet">
                            <div className = " d-flex justify-content-around">
                                <span>Ferro (Fe)</span> 
                                <strong>— 32,1% —</strong>  
                            </div>
                            <p>Costituisce principalmente il nucleo terrestre.</p>
                        </li>
                        
                        <li id="ossigeno" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Ossigeno (O)</span>
                                <strong>— 30,1% —</strong>
                            </div>

                            <p>Presente nelle rocce, nell'acqua e nell'atmosfera.</p>
                        </li>

                        <li id="silicio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Silicio (Si)</span>
                                <strong>— 15,1% —</strong>
                            </div>

                            <p>Insieme all'ossigeno forma la maggior parte delle rocce.</p>
                        </li>

                        <li id="magnesio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Magnesio (Mg)</span>
                                <strong>— 13,9% —</strong>
                            </div>

                            <p>Molto abbondante nel mantello terrestre.</p>
                        </li>

                        <li id="zolfo" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Zolfo (S)</span>
                                <strong>— 2,9% —</strong>
                            </div>

                            <p>Presente nel nucleo e in numerosi minerali.</p>
                        </li>

                        <li id="nichel" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Nichel (Ni)</span>
                                <strong>— 1,8% —</strong>
                            </div>

                            <p>Accompagna il ferro nel nucleo terrestre.</p>
                        </li>

                        <li id="calcio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Calcio (Ca)</span>
                                <strong>— 1,5% —</strong>
                            </div>

                            <p>Presente in rocce come il calcare.</p>
                        </li>

                        <li id="alluminio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Alluminio (Al)</span>
                                <strong>— 1,4% —</strong>
                            </div>

                            <p>Molto diffuso nella crosta terrestre.</p>
                        </li>

                        <li id="sodio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Sodio (Na)</span>
                                <strong>— 0,3% —</strong>
                            </div>

                            <p>Comune negli oceani e in molti minerali.</p>
                        </li>

                        <li id="cromo" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Cromo (Cr)</span>
                                <strong>— 0,26% —</strong>
                            </div>

                            <p>Presente in piccole quantità nelle rocce.</p>
                        </li>

                        <li id="manganese" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Manganese (Mn)</span>
                                <strong>— 0,10% —</strong>
                            </div>

                            <p>Importante per la formazione di numerosi minerali.</p>
                        </li>

                        <li id="fosforo" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Fosforo (P)</span>
                                <strong>— 0,09% —</strong>
                            </div>

                            <p>Essenziale per tutti gli esseri viventi.</p>
                        </li>

                        <li id="potassio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Potassio (K)</span>
                                <strong>— 0,03% —</strong>
                            </div>

                            <p>Comune nei feldspati e in altri minerali.</p>
                        </li>

                        <li id="titanio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Titanio (Ti)</span>
                                <strong>— 0,03% —</strong>
                            </div>

                            <p>Presente in minerali come il rutilo.</p>
                        </li>

                        <li id="carbonio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Carbonio (C)</span>
                                <strong>— 0,02% —</strong>
                            </div>

                            <p>Base della vita sulla Terra.</p>
                        </li>

                        <li id="idrogeno" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Idrogeno (H)</span>
                                <strong>— 0,02% —</strong>
                            </div>

                            <p>Componente fondamentale dell'acqua.</p>
                        </li>
                    </ul>
                </section>

                <section>

                    <div className = "intro_material_planet">
                        <h5>Elementi rari (Terre Rare)</h5>

                        <p>
                            Le terre rare sono un gruppo di 17 elementi chimici presenti in
                            quantità molto ridotte rispetto agli elementi principali della Terra.
                            Non sono sempre rare nella crosta terrestre, ma difficilmente si
                            trovano concentrate in giacimenti sfruttabili economicamente.
                            Oggi sono indispensabili per la produzione di smartphone, batterie,
                            computer, satelliti, motori elettrici e turbine eoliche.
                        </p>
                    </div>

                    <ul className = "list_material_planet">

                        <li id="scandio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Scandio (Sc)</span>
                                <strong>— ~22 ppm —</strong>
                            </div>
                            <p>Utilizzato in leghe aerospaziali e lampade ad alta intensità.</p>
                        </li>

                        <li id="ittrio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Ittrio (Y)</span>
                                <strong>— ~31 ppm —</strong>
                            </div>
                            <p>Impiegato nei LED, nei laser e nei superconduttori.</p>
                        </li>

                        <li id="lantanio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Lantanio (La)</span>
                                <strong>— ~30 ppm —</strong>
                            </div>
                            <p>Utilizzato nelle batterie ricaricabili e nelle lenti ottiche.</p>
                        </li>

                        <li id="cerio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Cerio (Ce)</span>
                                <strong>— ~66 ppm —</strong>
                            </div>
                            <p>Usato per lucidare il vetro e nei catalizzatori.</p>
                        </li>

                        <li id="praseodimio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Praseodimio (Pr)</span>
                                <strong>— ~9 ppm —</strong>
                            </div>
                            <p>Impiegato nei magneti permanenti e nel vetro speciale.</p>
                        </li>

                        <li id="neodimio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Neodimio (Nd)</span>
                                <strong>— ~28 ppm —</strong>
                            </div>
                            <p>Fondamentale per magneti ad alte prestazioni, motori elettrici e hard disk.</p>
                        </li>

                        <li id="promezio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Promezio (Pm)</span>
                                <strong>— Radioattivo —</strong>
                            </div>
                            <p>Elemento estremamente raro, impiegato nella ricerca scientifica.</p>
                        </li>

                        <li id="samario" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Samario (Sm)</span>
                                <strong>— ~6 ppm —</strong>
                            </div>
                            <p>Usato nei magneti permanenti e nei reattori nucleari.</p>
                        </li>

                        <li id="europio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Europio (Eu)</span>
                                <strong>— ~2 ppm —</strong>
                            </div>
                            <p>Responsabile dei colori rosso e blu nei display e nei LED.</p>
                        </li>

                        <li id="gadolinio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Gadolinio (Gd)</span>
                                <strong>— ~5 ppm —</strong>
                            </div>
                            <p>Utilizzato nei mezzi di contrasto per la risonanza magnetica.</p>
                        </li>

                        <li id="terbio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Terbio (Tb)</span>
                                <strong>— ~1 ppm —</strong>
                            </div>
                            <p>Impiegato nei fosfori verdi per schermi e lampade.</p>
                        </li>

                        <li id="disprosio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Disprosio (Dy)</span>
                                <strong>— ~5 ppm —</strong>
                            </div>
                            <p>Migliora la resistenza al calore dei magneti permanenti.</p>
                        </li>

                        <li id="olmio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Olmio (Ho)</span>
                                <strong>— ~1 ppm —</strong>
                            </div>
                            <p>Utilizzato nei laser e nei magneti speciali.</p>
                        </li>

                        <li id="erbio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Erbio (Er)</span>
                                <strong>— ~3 ppm —</strong>
                            </div>
                            <p>Essenziale per gli amplificatori delle fibre ottiche.</p>
                        </li>

                        <li id="tulio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Tulio (Tm)</span>
                                <strong>— ~0,5 ppm —</strong>
                            </div>
                            <p>Impiegato nei laser medicali e nelle apparecchiature a raggi X.</p>
                        </li>

                        <li id="itterbio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Itterbio (Yb)</span>
                                <strong>— ~3 ppm —</strong>
                            </div>
                            <p>Utilizzato nei laser industriali e negli orologi atomici.</p>
                        </li>

                        <li id="lutezio" className="single_material_planet">
                            <div className="d-flex justify-content-around">
                                <span>Lutezio (Lu)</span>
                                <strong>— ~0,8 ppm —</strong>
                            </div>
                            <p>Impiegato nella medicina nucleare e nei catalizzatori.</p>
                        </li>
                    </ul>
                </section>
            </section>

            <div>
                Il processo di formazione della terra

                <p>Accumulo di materia</p>
                <p>La nascita della Luna</p>
                <p>Raffreddamento e oceani</p>
            </div>
        </>
    )
}

export default Planets;