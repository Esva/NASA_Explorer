import "./CoOrdinates.modules.css";

function CoOrdinates() {
  return (
    <div id="co-ord-container">
      <div id="co-ord-left-container">
        <div className="discovery-check hidden">
          <h3 id="discovery-text">
            Co-Ordinates of Discovery at time of photo:
          </h3>
          <p id="discovery-x" className="co-ord-text"></p>
          <p id="discovery-y" className="co-ord-text"></p>
          <p id="discovery-z" className="co-ord-text"></p>
        </div>
        <div className="sun-check hidden">
          <p className="co-ord-text"></p>
          <p className="co-ord-text"></p>
          <p className="co-ord-text"></p>
        </div>
        <div className="moon-check hidden">
          <p className="co-ord-text"></p>
          <p className="co-ord-text"></p>
          <p className="co-ord-text"></p>
        </div>
      </div>
      <div className="co-ord-right-container">
        <div id="centre-check hidden">
          <p className="co-ord-text"></p>
          <p className="co-ord-text"></p>
          <p className="co-ord-text"></p>
        </div>
        <div className="earth-check hidden">
          <p className="co-ord-text"></p>
          <p className="co-ord-text"></p>
          <p className="co-ord-text"></p>
        </div>
      </div>
    </div>
  );
}

export default CoOrdinates;
