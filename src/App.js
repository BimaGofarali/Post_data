import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Routers/router";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Router />
  </BrowserRouter>
  );
}

export default App;
