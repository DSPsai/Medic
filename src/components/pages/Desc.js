import {React,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
export default function Desc() {
    var str = window.location.href;
    var res = str.split("/");
    var postdat = res[(res.length) - 1];
    const formBody = decodeURIComponent(postdat);
    const linker='/Services/'+formBody;
    const FetchData=()=>{
      document.getElementById('loader').style.display = 'block';
          axios.get(`${process.env.REACT_APP_API_URL1}/main/get_services/${formBody}/`,{
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `JWT ${localStorage.getItem('access')}`,
                  'Accept': 'application/json'
              }
          }).then(response => {
            document.getElementById('loader').style.display = 'none';
              console.log(response);
              setimg(response.data.images);
              setres(response.data.description)
              setdoc(response.data.Doctor);
          })
        .catch(error => {
          document.getElementById('loader').style.display = 'none';
          document.getElementById('msg').style.display='block';
          document.getElementById('msgimg').style.display='none';
          document.getElementById('msgtext').innerHTML="Failed to load Data ,Please refresh or logout";
        });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    FetchData();
  }, [])
  var [image,setimg]=useState('/images/login.png');
  var [doc,setdoc]=useState('Doctor')
  var [res,setres]=useState('I used to think eye masks were only for flights, but Buki changed that. ');
  return (
    <div className='Signupbap logins desc' id='top'>
        <img src='/images/signup.png'/>
        <img className='slider' src='/images/slider.png' />
        <div className='Signup'>
          <div style={{ fontWeight: 'bold', marginTop: '10px', color: 'white', fontSize: '25px' }}>
            Details
          </div><br/>
          <img id='round' src={image} />
          <div style={{fontWeight:'bold',fontSize:'30px',color:'#39464E'}}>{formBody}</div>
          <div style={{fontSize:'16px',opacity:'0.7'}}>{doc}</div><br/>
          <Link to={linker} className='btn'>Book Slot</Link>
          <div style={{textAlign:'initial'}}><br/>
          <div style={{fontSize:'24px',fontWeight:'bold'}}>About : </div>
          <div style={{padding:'20px',paddingTop:'0px'}}>
          {res}
          </div>
        </div>
        </div>
      </div>
  );
}
