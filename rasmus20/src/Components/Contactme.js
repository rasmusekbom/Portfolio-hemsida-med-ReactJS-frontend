import '../App.css';
import '../style.css';

function Contactme() {
  return (
    <div className="App">
      <div className="content">
    <h2 className="sidrubrik">Kontaktuppgifter</h2>

        <h3 class="contactaddress"><strong>Address</strong></h3>
        <p class="contactinfo">Olnirsvägen 50B<br/>824 70 Delsbo<br/>Gävleborg</p>
        <img className="contact" alt="Addressbild" src={require('../Media/addressicon.png')} />


        <h3 class="contactaddress"><strong>Telefonnummer</strong></h3>
        <p class="contactinfo">076 - 8016461</p>
        <img className="contact" alt="Telefonbild" src={require('../Media/telefonicon.png')} />


        <h3 class="contactaddress"><strong>Mail</strong></h3>
        <p class="contactinfo">rasmus.ekbom@edu.edugrade.se</p>
        <img className="contact" alt="Mailbild" src={require('../Media/emailicon.png')} />

      </div>
      </div>
  );
}

export default Contactme;
