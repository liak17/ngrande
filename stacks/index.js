import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useCallback, useState } from 'react';

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

import { MenuNegocio, MenuUsuario } from '../MyDrawer/Menus.js';
import axios from 'axios';
import { GETCUPONES, GET_CATEGORIAS, GET_CUPONES } from '../const/Urls.js';

export const Stack = createStackNavigator();

export const StackNegocioUser = ({ drawer, user, setlogin,
  codNegocio }) => {
  const [sucursalesData, setDataSucursales] = useState(null);
  const [cuponesData, setDataCupones] = useState(null);
  const [currentCuponSelected, setCurrentCuponSelected] = useState(null);
  const [currentSucursalSelected, setCurrentSucursalSelected] = useState(null);
  const { rol, nombre_completo } = user;
  const getMenu = useCallback(props => {
    return <MenuNegocio {...props} nombre_completo={nombre_completo} setlogin={setlogin} />;
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
            codNegocio={codNegocio}
            setCurrentCuponSelected={setCurrentCuponSelected}
            setDataSucursales={setDataSucursales}
            setDataCupones={setDataCupones}
            menu={getMenu(props)}></DashboardScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.PerfilScreenName}>
        {props => (
          <PerfilScreen
            {...props}
            setlogin={setlogin}
            user={user}
            drawer={drawer}
            menu={getMenu(props)}></PerfilScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.NuevoCuponScreenName}>
        {props => (
          <NuevoCuponScreen
            {...props}
            drawer={drawer}
            codNegocio={codNegocio}
            menu={getMenu(props)}></NuevoCuponScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.CuponScreenName}>
        {props => (
          <CuponScreen
            {...props}
            drawer={drawer}
            editable={true}
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
            codNegocio={codNegocio}
            menu={getMenu(props)}></NuevaSucursalScreen>
        )}
      </Stack.Screen>

      <Stack.Screen name={ViewsNames.ListaCuponesScreenName}>
        {props => (
          <ListaCuponesScreen
            {...props}
            setCurrentCuponSelected={setCurrentCuponSelected}
            cuponesData={cuponesData}
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

export const StackUsuario = ({ drawer, user,setlogin }) => {
  const { cod_user, nombre_completo } = user;
  const [categorias, setCategorias] = useState(null);
  const [currentCuponSelected, setCurrentCuponSelected] = useState(null);
  const [cupones,setCupones]= useState(null);



  /*consulta categorias */
  useEffect(() => {
    
    const consultaPromociones=async()=>{
      
      try {
        const url =GETCUPONES;
        const whereClause = {
          whereClause:[  {
            "attr": "estado",
            "value": 1
        }]
        };
        const cupones=await axios.post(url,whereClause);        
        setCupones(prev=>{
          const currentCupones= Object.assign(cupones.data, prev);
          return currentCupones;
        });       

      } catch (error) {
        alert('algo salio mal,intentalo más tarde');
      }
    
    }

    const consultaCategorias = async () => {
      const url = GET_CATEGORIAS;
      try {
        const categorias = await axios.get(url);
        console.log(categorias.data);
        setCategorias(categorias.data);

      } catch (error) {
        alert('algo salio mal,intentalo más tarde')
      }

    }

    if (!categorias) {
      consultaCategorias();
    }

    if(!cupones){
      consultaPromociones();
    }

  }, [])

  const getMenu = useCallback(props => {
    return <MenuUsuario {...props} nombre_completo={nombre_completo} setlogin={setlogin} />;
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
        {(props) => (<DashboardUserScreen
          {...props}
          drawer={drawer}
          categoriasData={categorias}
          setCurrentCuponSelected={setCurrentCuponSelected}
          menu={getMenu(props)}
          cupones={cupones}

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
            setlogin={setlogin}
            user={user}
            drawer={drawer}></PerfilUsuarioScreen>

        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.EstadoUsuarioScreenName}>
        {props => (
          <EstadoUsuarioScreen
            {...props}
            user={user}
            menu={getMenu(props)}
            drawer={drawer}></EstadoUsuarioScreen>

        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.RedUsuarioScreenName}>
        {props => (
          <RedUsuarioScreen
            {...props}
            user={user}
            menu={getMenu(props)}
            drawer={drawer}></RedUsuarioScreen>

        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.OficinaUserScreenName}>
        {props => (
          <OficinaUserScreen
            {...props}
            user={user}
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
            categoriasData={categorias}
          ></ListaCategoriasScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.ListaCuponesScreenName}>
        {props => (
          <ListaCuponesScreen
            {...props}
            cuponesData={cupones}
            menu={getMenu(props)}
            drawer={drawer}
          ></ListaCuponesScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.ReaderUsuarioScreenName}>
        {props => (
          <ReaderUserScreen
            {...props}
            user={user}
            menu={getMenu(props)}
            drawer={drawer}
          ></ReaderUserScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.MotivaUserScreenName}>
        {props => (
          <MotivaUserScreen
            {...props}
            user={user}
            menu={getMenu(props)}
            drawer={drawer}
          ></MotivaUserScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name={ViewsNames.CuponScreenName}>
        {props => (
          <CuponScreen
            {...props}
            editable={false}
            drawer={drawer}
            currentCuponSelected={currentCuponSelected}
            menu={getMenu(props)}></CuponScreen>
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
