import 'react-native-gesture-handler';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import { MenuNegocio, MenuSimple } from './MyDrawer/Menus';
import { Stack, StackGeneral } from './stacks/index.js';
import axios from 'axios';


const MyStack = ({ drawer, user, login,
  setlogin, isLoading, setIsLoading,
  errores, seterrores }) => {

  const { rol } = user;
  const { isLogin } = login;
  const initialRoute = isLogin ? ViewsNames.DashboardScreenName :
    ViewsNames.InicioScreen;
  const getMenu = (props) => {
    const menu = rol === 'negocio' ? <MenuNegocio {...props} /> : <MenuSimple />;
    return (menu);
  }
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        title: 'Ngrande',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4520a'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>

      <Stack.Screen name={ViewsNames.InicioScreenName}
      >
        {(props) => <InicioScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.RegistroUnoScreenName}
        component={RegistroUnoScreen} />

      <Stack.Screen name={ViewsNames.RegistroScreenName}
        component={RegistroScreen} />

      <Stack.Screen name={ViewsNames.LoginScreenName}>
        {(props) => (<LoginScreen {...props}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setlogin={setlogin}
          errores={errores}
          seterrores={seterrores}
          login={login} />)}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.DashboardScreenName} >
        {(props) =>
          <DashboardScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></DashboardScreen>}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.PerfilScreenName} >
        {(props) =>
          <PerfilScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></PerfilScreen>}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.NuevoCuponScreenName}  >
        {(props) =>
          <NuevoCuponScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></NuevoCuponScreen>}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.CuponScreenName} >
        {(props) =>
          <CuponScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></CuponScreen>}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.SucursalScreenName} >
        {(props) =>
          <SucursalScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></SucursalScreen>}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.NuevaSucursalScreenName}>
        {(props) =>
          <NuevaSucursalScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></NuevaSucursalScreen>}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.ListaCuponesScreenName}>
        {(props) =>
          <ListaCuponesScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></ListaCuponesScreen>}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.DashboardUserScreenName}
        component={DashboardUserScreen} />

      <Stack.Screen name={ViewsNames.ListaCategoriasScreenName}
        component={ListaCategoriasScreen} />
    </Stack.Navigator>
  );
}

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
  />);


  const [currentStack, setcurrentStack] = useState(StackBasic);

  useEffect(() => {

    const StackNegocio = () => (<MyStack
      errores={errores}
      seterrores={seterrores}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      drawer={drawer}
      login={login}
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
