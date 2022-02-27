import { useEffect } from "react";
import '../App.css';
import { useState } from "react";
import '../style.css';


function CvScriptTest() {
    let temptext = "";
    const [text, setText] = useState([]); 
              
    useEffect (() => {
        GetJson();
            
      }, []);

        async function GetJson() {
        const cvurl = '../cv.json';
        const data = await fetch(cvurl);
        const portfolio = await data.json();
        
        for (let i = 0; i < portfolio.length; i++) {
            let first = portfolio[i];
            
            for (let key in first) {
                let value = first[key];
                setText((prevText) => [
                    ...prevText,
                    {
                      text: value 
                    } 
                ]);
            }
                }}
    
    return (
      <div className="containercv">
        
        {text.map((texts) => (
            <p className="cvtext">
                {texts.text}
            <br/>
            </p>
        ))}
    </div>
        
    );
  }
  
  export default CvScriptTest;