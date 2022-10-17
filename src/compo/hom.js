import React,{useEffect,useState} from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
//import Button from "react-bootstrap/button"
import "./compo.css"



function Home() {

  let [can, setCan] = useState([])

  async function getdata() {
    let res = await axios.get("http://localhost:8000/url/getall")
    //console.log(res.data)
    setCan(res.data)
    
}

async function del(some) {
  await axios.delete(`http://localhost:8000/url/deleteurl/${some}`)
  getdata()
}

useEffect(() => {getdata()}, [])
 
  return (
    <div className='cards'>
         {can.map((e,i)=>{return (
         <Card className='map' style={{ width: '15rem' }}>
         <Card.Body className='body'>
             <Card.Header id="head" bg="orange" varient="light" as="h5">{e.title} <div className='view'>views{e.Count}</div></Card.Header>
            <Card.Subtitle className="mb-2 text-muted">{e.title}</Card.Subtitle>
             <div className='detail'>
             {e.detail}
             </div>

             <a href={`http://localhost:8000/url/redir/${e.key}`} target="_blank" rel="noreferrer">`http://localhost:8000/url/redir/${e.key}`</a> 
             <button className="butt" onClick={()=>del(e._id)}>Remove</button>
            </Card.Body>
           </Card>
           );
        })}
    </div>
  )
}

export default Home