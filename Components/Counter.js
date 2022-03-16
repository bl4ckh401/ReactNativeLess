import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }
  return (
    <View style={styles.counter}>
      <Text>Counter</Text>
      <View style={styles.count}>
          <Text>{count * 5}</Text>
          <Button title='ADD' onPress={handleClick}/>
          <Text>I have been pressed {count} times.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    counter : {
        flex:1,
        justifyContent:"center",
        alignItems : "center"
    },
    count : {
        justifyContent:"center",
        alignItems : "center"
    }
})