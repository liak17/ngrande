import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

//Pantallas Negocios 
import DashboardScreen from '../screens/DashboardScreen.js';
import NuevoCuponScreen from '../screens/NuevoCuponScreen.js';
import CuponScreen from '../screens/CuponScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import SucursalScreen from '../screens/SucursalScreen.js';
import NuevaSucursalScreen from '../screens/NuevaSucursalScreen.js';
import ListaCuponesScreen from '../screens/ListaCuponesScreen.js';
import PerfilScreen from '../screens/PerfilScreen.js';
//Pantallas Generales
import InicioScreen from '../screens/InicioScreen.js';
import RegistroScreen from '../screens/RegistroScreen.js';
import RegistroUnoScreen from '../screens/RegistroUnoScreen.js';
import * as ViewsNames from '../const/ViewsNames.js';



export const Stack = createStackNavigator();

export const StackGeneral = ({login,setlogin,isLoading,
    setIsLoading,errores, seterrores }) => {

    return (
        <Stack.Navigator
            initialRouteName={ViewsNames.InicioScreen}
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

            <Stack.Screen name={ViewsNames.InicioScreenName}>
                {(props) => <InicioScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name={ViewsNames.RegistroUnoScreenName}>
                     {(props)=><RegistroUnoScreen {...props}/>}
                 </Stack.Screen>

            <Stack.Screen name={ViewsNames.RegistroScreenName}>
                    {(props)=><RegistroScreen {...props}/>}
               </Stack.Screen>

            <Stack.Screen name={ViewsNames.LoginScreenName}>
                {(props) => (<LoginScreen {...props}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    setlogin={setlogin}
                    login={login} 
                    errores={errores}
                    seterrores={seterrores}
                    login={login} />)}
            </Stack.Screen>


        </Stack.Navigator>

    );
}
