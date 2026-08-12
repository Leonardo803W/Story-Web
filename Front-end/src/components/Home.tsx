import { AnimatedSection } from "./AnimatedSection"
import { ButtonLink } from "./ButtonLink"
import { categorie } from "../data/categorie";
import { CategoryCard } from "./CategoryCard";
import { Link } from "react-router-dom";
import { TimeLine } from "../data/Timeline";
import { epoche } from "../data/epoche";
import { EpochCard } from "./EpochCard";
import { AnimationIntro } from "./AnimationIntro";

const Home = () => {


  return(
    <>
        <AnimationIntro>
          <section className = "home background">
            <h1>Viaggio nel Tempo</h1>
            <p>Scopri le civiltà che hanno plasmato il nostro mondo, le invenzioni che hanno cambiato la storia, e le battaglie che hanno definito il nostro futuro.</p>
          </section>
        </AnimationIntro>

        <AnimatedSection>
          <h3 id = "le_epoche_storiche">Le Epoche Storiche</h3>

          <section id="content_epoche">
            {epoche[0].content1?.map(item => (
              <EpochCard key={item.id} {...item} />
            ))}
          </section>
          
          <ButtonLink to="/epoche-storiche/:id?" className = "false_button common_button">
            Scopri di più
          </ButtonLink>
        </AnimatedSection>

        <AnimatedSection>
          <section id="group_nature_earth">
            <article id = "earth" className = "background">
              <h3>Earth</h3>
              <p id = "text_earth">Sai come si e formata la terra e quali materiali la compongono? Scopri di più!</p>
            
            <ButtonLink to="/Planets" className="false_button_earth false_button">
                    Scopri di più
            </ButtonLink>
            </article>
            <article id = "nature" className = "background">
              <h3>Nature</h3>
              <p id = "text_nature">Ogni ambiente ha le sue caratteristiche uniche, perche'? Gli esseri viventi non possono vivere senza.</p>
              
              <ButtonLink to="/Nature" className="false_button_nature false_button">
                      Scopri di più
              </ButtonLink>
            </article>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <>
            <h3 className = "text-center mb-2">Il lato ingegnoso e crudo dell'umanità</h3>
                   
              <div className="carousel">
                {categorie[0].content1?.map((item) => (
                  <CategoryCard key={item.id} {...item}/>
                ))}
              </div>
          
              <ButtonLink to="/storie" className="false_button common_button">
                Scopri di più
              </ButtonLink>
            </>
        </AnimatedSection>

        <AnimatedSection>
          <section id = "continenti" className = "background">
              <h3 className = "text-center mb-2">I continenti</h3>
              <p>Ogni continente ha le sue caratteristiche uniche e la storia non e la stessa per ogni continente, come si sono formati e quali storie hanno?</p>
              
              <Link to="/continents">
                <div className = "false_button_continenti false_button">
                  Scopri di più
                </div>
              </Link>
            </section>

            <section className="dicover-more">
                <h3 className = "text-center mb-5">Meraviglie e curiosità</h3>

                <div className="carousel">
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
        </AnimatedSection>

        <AnimatedSection>
          <div className="carousel">
                      
            {TimeLine.map((timeline) => (
                  <div key={timeline.id} id = "group_line_time">
                      
                      <h3 className = "text-center">
                          Cosa succedeva nel mondo nel {timeline.title}?
                      </h3>
                          
                      <section className = "carouselTimeLine_card flex_timeLine">
                          {timeline.content.map((item) => (
                              <div 
                              key={item.id}
                              className = "background"
                              style={{
                                  backgroundImage: `url(${item.img})`
                                  }}
                              >
                                  <h4>{item.title}</h4>
                                  <p>{item.text}</p>
                              </div>
                          ))}
                      </section>
                      
                  </div>
              ))}
                      
          </div>
        </AnimatedSection>
    </>
  );
};

export default Home;