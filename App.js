import 'react-native-gesture-handler';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//constant
import * as ViewsNames from './const/ViewsNames.js';
//Pantallas Generales
import InicioScreen from './screens/InicioScreen';
import RegistroScreen from './screens/RegistroScreen';
import RegistroUnoScreen from './screens/RegistroUnoScreen';
//Pantallas Negocios
import DashboardScreen from './screens/DashboardScreen';
import NuevoCuponScreen from './screens/NuevoCuponScreen';
import CuponScreen from './screens/CuponScreen';
import LoginScreen from './screens/LoginScreen';
import SucursalScreen from './screens/SucursalScreen';
import NuevaSucursalScreen from './screens/NuevaSucursalScreen';
import ListaCuponesScreen from './screens/ListaCuponesScreen';
import PerfilScreen from './screens/PerfilScreen';
//Pantallas Usuario
import DashboardUserScreen from './screens/DashboardUserScreen';
import ListaCategoriasScreen from './screens/ListaCategoriasScreen';

import { Stack, StackGeneral, StackNegocioUser } from './stacks/index.js';



export default function App() {
  const drawer = useRef(null);
  const [isLoading, setIsLoading] = useState(false)
  const [login, setlogin] = useState({
    cedula: '22270222138',
    password: '',
    isLogin: false
  });
  const [user, setuser] = useState({ rol: 'negocio', id: '1' })
  const [errores, seterrores] = useState([])

  const StackBasic = () => (<StackGeneral
    errores={errores}
    seterrores={seterrores}
    isLoading={isLoading}
    setIsLoading={setIsLoading}
    login={login}
    setlogin={setlogin}
    setuser={setuser}
  />);


  const [currentStack, setcurrentStack] = useState(StackBasic);

  useEffect(() => {

    const StackNegocio = () => (<StackNegocioUser
      drawer={drawer}
      setlogin={setlogin}
      user={user}
    />);

    if (login.isLogin) {
      setcurrentStack(StackNegocio)
    } else {
      setcurrentStack(StackBasic)
    }
    return () => {      
      setcurrentStack(StackBasic)      
    }
  }, [login, errores, isLoading, user])




  return (
    <NavigationContainer>
      {currentStack}
    </NavigationContainer>
  );
}
