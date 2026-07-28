import { ButtonLink } from "./ButtonLink"

import { categorie } from "../data/categorie";
import { CategoryCard } from "./CategoryCard";

const StoriesSection = () => {


    return(
        <>
           <h3 className = "text-center mb-2">Il lato ingegnoso e crudo dell'umanità</h3>
         
          <div className="carousel">
            {categorie[0].content1?.map((item) => (
              <CategoryCard key={item.id} {...item}/>
            ))}
          </div>

            <ButtonLink to="/storie" className="falseButton">
                Scopri di più
            </ButtonLink>
        </>
    )
}

export default StoriesSection