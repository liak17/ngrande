import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
export default function BotonComponente({texto, screen, estilo}) {
  return (
    <Button mode="contained" style={estilo} onPress={screen}>
      {texto}
    </Button>
  );
}

const styles = StyleSheet.create({
  subtitulo: {
    fontSize: 18,
  },
  titulo: {
    fontSize: 48,
  },
});
