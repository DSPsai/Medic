import React, { useState ,useEffect} from 'react';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Desc from './components/pages/Desc';
import Slots from './components/pages/AvailSlots';
import Profile from './components/pages/Profile';
import Activate from './components/pages/Activate';
import Just from './components/pages/Just';
import axios from 'axios';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  const Navbar = () => {
    return <div className='naver'>
      <div className='navrow'>
        <Link className='navbarchild' onClick={()=>{localStorage.removeItem("access");
                        // localStorage.removeItem("refresh");
                        document.getElementsByClassName('naver')[0].style.display='none';}} to='/SignIn'>
          <i class="fas fa-sign-out-alt"></i>
          Logout
        </Link>
        <Link className='navbarchild' to='/Services'>
          <i class="fas fa-plus"></i>
          Services
        </Link>
        <Link className='navbarchild' to='/Profile'>
          <i class="far fa-user-circle"></i>
          Profile
        </Link>
      </div>
    </div>
  }
  function very() {
    // if (localStorage.getItem('access')) {
    //     var postdat = {
    //         "token": localStorage.getItem('access')
    //     }
    //     axios.post(`${process.env.REACT_APP_API_URL1}/auth/jwt/verify`, postdat, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }).then(response => {
    //         console.log('token verify Success');
    //     })
    //         .catch(error => {
    //             var postdat = {
    //                 "refresh": localStorage.getItem('refresh')
    //             }
    //             axios.post(`${process.env.REACT_APP_API_URL1}/auth/jwt/refresh`, postdat, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json'
    //                 }
    //             }).then(response => {
    //                 localStorage.setItem('access',response.data.access);
    //                 axios.get(`${process.env.REACT_APP_API_URL1}/auth/users/me/`, {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'Authorization': `JWT ${localStorage.getItem('access')}`,
    //                         'Accept': 'application/json'
    //                     }
    //                 }).then(response => {
    //                     console.log('user Loaded Success');
    //                     console.log(response);
    //                     localStorage.setItem('Name', response.data.first_name + ' ' + response.data.last_name);
    //                     localStorage.setItem('Mail', response.data.email);
    //                 })
    //                     .catch(error => {
    //                         console.log('user Loaded Failed');
    //                     localStorage.removeItem("access");
    //                     localStorage.removeItem("refresh");
    //                     localStorage.removeItem("hour");
    //                     localStorage.removeItem("min");
    //                     window.location.href = '/SignIn';
    //                     });
    //             })
    //                 .catch(error => {
    //                     console.log('user Loaded Failed');
    //                     localStorage.removeItem("access");
    //                     localStorage.removeItem("refresh");
    //                     localStorage.removeItem("hour");
    //                     localStorage.removeItem("min");
    //                     window.location.href = '/SignIn';
    //                 });
    //         });
    // }
}
function FetchData(){
  // if (localStorage.getItem('access')) {
  //     axios.get(`${process.env.REACT_APP_API_URL1}/auth/users/me/`, {
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'Authorization': `JWT ${localStorage.getItem('access')}`,
  //             'Accept': 'application/json'
  //         }
  //     }).then(response => {
  //         console.log('user Loaded Success');
  //         console.log(response);
  //         localStorage.setItem('Name', response.data.first_name + ' ' + response.data.last_name);
  //         localStorage.setItem('Mail', response.data.email);
  //     })
  //         .catch(error => {
  //             very();
  //         });
  // }
}useEffect(()=>{
  FetchData();
},[])
  const Msg=()=>{
    return <div id='msg' className='messager'>
      <div className='messager2'>
      <img id='msgimg' src='/images/doctor.png'/>
        <div id='msgtext' className='message'>
          Hello
          </div>
          <div className='btndiv'><button onClick={()=>{document.getElementById('msg').style.display='none'}} className='btn'>Okay</button></div>
      </div>
      </div>
  }
  const Loader = () => {
   return <div id="loader" >
      <div class="sk-chase">
        <div class="sk-chase-dot">
        </div>
        <div class="sk-chase-dot">
        </div>
        <div class="sk-chase-dot">
        </div>
        <div class="sk-chase-dot">
        </div>
        <div class="sk-chase-dot">
        </div>
        <div class="sk-chase-dot">
        </div>
      </div>
    </div>
  }
  return (
    <>
      <Router>
        <Navbar />
        <Loader/>
        <Msg/>
        <Switch>
          <Route path='/' exact component={SignIn} />
          <Route path='/Services' exact component={Services} />
          <Route path='/Services' exact component={Services} />
          <Route path='/SignIn' component={SignIn} />
          <Route exact path='/Desc/:desc' component={Desc} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/Profile' component={Profile} />
          <Route exact path='/Services/:serv' component={Slots} />
          <Route exact path='/Book/:' component={Just} />
          <Route exact path='/activate/:uid/:token' component={Activate} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
