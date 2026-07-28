import { EpochCard } from "./EpochCard";
import { ButtonLink } from "./ButtonLink"

import { epoche } from "../data/epoche";

const HistoricalEpochs = () => {


    return(
        <>
            <h3 id = "le-epoche-storiche">Le Epoche Storiche</h3>

                <section id="content_epoche">
                    {epoche[0].content1?.map(item => (
                        <EpochCard key={item.id} {...item} />
                    ))}
                </section>

            <ButtonLink to="/Nature" className="falseButton">
                    Scopri di più
            </ButtonLink>
        </>
    )
}

export default HistoricalEpochs