import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header bg-dark'>
        <div className = 'row'>
          <div className='brand my-1'>
            <h1>RI</h1>
          </div>

          <div className='inp-container'>
            <input className= 'form-control' />
            <button><i className='fa fa-search'/></button>

          </div>

        </div>

      </div>
     
    </div>
  );
}

export default App;
