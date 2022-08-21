import axios from 'axios';
import React,{useEffect, useState} from 'react'

const  Quote = () => {
const [quote, setQuote] = useState();
const url = 'https://api.adviceslip.com/advice';


    useEffect( ()=>{
    
        axios.get(url)
        .then((res) =>{
            const {data} = res.data.slip.advice;
            setQuote(data);
        })
       .catch((err) =>{
        console.log(err.message);
       })
    
       
    
        
}

)


  return (
    <div className='qoute'>
    <h2>{quote}</h2>
    <button onClick={setQuote(`${data}`)}>Give me advice</button>
    </div>
  )
}

export default Quote