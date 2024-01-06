"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css'


export default function Home() {
  const [quote, setQuote] = useState(null);
  let controller = new AbortController();

  useEffect(()=>{
    
  },[]);

  
  async function getQuote(){
    controller.abort();
    controller = new AbortController();

    try{
      const signal = controller.signal;

      const response = await fetch("https://type.fit/api/quotes",{signal});
      const data = await response.json();
      const random = Math.floor(Math.random() *  data.length);

      setQuote(data[random].text);
      console.log(random,data[random]);
    }
    catch(error){
      console.log(error);
    }
    
   }


  return (
    <main className={styles.main}>
      <div className='container vh-100 d-flex justify-content-center align-items-center flex-column'>
        <h1>Random Generator {String.fromCodePoint('0x1F606')}</h1>

        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="quote text-center">

                <p className="card-text">{quote}</p>
                <button onClick={()=>getQuote()} className="btn btn-primary">Get Quote!</button>
            </div>
          </div>
        </div>







      </div>
    </main>
  )
}

