import "./App.css";
import MainPage from "./containers/MainPage";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        profit calculator
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </header>
      <body className="App-body">
        <MainPage />
      </body>
    </div>
  );
};

export default App;
