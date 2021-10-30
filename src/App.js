import react from "react";
import "./styles/App.scss";

//Redux imports

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

//Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";

//reducer fn

//initialStore
const initialStore = {
  data: null,
  isLoading: true,
  isModalOpen: false,
  word: "",
  modalMsg: "",
  isMsgModalOpen: false,
  isChecked: false,
};

//Store creation
const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  );
}

export default App;
