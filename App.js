import 'react-native-gesture-handler';
import React, { useState, useRef,useEffect} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//constant
import * as Screens from './const/ViewsNames.js';
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
import NegocioScreen from './screens/NegocioScreen';
import ProductoScreen from './screens/ProductoScreen';
import PerfilUsuarioScreen from './screens/PerfilUsuarioScreen';
import EstadoUsuarioScreen from './screens/EstadoUsuarioScreen';
import RedUsuarioScreen from './screens/RedUsuarioScreen';
import OficinaUserScreen from './screens/OficinaUserScreen';
import ReaderUserScreen from './screens/ReaderUserScreen';
import { MenuNegocio, MenuSimple } from './MyDrawer/Menus';

const Stack = createStackNavigator();

const MyStack = ({ drawer, user, login,
                  setlogin, isLoading, setIsLoading,
                errores,seterrores }) => {
                                    
  const { rol } = user;
  const { isLogin } = login;
  const initialRoute = isLogin ? Screens.DashboardScreenName :
    Screens.InicioScreen;
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

      <Stack.Screen name={Screens.InicioScreenName}
        component={InicioScreen} />

      <Stack.Screen name={Screens.RegistroUnoScreenName}
        component={RegistroUnoScreen} />

      <Stack.Screen name={Screens.RegistroScreenName}
        component={RegistroScreen} />

      <Stack.Screen name={Screens.LoginScreenName}>
        {(props) => (<LoginScreen {...props}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setlogin={setlogin}
          errores={errores}
          seterrores={seterrores}
          login={login} />)}
      </Stack.Screen>

      <Stack.Screen name={Screens.DashboardScreenName} >
        {(props) =>
          <DashboardScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></DashboardScreen>}
      </Stack.Screen>

      <Stack.Screen name={Screens.PerfilScreenName} >
        {(props) =>
          <PerfilScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></PerfilScreen>}
      </Stack.Screen>

      <Stack.Screen name={Screens.NuevoCuponScreenName}  >
        {(props) =>
          <NuevoCuponScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></NuevoCuponScreen>}
      </Stack.Screen>

      <Stack.Screen name={Screens.CuponScreenName} >
        {(props) =>
          <CuponScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></CuponScreen>}
      </Stack.Screen>

      <Stack.Screen name={Screens.SucursalScreenName} >
        {(props) =>
          <SucursalScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></SucursalScreen>}
      </Stack.Screen>

      <Stack.Screen name={Screens.NuevaSucursalScreenName}>
        {(props) =>
          <NuevaSucursalScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></NuevaSucursalScreen>}
      </Stack.Screen>

      <Stack.Screen name={Screens.ListaCuponesScreenName}>
        {(props) =>
          <ListaCuponesScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></ListaCuponesScreen>}
      </Stack.Screen>
      <Stack.Screen name={Screens.DashboardUserScreenName}
        component={DashboardUserScreen} />
  <Stack.Screen name={Screens.NegocioScreenName}>
        {(props) =>
          <NegocioScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></NegocioScreen>}
      </Stack.Screen>
      <Stack.Screen name={Screens.ProductoScreenName}>
        {(props) =>
          <ProductoScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></ProductoScreen>}
      </Stack.Screen>
      <Stack.Screen name={Screens.PerfilUsuarioScreenName}>
        {(props) =>
          <PerfilUsuarioScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></PerfilUsuarioScreen>}
      </Stack.Screen>
      <Stack.Screen name={Screens.EstadoUsuarioScreenName}>
        {(props) =>
          <EstadoUsuarioScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></EstadoUsuarioScreen>}
      </Stack.Screen>
      <Stack.Screen name={Screens.RedUsuarioScreenName}>
        {(props) =>
          <RedUsuarioScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></RedUsuarioScreen>}
      </Stack.Screen>
      <Stack.Screen name={Screens.OficinaUserScreenName}>
        {(props) =>
          <OficinaUserScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></OficinaUserScreen>}
      </Stack.Screen>
      <Stack.Screen name={Screens.ReaderUsuarioScreenName}>
        {(props) =>
          <ReaderUserScreen {...props}
            drawer={drawer} menu={getMenu(props)}
          ></ReaderUserScreen>}
      </Stack.Screen>
<Stack.Screen name={Screens.ListaCategoriasScreenName}
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
  return (
    <NavigationContainer>
      <MyStack
        errores={errores}
        seterrores={seterrores}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        drawer={drawer}
        login={login}
        setlogin={setlogin}
        user={user}
      />
    </NavigationContainer>
  );
}
