import axios from 'axios';
import React,{useCallback,useEffect,useState} from 'react'

const  Quote = () => {
const [quote, setQuote] = useState();

const url = 'https://api.adviceslip.com/advice';



const getAdvice = useCallback(()=>{
    axios.get(url)
    .then((res) =>{
       const   dat= res.data.slip.advice;
        setQuote(dat);
        
        
    })
   .catch((err) =>{
    console.log(err.message);
   })
},[setQuote])

useEffect(()=>{
    getAdvice();
    },[getAdvice])


  return (
    <div className='qoute'>
    <h2>{quote}</h2>
    <button onClick={getAdvice}>Give me advice</button>
    </div>
  )
}

export default Quote