import { uniqueEnvironments } from "../data/enviroment_nature";
import { livingOrganisms } from "../data/living_organism";
import { endangeredAnimals } from "../data/living_organism_risk";
import { naturalDisasters } from "../data/nature_disaster";

const Nature = () => {

    return(
        <>
            <section id="intro_nature">
                <h3>Nature</h3>

                <p>
                    La natura è l'insieme di tutti gli ambienti, degli organismi
                    viventi e dei processi naturali che rendono possibile la vita
                    sulla Terra. Ogni ecosistema è collegato agli altri e anche
                    eventi molto lontani possono influenzarsi reciprocamente.
                </p>

                <p>
                    Inoltre ospita ecosistemi estremamente diversi tra loro.
                    Sebbene possano sembrare indipendenti, molti sono collegati
                    attraverso il clima, le correnti oceaniche e l'atmosfera.
                </p>
            </section>

            <section id="ambienti_unici">
                <h4>Ambienti unici della Terra</h4>

                <div>
                    {uniqueEnvironments.map((environment) => (
                        <article
                            key={environment.id}
                            id={environment.articleId}
                            className = "environment_article"
                        >
                            <h5>{environment.title}</h5>

                            <p>{environment.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="catastrofi_naturali">
                <h4>Catastrofi naturali</h4>

                <p>
                    Le catastrofi naturali sono eventi causati dai processi
                    geologici, atmosferici o climatici della Terra. Alcune
                    fanno parte del normale ciclo del pianeta, mentre altre
                    possono essere aggravate dai cambiamenti climatici.
                </p>

                <div>
                    {naturalDisasters.map((disaster) => (
                        <article 
                            key={disaster.id} 
                            id={disaster.id}
                            className = "natural_disaster"
                        >
                            <h3>{disaster.name}</h3>

                            <p>{disaster.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="organismi_viventi">
                <h4>Gli organismi viventi</h4>

                <p>
                    Attualmente sono state descritte dalla scienza circa
                    <strong> 2,2 milioni di specie</strong>, ma si stima che
                    sulla Terra possano esisterne tra gli 8 e i 10 milioni.
                    Molte specie, soprattutto negli oceani e nelle foreste
                    tropicali, non sono ancora state scoperte.
                </p>

                <h5>Le principali categorie di organismi viventi</h5>

                <ul>
                    {livingOrganisms.map((organism) => (
                        <li key={organism.id}>
                            {organism.name}
                        </li>
                    ))}
                </ul>
            </section>

            <section id="animali_estinzione">
                <h4>Animali a rischio di estinzione</h4>

                <p>
                    Molte specie stanno diminuendo a causa della perdita del
                    loro habitat, del cambiamento climatico, dell'inquinamento,
                    della caccia e del commercio illegale.
                </p>

                <ul>
                    {endangeredAnimals.map((animal) => (
                        <li key={animal.id}>
                            {animal.emoji} {animal.name}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Nature;