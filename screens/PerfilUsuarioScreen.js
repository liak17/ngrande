import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableHighlight,
  DrawerLayoutAndroid,
} from 'react-native';
import {Avatar, Card, Button} from 'react-native-paper';
import CuadroDoble from '../componentes/CuadroDoble.js';
import CartaNombre from '../componentes/CartaNombre';
import { stylesApp} from '../const/styles.js';
const CUPON_LIST = [
  {
      id:1,
  texto:'Mi Tarjeta Virtual',

    },
    {
      id:2,
      texto:'Mi Oficina Virtual',

    },
    {
      id:3,
      texto:'Motiva Entrepreneurs',
      
    },
    {
      id:4,
      texto:'Mi Billetera',
      
    },
];


const PerfilUsuarioScreen = ({drawer, menu,navigation}) => {
   const [cupon, setState] = useState([]);
  function handleOnPress() {
    navigation.navigate('CuponScreen');
  }

  return (
    <DrawerLayoutAndroid        
      renderNavigationView={()=>menu}
        drawerPosition='left'
        drawerWidth={300}
        ref={drawer}
    >
      
        <ScrollView style={stylesApp.container}>
          <Text style={stylesApp.textTitle}>MI PERFIL</Text>
          <View style={{flex: 1}}>
            <View style={{paddingTop: 16}}>
                <CartaNombre 
                cedula={'1729765465'}
                nombre='Marco Diaz Gonzalez'
                numero='0988765645'
                />
                
            </View>
          </View>
          <View style={{flex: 2, paddingTop:22, justifyContent: 'center'}}>
          <FlatList
                        columnWrapperStyle={{display: 'flex',justifyContent: 'center'}}
                        data={CUPON_LIST}
                        horizontal={false}
                        numColumns={2}
                        renderItem={({ item }) => <CuadroDoble texto={item} onPress={handleOnPress} />}
                        keyExtractor={item => item.id}

                    />
     
          </View>
        <View style={{paddingTop:16}}>
        <Button style={stylesApp.btnPrimaryCuadrado} mode='contained'>
            CERRAR SESION
        </Button>
        </View>
        
          
        </ScrollView>
      
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({

  card: {
  alignItems: 'center',
  paddingVertical:16,
  justifyContent: 'center'
  },
});

export default PerfilUsuarioScreen;

{/* <TouchableHighlight
              onPress={() => navigation.navigate('SucursalScreen')}>
              <UltimaSucursal
                nombreSucursal="Calzado de Pedro"
                ciudadSucursal="Quito - Ecuador"
              />
            </TouchableHighlight> */}