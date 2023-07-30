import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feater from 'react-native-vector-icons/Feather'

type WeatherInfo = {
    dt_text: string,
    min: number,
    max: number,
    condition: string
}

const ListItem = (props: WeatherInfo) => {
    const { dt_text, min, max} = props;
    const {item, date,temp}  = styles;
    return (
        <View style={item} >
            <Feater name={'sun'} size={50} color={'black'} />
            <Text style={date} >{dt_text}</Text>
            <Text style={temp} >{min}</Text>
            <Text style={temp} >{max}</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'white',
    },
    temp: {
        color: 'black',
        fontSize: 20
    },
    date: {
        color: 'black',
        fontSize: 15
    }
})