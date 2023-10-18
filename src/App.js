import React from "react";
import { Watch } from "./components/Watch";
import "./components/Style.css";


function App() {
  return(
<div className="main">
    <Watch title="Diesel" Category="Watch Men" Desc="Diesel Analog Black Dial (Big dial) Men's Watch-DZ7395" Price="85,969" />
    <Watch title="Olevs" Category="Watch Men" Desc="OLEVS Chronograph Analogue Men's Luxury Watch (Blue Dial)" Price="55,469" />
     <Watch title="Rado" Category="Watch Men" Desc="Rado Original Boyfriend Analog Silver Dial Women's Watch-ES3838" Price="15,969" />
      <Watch title="Seiko" Category="Watch Men" Desc="Seiko Lord Quartz Black Dial Chronograph Date Watch for Women's SPC103P1" Price="55,789" /> 
      <Watch title="Titan" Category="Watch Men" Desc="Titan Neo Analog Silver Dial Men's Watch-NN1733KM03/NR1733KM03" Price="85,969" />
       <Watch title="Fossil" Category="Watch Men" Desc="Fossil Analog White Dial Men's Watch-FS4795" Price="56000" />
       <Watch title="Timex" Category="Watch Men" Desc="TIMEX Analog Blue Dial Women's Watch-TWHG03SMU10" Price="32200" />
       <Watch title="Hunry" Category="Watch Men" Desc="HUNRUY Analog Women's Watch ( Dial Silver-And-Gold Colored Strap)" Price="63000" />
</div>

  ); 
}

export default App;
