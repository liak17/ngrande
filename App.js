import 'react-native-gesture-handler';
import React, { useState, useRef, useEffect } from 'react';

import { Stack, StackGeneral, StackNegocioUser } from './stacks/index.js';


export default function App() {
  const drawer = useRef(null);
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
  const [isLoading, setIsLoading] = useState(false)
  const [user, setuser] = useState({ rol: 'negocio', id: '1' });
  const [errores, seterrores] = useState([]);
  const [login, setlogin] = useState({
    cedula: '22270222138',
    password: '',
    isLogin: false
  });
  useEffect(() => {
    if (login.isLogin) {
      const StackNegocio = () => (<StackNegocioUser
        drawer={drawer}
        setlogin={setlogin}
        user={user}
      />);
op      setcurrentStack(StackNegocio)
    } else {
      setcurrentStack(StackBasic)
    }
    return () => {
      setcurrentStack(StackBasic)
    }
  })
  

  return (
    <NavigationContainer>
      {currentStack}
    </NavigationContainer>
  );
}
