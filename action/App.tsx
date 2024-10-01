import React from "react";

import { Hero } from "react-daisyui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Hero className="py-5 px-2">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <FontAwesomeIcon icon={faMarkdown} size="6x" transform={{ x: 2.5, y: -1.5, size: 5 }} mask={faCopy} />
          <h1 className="text-2xl font-bold">Welcome to Copy As Markdown!</h1>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default App;
