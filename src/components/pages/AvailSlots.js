import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Avail() {
  var str = window.location.href;
  var res = str.split("/");
  var postdat = res[(res.length) - 1];
  const formBody = decodeURIComponent(postdat);
  var [serv, setserv] = useState([
    {date:'26 June 2021',time:'7,7.30,8,8,30,9,9,30,1,10.30,11,11.30,12,12.30,14,14.30,15,15.30,16,16.30,17,17.30'},
    {date:'27 June 2021',time:'7,7.30,8,8,30,9,9,30,1,10.30,11,11.30,12,12.30,14,14.30,15,15.30,16,16.30,17,17.30'},
    {date:'28 June 2021',time:'7,7.30,8,8,30,9,9,30,1,10.30,11,11.30,12,12.30,14,14.30,15,15.30,16,16.30,17,17.30'},
    {date:'29 June 2021',time:'7,7.30,8,8,30,9,9,30,1,10.30,11,11.30,12,12.30,14,14.30,15,15.30,16,16.30,17,17.30'},
    {date:'30 June 2021',time:'7,7.30,8,8,30,9,9,30,1,10.30,11,11.30,12,12.30,14,14.30,15,15.30,16,16.30,17,17.30'}
  ])
  const FetchData = () => {
    // document.getElementById('loader').style.display = 'block';
    // const d = new Date();
    // var year = '' + d.getFullYear();
    // var month = '';
    // if ((d.getMonth() + 1) < 10)
    //   month = '0' + (d.getMonth() + 1);
    // else
    //   month = '' + (d.getMonth() + 1);
    // var date = '';
    // if (d.getDate() < 10)
    //   date = '0' + d.getDate();
    // else
    //   date = '' + d.getDate();
    // var full=year + '-' + month + '-' + date;
    // var dater= parseInt(date);
    // var count=0;
    // for(var i=0;i<4;i++){
    // axios.get(`${process.env.REACT_APP_API_URL1}/main/get_slots/${formBody}/${full}/`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `JWT ${localStorage.getItem('access')}`,
    //     'Accept': 'application/json'
    //   }
    // }).then(response => {
    //   document.getElementById('loader').style.display = 'none';
    //   console.log(response);
    //   document.getElementsByClassName('Signup')[0].innerHTML+=full;
    //   document.getElementsByClassName('Signup')[0].innerHTML+="<div class='time'>";
    //   var data='';
    //   if(response.data[0].date){
    //     {response.data.map(item => (
    //      data+="<div class='singledate'>"+item.timeslot+"</div>"
    //     ))}
    //     document.getElementsByClassName('time')[count].innerHTML+=data;
    //     count++;
    //     console.log(count);
    //   }
    //   else{
    //     document.getElementsByClassName('Signup')[0].innerHTML+='No Slots';
    //   }
    // })
    //   .catch(error => {
    //     console.log(error);
    //     document.getElementById('loader').style.display = 'none';
    //     document.getElementById('msg').style.display = 'block';
    //     document.getElementById('msgimg').style.display = 'none';
    //     document.getElementById('msgtext').innerHTML = "Failed to load Data ,Please refresh or logout";
    //   });
    //   dater=dater+1;
    //   if (dater < 10)
    //   date = '0' + dater;
    // else
    //   date = '' + dater;
    //   full=year + '-' + month + '-' + date;
    // }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const Servcard = (props) => {
    var res = props.time.split(",");
    console.log(res);
    var myArray = [];
    // for(var i in res) {
    //     myArray.push(res[i]);
    // }
    res = res.map((str, index) => ({ value: str, id: index + 1 }));

    console.log(res);
    return <div className='date'>
      <div className='day'>
        {props.date}
      </div>
      <div className='time'>
        {res.map(item => (<Times
          time={item.value}
        />))}
      </div>
    </div>
  }
  function Times(props) {
    var am = 'am';
    console.log('jelleo');
    var time = parseFloat(props.time);
    if (time > 13) {
      time = time - 12;
      am = 'pm';
    }
    var full = time.toFixed(2) + ' ' + am;
    return <div className='singledate' onClick={()=>order(full)}>{full}</div>
  }
  function order(full){
        document.getElementById('loader').style.display = 'none';
        document.getElementById('msg').style.display='block';
        document.getElementById('msgimg').style.display='block';
        document.getElementById('msgtext').innerHTML="Appointment Booked at "+full;
  }
  return (
    <div className='Signupbap logins' id='top'>
      <img src='/images/signup.png' />
      <div className='Signup'>
        <div style={{ fontWeight: 'bold', marginTop: '10px', color: 'white', fontSize: '25px' }}>
          {formBody}
        </div><br />
        Available Time Slots :<br/>
        {serv.map(item => (<Servcard
          date={item.date}
          time={item.time}
        />))}
      </div>

    </div>
  );
}
