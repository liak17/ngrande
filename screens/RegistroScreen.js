import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, TextInput, Checkbox} from 'react-native-paper';

const RegistroScreen = (props) => {
  const [state, setState] = useState({
    cedula: '',
    nombre: '',
    email: '',
    telefono: '',
    pais: '',
    ciudad: '',
    categoria: '',
  });

  const cogerTexto = (name, value) => {
    setState({...state, [name]: value});
  };

  const crearNuevoUsuario = () => {
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
  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>REGISTRARSE</Text>
        <TextInput
          label="cedula"
          mode="outlined"
          icon=""
          onChangeText={value => cogerTexto('cedula', value)}
        />
        <TextInput
          label="nombre"
          mode="outlined"
          onChangeText={value => cogerTexto('nombre', value)}
        />
        <TextInput
          label="email"
          mode="outlined"
          onChangeText={value => cogerTexto('email', value)}
        />
        <TextInput
          label="telefono"
          mode="outlined"
          onChangeText={value => cogerTexto('telefono', value)}
        />
        <TextInput
          label="pais"
          mode="outlined"
          onChangeText={value => cogerTexto('pais', value)}
        />
        <TextInput
          label="ciudad"
          mode="outlined"
          onChangeText={value => cogerTexto('ciudad', value)}
        />
        <TextInput
          label="categoria"
          mode="outlined"
          onChangeText={value => cogerTexto('categoria', value)}
        />
        <Text>
          Acepto los terminos y condiciones
          <Checkbox status="unchecked" />
        </Text>
        <Button
          style={styles.botonPrimario}
          mode="contained"
          onPress={() => crearNuevoUsuario()}>
          Registrarse
        </Button>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  botonPrimario: {
    backgroundColor: '#FA4141',
    padding: 18,
    borderRadius: 50,
    marginTop: 16,
  },
  botonSecundario: {
    backgroundColor: '#7755CC',
    padding: 18,
    borderRadius: 50,
  },
  subtitulo: {
    fontSize: 18,
  },
  titulo: {
    fontSize: 36,
  },
  contenedor: {
    marginTop: 26,
    marginLeft: 39,
    marginRight: 39,
  },
});
export default RegistroScreen;
