import react from "react";
import "./styles/App.scss";

//Redux imports

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

//Components
import Home from "./components/Home";

//reducer fn

//initialStore
const initialStore = {
  data: null,
  isLoading: true,
  isModalOpen: false,
  word: "",
  modalMsg: "",
  isMsgModalOpen: true,
};

//Store creation
const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
