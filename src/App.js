import React from "react";
import Room from "./Room";
import Nav from "./composants/Nav";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />

      <section>
        <div className="bloc-titre">
          <h1>3D Room Design</h1>
          {/*<p className="description">
          {"Click or select an object to get more information about it"}
  </p>*/}
        </div>

        <div className="room">
          <Room />
        </div>

        <p> Explore the scene ! </p>
      </section>
      <footer>
        <p className="credit">
          © 2023 Designed and developed by Pawan Pandey
          {/* <a href="https://aurelielukoji.com">Aurélie-Victoire Lukoji</a>{" "}
          <a href="https://twitter.com/avlukoji">@avlukoji</a> */}
        </p>
      </footer>
    </div>
  );
}
