import logo from './logo.svg';
import './App.css';
function calculate(number1, number2, operation)
{
	alert('hey');
	return number1+number2;
}
const MYFORM=(
	<form>
<input type="text"></input>

	</form>);
const CALCULATOR=(
	<div><input id="number1" type="text"></input><br/>
	<input id="number2" type="text"></input>
	<br/>
	<button onClick={calculate} id="getResult">Calculer</button>
	</div>
	);
const MYJSX=(<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>hello francky</p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React</a>
      </header>
</div>);
{/*some react comment*/}
function App() {

    return CALCULATOR;
}

export default App;