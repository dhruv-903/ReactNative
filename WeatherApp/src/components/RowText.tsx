import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type MessagesStyles = {
    messageOne: string,
    messageTwo: string,
    containerStyle: any,
    messageOneStyles: any,
    messageTwoStyles: any,
}

const RowText = (props: MessagesStyles) => {
    const { messageOne, messageTwo, containerStyle, messageOneStyles, messageTwoStyles } = props;
    return (
        <View style={containerStyle} >
            <Text style={messageOneStyles} >{messageOne}</Text>
            <Text style={messageTwoStyles} >{messageTwo}</Text>
        </View>
    )
}

export default RowText

const styles = StyleSheet.create({})