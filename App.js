import 'react-native-gesture-handler';
import React, { useState, useRef, useEffect,useCallback } from 'react';
import { Stack, StackGeneral, StackNegocioUser } from './stacks/index.js';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const drawer = useRef(null);

  const StackBasic = useCallback( () => {
    return (<StackGeneral
    errores={errores}
    seterrores={seterrores}
    isLoading={isLoading}
    setIsLoading={setIsLoading}
    login={login}
    setlogin={setlogin}
    setuser={setuser}
  />)
},[errores,login,isLoading]);

  const [currentStack, setcurrentStack] = useState(StackBasic);
  const [isLoading, setIsLoading] = useState(false)
  const [user, setuser] = useState({ rol: 'negocio', id: '1' });
  const [errores, seterrores] = useState([]);
  const [login, setlogin] = useState({
    cedula: '22270222138',
    password: '',
    isLogin: false
  });

  const StackNegocio = useCallback(() => {

    return (<StackNegocioUser
      drawer={drawer}
      setlogin={setlogin}
      user={user}
    />)
  },[drawer, user]
  )

  useEffect(() => {
    console.log('render');
    if (login.isLogin) {
      setcurrentStack(StackNegocio)
    } else {
      setcurrentStack(StackBasic)
    }

  }, [login])


  return (
    <NavigationContainer>
      {currentStack}
    </NavigationContainer>
  );
}
