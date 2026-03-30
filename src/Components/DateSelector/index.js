import './DateSelector.modules.css'

function DateSelector({ handleChange }) {
  return (
    <div id="date-selector">
      <label id="date-label" htmlFor="date-selector">
        Select date:
      </label>
      <input
        type="date"
        id="date-selector"
        min="2019/05/30"
        max="2022/06/17"
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default DateSelector;
