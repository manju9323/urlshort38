import React,{useEffect,useState} from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
//import Button from "react-bootstrap/button"
import "./compo.css"



function Home() {

  let [can, setCan] = useState([])

  async function getdata() {
    let res = await axios.get("https://urlshortback.onrender.com/url/getall")
    //console.log(res.data)
    setCan(res.data)
    
}

async function del(some) {
  await axios.delete(`https://urlshortback.onrender.com/url/deleteurl/${some}`)
  getdata()
}

useEffect(() => {getdata()}, [])
 
  return (
<div className='cards'>
         {can.map((e,i)=>{return (
         <div className='map' >
         <Card.Body className='body'>
             <Card.Header id="head"  varient="light" as="h5"><div>{e.title} </div><div className='vi'>views<spam className='view'>{e.Count}</spam></div></Card.Header>
             <div className='detail'>
             {e.detail}
             </div>
             

             <a className='aaa'
             href={`https://urlshortback.onrender.com/url/redir/${e.key}`} target="_blank" rel="noreferrer">`http://localhost:8000/url/redir/${e.key}`</a> 
             <button className="butt" onClick={()=>del(e._id)}>Remove</button>
            </Card.Body>
           </div>
           );
        })}
    </div>



    
  )
}

export default Home



/*<div className='cards'>
         {can.map((e,i)=>{return (
         <div className='map' >
         <Card.Body className='body'>
             <Card.Header id="head"  varient="light" as="h5"><div>{e.title} </div><div className='vi'>views<spam className='view'>{e.Count}</spam></div></Card.Header>
             <div className='detail'>
             {e.detail}
             </div>
             

             <a className='aaa'
             href={`http://localhost:8000/url/redir/${e.key}`} target="_blank" rel="noreferrer">`http://localhost:8000/url/redir/${e.key}`</a> 
             <button className="butt" onClick={()=>del(e._id)}>Remove</button>
            </Card.Body>
           </div>
           );
        })}
    </div>*/