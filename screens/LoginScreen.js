import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';

import BotonComponente from '../componentes/BotonComponente';

const LoginScreen = ({navigation}) =>{
    const [state, setState] = useState({
        cedula: '',
        password: '',

      });

    const cogerTexto = (name, value) => {
        setState({...state, [name]: value});
      };


    const iniciarSesion = () => {
        if (state.cedula === '') {
            alert('Por favor rellena los datos')
        }else{
          //aqio es donde se deben enviar los datos para guardarse  
          try {
              props.navigation.navigate('DashboardScreen')
          } catch (error) {
              console.log(error);
          }
        }
        
    };

    return(
        <ScrollView>
        <View style={styles.container}>
    
      <Text style={styles.titulo}>INICIAR SESION</Text>
      <TextInput
          label="Cedula"
          mode="outlined"
          onChangeText={value => cogerTexto('cedula', value)}
        />
        <TextInput
          label="Contraseña"
          mode="outlined"
          onChangeText={value => cogerTexto('password', value)}
        />
      <View style={styles.containerBotones}>
        <Text style={styles.subtitulo}>¿Olvidaste la contraseña?</Text>
        <BotonComponente
          texto="Iniciar Sesión"
          screen={() => navigation.navigate('DashboardScreen')}
          estilo={styles.botonSecundario}
          
        />
      </View>
    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    botonPrimario: {
      backgroundColor: '#FA4141',
      padding: 18,
      borderRadius: 50,
      fontSize: 14,
      fontFamily: 'Poppins',
      marginStart: 4,
      marginEnd: 8,
    },
    botonSecundario: {
      backgroundColor: '#7755CC',
      padding: 18,
      marginStart: 10,
      borderRadius: 50,
      fontSize: 14,
      marginEnd: 8,
    },
    container: {
      flexDirection: 'column',
      paddingVertical: 15,
      paddingLeft: 16,
      borderBottomWidth: 1,
      alignContent: 'space-between',
      height:'100%',
    },
    containerBotones: {
        marginTop:100,
      flexDirection: 'row',
      position:'relative',
      bottom: 30,
      
    },
    subtitulo: {
      fontSize: 14,
      fontFamily: 'Poppins',
      marginTop:16,
      marginStart:16,
    },
    titulo: {
      fontSize: 48,
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      marginTop:16,
      marginTop:200,
      marginBottom:16
      },
    ggg: {
      backgroundColor: '#6C63FF',
    },
  });
  
export default LoginScreen;