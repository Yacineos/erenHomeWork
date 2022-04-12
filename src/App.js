import logo from './logo.svg';
import Pokecard from './component/Pokecard';
import pokeJaune from './assets/pokeJaune.png'
import Log from './assets/pokeJaune.png'
import Log from './assets/pokeJaune.png'
import Log from './assets/pokeJaune.png'
import Log from './assets/pokeJaune.png'
import Log from './assets/pokeJaune.png'
import Log from './assets/pokeJaune.png'
import Log from './assets/pokeJaune.png'
import './component/Pokecard.css'

function App() {
  return (
   
    <div>
    <div className='title'> <h2>Pokedex</h2> </div>
    <div className='gridContainer'>

    
    <Pokecard title="Charmender" image={pokeJaune} type="water" exp="63"/>
    <Pokecard title="Squirtle" image={Log} type="water" exp="63"/>
    <Pokecard title="" image={Log} type="water" exp="63"/>
    <Pokecard title="Metapod" type="bug" exp="72"/>
    <Pokecard title="Butterfree" type="flying" exp="178"/>
    <Pokecard title="Butterfree" type="flying" exp="178"/> 
    <Pokecard title="Butterfree" type="flying" exp="178"/> 
    <Pokecard title="Butterfree" type="flying" exp="178"/> 
    </div>
    </div>
  );
}

export default App;
