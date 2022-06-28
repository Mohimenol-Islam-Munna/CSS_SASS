import "./styles/App.css";

const App = () => {
  return (
    <div>
      {/* title  */}
      <h2 className="title">CSS SASS WITH REACT</h2>

      {/* menu  */}
      <div className="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* paragraph  */}
      <div className="paragraphContainer">
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          doloremque ratione quaerat, expedita laboriosam id quibusdam. Modi,
          totam excepturi? Consequuntur quia veritatis ab dolore ea vero nisi
          incidunt facere temporibus.
        </p>
      </div>
    </div>
  );
};

export default App;
