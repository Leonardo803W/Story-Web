import imgPreistoria from "../img/card_img_lista_epoche/preistoria.jpg";
import imgEtaAntica from "../img/card_img_lista_epoche/eta_antica.jpg";
import imgMedioevo from "../img/card_img_lista_epoche/medioevo.webp";
import imgEtaModerna from "../img/card_img_lista_epoche/eta_moderna.jpg";
import imgEtaContemporanea from "../img/card_img_lista_epoche/eta_contemporanea.jpg";
import imgBattaglie from "../img/battaglie.jpg";
import imgArmi from "../img/armi.jpg";
import imgTattiche from "../img/tattiche.jpg";
import imgScienza from "../img/scienza.jpg";
import imgReligione from "../img/religione.jpg";
import imgInvenzioni from "../img/invenzioni.jpg";
import imgMisteri from "../img/misteri.webp";

const epoche = [
    {
      id: 1,
      title: "Preistoria",
      text: "divisa in Paleolitico, Mesolitico e Neolitico",
      img: imgPreistoria
    },
    {
      id: 2,
      title: "Eta Antica",
      text: "Civilta antiche orientali, Civilta antiche occidentali e Roma",
      img: imgEtaAntica
    },
    {
      id: 3,
      title: "Medioevo",
      text: "divisa in Alto medievo e Basso medioevo",
      img: imgMedioevo
    },
    {
      id: 4,
      title: "Eta Moderna",
      text: "Rinascimento, eta delle scoperte geografiche e dell'assolutismo",
      img: imgEtaModerna
    },
    {
      id: 5,
      title: "Eta Contemporanea",
      text: "Eta delle rivoluzioni, XIX secolo, XX secolo e XXI secolo",
      img: imgEtaContemporanea
    }
]

const TimeLine = [
    {
        id: 1,
        title: "Medioevo",
        content: [
            {
                id: 1,
                title: "Europa",
                text:"In Europa è stato un periodo di grandi cambiamenti, caratterizzato da guerre, carestie e pestilenze, ma anche da importanti sviluppi culturali e artistici.",
                
            },
            {
                id: 2,
                title: "Asia",
                text: "L'asia visse un periodo d'oro, per esempio Cina sotto le dinastie Tang e Song furono perfezionati strumenti che cambiarono il mondo come la stampa a caratteri mobili, la polvere da sparo e la bussola magnetica.",
                
            },
            {
                id: 3,
                title: "Americhe",
                text: "In America civilta' avanzate come i Maya, svilupparono complessi sistemi di scrittura, astronomia e architettura monumentale.",    
                
              },
            {
                id: 4,
                title: "Africa",
                text: "In Africa il nord divenne parte integrante del mondo islamico, influenzando profondamenti i commerci, nel mentre il sud Africa, nacquero e prosperarono gli imperi dell'oro.",
                
            },
            {
                id: 5,
                title: "Oceania",
                text: "In Oceania, a differenza degli altri continenti non vi furono grandi civilta, ma le popolazioni indigene svilupparono culture uniche e adattate ai loro ambienti e anche dimostrando straordinarie capacita' di navigazione.",
                
            },
        ]
    },
    {
        id: 2,
        title: "Medioevo",
        content: [
            {
                id: 1,
                title: "Europa",
                text:"In Europa è stato un periodo di grandi cambiamenti, caratterizzato da guerre, carestie e pestilenze, ma anche da importanti sviluppi culturali e artistici."
            },
            {
                id: 2,
                title: "Asia",
                text: "L'asia visse un periodo d'oro, per esempio Cina sotto le dinastie Tang e Song furono perfezionati strumenti che cambiarono il mondo come la stampa a caratteri mobili, la polvere da sparo e la bussola magnetica."
            },
            {
                id: 3,
                title: "Americhe",
                text: "In America civilta' avanzate come i Maya, svilupparono complessi sistemi di scrittura, astronomia e architettura monumentale."
            },
            {
                id: 4,
                title: "Africa",
                text: "In Africa il nord divenne parte integrante del mondo islamico, influenzando profondamenti i commerci, nel mentre il sud Africa, nacquero e prosperarono gli imperi dell'oro."
            },
            {
                id: 5,
                title: "Oceania",
                text: "In Oceania, a differenza degli altri continenti non vi furono grandi civilta, ma le popolazioni indigene svilupparono culture uniche e adattate ai loro ambienti e anche dimostrando straordinarie capacita' di navigazione."
            },
        ]
    },
]

const Home = () => {


  return(
    <>
        <section className = "home">
          <h1>Viaggio nel Tempo</h1>
          <p>Scopri le civiltà che hanno plasmato il nostro mondo, le invenzioni che hanno cambiato la storia, e le battaglie che hanno definito il nostro futuro.</p>
        </section>

        <section>
          <h3 id = "le-epoche-storiche">Le Epoche Storiche</h3>
            {epoche.map((epoca) => (
                <div key={epoca.id} className="card_epoche">
                  <img src={epoca.img} alt={epoca.title} />
                    <div className = "card_epoche_text">
                      <h5>{epoca.title}</h5>
                      <p>{epoca.text}</p>
                    </div>
                </div>
            ))}
        </section>

        <section>
          <article id = "earth">
              <h3>Earth</h3>
              <p>Sai come si e formata la terra e quali materiali la compongono? Scopri di più!</p>
          </article>
          <article id = "nature">
            <h3>Nature</h3>
            <p>Ogni ambiente ha le sue caratteristiche uniche, perche'? Gli esseri viventi non possono vivere senza.</p>
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
        </section>

        <section id = "continenti">
            <h3 className = "text-center mb-2">I continenti</h3>
            <p>Ogni continente ha le sue caratteristiche uniche e la storia non e la stessa per ogni continente, come si sono formati e quali storie hanno?</p>
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
        </section>
    </>
  );
};

export default Home;