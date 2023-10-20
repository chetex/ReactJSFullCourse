import logo from './logo.svg';
import './App.css';

function App() {
  /**
   * Gives capacity to change name request.
   * @returns 
   */
  const handleNameChange = () => {
    const namesArray = ['Nacho', 'Ana', 'Leo', 'Vega'];
    const i = Math.floor(Math.random() * 4);
    return namesArray[i];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameChange()}!</p>
      </header>
    </div>
  );
}

export default App;

/**
 * LEARNING PATH
 * 
 *  - Inside return statement, we cannot use "class" word. It is reserved.
 *  We can use "className" instead.
 * 
 *  - Logo view, it comes from import tag. Logo.svg is assigned to "logo" variable.
 * 
 *  - 
 * 
 */
