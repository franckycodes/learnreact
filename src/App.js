import logo from './logo.svg';
import './App.css';

const MYFORM=(
	<form>
<input type="text"></input>

	</form>);
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
    return MYJSX;
}

export default App;