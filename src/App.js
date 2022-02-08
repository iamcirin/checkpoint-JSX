import "./App.css";
import img from "./img2.jpg";
import vid from "./vid.mp4";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img className="first" src={img} alt="" />
        <br />
        <img className="second" src="./img1.jpg" alt="" />
      </div>
      <video style={{ width: "100%", height: 400 }} controls>
        <source src={vid} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
