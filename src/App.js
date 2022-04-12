import Titre from "./component/titre";

function App() {
  fetch("https://restcountries.com/v3.1/all").then(async response => {
      try {
       const data = await response.json()
       console.log( data)
     } catch(error) {      
       console.error(error)
     }
    })
  
  return (
    
   <div>
     
     <Titre />
   </div>
    
  );
}

export default App;
