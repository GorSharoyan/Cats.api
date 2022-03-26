import logo from "./logo.svg";
import "./App.css";

//Router
import SwitchRouter from "./routes/SwitchRouter";
//Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <SwitchRouter />
      <Footer />
    </div>
  );
}

export default App;
