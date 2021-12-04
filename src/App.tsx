import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";
import Newsfeed from "./containers/Newsfeed";
import Profile from "./containers/Profile";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./ducks";
import services from "./services";

const App = () => {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    applyMiddleware(thunk.withExtraArgument({ services }))
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app/newsfeed" element={<Newsfeed />} />
          <Route path="/app/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
