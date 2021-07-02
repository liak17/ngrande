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

import { MenuNegocio } from '../MyDrawer/Menus.js'

export const Stack = createStackNavigator();

export const StackNegocioUser = ({ drawer, user, setlogin }) => {

    const { rol, nombre_completo } = user;

    const getMenu = (props) => {

        return <MenuNegocio {...props}
            nombre_completo={nombre_completo} />
    }

    return (
        <Stack.Navigator
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

            <Stack.Screen name={ViewsNames.DashboardScreenName} >
                {(props) =>
                    <DashboardScreen {...props}
                         user={user}
                         drawer={drawer}
                         menu={getMenu(props)}
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

        </Stack.Navigator>
    );
}

export const StackGeneral = ({ login, setlogin, isLoading,
    setIsLoading, errores, seterrores, setuser }) => {

    return (
        <Stack.Navigator
            initialRouteName={ViewsNames.InicioScreenName}
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
                {(props) => <RegistroUnoScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name={ViewsNames.RegistroScreenName}>
                {(props) => <RegistroScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name={ViewsNames.LoginScreenName}>
                {(props) => (<LoginScreen {...props}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    setlogin={setlogin}
                    login={login}
                    errores={errores}
                    setuser={setuser}
                    seterrores={seterrores}
                    login={login} />)}
            </Stack.Screen>

        </Stack.Navigator>

    );
}
