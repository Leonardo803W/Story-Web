import imgPreistoria from "../img/card_img_lista_epoche/preistoria.jpg";
import imgEtaAntica from "../img/card_img_lista_epoche/eta_antica.jpg";
import imgMedioevo from "../img/card_img_lista_epoche/medioevo.webp";
import imgEtaModerna from "../img/card_img_lista_epoche/eta_moderna.jpg";
import imgEtaContemporanea from "../img/card_img_lista_epoche/eta_contemporanea.jpg";
import imgBattaglie from "../img/battaglie.jpg";
import imgArmi from "../img/armi.jpg";
import imgTattiche from "../img/tattiche.jpg";

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
              <h4>Battaglie storiche</h4>
              <p>Scopri le battaglie che hanno cambiato il corso della storia.</p>
            </div>

            <div className="carousel-card">
              <img src={imgArmi} alt="Armi sviluppate" />
              <h4>Armi sviluppate</h4>
              <p>Guarda le armi che hanno cambiato le tattiche militari.</p>
            </div>

            <div className="carousel-card">
              <img src={imgTattiche} alt="Tattiche militari" />
              <h4>Tattiche militari</h4>
              <p>In ogni epoca le tattiche si sono evolute, perche?</p>
            </div>
          </div>
        </section>
    </>
  );
};

export default Home;
