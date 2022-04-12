import Titre from "./component/titre";

function App() {
  fetch("restcountries.com/v3.1/all")
  .then(Response=> Response.json())
  .then(data=>console.log(data));
  
  return (
    
   <div>
     
     <Titre />
   </div>
    
  );
}

export default App;
