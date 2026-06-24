import { useParams } from "react-router-dom";
import { epoche } from "../data/epoche";

const DettaglioEpoca = () => {
    const { epocaId, subItemId } = useParams();

    const epoca = epoche[1].content2!.find(
        (item) => item.id === Number(epocaId)
    );

    const dettaglio = epoca?.content.find(
        (subItem) => subItem.id === Number(subItemId)
    );

    if (!epoca || !dettaglio) {
        return <h1>Epoca non trovata</h1>;
    }

    return (
        <section>
            <div className = "intro_lista">
                <h1>{dettaglio.title}</h1>
                <p>{dettaglio.text}</p>
            </div>

            <article className = "lista">
                <div>
                    <h3>Eventi principali:</h3>
                    <p>{dettaglio.event}</p>
                </div>

                <div>
                    <h3>Invenzioni:</h3>
                    <p>{dettaglio.invenzioni}</p>
                </div>
            </article>
            
            <div className = "group_links">
                <h3>Fonti:</h3>
                <a
                    href={dettaglio.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className = "button_epoche">Wikipedia</button>
                </a>
            </div>
        </section>
    );
};

export default DettaglioEpoca;