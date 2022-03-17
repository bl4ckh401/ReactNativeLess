import React, { useState } from 'react';
import {StyleSheet,View,Text,TextInput,Pressable, Alert, Modal} from 'react-native';

export default function Names() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [warning, setWarning] = useState(false)

  const onPressHandler = () => {
    if (name.length > 5){
      setSubmitted(!submitted);
    }else{

      console.log("Validation Error")
      setWarning(true);
      Alert.alert("Validation Error", "You must input atleast 6 characters", [
        {text:"Cancel",
      onPress: ()=>{console.warn("You pressed Cancel")}
        },
        {text:"Back to Home",
      onPress: ()=>{console.warn("You pressed Back to home")}
        },
        {text:"OK",
      onPress: ()=>{console.warn("You pressed Okay")}
        },
      ])
      setSubmitted(false);
    }
    if(submitted == true){
      setName("");
      setSubmitted(!submitted);
    }
  }
    return (
      <View style={styles.body} >
        <Modal 
        visible={warning}
        onRequestClose={()=>{setWarning(false)}}
        
        >
          <View style={styles.modal_container}>
            <View style={styles.modal_view}>
              <View style={styles.modal_title}>
                <Text style={styles.text}>WARNING</Text>
              </View>
              <View >
                <Text style={styles.text}>Validation Error. Must contain atleast 6 characters</Text>
              </View>
            </View>
          </View>
        </Modal>
        
        <Text style={styles.text}>
            Please write your name:
        </Text>
        <TextInput
            placeholder='e.g. John Doe'
            onChangeText={(value) => setName(value)}
            maxLength={25}
            style={styles.input}
        />
        <Pressable
            onPress={onPressHandler}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{color:'#00f'}}
            style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
        >
          <Text style={styles.text}>{submitted ? "Clear": "Submit"}</Text>
        </Pressable>
          <Text style={styles.text}>
            You are registered as {name}
          </Text>
      </View>
    )
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  modal_container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#00000099"
  },
  modal_view : {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  modal_body:{
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_title:{
    backgroundColor:"gold",
    width:"100%",
    height:50,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  }
})