import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { X } from '../App';
import Card from './card';



export default function Shopping() {
  const [card, setCard]=useState([])
  const [data,setData]=useState([])

  

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(res=>{
      console.log(res.data)
      setData(res.data)
    }).catch(err=>console.log(err))
  },[])


  function addtocard(){
    
    alert('added to card');
    const newCard=[...card,data]
    data.map(product=>{
      <Card  data={data} card={card}/>
    })
    setCard(newCard)


  }


  return(
    <>
   <div className='product' >{data.map(x=>(
    <div className='box' key={x.id} >
      <img className='img' src={x.image} />
      <div className='text'>
      <p>${x.price}</p>
      <p>{x.title}</p>
      </div>
      <div className=''>
      <button className='btn btn-primary m-2'>Buy</button>
      <button onClick={addtocard} className='btn btn-warning '>Add to card</button>

      </div>
    </div>
   ))}</div>
 
   
    </>
  )
}

