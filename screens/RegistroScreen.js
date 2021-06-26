import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, TextInput, Checkbox, List} from 'react-native-paper';

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
    <ScrollView style={{backgroundColor:'#F2F2F3'}}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>REGISTRARSE</Text>
        <TextInput
        style={styles.textInput}
        outlineColor="#ffff"
          label="Cedula"
          mode="outlined"
          left={<TextInput.Icon name="eye" />}
          onChangeText={value => cogerTexto('cedula', value)}
        />
        <TextInput
        outlineColor="#ffff"
          label="Nombre"
          mode="outlined"
          left={<TextInput.Icon name="eye" />}
          onChangeText={value => cogerTexto('nombre', value)}
        />
        <TextInput
        outlineColor="#ffff"
          label="Email"
          mode="outlined"
          left={<TextInput.Icon name="eye" />}
          onChangeText={value => cogerTexto('email', value)}
        />
        <TextInput
        outlineColor="#ffff"
          label="Teléfono"
          mode="outlined"
          left={<TextInput.Icon name="eye" />}
          onChangeText={value => cogerTexto('telefono', value)}
        />
        <TextInput
        outlineColor="#ffff"
          label="País"
          mode="outlined"
          left={<TextInput.Icon name="eye" />}
          onChangeText={value => cogerTexto('pais', value)}
        />
        <TextInput
        outlineColor="#ffff"
          label="Ciudad"
          mode="outlined"
          left={<TextInput.Icon name="eye" />}
          onChangeText={value => cogerTexto('ciudad', value)}
        />
        <TextInput
        outlineColor="#ffff"
          label="Categoria"
          mode="outlined"
          left={<TextInput.Icon name="eye" />}
          onChangeText={value => cogerTexto('categoria', value)}
        />
        <Text style={{fontFamily: 'Poppins-Light'}}>
          Acepto los Términos y Condiciones
          <Checkbox status="unchecked" />
        </Text>
        
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.texto,{fontSize:12}}>¿Ya tienes una cuenta? Inicia Sesión</Text>
        <Button
        uppercase={false}
          style={styles.botonPrimario}
          mode="contained"
          onPress={() => crearNuevoUsuario()}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize:14}}>Registrarse</Text>
        </Button>
        </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  botonPrimario: {
    backgroundColor: '#FA4141',
    paddingVertical: 0,
    paddingHorizontal:0,
    borderRadius: 50,
    marginTop: 16,
    fontFamily: 'Poppins-Regular', 
    paddingVertical:16,
    paddingHorizontal:15,
    marginStart:16
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
    fontFamily: 'Poppins-Bold'
  },
  contenedor: {
    marginTop: 26,
    marginLeft: 39,
    marginRight: 39,
    display:'flex'
  },
  textInput:{
    fontFamily: 'Poppins-Light'
  }
  ,
  texto:{
    fontFamily: 'Poppins-Regular'
  }
});
export default RegistroScreen;
