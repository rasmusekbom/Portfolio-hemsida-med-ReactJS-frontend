import '../App.css';
import { useEffect, useState } from "react";
import '../style.css';

function Myportfolio() {

        const [name, setName] = useState([]);
        const [description, setDescription] = useState([]);
        const [isPending, setIsPending] = useState(true);

        var array = [];
        useEffect (() => {
          fetch('https://api.github.com/users/rasmusekbom/repos')
          .then(res => res.json())
          .then(data => { 
            setName((prevName) => [
              ...prevName,
              {
                name: data[0].name,
                description: data[0].description
              },
              {
                name: data[3].name,
                description: data[3].description
              },
              {
                name: data[2].name,
                description: data[2].description
              }
            
        ]);
        setIsPending(false);
          });
        }, []);
      
        return (
          <div className="App">     
          <h2 className="sidrubrik">Tidigare Projekt</h2>
            
            {/* Meddelande som visas medans projekten laddas in. */}
          { isPending && <div>Getting the projects from Github</div> } 

            {name.map((names) => (
              <h2 className="portfolioprojects">
                {names.name}
                <br/><br/>                
                {names.description}
              </h2>
            ))}
      
          </div>
        );
      }
     
export default Myportfolio;