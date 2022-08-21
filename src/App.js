import rick_morty from './img/rick-morty.png'
import './App.css';

function App() {
    const reqApi = () => {
        console.log('funcionando')
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1 className={'title'}>Rick & Morty</h1>
                <img src={rick_morty} alt="Rick & Morty" className={'img-home'}/>
                <button onClick={reqApi} className={'btn-search'}>Buscar Personajes</button>
            </header>
        </div>
    );
}

export default App;
