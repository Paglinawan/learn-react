import { useReducer } from "react";

function Reducer() {
  const [state, dispatch] = useReducer((prev) => ++prev, 0);
  const countUp = () => {
    dispatch();
  };

  return (
    <section className="sec">
      <h2 className="sec-heading">useReducer</h2>
      <div className="sec-content">
        <p className="sec-result">{state}</p>
        <button className="sec-btn" onClick={countUp}>
          click
        </button>
      </div>
    </section>
  );
}

export default Reducer;
