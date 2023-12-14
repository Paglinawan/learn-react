import { Provider } from "react-redux";

import store from "./store";

import CounterResult from "./components/CounterResult";
import CounterButton from "./components/CounterButton";

const Redux = () => {
  return (
    <Provider store={store}>
      <section className="sec">
        <h2 className="sec-heading">Redux Toolkit</h2>
        <div className="sec-content">
          <CounterResult />
          <CounterButton step={2} calcType="+" />
          <CounterButton step={2} calcType="-" />
          <CounterButton step={10} calcType="+" />
          <CounterButton step={10} calcType="-" />
        </div>
      </section>
    </Provider>
  );
};

export default Redux;
