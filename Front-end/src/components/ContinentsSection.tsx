import { Link } from "react-router-dom";

const ContinentsSection = () => {


    return(
        <>
            <section id = "continenti">
              <h3 className = "text-center mb-2">I continenti</h3>
              <p>Ogni continente ha le sue caratteristiche uniche e la storia non e la stessa per ogni continente, come si sono formati e quali storie hanno?</p>
              
              <Link to="/continents">
                <div className = "falseButtonContinenti">
                  Scopri di più
                </div>
              </Link>
            </section>

            <section className="dicover-more">
                <h3 className = "text-center mb-5">Meraviglie e curiosità</h3>

                <div className="Carousel">
                <article className = "item_home">
                    <h3>5.000 +</h3>
                    <p>Anni di storia</p>
                </article>
                <article className = "item_home">
                    <h3>1.000 +</h3>
                    <p>Civiltà Esplorate</p>
                </article>
                <article className = "item_home">
                    <h3>500 +</h3>
                    <p>Invenzioni Documentate</p>
                    </article>
                    <article className = "item_home">
                        <h3>200 +</h3>
                        <p>Battaglie Analizzate</p>
                    </article>
                    <article className = "item_home">
                        <h3>7.000 +</h3>
                        <p>lingue parlate e conosciute</p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default ContinentsSection