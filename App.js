import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Pantallas
import InicioScreen from './screens/InicioScreen';
import RegistroScreen from './screens/RegistroScreen';
import RegistroUnoScreen from './screens/RegistroUnoScreen';
import DashboardScreen from './screens/DashboardScreen';
import NuevoCuponScreen from './screens/NuevoCuponScreen';
import CuponScreen from './screens/CuponScreen';
import LoginScreen from './screens/LoginScreen';
import SucursalScreen from './screens/SucursalScreen';
import NuevaSucursalScreen from './screens/NuevaSucursalScreen';
import ListaCuponesScreen from './screens/ListaCuponesScreen';
import { MenuSimple } from './MyDrawer/menu';

const Stack = createStackNavigator();

function MyStack() {
  
  //aqui creas todos los estados
  //estado para el menu estados
  //imiciar con una funcion que te devuelve una view
  //donde menuUsuario=()=>
  
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="InicioScreen" component={InicioScreen} />
      <Stack.Screen name="RegistroUnoScreen" component={RegistroUnoScreen} />
      <Stack.Screen name="RegistroScreen" component={RegistroScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen}   />
      <Stack.Screen name="NuevoCuponScreen" component={NuevoCuponScreen} />
      <Stack.Screen name="CuponScreen" component={CuponScreen} />
      <Stack.Screen name="SucursalScreen" component={SucursalScreen} />
      <Stack.Screen name="NuevaSucursalScreen" component={NuevaSucursalScreen} />
      <Stack.Screen name="ListaCuponesScreen" component={ListaCuponesScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>      
      <MyStack />
    </NavigationContainer>
  );
}
