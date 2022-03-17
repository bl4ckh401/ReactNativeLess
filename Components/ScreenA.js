import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function ScreenA({navigation}) {

    const onPressHandler = ()=>{
        navigation.navigate("Screen_B")
    }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>ScreenA</Text>
      <Pressable 
      onPress={onPressHandler}
      hitSlop={{ top : 10, right:10, bottom:10, left:10 }}
      style={({pressed})=>[
          {backgroundColor: pressed ? "red": "green"},
          styles.button

      ]}
      android_ripple={{ color:"gold" }}
      >
          <View style={styles.body}>
              <Text style={styles.text}>Proceed To Screen B</Text>
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