import { Link } from "react-router-dom";

import imgBattaglie from "../img/battaglie.jpg";
import imgArmi from "../img/armi.jpg";
import imgTattiche from "../img/tattiche.jpg";
import imgScienza from "../img/scienza.jpg";
import imgReligione from "../img/religione.jpg";
import imgInvenzioni from "../img/invenzioni.jpg";
import imgMisteri from "../img/misteri.webp";

import { epoche } from "../data/epoche";
import { TimeLine } from "../data/Timeline";

const Home = () => {


  return(
    <>
        <section className = "home">
          <h1>Viaggio nel Tempo</h1>
          <p>Scopri le civiltà che hanno plasmato il nostro mondo, le invenzioni che hanno cambiato la storia, e le battaglie che hanno definito il nostro futuro.</p>
        </section>

        <section>
          <h3 id = "le-epoche-storiche">Le Epoche Storiche</h3>
            {epoche[0]?.content1?.map((item) => (
                <div key={item.id} className="card_epoche">
                  <img src={item.img} alt={item.title} />
                    <div className = "card_epoche_text">
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                </div>
            ))}

          <Link to="/epoche-storiche">
            <div className = "falseButton">
              Scopri di più
            </div>
          </Link>
        </section>

        <section>
          <article id = "earth">
              <h3>Earth</h3>
              <p>Sai come si e formata la terra e quali materiali la compongono? Scopri di più!</p>
            <div className="falseButtonEarth">Scopri di più</div>
          </article>
          <article id = "nature">
            <h3>Nature</h3>
            <p>Ogni ambiente ha le sue caratteristiche uniche, perche'? Gli esseri viventi non possono vivere senza.</p>
            <div className="falseButtonNature">Scopri di più</div>
          </article>
        </section>

        <section className="discover-section">
          <h3 className = "text-center mb-2">Il lato ingegnoso e crudo dell'umanità</h3>

          <div className="carousel">
            <div className="carousel-card">
              <img src={imgBattaglie} alt="Battaglie storiche" />
              <h3>Battaglie storiche</h3>
              <p>Scopri le battaglie che hanno cambiato il corso della storia.</p>
            </div>

            <div className="carousel-card">
              <img src={imgArmi} alt="Armi sviluppate" />
              <h3>Armi sviluppate</h3>
              <p>Guarda le armi che hanno cambiato le tattiche militari.</p>
            </div>

            <div className="carousel-card">
              <img src={imgTattiche} alt="Tattiche militari" />
              <h3>Tattiche militari</h3>
              <p>In ogni epoca le tattiche si sono evolute, perche?</p>
            </div>

            <div className="carousel-card">
              <img src={imgScienza} alt="Scienza" />
              <h3>Scienza</h3>
              <p>La scienza continua ad evolversi, ma tutto parte da una semplice curiosità.</p>
            </div>

            <div className="carousel-card">
              <img src={imgReligione} alt="Religione" />
              <h3>Religione</h3>
              <p>nel corso della storia, vi sono state e vi sono tuttora una miriade di religioni, quante ne conosciamo?</p>
            </div>
          </div>

          <div className = "falseButton">
            <Link to="/epoche-storiche">Scopri di più</Link>
          </div>
        </section>

        <section id = "continenti">
            <h3 className = "text-center mb-2">I continenti</h3>
            <p>Ogni continente ha le sue caratteristiche uniche e la storia non e la stessa per ogni continente, come si sono formati e quali storie hanno?</p>
            <div className = "falseButtonContinenti">Scopri di più</div>
        </section>

        <section className="dicover-more">
          <h3 className = "text-center mb-5">Meraviglie e curiosità</h3>

          <div className="carousel">
            <div className="carousel-card">
              <img src={imgInvenzioni} alt="Invenzioni" />
              <h3>Invenzioni</h3>
              <p>Scopri le invenzioni che hanno influenzato la vita quotidiana.</p>
            </div>

            <div className="carousel-card">
              <img src={imgMisteri} alt="Misteri storici" />
              <h3>Misteri storici</h3>
              <p>La storia non e sempre chiara, ci sono misteri per cui non avremo mai risposte e altri a cui non avremo mai certezze</p>
            </div>
          </div>
          <div className = "falseButton">Scopri di più</div>
        </section>

        <section id = "timeline">
          <div className="timelineCarousel">

            {TimeLine.map((timeline) => (
              <div key={timeline.id} className="timelineSlide">

                <h3 className = "text-center">
                  Cosa succedeva nel mondo nel {timeline.title}?
                </h3>

                {timeline.content.map((item) => (
                  <div 
                    key={item.id} className="carouselTimeLine-card"
                    id={`${timeline.title}-${item.title}`
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/[^\w-]/g, '')}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}

              </div>
            ))}

          </div>
          <div className = "falseButton">Scopri di più</div>
        </section>
    </>
  );
};

export default Home;