import React from 'react'
import { View, Text,FlatList} from 'react-native'
import { stylesApp } from '../const/styles.js';
export const ListaCupones = ({dataInit,settings,refresh}) => {    
    console.log(dataInit);
    const{onRefreshHandler,style,flatListOptions}=settings;
    const{renderItem,keyNameAtrr,horizontal}=flatListOptions;    
    
    return (
        <View style={style}>            
            <FlatList
                data={dataInit}
                horizontal={horizontal?horizontal:false}
                onRefresh={onRefreshHandler?onRefreshHandler:()=>{}}
                ListEmptyComponent={<Text>NADA Aùn</Text>}
                refreshing={refresh}
                renderItem={renderItem}
                keyExtractor={(item) => item[keyNameAtrr]}
            />
        </View>
        );

}
