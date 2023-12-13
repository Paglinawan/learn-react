import { useReducer } from "react";

function Reducer() {
  const [state, dispatch] = useReducer((prev, action) => {
    switch (action) {
      case "+":
        return ++prev;

      case "-":
        return --prev;

      default:
        break;
    }
  }, 0);
  const countUp = () => {
    dispatch("+");
  };
  const countDown = () => {
    dispatch("-");
  };

  return (
    <section className="sec">
      <h2 className="sec-heading">useReducer</h2>
      <div className="sec-content">
        <p className="sec-result">{state}</p>
        <button className="sec-btn" onClick={countUp}>
          Up
        </button>
        <button className="sec-btn" onClick={countDown}>
          Down
        </button>
      </div>
    </section>
  );
}

export default Reducer;
