import 'react-native-gesture-handler';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {  StackGeneral, StackNegocioUser, StackUsuario } from './stacks/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { Roles } from './const/Roles.js';
import axios from 'axios';

export default function App() {
  const drawer = useRef(null);

  const StackBasic = useCallback(() => {
    return (<StackGeneral
      errores={errores}
      seterrores={seterrores}
      login={login}
      setlogin={setlogin}
      setuser={setuser}
    />)
  }, [errores, login]);

  const [currentStack, setcurrentStack] = useState(StackBasic);
  const [user, setuser] = useState({});
  const [errores, seterrores] = useState([]);
  const [login, setlogin] = useState(false);
  const [codNegocio, setCodNegocio] = useState(0);

  const StackUser = useCallback(() => {
    return (<StackUsuario
      drawer={drawer}
      user={user}
    />)
  }, [drawer, user]
  )


  //este efecto debe funcionar luego con un respaldo local
  //sirve  para mandar directamente al screen de negocios sin necesidad de 
  //pasar por el login
  useEffect(async () => {
    
    const consultaNegocioData = async () => {

      const url = `https://infinite-crag-10539.herokuapp.com/negocio/user/${user.cod_user}`
      try {
        const res = await axios.get(url);
        setCodNegocio(res.data.cod_negocio);

      } catch (error) {
        alert('algo salio mal intentalo más tarde');
      }
    }
    user.cod_user > 0 && user.roleCodRol === Roles.NEGOCIO.roleCodRol ? await consultaNegocioData() : null;
  });

  const StackNegocio = useCallback(() => {

    return (<StackNegocioUser
      drawer={drawer}
      setlogin={setlogin}
      user={user}
      codNegocio={codNegocio}
    />)
  }, [drawer, user, codNegocio]
  )



  useEffect(async () => {

    if (login) {

      const { roleCodRol } = user;
      console.log(user);
      switch (roleCodRol) {
        case Roles.NEGOCIO.roleCodRol:
          codNegocio > 0 ? setcurrentStack(StackNegocio) : setcurrentStack(StackBasic);
          break;
        case Roles.User.roleCodRol:
          setcurrentStack(StackUser);
          break;
        default:
          setcurrentStack(StackBasic);
      }

    } else {
      setcurrentStack(StackBasic)
    }

  }, [login, codNegocio])


  return (
    <NavigationContainer>
      {currentStack}
    </NavigationContainer>
  );
}
