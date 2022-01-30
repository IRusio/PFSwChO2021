import Fibonacci from './Fibbonnacci';
import HistoryComponent from './History';
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();

function App({history = defaultHistory }) {
  return (
    <div className="App">
      <Fibonacci />
      <HistoryComponent />
    </div>
  );
}

export default App;
