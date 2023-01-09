import { BlogList } from './components/pages/BlogList';
import { Counter } from './components/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BlogList />
      <Counter />
    </div>
  );
}

export default App;
