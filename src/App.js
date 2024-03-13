import "./App.css";
import logo from "./images/Finswitch.png";
import laptop from "./images/pngkey 1.png";

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>
      <h1 className="content">
        THE WAY OF <br />
        ALTERNATIVE INVESTMENT
      </h1>
      <div className="laptop-image">
        <p>COMING SOON</p>
        <img src={laptop} alt="Laptop" />
      </div>
      <div className="container-row">
        <div className="container-box">
          <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div>
          <div className="box box4"></div>
          <div className="box box5"></div>
          <div className="box box6"></div>
          <div className="box box7"></div>
          <div className="box box8"></div>
          <div className="box box9"></div>
        </div>
      </div>
      <footer className="contact-info">
        CONTACT: <span>+919509 80 9509</span>
      </footer>
    </div>
  );
}

export default App;
