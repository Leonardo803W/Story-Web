import { ButtonLink } from "./ButtonLink"

const EarthNatureSection = () => {


    return(
        <>
          <section id="group_nature_earth">
            <article id = "earth">
              <h3>Earth</h3>
              <p id = "text_earth">Sai come si e formata la terra e quali materiali la compongono? Scopri di più!</p>
            
            <ButtonLink to="/Planets" className="falseButtonEarth">
                    Scopri di più
            </ButtonLink>
            </article>
            <article id = "nature">
              <h3>Nature</h3>
              <p id = "text_nature">Ogni ambiente ha le sue caratteristiche uniche, perche'? Gli esseri viventi non possono vivere senza.</p>
              
              <ButtonLink to="/Nature" className="falseButtonNature">
                      Scopri di più
              </ButtonLink>
            </article>
          </section>
        </>
    )
}

export default EarthNatureSection