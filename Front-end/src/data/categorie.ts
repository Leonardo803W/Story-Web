import imgBattaglie from "../img/battaglie.jpg";
import imgArmi from "../img/armi.jpg";
import imgTattiche from "../img/tattiche.jpg";
import imgScienza from "../img/scienza.jpg";
import imgReligione from "../img/religione.jpg";
import imgInvenzioni from "../img/invenzioni.jpg";
import imgMisteri from "../img/misteri.webp";

export const categorie = [
  {
    id: 1,
    title: "carousel-home",
    content1: [
      {
        id: 1,
        title: "Battaglie storiche",
        text: "Scopri le battaglie che hanno cambiato il corso della storia.",
        img: imgBattaglie,
        link: "/battaglie"
      },
      {
        id: 2,
        title: "Armi sviluppate",
        text: "Guarda le armi che hanno cambiato le tattiche militari.",
        img: imgArmi,
        link: "/armi"
      },
      {
        id: 3,
        title: "Tattiche militari",
        text: "In ogni epoca le tattiche si sono evolute, perché?",
        img: imgTattiche,
        link: "/tattiche"
      },
      {
        id: 4,
        title: "Scienza",
        text: "La scienza continua ad evolversi, ma tutto parte da una semplice curiosità.",
        img: imgScienza,
        link: "/scienza"
      },
      {
        id: 5,
        title: "Religione",
        text: "Nel corso della storia sono esistite e continuano ad esistere moltissime religioni. Quante ne conosci?",
        img: imgReligione,
        link: "/religione"
      },
      {
        id: 6,
        title: "Invenzioni",
        text: "Scopri le invenzioni che hanno influenzato la vita quotidiana.",
        img: imgInvenzioni,
        link: "/invenzioni"
      },
      {
        id: 7,
        title: "Misteri storici",
        text: "La storia non è sempre chiara: alcuni misteri resteranno senza risposta, altri senza certezze.",
        img: imgMisteri,
        link: "/misteri"
      }
    ]
  },
  {
    id: 2,
    title: "section-categorie",
    content2: [
      {
        id: 1,
        title: "Battaglie storiche",
        content: [
          {
            id: 1,
            epoca: "Preistoria",
            eventi: [
              {
                id: 1,
                title: "Prime guerre tribali",
                text: "I primi conflitti tra gruppi umani nacquero per il controllo del territorio, delle risorse e della sopravvivenza."
              }
            ]
          },
          {
            id: 2,
            epoca: "Età Antica",
            eventi: [
              {
                id: 1,
                title: "Battaglia di Maratona",
                text: "Nel 490 a.C. gli Ateniesi respinsero l'invasione persiana, dimostrando l'efficacia della fanteria oplitica."
              }
            ]
          },
          {
            id: 3,
            epoca: "Medioevo",
            eventi: [
              {
                id: 1,
                title: "Battaglia di Hastings",
                text: "Nel 1066 Guglielmo il Conquistatore sconfisse gli Anglo-Sassoni, cambiando la storia dell'Inghilterra."
              }
            ]
          },
          {
            id: 4,
            epoca: "Età Moderna",
            eventi: [
              {
                id: 1,
                title: "Battaglia di Waterloo",
                text: "Nel 1815 Napoleone fu definitivamente sconfitto dalla coalizione guidata da Wellington e Blücher."
              }
            ]
          },
          {
            id: 5,
            epoca: "Età Contemporanea",
            eventi: [
              {
                id: 1,
                title: "Sbarco in Normandia",
                text: "Il 6 giugno 1944 gli Alleati diedero inizio alla liberazione dell'Europa occidentale dall'occupazione nazista."
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Armi sviluppate",
        content: [
          {
            id: 1,
            epoca: "Preistoria",
            eventi: [
              {
                id: 1,
                title: "Lancia in pietra",
                text: "Le prime lance permisero una caccia più sicura e segnarono l'inizio dell'evoluzione delle armi."
              }
            ]
          },
          {
            id: 2,
            epoca: "Età Antica",
            eventi: [
              {
                id: 1,
                title: "Gladio romano",
                text: "Il gladio divenne una delle armi simbolo delle legioni romane."
              }
            ]
          },
          {
            id: 3,
            epoca: "Medioevo",
            eventi: [
              {
                id: 1,
                title: "Spada lunga",
                text: "La spada lunga divenne l'arma principale dei cavalieri europei."
              }
            ]
          },
          {
            id: 4,
            epoca: "Età Moderna",
            eventi: [
              {
                id: 1,
                title: "Moschetto",
                text: "La diffusione delle armi da fuoco rivoluzionò gli eserciti europei."
              }
            ]
          },
          {
            id: 5,
            epoca: "Età Contemporanea",
            eventi: [
              {
                id: 1,
                title: "Fucile d'assalto",
                text: "Le armi automatiche cambiarono radicalmente il combattimento moderno."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Tattiche militari",
        content: [
          {
            id: 1,
            epoca: "Preistoria",
            eventi: [
              {
                id: 1,
                title: "Caccia cooperativa",
                text: "I primi gruppi umani svilupparono tecniche di accerchiamento e collaborazione per cacciare grandi animali, anticipando le future strategie militari."
              }
            ]
          },
          {
            id: 2,
            epoca: "Età Antica",
            eventi: [
              {
                id: 1,
                title: "Falange macedone",
                text: "La formazione introdotta da Filippo II e perfezionata da Alessandro Magno rivoluzionò il combattimento sul campo."
              }
            ]
          },
          {
            id: 3,
            epoca: "Medioevo",
            eventi: [
              {
                id: 1,
                title: "Assedi ai castelli",
                text: "Le fortificazioni medievali portarono allo sviluppo di nuove tecniche d'assedio e macchine da guerra."
              }
            ]
          },
          {
            id: 4,
            epoca: "Età Moderna",
            eventi: [
              {
                id: 1,
                title: "Formazioni lineari",
                text: "L'introduzione dei moschetti trasformò gli eserciti in lunghe linee di fuoco coordinate."
              }
            ]
          },
          {
            id: 5,
            epoca: "Età Contemporanea",
            eventi: [
              {
                id: 1,
                title: "Blitzkrieg",
                text: "La guerra lampo combinò carri armati, aviazione e fanteria motorizzata per ottenere rapide vittorie."
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Scienza",
        content: [
          {
            id: 1,
            epoca: "Preistoria",
            eventi: [
              {
                id: 1,
                title: "Scoperta del fuoco",
                text: "La padronanza del fuoco cambiò radicalmente l'alimentazione, la protezione e la vita sociale dell'uomo."
              }
            ]
          },
          {
            id: 2,
            epoca: "Età Antica",
            eventi: [
              {
                id: 1,
                title: "Biblioteca di Alessandria",
                text: "Uno dei più importanti centri del sapere del mondo antico, simbolo della ricerca scientifica."
              }
            ]
          },
          {
            id: 3,
            epoca: "Medioevo",
            eventi: [
              {
                id: 1,
                title: "Nascita delle università",
                text: "Le prime università europee favorirono la diffusione della conoscenza e del metodo di studio."
              }
            ]
          },
          {
            id: 4,
            epoca: "Età Moderna",
            eventi: [
              {
                id: 1,
                title: "Rivoluzione scientifica",
                text: "Galileo, Keplero e Newton cambiarono il modo di osservare e comprendere la natura."
              }
            ]
          },
          {
            id: 5,
            epoca: "Età Contemporanea",
            eventi: [
              {
                id: 1,
                title: "Sbarco sulla Luna",
                text: "La missione Apollo 11 rappresentò una delle più grandi conquiste scientifiche e tecnologiche del XX secolo."
              }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Religione",
        content: [
          {
            id: 1,
            epoca: "Preistoria",
            eventi: [
              {
                id: 1,
                title: "Primi culti animisti",
                text: "Le popolazioni preistoriche attribuivano un'anima agli elementi della natura e agli animali."
              }
            ]
          },
          {
            id: 2,
            epoca: "Età Antica",
            eventi: [
              {
                id: 1,
                title: "Religione dell'antico Egitto",
                text: "Gli Egizi svilupparono una complessa religione politeista con rituali e monumenti imponenti."
              }
            ]
          },
          {
            id: 3,
            epoca: "Medioevo",
            eventi: [
              {
                id: 1,
                title: "Costruzione delle cattedrali",
                text: "Le grandi cattedrali gotiche divennero il simbolo della fede cristiana medievale."
              }
            ]
          },
          {
            id: 4,
            epoca: "Età Moderna",
            eventi: [
              {
                id: 1,
                title: "Riforma protestante",
                text: "Martin Lutero diede origine a un profondo cambiamento religioso in Europa."
              }
            ]
          },
          {
            id: 5,
            epoca: "Età Contemporanea",
            eventi: [
              {
                id: 1,
                title: "Concilio Vaticano II",
                text: "La Chiesa cattolica avviò un importante processo di rinnovamento e dialogo con il mondo moderno."
              }
            ]
          }
        ]
      },
      {
        id: 6,
        title: "Invenzioni",
        content: [
          {
            id: 1,
            epoca: "Preistoria",
            eventi: [
              {
                id: 1,
                title: "La ruota",
                text: "Una delle invenzioni più importanti della storia, rivoluzionò il trasporto e il commercio."
              }
            ]
          },
          {
            id: 2,
            epoca: "Età Antica",
            eventi: [
              {
                id: 1,
                title: "La scrittura",
                text: "La nascita della scrittura rese possibile tramandare conoscenze e amministrare grandi civiltà."
              }
            ]
          },
          {
            id: 3,
            epoca: "Medioevo",
            eventi: [
              {
                id: 1,
                title: "Gli occhiali",
                text: "Una delle invenzioni medievali che migliorò la qualità della vita e dello studio."
              }
            ]
          },
          {
            id: 4,
            epoca: "Età Moderna",
            eventi: [
              {
                id: 1,
                title: "La stampa",
                text: "L'invenzione di Gutenberg rese i libri accessibili a un numero sempre maggiore di persone."
              }
            ]
          },
          {
            id: 5,
            epoca: "Età Contemporanea",
            eventi: [
              {
                id: 1,
                title: "Internet",
                text: "La rete globale ha trasformato comunicazione, informazione e società."
              }
            ]
          }
        ]
      },
      {
        id: 7,
        title: "Misteri storici",
        content: [
          {
            id: 1,
            epoca: "Preistoria",
            eventi: [
              {
                id: 1,
                title: "Stonehenge",
                text: "Ancora oggi non è del tutto chiaro quale fosse lo scopo originario del celebre monumento megalitico."
              }
            ]
          },
          {
            id: 2,
            epoca: "Età Antica",
            eventi: [
              {
                id: 1,
                title: "Atlantide",
                text: "La leggendaria isola descritta da Platone continua a suscitare dibattiti tra storia e mito."
              }
            ]
          },
          {
            id: 3,
            epoca: "Medioevo",
            eventi: [
              {
                id: 1,
                title: "Il Santo Graal",
                text: "La ricerca della reliquia più famosa del Medioevo ha alimentato leggende per secoli."
              }
            ]
          },
          {
            id: 4,
            epoca: "Età Moderna",
            eventi: [
              {
                id: 1,
                title: "L'Uomo dalla Maschera di Ferro",
                text: "L'identità del misterioso prigioniero francese rimane ancora oggi sconosciuta."
              }
            ]
          },
          {
            id: 5,
            epoca: "Età Contemporanea",
            eventi: [
              {
                id: 1,
                title: "Il manoscritto Voynich",
                text: "Un libro illustrato scritto in una lingua ancora indecifrata che continua a sfidare studiosi e crittografi."
              }
            ]
          }
        ]
      }
    ]
  }
];