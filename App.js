import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import {styles} from './mycss.jsx'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Landing} from './screens/Landing.js'
import { ButtonsScreen } from './screens/ButtonsScreen.js';



const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false}} />
        {/* <Stack.Screen name="ButtonsScreen" component={ButtonsScreen} options={{ headerShown: false}} /> */}
        
        
        
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default MyStack;


