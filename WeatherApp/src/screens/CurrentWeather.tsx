import { ImageBackground, SafeAreaView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';

const CurrentWeather = () => {

  const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles;

  return (
    <SafeAreaView style={wrapper} >
      <ImageBackground style={{ flex: 1 }} source={require('../../assets/current.png')} >
        <View style={container} >

          <Feather name="sun" size={100} color='black' ></Feather>
          <Text style={temp} >6</Text>
          <Text style={feels} >Feels like 5</Text>

          <RowText
            containerStyle={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
            messageOne='High: 8'
            messageTwo='Low: 6'
          />
        </View>

        <View>
          <RowText
            containerStyle={bodyWrapper}
            messageOneStyles={description}
            messageTwoStyles={message}
            messageOne='Its Sunny'
            messageTwo='Its perfect t-shirt weather'
          />
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

export default CurrentWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 20,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})