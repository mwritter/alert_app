import { AlertProvider } from "./context/AlertContext";
import AlertManager from "./components/Alert/AlertManager";
import AlertExample from "./components/Alert/AlertExample";

import "./App.css";

const App = () => {
  return (
    <>
      <AlertProvider>
        <div className="App">
          <AlertExample />
        </div>
        <AlertManager />
      </AlertProvider>
    </>
  );
};

export default App;
