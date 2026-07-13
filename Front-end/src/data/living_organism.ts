import imgKindomAnimals from "../img/nature/regni/regno_animale.jpg";
import imgKindomPlants from "../img/nature/regni/regno_piante.webp";
import imgKindomFungi from "../img/nature/regni/regno_funghi.jpg";
import imgKindomProtists from "../img/nature/regni/regno_protisti.jpeg";
import imgKindomBacteria from "../img/nature/regni/regno_batteri.jpg";
import imgKindomArchaea from "../img/nature/regni/regno_archei.gif";

export const livingOrganisms = [
    {
        id: "animals",
        name: "Animali",
        description:
            "Organismi pluricellulari eterotrofi capaci di muoversi e di reagire rapidamente agli stimoli dell'ambiente. Comprendono mammiferi, uccelli, rettili, anfibi, pesci e invertebrati.",
        color: "#F94144",
        img: imgKindomAnimals
    },
    {
        id: "plants",
        name: "Piante",
        description:
            "Organismi pluricellulari autotrofi che producono il proprio nutrimento attraverso la fotosintesi. Sono fondamentali per la produzione di ossigeno e per gli ecosistemi terrestri.",
        color: "#43AA8B",
        img: imgKindomPlants
    },
    {
        id: "fungi",
        name: "Funghi",
        description:
            "Organismi eterotrofi che assorbono i nutrienti dalla materia organica. Comprendono funghi, muffe e lieviti e svolgono un ruolo essenziale nella decomposizione.",
        color: "#9B5DE5",
        img: imgKindomFungi
    },
    {
        id: "protists",
        name: "Protisti",
        description:
            "Gruppo molto vario di organismi, per lo più unicellulari, che comprende alghe microscopiche, amebe e protozoi. Vivono soprattutto in ambienti acquatici.",
        color: "#F9C74F",
        img: imgKindomProtists
    },
    {
        id: "bacteria",
        name: "Batteri",
        description:
            "Microrganismi unicellulari privi di nucleo. Sono presenti praticamente ovunque e possono essere utili, innocui o, in alcuni casi, patogeni.",
        color: "#277DA1",
        img: imgKindomBacteria
    },
    {
        id: "archaea",
        name: "Archei",
        description:
            "Microrganismi unicellulari simili ai batteri ma geneticamente distinti. Molti vivono in ambienti estremi come sorgenti termali, laghi salati e fondali oceanici.",
        color: "#F3722C",
        img: imgKindomArchaea
    }
];