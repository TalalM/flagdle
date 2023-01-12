import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Flagdle } from "../Flagdle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import Emoji from "react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function InfosFr({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Comment jouer" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          {" "}
          Devinez le <Flagdle /> en 6 essais.
        </div>
        <div>Chaque essai doit être un pays valide.<br/>
          Après chaque essai, vous aurez la distance, la direction et la
          proximité entre votre essai et le pays cible.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Exemples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Chili",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre essai <span className="uppercase font-bold">Chili</span> est à{" "}
            {formatDistance(13_557_000, settingsData.distanceUnit)} du pays
            cible, le pays cible se trouve dans la direction Nord-Est et vous
            avez une proximité de seulement 32% car votre essai est plutôt
            éloigné !
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Finlande",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre second essai{" "}
            <span className="uppercase font-bold">Finlande</span> est plus
            proche ! La bonne réponse est à{" "}
            {formatDistance(3_206_000, settingsData.distanceUnit)}, au Sud-Est
            et la proximité est de 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Liban",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Prochain essai, <span className="uppercase font-bold">Liban</span>,
            c&apos;est le pays à deviner ! Bien joué !{" "}
            <Emoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un nouveau <Flagdle /> sera disponible chaque jour !
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          <Flagdle /> n'a pas de FAQ mais vous pouvez aller regarder la{" "}
          <a
            className="underline"
            href="https://worldle.notion.site/Worldle-4005ca16fc9341e7be8adcfd30628146"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ Worldle
          </a>{" "}
          si vous avez des questions ! Vous pouvez aussi directement me contacter sur {" "}
          <a
            className="underline"
            href="https://twitter.com/talalmazroui"
            target="_blank"
            rel="noopener noreferrer"
          >
            @talalmazroui
          </a>.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Flagdle /> est <b>fortement</b> inspiré de{" "}
        <a
          className="underline"
          href="http://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >Worldle</a>{" "} créé par {" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>. Sauf que sur <Flagdle />, vous devinez le pays à partir de son drapeau et pas sa forme !
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Fait par{" "}
          <a
            className="underline"
            href="https://twitter.com/talalmazroui"
            target="_blank"
            rel="noopener noreferrer"
          >
            @talalmazroui
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/TalalM/flagdle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            code source
          </a>
          )
        </div>
        <div>
          Vous pouvez aller voir mes autres projets ici :{" "}
          <a
            className="underline"
            href="https://www.countrydle.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Countrydle
          </a>
        </div>
        <div>
          Vous voulez me soutenir ?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/elpastoristo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Emoji
              text="Offrez moi un café ! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
