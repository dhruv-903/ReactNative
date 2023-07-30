import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

type WeatherArray = {
    dt_text: string,
    main: {
        temp_max: number,
        temp_min: number,
    },
    weather: [
        {
            main: string,
        }
    ]
}

const dataArray: WeatherArray[] = [
    {
        dt_text: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: "Clear",
            }
        ]
    },
    {
        dt_text: "2023-02-18 12:10:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: "Cloud",
            }
        ]
    },
    {
        dt_text: "2023-02-18 12:00:90",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: "Rain",
            }
        ]
    }
]

const UpcomingWeather = () => {

    const renderItem = ({ item }: { item: WeatherArray }) => (
        <ListItem condition={item.weather[0].main} dt_text={item.dt_text} min={item.main.temp_min} max={item.main.temp_max} />
    )

    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/sky.png')} >
                <FlatList
                    data={dataArray}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_text}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default UpcomingWeather

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})