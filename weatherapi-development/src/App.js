import "./App.css";
import WeatherCard from "./components/WeatherCard";

//Calling our WheaterApi here and finaly getting information from the API.
function App() {
  return (
    <div className="App-header">
      <WeatherCard></WeatherCard>
    </div>
  );
}

export default App;
