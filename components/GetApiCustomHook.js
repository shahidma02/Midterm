import React from 'react'
import { useState } from "react";
import axios from 'axios';

const GetApiCustomHook = (api) => {
    // console.log("Api====",api)
const [myApi, setMyApi] = useState(api)

  
  
  var myURL = api
  axios.get(myURL)
  .then(function (response) {
    //console.log("response.data==", response.data);
    setMyApi(response.data);
    //console.log('Burger Data ==',myApi)
  })
  .catch(function (error) {
    console.log(error);
  });
  return [myApi];
}

export {GetApiCustomHook}