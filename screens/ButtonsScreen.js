import React from 'react'
import { Text, View, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { CustomButton } from '../components/CustomButton';

const ButtonsScreen = () => {
  return (
    <View style={{flex:1}}>
        <Text>Hello</Text>
        <CustomButton align={'top'}/>
        <CustomButton align={'right'}/>
        <CustomButton align={'left'}/>
        <CustomButton align={'bottom'}/>
        

    </View>
  )
}

export {ButtonsScreen}