import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import IconText from '../components/IconText'

const CityWeather = () => {

    const { container, imageLayout, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText } = styles

    return (
        <SafeAreaView style={container} >
            <ImageBackground style={imageLayout} source={require('../../assets/weather.png')} >
                <Text style={[cityName, cityText]} >London</Text>
                <Text style={[countryName, cityText]} >UK</Text>

                <View style={populationWrapper} >
                    <IconText
                        iconName='user'
                        iconColor='black'
                        bodyText='8000'
                        bodyTextStyles={populationText}
                    />
                </View>

                <View style={riseSetWrapper} >
                    <IconText
                        iconName='sunrise'
                        iconColor='black'
                        bodyText='12:58:88'
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName='sunset'
                        iconColor='black'
                        bodyText='12:58:88'
                        bodyTextStyles={riseSetText}
                    />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default CityWeather

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    imageLayout: {
        flex: 1,
        backgroundColor: 'black'
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,

    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'black',
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    }
})