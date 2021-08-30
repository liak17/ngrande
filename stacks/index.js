import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useCallback,useState} from 'react';

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
//Pantallas Usuario
import DashboardUserScreen from '../screens/DashboardUserScreen';
import ListaCategoriasScreen from '../screens/ListaCategoriasScreen';
import NegocioScreen from '../screens/NegocioScreen';
import ProductoScreen from '../screens/ProductoScreen';
import PerfilUsuarioScreen from '../screens/PerfilUsuarioScreen';
import EstadoUsuarioScreen from '../screens/EstadoUsuarioScreen';
import RedUsuarioScreen from '../screens/RedUsuarioScreen';
import OficinaUserScreen from '../screens/OficinaUserScreen';
import ReaderUserScreen from '../screens/ReaderUserScreen';
import MotivaUserScreen from '../screens/MotivaUserScreen';
import * as ViewsNames from '../const/ViewsNames.js';

import {MenuNegocio,MenuUsuario} from '../MyDrawer/Menus.js';

export const Stack = createStackNavigator();

export const StackNegocioUser = ({drawer, user, setlogin,
  negocioData}) => {
  const [SucursalesData,setDataSucursales]=useState(null);
  const [currentCuponSelected ,setCurrentCuponSelected] = useState(null);
  const  [currentSucursalSelected,setCurrentSucursalSelected]= useState(null);
  const {rol, nombre_completo} = user;  
  const getMenu = useCallback(props => {
    return <MenuNegocio {...props} nombre_completo={nombre_completo} />;
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Ngrande',
        headerTitleAlign: 'center',        
        headerStyle: {
          backgroundColor: '#f4520a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name={ViewsNames.DashboardScreenName}>
        {props => (
          <DashboardScreen
            {...props}
            user={user}
            setCurrentSucursalSelected={setCurrentSucursalSelected}
            drawer={drawer}
            negocioData={negocioData}
            setCurrentCuponSelected={setCurrentCuponSelected}
            setDataSucursales={setDataSucursales}
            menu={getMenu(props)}></DashboardScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.PerfilScreenName}>
        {props => (
          <PerfilScreen
            {...props}
            drawer={drawer}
            menu={getMenu(props)}></PerfilScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.NuevoCuponScreenName}>
        {props => (
          <NuevoCuponScreen
            {...props}
            drawer={drawer}
            menu={getMenu(props)}></NuevoCuponScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.CuponScreenName}>
        {props => (
          <CuponScreen
            {...props}
            drawer={drawer}
            currentCuponSelected={currentCuponSelected}
            menu={getMenu(props)}></CuponScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.SucursalScreenName}>
        {props => (
          <SucursalScreen
            {...props}
            drawer={drawer}
            currentSucursalSelected={currentSucursalSelected}
            menu={getMenu(props)}></SucursalScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.NuevaSucursalScreenName}>
        {props => (
          <NuevaSucursalScreen
            {...props}
            drawer={drawer}
            menu={getMenu(props)}></NuevaSucursalScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.ListaCuponesScreenName}>
        {props => (
          <ListaCuponesScreen
            {...props}
            drawer={drawer}
            menu={getMenu(props)}></ListaCuponesScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.ListaCategoriasScreenName}>
        {props => (
          <ListaCategoriasScreen
            {...props}
            drawer={drawer}
            menu={getMenu(props)}></ListaCategoriasScreen>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export const StackUsuario = ({drawer}) => {
 
    const getMenu = useCallback(props => {
        return <MenuUsuario {...props} nombre_completo={"Juan del hierro"} />;
      }, []);
    
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Ngrande',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4520a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name={ViewsNames.DashboardUserScreenName}       
      >
           {(props) =>(<DashboardUserScreen
            {... props}
            drawer={drawer}
            menu={getMenu(props)}
           />)}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.NegocioScreenName}>
        {props => (
          <NegocioScreen
            {...props}
            drawer={drawer}
            menu={getMenu(props)}></NegocioScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.ProductoScreenName}>
        {props => (
          <ProductoScreen
            {...props}
            menu={getMenu(props)}
            drawer={drawer}></ProductoScreen>
            
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.PerfilUsuarioScreenName}>
        {props => (
          <PerfilUsuarioScreen
            {...props}
            menu={getMenu(props)}
            drawer={drawer}></PerfilUsuarioScreen>
            
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.EstadoUsuarioScreenName}>
        {props => (
          <EstadoUsuarioScreen
            {...props}
            menu={getMenu(props)}
            drawer={drawer}></EstadoUsuarioScreen>

        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.RedUsuarioScreenName}>
        {props => (
          <RedUsuarioScreen
            {...props}
            menu={getMenu(props)}
            drawer={drawer}></RedUsuarioScreen>

        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.OficinaUserScreenName}>
        {props => (
          <OficinaUserScreen
            {...props}
            menu={getMenu(props)}
            drawer={drawer}
></OficinaUserScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.ListaCategoriasScreenName}>
        {props => (
          <ListaCategoriasScreen
            {...props}
            menu={getMenu(props)}
            drawer={drawer}
></ListaCategoriasScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.ListaCuponesScreenName}>
        {props => (
          <ListaCuponesScreen
            {...props}
            menu={getMenu(props)}
            drawer={drawer}
></ListaCuponesScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.ReaderUsuarioScreenName}>
        {props => (
          <ReaderUserScreen
            {...props}
            menu={getMenu(props)}
            drawer={drawer}
            ></ReaderUserScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.MotivaUserScreenName}>
        {props => (
          <MotivaUserScreen
            {...props}
            menu={getMenu(props)}
            drawer={drawer}
            ></MotivaUserScreen>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export const StackGeneral = ({
  login,
  setlogin,
  isLoading,
  setIsLoading,
  errores,
  seterrores,
  setuser,
}) => {
  const LS = useCallback(
    props => {
      return (
        <LoginScreen
          {...props}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setlogin={setlogin}
          login={login}
          errores={errores}
          setuser={setuser}
          seterrores={seterrores}
        />
      );
    },
    [errores, login, isLoading],
  );

  return (
    <Stack.Navigator
      initialRouteName={ViewsNames.InicioScreenName}
      screenOptions={{
        title: 'Ngrande',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4520a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name={ViewsNames.InicioScreenName}>
        {props => <InicioScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.RegistroUnoScreenName}>
        {props => <RegistroUnoScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.RegistroScreenName}>
        {props => <RegistroScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.LoginScreenName}>
        {props => <LS {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
