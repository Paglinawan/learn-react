import { useSelector } from "react-redux";
const CounterResult = () => {
  const state = useSelector((state) => state);
  return <div className="sec-result">{state.counter}</div>;
};

export default CounterResult;
