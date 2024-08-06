import { Provider } from "react-redux";
import WeatherApp from "./views/weatherapp";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  );
};

export default App;
