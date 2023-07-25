import { Alert, Button, Dimensions, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';


const App = () => {

  const [passwordValue, setPasswordValue] = useState('Your password will be shown here')
  const [lowercase, setLowercase] = useState(true)
  const [uppercase, setUppercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [specialCharacter, setSpecialCharacter] = useState(false)
  const [inputValue, setInputValue] = useState('');

  const generatePasswordString = () => {
    let myPasswordString = ''
    if (lowercase) {
      myPasswordString += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercase) {
      myPasswordString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (number) {
      myPasswordString += '1234567890'
    }
    if (specialCharacter) {
      myPasswordString += '@#$&?*%~/'
    }
    return myPasswordString;
  }

  const resetState = () => {
    setUppercase(false),
      setSpecialCharacter(false),
      setNumber(false),
      setInputValue('')
    return
  }

  const copyPassword = (password: string) => {
    Clipboard.setString(password);
    Snackbar.show({
      text: 'Text copied!',
      backgroundColor:'green'
    });
  }

  const generatePassword = async () => {
    const passwordLength = parseInt(inputValue);
    if (passwordLength > 30) {
      Snackbar.show({
        text: "Password can't be greater than 30 character!",
        backgroundColor:'red'
      });
      return
    }
    else if (passwordLength < 8) {
      Snackbar.show({
        text: 'Password must have at least 8 character!',
        backgroundColor:'red'
      });
      return
    }

    let myPassword = ''
    const passwordString = generatePasswordString();
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * passwordString.length)
      myPassword += passwordString.charAt(randomIndex)
    }
    await setPasswordValue(myPassword)
    resetState();
  }

  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView>
      <View style={{height:screenHeight,backgroundColor:'white'}} >
        <View style={styles.heading} >
          <Text style={styles.headingText} >Password Generator</Text>
          <Text style={styles.headingTextSecond}>You deserve a better password!</Text>
        </View>

        <View style={styles.generatedPasswordContainer} >
          <Pressable>
            <Text onPress={() => { copyPassword(passwordValue) }} style={styles.generatedPassword}>{passwordValue}</Text>
          </Pressable>
        </View>

        <View style={styles.checkboxContainer} >

          <View style={styles.checkbox} >
            <BouncyCheckbox
              disableBuiltInState
              fillColor='black'
              isChecked={number}
              onPress={() => { setNumber(!number) }}
            />
            <Text style={styles.checkboxText}>Numeric character</Text>
          </View>

          <View style={styles.checkbox} >
            <BouncyCheckbox
              disableBuiltInState
              fillColor='black'
              isChecked={lowercase}
              onPress={() => { setLowercase(!lowercase) }}
            />
            <Text style={styles.checkboxText}>Lowercase character</Text>
          </View>

          <View style={styles.checkbox} >
            <BouncyCheckbox
              disableBuiltInState
              fillColor='black'
              isChecked={uppercase}
              onPress={() => { setUppercase(!uppercase) }}
            />
            <Text style={styles.checkboxText}>Uppercase character</Text>
          </View>

          <View style={styles.checkbox} >
            <BouncyCheckbox
              disableBuiltInState
              fillColor='black'
              isChecked={specialCharacter}
              onPress={() => { setSpecialCharacter(!specialCharacter) }}
            />
            <Text style={styles.checkboxText}>Special character</Text>
          </View>

        </View>

        <View style={styles.inputContainer} >
          <TextInput keyboardType='numeric' style={styles.inputDec} value={inputValue} onChangeText={(text) => setInputValue(text)} placeholder='Enter the length of password' />
        </View>

        <View style={styles.buttonContainer} >
          <Pressable>
            <Text onPress={generatePassword} style={styles.button} >Generate</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'black',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
  },
  headingTextSecond: {
    color: 'white'
  },

  generatedPasswordContainer: {
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  generatedPassword: {
    borderWidth: 2,
    backgroundColor: 'white',
    color: 'black',
    width: 300,
    textAlign: 'center',
    height: 50,
    textAlignVertical: 'center',
    fontSize: 18
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputDec: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    width: 250,
    paddingHorizontal: 15,
    fontSize: 16
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2,
    width: 250,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    backgroundColor: 'black',
    color: 'white',
  },
  checkboxContainer: {
    height: 200,
    display: 'flex',
    justifyContent: 'center'
  },

  checkbox: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingLeft: 90
  },
  checkboxText: {
    fontSize: 18,
    fontWeight: 'bold',

  }
})