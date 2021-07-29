import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native';
import { stylesApp } from '../../const/styles.js';
export const Spinner = ({ isLoading }) => {
    
    const Spinn = () => {        
        return (
            <View>
                <Text style={stylesApp.text}>
                    Espere porfavor
                </Text>
                <ActivityIndicator size="large" color="#FA4141" />
            </View>
            )
        }
    


    return (
        <View>
            {isLoading?<Spinn></Spinn>:null}
        </View>

    )
}