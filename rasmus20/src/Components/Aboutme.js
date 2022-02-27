import '../App.css';
import '../style.css';

function Aboutme() {
  return (
    <div className="App">
      <div className="content">

    <h2 className="sidrubrik">Presentation</h2>
  
    <div class="columns">
      <p class ="aboutme">Hej! Jag heter Rasmus och är 24 år gammal. Jag jobbar för närvarande på ett LSS-boende samtidigt som jag helhjärtat studerar till Systemutvecklare.
        Mitt intresse för teknik och IT har jag haft sedan barnsben. Allt från att förstå hur ett spel skapas från grunden, till att "hosta" egna privatservrar med tillhörande hemsidor 
        till de olika spel som man har spelat under åren, exempelvis Counter-Strike, Tibia osv. <br/><strong>Jag gillar att skriva kod och se resultatet av det jag skriver skapas framför mig.</strong>
        <br/><br/>Andra intressen jag har är resor, golf och dykning. Jag har tidigare bott i Australien under ett år, samt i Irland under några månader. Jag har även rest runt i Sydost-Asien under längre perioder
        vid två tillfällen tidigare. 
        <br/>
      </p>
    </div>
    
    <img className="aboutme" alt="Scubadiving" src={require('../Media/dykning.png')} />
    <img className="aboutme" alt="Hiking" src={require('../Media/hiking.jpg' )} />
    <img className="aboutme" alt="Golf" src={require('../Media/golf.jpg')} />
    <iframe class="aboutme" width="420" height="315"
    src="https://www.youtube.com/embed/Jry6A4fTMWE">
    </iframe>

    </div>
    </div>
  );
}

export default Aboutme;
