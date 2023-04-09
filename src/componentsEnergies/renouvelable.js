import React, { useEffect, useRef } from "react";
import "./renouvelable.css";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function Renouvelable() {
  const haut = useRef(null);
  const eolien = useRef(null);
  const hydrolien = useRef(null);
  const solaire = useRef(null);
  const stockage = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="box-renou">
      <ScrollToTopOnMount />
      <div ref={haut} className="renou-head-back">
        <div className="renou-head-title">
          <p>Energies Renouvelables</p>
          <hr className="line-head-renou"></hr>
        </div>
        <div className="menu">
          <ul className="box-menu">
            <button onClick={() => scrollToSection(eolien)}>Eolien</button>
            <button onClick={() => scrollToSection(hydrolien)}>
              Hydrolien
            </button>
            <button onClick={() => scrollToSection(solaire)}>Solaire</button>
            <button onClick={() => scrollToSection(stockage)}>Stockage</button>
          </ul>
        </div>
      </div>

      <div className="cont">
        <div ref={eolien} className="eolien">
          <div className="eolien-title-back">
            <div className="eolien-title">Eolien</div>
          </div>
          <div className="table-eolien">
            <div className="img-eolien"></div>
            <div className="txt-eolien-nrj">
              Les premiers moulins à vent, ancêtres des éoliennes, apparaissent
              au Moyen-Orient vers l’an 600. Ils arrivent en Grande Bretagne peu
              avant l’an 1000 et se démocratisent en Europe. Les éoliennes
              électriques apparaissent aux Etats-Unis à la fin du XIXème siècle.
              Elles évoluent pour devenir petit à petit automatiques. Au même
              moment, c’est le danois Pour La Cour qui inventera une éolienne
              avec un nombre réduit de pâles, lui permettant de tourner plus
              vite. Cette invention va devenir la première éolienne
              industrielle. Aujourd’hui de nombreux modèles sont présents sur le
              marché. Les technologies d’éoliennes ne cessent de se développer
              au fil des ans.
              <br></br>
              <br></br>
              Le fonctionnement d’une éolienne est assez simple. Sous l’effet du
              vent, le rotor (constitué des 3 pâles et du moyeu) se met à
              tourner. Le rotor entraîne un axe (l’arbre) situé dans la nacelle
              relié à un alternateur. Cet alternateur sous la rotation de l'axe
              produit un courant électrique alternatif.
              <br></br>
              <br></br>Les éoliennes sont idéales pour des zones très venteuses
              comme la côte Nord-Ouest de la France ou le Sud de la France. Mais
              elle peut aussi être installée n’importe où, du moment que le
              terrain soit dégagé et que le vent y souffle de manière constante
              et soutenue (en moyenne 20 km/h /an). Il est conseillé de réaliser
              une étude de vent, qui permet de juger de l’intérêt réel d’une
              possible installation. A noter que pour des mâts supérieurs à 12
              mètres, il vous faudra déposer un permis de construire.
            </div>
          </div>
        </div>
        <div ref={hydrolien} className="hydrolien">
          <div className="hydrolien-title-back">
            <div className="hydrolien-title">Hydrolien</div>
          </div>
          <div className="table-hydrolien">
            <div className="img-hydrolien"></div>
            <div className="txt-hydrolien-nrj">
              L'utilisation de l’énergie hydraulique date de l’Antiquité. A
              cette époque des moulins à eau étaient installés au bord des cours
              d’eau. Au cours des millénaires suivants, très peu d’avancées vont
              être réalisées. De nombreux points freinent son développement dont
              la difficulté du milieu marin et le manque de matériaux adaptés à
              ce milieu. Au cours du XXème siècle, les premiers barrages
              hydrauliques voient le jour. Il faudra attendre 2003 pour que
              Seaflow, la première hydrolienne installée en mer, voit le jour.
              Aujourd’hui les hydroliennes peinent à s’installer. Dans le cas
              des micro-grid, des hydroliennes domestiques permettent de jouir
              d’une production adaptée avec peu de contraintes mais une faible
              rentabilité.
              <br></br>
              <br></br>
              Un hydrolienne fonctionne de façon similaire qu’une éolienne.
              Grâce aux courants marins et à l’énergie cinétique de l’eau, les
              pâles qui sont reliées au rotor actionnent le mouvement de ce
              dernier. L’énergie mécanique produite est convertie en courant
              électrique à l’aide d’un alternateur.
              <br></br>
              <br></br>Les hydroliennes domestiques sont idéales pour des cours
              d’eau d’une profondeur de 60 centimètres à 1 mètre minimum. Elles
              profitent de courants d’eau constants et constituent une source
              d’énergie stable. C'est pourquoi il est impératif d'établir une
              étude de faisabilité. L'ADEME a d'ailleurs élaboré une liste de
              professionnels habilités à réaliser ce type de projet. Une fois
              cette étude menée, il vous faudra déposer une demande
              d'autorisation administrative. Elle vous assurera la possibilité
              d’utiliser votre cours d'eau d'un point de vue légal : on parle de
              « droit d'eau ». À noter que le droit d'eau est accordé pour une
              durée limitée de 30 ans environ.
            </div>
          </div>
        </div>
        <div ref={solaire} className="solaire">
          <div className="eolien-title-back">
            <div className="eolien-title">Solaire</div>
          </div>
          <div className="table-eolien">
            <div className="img-solaire"></div>
            <div className="txt-eolien-nrj">
              L’effet photovoltaïque a été découvert en 1839 par le français
              Alexandre Edmond Bequeret. Il a découvert le phénomène de
              production d’électricité à l’aide de la lumière par
              l’intermédiaire de matériaux semi-conducteurs. En 1913, les
              premières cellules photovoltaïques apparaissent. Il faudra
              néanmoins attendre 1916 pour que Robert Milikan, physicien
              américain, produise du courant continu. Les premiers véritables
              panneaux solaires apparaissent en 1954 dans les laboratoires Bell.
              Aujourd’hui, il existe de nombreux modèles accessibles à tous.
              Grâce aux progrès technologiques sur le sujet, les rendements des
              panneaux solaires tendent à s’améliorer.
              <br></br>
              <br></br>
              Les panneaux solaires fonctionnent à l’aide des rayonnements
              solaires. Les électrons au sein de la cellule se déplacent sous
              l’effet des photons et créent un courant continu. Il faut ensuite
              utiliser un onduleur pour convertir ce courant en courant
              alternatif.
              <br></br>
              <br></br>Lors de l’installation des panneaux solaires, il est
              préférable de les orienter sud-est ou sud-ouest, avec une
              inclinaison allant de 20% à 60% pour jouir d'un rendement optimal.
              Néanmoins, toutes les orientations, inclinaisons et positions des
              panneaux solaires sont envisageables mais les performances de ces
              derniers en dépendent.
            </div>
          </div>
        </div>
        <div ref={stockage} className="stockage">
          <div className="hydrolien-title-back">
            <div className="hydrolien-title">Stockage</div>
          </div>
          <div className="type-stockage-title">
            Types de stockages existants :
          </div>
          <div className="table-eolien">
            <div className="img-stockage"></div>
            <div className="txt-stockage-nrj">
              Actuellement, il est peu rentable de stocker le surplus d’énergie
              produit par des installations renouvelables. Le plus rentable est
              de revendre directement l’énergie non utilisée. C'est le principe
              de "batterie virtuelle". Pour cela, nous vous conseillons de
              prendre contact avec votre fournisseur d’électricité. Néanmoins,
              il reste possible de stocker le surplus d'électricité produit.
              <br></br>
              <br></br>À l’heure actuelle, le meilleur moyen de stockage reste
              les batteries. Que ce soit pour le solaire, l’hydrolien ou éolien,
              cette solution reste la plus adaptée pour des micro-grids.{" "}
              <br></br>
              <br></br>Il existe plusieurs types de batteries. Les batteries
              Lithium-ion apparaissant comme les plus performantes. Notamment en
              supportant un nombre important de cycle de recharge et un bon
              rendement. Les batteries au sodium sont une parfaite alternative
              aux batteries lithium polluantes. <br></br>
              <br></br>Quelque soit le type de batterie, il est essentiel de
              bien estimer la capacité de stockage nécessaire avant de faire son
              choix. <br></br>
              <br></br>Le stockage sous forme d’hydrogène pourrait devenir la
              référence. L’électricité produite est utilisée pour réaliser une
              électrolyse de l’eau, qui produit de l’hydrogène. Une fois
              stockée, cette hydrogène peu être ensuite reconvertie en
              électricité par l’intermédiaire d’une pile à combustible. Cette
              technologie s’améliore de jour en jour mais pose encore des
              inconvénients dont son coût et son rendement.
              <br></br>
            </div>

            <button
              onClick={() => scrollToSection(haut)}
              className="btn-head-page"
            >
              <span>Haut de page</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
