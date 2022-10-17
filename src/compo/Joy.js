import React from 'react'
import axios from 'axios';
import "./compo.css"
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';




const Joy = () => {

  let handleSubmit = async(values)=>{
    console.log(values)
    await axios.post("http://localhost:8000/url/register",values)
    
  }
  
  const formik = useFormik({
    initialValues:{
    title:'',
    url:'',
    detail:'',
  },
  validationSchema:yup.object({
    title:yup.string().required('* Required'),
    url:yup.string().required('* Required'),
    detail:yup.string().required('* Required'),
  }),
  
  
  onSubmit:values=>{
  handleSubmit(values)
  values=""
  alert("submited")

  } 
  
  })
  return (
    <div className="pass">
        <div className="p">
        <div className="tab"><h1>ADD NEW URL</h1></div>

        
        <form onSubmit={formik.handleSubmit} className=''>
        <div className='form-group'>
          <label for="title">TITLE</label>
         < div>
           <input id="title"
          name="title" 
          type="text" 
          className="form-control" 
          placeholder="Enter title" 
          onBlur={formik.handleBlur}  
          onChange={formik.handleChange} 
          value={formik.values.title}  
          /></div> 
          {formik.touched.title && formik.errors.title ? <div style={{color:"red"}}>{formik.errors.title}</div>:null}
        </div>
    </form>
 
    <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label for="url">NEW URL</label>
         <div>
           <input id="url" 
            name="url" 
            type="text" 
            className="form-control"  
            placeholder="Enter url" 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            value={formik.values.url} 
            /></div> 
          {formik.touched.url && formik.errors.url ? <div style={{color:"red"}}>{formik.errors.url}</div>:null}
        </div>
    </form>

       
    <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label for="detail">Details</label>
         <div>
           <input id="detail"  
           name="detail"  
           type="textarea" 
           className="form-control"
           placeholder="define" 
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
           value={formik.values.detail}  
          /></div> 
          {formik.touched.detail && formik.errors.detail ? <div style={{color:"red"}}>{formik.errors.detail}</div>:null}
        </div>
        
       
        <div className="form-group">
        <Button variant="primary" type="submit" >
           SUBMIT 
           </Button>
           <Link to="/home"><Button className="si" variant="primary" type="submit" >
          TO HOME
           </Button></Link>
           </div>
           </form>
      </div>   
      </div>


  );
}

export default Joy