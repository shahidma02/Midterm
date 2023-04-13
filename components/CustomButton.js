import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";

const CustomButton=({align})=> {

useEffect(()=>{
    console.log(align)
    })
  loginBtnPressed=()=>{

  }

  if(align=='top'){
    return (
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity style={{backgroundColor:'grey', width:100, height:30, alignItems:'center', justifyContent:'center'}} onPress={loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }else  if(align=='bottom'){
    return (
        <View style={{ justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'red', width:100, height:30}} onPress={loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }else  if(align=='right'){
    return (
        <View style={{ justifyContent:'center', alignItems:'flex-start'}}>
          <TouchableOpacity style={{backgroundColor:'green', width:100, height:30}} onPress={loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }
  else{
    return (
        <View style={{ justifyContent:'center', alignItems:'flex-end'}}>
          <TouchableOpacity style={{backgroundColor:'yellow', width:100, height:30}} onPress={loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
export {CustomButton}