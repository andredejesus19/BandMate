import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackgroundBase, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
export default function App() {

  
  return (
    <View style={styles.container}>
    <StatusBar style="light"/>
      

      <View style={styles.top}> 

        <Image source={require(`./assets/login/logo.png`)} style={styles.logoBandMate}/>
      
      </View> 
      <View style={styles.forms}>

        <View>
          <Text style={styles.txtLogin}>login</Text>
        </View>

          <View style={styles.inputUser}>

            <TextInput style={styles.txtUser} placeholder='Band Mate' />

          </View>

      </View>

    </View> 
    

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C2120',
    alignItems: 'center',
    flexDirection: 'collum',
    alignContent: 'flex-start'
  },

  top:{
    paddingTop: '40%',
    alignItems: 'center',
  },

  logoBandMate:{
    width: 300,
    height: 100,
  
  },

  forms:{
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    top: '10%',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    alignItems: 'center',
    alignContent: `flex-start`
  },

  txtLogin:{
    color: '#000',
    fontSize: 56,
    top: '50%'
  },

  inputUser:{
    backgroundColor: '#8F8E8E',
    width: '60%',
    borderRadius: 15,
    top: '10%',
    padding: 5,
    opacity: 0.35
  },

  txtUser:{
    padding: 5,
    paddingLeft: 15
  },



});
