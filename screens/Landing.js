import React, { useEffect } from 'react'
import { useState } from 'react';
import { Text, View ,TouchableOpacity, StatusBar} from 'react-native';
import { Flatlistcomp } from '../components/Flatlistcomp'
import { SectionListComp } from '../components/SectionListComp';
import {GetApiCustomHook } from '../components/GetApiCustomHook'
import {styles} from '../mycss'
const Landing = () => {
    const [mydata,setMydata]=useState([
        {
        key: 0,
        title:'Amena'
        },
        {
            key: 1,
            title:'hania'
        }
    ])
    const [city,setCity]=useState([
        {
        key: 0,
        title:'Lahore'
        },
        {
            key: 1,
            title:'Isl'
        }
    ])
    const [country,setCountry]=useState([
        {
        key: 0,
        title:'Pakistan',
        data:[{key:1,title:'lahore'},{key:2,title:'Karachi'}]
        },
        {
            key: 1,
            title:'America',
            data:[{key:3,title:'NewYork'},{key:4,title:'California'}]
        }
    ])
    const [tech,setTech]=GetApiCustomHook("https://fakestoreapi.com/products/")
    // console.log(tech)
    
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
        {/* <Flatlistcomp vardata={mydata}/>
        <Flatlistcomp vardata={city}/>
        <SectionListComp mydata={country}/> */}
        <Flatlistcomp vardata={tech}/> 
        <Text>Hello</Text>
    </View>
  )
}

export {Landing}