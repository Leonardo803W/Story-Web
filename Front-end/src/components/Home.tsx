import { Link } from "react-router-dom";

import { epoche } from "../data/epoche";
import { TimeLine } from "../data/Timeline";
import { categorie } from "../data/categorie";

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
                <Link 
                  to={`/epoche-storiche/${item.id}`}
                  key={item.id}
                >
                  <div className="card_epoche">
                      <img src={item.img} alt={item.title} />
                      <div className="card_epoche_text">
                          <h5>{item.title}</h5>
                          <p>{item.text}</p>
                      </div>
                  </div>
              </Link>
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
            
            <Link to="/Planets">
              <div className = "falseButtonEarth">
                Scopri di più
              </div>
            </Link>
          </article>
          <article id = "nature">
            <h3>Nature</h3>
            <p>Ogni ambiente ha le sue caratteristiche uniche, perche'? Gli esseri viventi non possono vivere senza.</p>
            
            <Link to="/Nature">
              <div className = "falseButtonNature">
                Scopri di più
              </div>
            </Link>
          </article>
        </section>

        <section className="discover-section">
          <h3 className = "text-center mb-2">Il lato ingegnoso e crudo dell'umanità</h3>
         
          <div className="carousel">
            {categorie[0].content1?.map((item) => (
              <div key = {item.id} className="carousel-card">
                <img src = {item.img}></img>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <Link to="/storie">
            <div className = "falseButton">
              Scopri di più
            </div>
          </Link>
        </section>

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

          <div className="carousel">
            <article>
                <h3>5.000 +</h3>
                <p>Anni di storia</p>
              </article>
              <article>
                <h3>1.000 +</h3>
                <p>Civiltà Esplorate</p>
              </article>
              <article>
                <h3>500 +</h3>
                <p>Invenzioni Documentate</p>
              </article>
              <article>
                <h3>200 +</h3>
                <p>Battaglie Analizzate</p>
              </article>
              <article>
                <h3>7.000 +</h3>
                <p>lingue parlate e conosciute</p>
              </article>
          </div>
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
                    key={item.id}
                    className="carouselTimeLine-card"
                    style={{
                        backgroundImage: `url(${item.img})`
                    }}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}

              </div>
            ))}

          </div>
        </section>
    </>
  );
};

export default Home;