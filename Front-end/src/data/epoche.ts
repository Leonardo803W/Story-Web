import imgPreistoria from "../img/card_img_lista_epoche/preistoria.jpg";
import imgEtaAntica from "../img/card_img_lista_epoche/eta_antica.jpg";
import imgMedioevo from "../img/card_img_lista_epoche/medioevo.webp";
import imgEtaModerna from "../img/card_img_lista_epoche/eta_moderna.jpg";
import imgEtaContemporanea from "../img/card_img_lista_epoche/eta_contemporanea.jpg";
import imgEtaMetalli from "../img/card_img_lista_epoche/età_dei_metalli.jpg";

export const epoche = [

  {
    id: 1,
    title: "home",
    content1: [
        {
        id: 1,
        title: "Preistoria",
        text: "divisa in Paleolitico, Mesolitico e Neolitico",
        img: imgPreistoria
      },
      {
        id: 4,
        title: "Eta dei metalli",
        text: "divisa in Eta del rame, Eta del bronzo e Eta del ferro",
        img: imgEtaMetalli
      },
      {
        id: 3,
        title: "Eta Antica",
        text: "Civilta antiche orientali, Civilta antiche occidentali e Roma",
        img: imgEtaAntica
      },
      {
        id: 4,
        title: "Medioevo",
        text: "divisa in Alto medievo e Basso medioevo",
        img: imgMedioevo
      },
      {
        id: 5,
        title: "Eta Moderna",
        text: "Rinascimento, eta delle scoperte geografiche e dell'assolutismo",
        img: imgEtaModerna
      },
      {
        id: 6,
        title: "Eta Contemporanea",
        text: "Eta delle rivoluzioni, XIX secolo, XX secolo e XXI secolo",
        img: imgEtaContemporanea
      }
    ]
  },
  {
    id: 2,
    title: "section-epoche-storiche",
    content2: [
        {
        id: 1,
        title: "Preistoria",
        content: [
          {
            id: 1,
            title: "Paleolitico (circa 3,3 milioni - 10.00 a.C.)",
            text: "Il Paleolitico è il periodo più antico della storia umana, caratterizzato dall'uso di strumenti in pietra e dalla vita nomade dei primi esseri umani.",
            event: "Padronanza del fuoco  (circa 1,5 - 1 milione di anni fa)",
            link: "https://it.wikipedia.org/wiki/Paleolitico",
            invenzioni: "Scheggiatura della pietra",
          },
          {
            id: 2,
            title: "Mesolitico (circa 10.000 - 8.000 a.C.)",
            text: "Il Mesolitico è il periodo di transizione tra Paleolitico e Neolitico, caratterizzato da un clima più mite dopo l'ultima glaciazione e da comunità umane sempre più stabili.",
            event: "Fine dell'ultima era glaciale",
            link: "https://it.wikipedia.org/wiki/Mesolitico",
            invenzioni: "Arco e frecce, microliti"
          },
          {
            id: 3,
            title: "Neolitico (circa 8.000 - 3.000 a.C.)",
            text: "Il Neolitico è il periodo in cui si sviluppano agricoltura e allevamento, favorendo la nascita dei primi villaggi stabili.",
            event: "Rivoluzione neolitica",
            link: "https://it.wikipedia.org/wiki/Neolitico",
            invenzioni: "Agricoltura, allevamento, ceramica"
          }
        ]
      },
      {
        id: 2,
        title: "Eta dei metalli",
        content: [
          {
            id: 1,
            title: "Eta del rame",
            text: "Periodo caratterizzato dall'utilizzo del rame per la produzione di utensili e ornamenti.",
            event: "Prime lavorazioni dei metalli",
            link: "https://it.wikipedia.org/wiki/Et%C3%A0_del_rame",
            invenzioni: "Metallurgia del rame"
          },
          {
            id: 2,
            title: "Eta del bronzo",
            text: "Periodo caratterizzato dall'uso del bronzo, una lega di rame e stagno, per la realizzazione di armi e strumenti più resistenti.",
            event: "Nascita delle prime grandi civiltà urbane",
            link: "https://it.wikipedia.org/wiki/Et%C3%A0_del_bronzo",
            invenzioni: "Bronzo, ruota, carro"
          },
          {
            id: 3,
            title: "Eta del ferro",
            text: "Periodo segnato dalla diffusione della lavorazione del ferro, più abbondante e resistente rispetto al bronzo.",
            event: "Diffusione delle armi in ferro",
            link: "https://it.wikipedia.org/wiki/Et%C3%A0_del_ferro",
            invenzioni: "Forgia del ferro"
          }
        ]
      },
      {
        id: 3,
        title: "Eta Antica",
        content: [
          {
            id: 1,
            title: "Antichita' Orientale (circa 3.000 a.C. - 500 a.C.)",
            text: "Periodo che comprende le grandi civiltà della Mesopotamia, dell'Egitto, della Persia, dell'India e della Cina.",
            event: "Nascita della scrittura in Mesopotamia",
            link: "https://it.wikipedia.org/wiki/Storia_antica",
            invenzioni: "Scrittura, calendario, irrigazione"
          },
          {
            id: 2,
            title: "Antichita' Classica (circa 800 a.C. - 476 d.C.)",
            text: "Periodo dominato dalle civiltà greca e romana che hanno influenzato profondamente la cultura occidentale.",
            event: "Caduta dell'Impero Romano d'Occidente (476 d.C.)",
            link: "https://it.wikipedia.org/wiki/Antichit%C3%A0_classica",
            invenzioni: "Diritto romano, strade, acquedotti"
          }
        ]
      },
      {
        id: 4,
        title: "Medioevo",
        content: [
          {
            id: 1,
            title: "Alto Medioevo (circa 476 d.C. - 1000 d.C.)",
            text: "Periodo successivo alla caduta dell'Impero Romano d'Occidente, caratterizzato dalla formazione dei regni romano-barbarici.",
            event: "Incoronazione di Carlo Magno (800 d.C.)",
            link: "https://it.wikipedia.org/wiki/Alto_Medioevo",
            invenzioni: "Mulino ad acqua migliorato"
          },
          {
            id: 2,
            title: "Basso Medioevo (circa 1000 d.C. - 1492 d.C.)",
            text: "Periodo di crescita economica, sviluppo delle città e delle università europee.",
            event: "Scoperta dell'America (1492 d.C.)",
            link: "https://it.wikipedia.org/wiki/Basso_Medioevo",
            invenzioni: "Occhiali, orologio meccanico"
          }
        ]
      },
      {
        id: 5,
        title: "Eta Moderna",
        content: [
          {
            id: 1,
            title: "Rinascimento (circa 1492 d.C. - 1600 d.C.)",
            text: "Periodo di rinascita culturale, artistica e scientifica che ebbe origine in Italia e si diffuse in Europa.",
            event: "Pubblicazione delle opere di Leonardo e Michelangelo",
            link: "https://it.wikipedia.org/wiki/Rinascimento",
            invenzioni: "Stampa a caratteri mobili"
          },
          {
            id: 2,
            title: "Età delle Monarchie Assolute (circa 1600 d.C. - 1715 d.C.)",
            text: "Periodo caratterizzato dal consolidamento del potere assoluto dei sovrani europei.",
            event: "Regno di Luigi XIV in Francia",
            link: "https://it.wikipedia.org/wiki/Assolutismo",
            invenzioni: "Miglioramenti nella navigazione"
          },
          {
            id: 3,
            title: "Illuminismo (circa 1715 d.C. - 1789 d.C.)",
            text: "Movimento culturale che promuoveva la ragione, la scienza e i diritti dell'uomo.",
            event: "Pubblicazione dell'Encyclopédie",
            link: "https://it.wikipedia.org/wiki/Illuminismo",
            invenzioni: "Enciclopedia moderna"
          }
        ]
      },
      {
        id: 6,
        title: "Eta Contemporanea",
        content: [
          {
            id: 1,
            title: "Età delle Rivoluzioni (circa 1789 d.C. - 1848 d.C.)",
            text: "Periodo segnato dalla Rivoluzione Francese e dai movimenti liberali e nazionali.",
            event: "Rivoluzione Francese (1789)",
            link: "https://it.wikipedia.org/wiki/Rivoluzione_francese",
            invenzioni: "Macchina a vapore perfezionata"
          },
          {
            id: 2,
            title: "Età Industriale (circa 1848 d.C. - 1914 d.C.)",
            text: "Periodo caratterizzato dall'industrializzazione e dai grandi progressi tecnologici.",
            event: "Seconda rivoluzione industriale",
            link: "https://it.wikipedia.org/wiki/Rivoluzione_industriale",
            invenzioni: "Telefono, elettricità, automobile"
          },
          {
            id: 3,
            title: "Età delle Guerre Mondiali (circa 1914 d.C. - 1945 d.C.)",
            text: "Periodo segnato dalla Prima e dalla Seconda Guerra Mondiale.",
            event: "Fine della Seconda Guerra Mondiale (1945)",
            link: "https://it.wikipedia.org/wiki/Seconda_guerra_mondiale",
            invenzioni: "Radar, aereo a reazione"
          },
          {
            id: 4,
            title: "Guerra Fredda (circa 1945 d.C. - 1991 d.C.)",
            text: "Periodo di tensione politica e militare tra Stati Uniti e Unione Sovietica.",
            event: "Caduta del Muro di Berlino (1989)",
            link: "https://it.wikipedia.org/wiki/Guerra_fredda",
            invenzioni: "Satelliti artificiali, computer"
          },
          {
            id: 5,
            title: "Età Globale o Digitale (circa 1991 d.C. - presente)",
            text: "Periodo caratterizzato dalla globalizzazione, dall'espansione di Internet e dalle tecnologie digitali.",
            event: "Diffusione mondiale di Internet",
            link: "https://it.wikipedia.org/wiki/Globalizzazione",
            invenzioni: "Internet, smartphone, intelligenza artificiale"
          }
        ]
      },
    ]
  }
   
]
