import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
export default function Act() {
    var postdat = {
        "uid": " " ,
        "token": " "
    }
    var str = window.location.href;
    var res = str.split("/");
        postdat.token = res[(res.length) - 1];
    postdat.uid = res[(res.length) - 2];
    window.onload = () => {
        console.log(window.location.href);
        document.getElementById('loader').style.display = 'block';
        document.getElementById('loader').innerHTML = 'You can Login After Loading';
        axios.post(`${process.env.REACT_APP_API_URL1}/auth/users/activation/`, postdat, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(postdat);
            console.log(response.data);
            window.location.href = "/SignIn";
        })
            .catch(error => {
                console.log(postdat);
                console.log(error);
                window.location.href = "/SignIn";
            });
    }
    return (<div id="rot">
        
    </div>)

}
