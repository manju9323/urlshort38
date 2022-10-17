import {React,useEffect,useState} from 'react'
import "./compo.css"
import {BrowserRouter as Router,NavLink,Route} from 'react-router-dom'
import Joy from "./Joy"
import Home from "./home"
import Plessure from './plessure'
import DehazeIcon from '@mui/icons-material/Dehaze';
import SignpostIcon from '@mui/icons-material/Signpost';


function Urlshort(props) {
  const [open,setOpen]=useState(false)

  const main=async()=>{
    await ("http://localhost:8000/")
  
  }

  useEffect(()=>{
    main()
  },[])

  

  return (
    <div className='uuu' > 
       <div className='userheader'>
          <DehazeIcon onClick={()=>setOpen(!open ? true:false)} className="icon"/>
          <div>welcome to MERN stack developers </div>
          <SignpostIcon/>
       </div>
        <Router>
          <div className='home'>
             {open && <div className='navlink'>
                <NavLink className="nav" activeClassName='goo' to="h">HOME</NavLink>
                <NavLink className="nav" activeClassName='goo' to="joy">IMPORT URL</NavLink>
                <NavLink  className="nav" activeClassName='goo' to="plessure">DEVELOPERS</NavLink>
            </div>} 
          
            <div className='route' onClick={()=>setOpen(false)}>
            <Route exact path="/h" component={Home}/>
               <Route exact path="/joy" component={Joy}/>
               <Route exact path="/plessure" component={Plessure}/>
            </div>
          </div>
        </Router>
      </div>
  )
}

export default Urlshort