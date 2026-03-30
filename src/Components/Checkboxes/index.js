import "./Checkboxes.modules.css";

function Checkboxes({ onCheck }) {
  return (
    <div id="check-container">
      <div className="checkbox-container">
        <input
          type="checkbox"
          onChange={onCheck}
          id="discovery"
          className="checkboxes"
        ></input>
        <label htmlFor="discovery">Show co-ordinates of Discovery</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          onChange={onCheck}
          id="sun"
          className="checkboxes"
        ></input>
        <label htmlFor="sun">Show co-ordinates of the Sun</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          onChange={onCheck}
          id="moon"
          className="checkboxes"
        ></input>
        <label htmlFor="moon">Show co-ordinates of the Moon</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          onChange={onCheck}
          id="central"
          className="checkboxes"
        ></input>
        <label htmlFor="central">
          Show co-ordinates of the centre of the galaxy
        </label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          onChange={onCheck}
          id="earth"
          className="checkboxes"
        ></input>
        <label htmlFor="discovery">Show co-ordinates of the Earth</label>
      </div>
    </div>
  );
}

export default Checkboxes;
