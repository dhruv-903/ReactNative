import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

type iconNameColor = {
    iconName: string,
    bodyText: string,
    iconColor: string,
    bodyTextStyles: any,
}

const IconText = (props: iconNameColor) => {
    const { iconName, bodyText, iconColor, bodyTextStyles } = props
    const { container, textTheme } = styles
    return (
        <View style={container} >
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[textTheme, bodyTextStyles]} >{bodyText}</Text>
        </View>
    )
}

export default IconText

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    
    textTheme: {
        fontWeight: 'bold'
    }
})