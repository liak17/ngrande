import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

const styles =StyleSheet.create({
    text:{
        fontFamily:'Poppins',
    },
});

function Text({children}){
    return <RNText style={styles.text}>{children}</RNText>;
}

export default Text;