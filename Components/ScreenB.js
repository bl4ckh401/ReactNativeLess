import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function ScreenB({navigation}) {

  function onScreenBPressed(){
    navigation.goBack();
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>ScreenB</Text>
      <Pressable 
      onPress={onScreenBPressed}
      hitSlop={{ top : 10, right:10, bottom:10, left:10 }}
      style={({pressed})=>[
          {backgroundColor: pressed ? "red": "green"},
          styles.button

      ]}
      android_ripple={{ color:"gold" }}
      >
          <View style={styles.body}>
              <Text style={styles.text}>Return To Screen A</Text>
          </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text :{
        color: '#000000',
        fontSize: 20,
        margin: 10,
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
  },


})