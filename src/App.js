import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const initialState = {
  count: 0,
  text: "some text",
};

const store = createStore((state = initialState, action) => {
  if (action.type === "increase_count") {
    return { ...state, count: state.count + 1 };
  }
  return state;
});

const BrokenBigPureComponent = React.memo(() => {
  console.log("BrokenBigPureComponent render!");
  const data = useSelector((state) => ({ text: state.text }));
  return (
    <>
      <h1>BigPureComponentBroken</h1>
      <p>{data.text}</p>
    </>
  );
});
BrokenBigPureComponent.displayName = "BrokenBigPureComponent";

const BigPureComponent = React.memo(() => {
  console.log("BigPureComponent render!");
  const text = useSelector((state) => state.text);
  return (
    <>
      <h1>BigPureComponent</h1>
      <p>{text}</p>
    </>
  );
});
BigPureComponent.displayName = "BigPureComponent";

const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <button onClick={() => dispatch({ type: "increase_count" })}>
      increase count {count}
    </button>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
      <BrokenBigPureComponent />
      <BigPureComponent />
    </Provider>
  );
};

export default App;
