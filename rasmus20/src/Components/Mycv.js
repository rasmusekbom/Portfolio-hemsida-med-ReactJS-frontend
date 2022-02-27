import '../App.css';
import '../style.css';

function Mycv() {
  return (
    
    <div className="App">
      <div className="content">
    <h2 className="sidrubrik">Tidigare Erfarenheter</h2>
  
  <body>

  <container id="cvjs"></container>

  <container className="photosbox">
  <img className="cvphotos" alt="Staffansgården" src={require('../Media/staffansgarden.jpg.crdownload')} />
  <img className="cvphotos" alt="Koala" src={require('../Media/koala.jpg')} />
  <img className="cvphotos" alt="Kyrkan" src={require('../Media/delsbokyrka.jpg')} />
  <img className="cvphotos" alt="Hostel" src={require('../Media/burrenhostel.jpg')} />
  </container>
       
  </body>

  </div>
  </div>
      
  );
  
}
export default Mycv;
