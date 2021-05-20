import "./App.css";
import React from "react";
import img from "./img.jpg";
import vedeo from "./vedeo.mp4";

function App() {
  return (
    <React.Fragment>
      <div style={{ border: "solid 1px black", maxwidth: "100vw" }}>
        <h1 className="title red"> Mariem Abbessi</h1>

        <br />

        <img src="/11.jpg" alt="mm" />

        <br />

        <img src={img} alt="aa" />
        <br />
      </div>
      <video controls>
        <source src={vedeo} type="vedeo/mp4" />
      </video>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/2whnQmmXNrs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </React.Fragment>
  );
}

export default App;
