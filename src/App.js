import "./styles/App.css";

const App = () => {
  return (
    <div>
      {/* title  */}
      <h2 className="title1">CSS SASS WITH REACT</h2>

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

      {/* buttons  */}
      <div className="btn_container">
        <button type="button" className="btn_one">
          Button One
        </button>
        <button type="button" className="btn_two">
          Button Two
        </button>
      </div>

      {/* loop  */}
      <div className="loop_container">
        <div className="loop_item_1">div 1</div>
        <div className="loop_item_2">div 2</div>
        <div className="loop_item_3"> div 3</div>
      </div>

      {/* each  */}
      <div className="each_container">
        <div className="red">div 1</div>
        <div className="green">div 2</div>
        <div className="blue"> div 3</div>
      </div>
    </div>
  );
};

export default App;
