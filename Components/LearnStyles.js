import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LearnStyles() {
  return (
    <View style={styles.Page}>
        <View style={styles.top}>
            <View style={styles.view1}>
                <Text>1</Text>
            </View>
            <View style={styles.view2}>
                <Text>2</Text>
            </View>
            <View style={styles.view3}>
                <Text>3</Text>
            </View>
        </View>
        <View style={styles.top}>
            <View style={styles.view4}>
                <Text>4</Text>
            </View>
        </View>
        <View style={styles.top}>
            <View style={styles.view5}>
                <Text>5</Text>
            </View>
        </View>
        <View style={styles.bigtop}>
            <View style={styles.view6}>
                <Text>6</Text>
            </View>
            <View style={styles.view7}>
                <Text>7</Text>
            </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create(
    {
        Page : {
            justifyContent : "flex-start",
            alignItems : "center",
            width:"100%",
            flex:1
        },
        top : {
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"stretch",
            width:"100%",
            height:120,
            flex:1,
        },
        bigtop : {
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"stretch",
            width:"100%",
            height:120,
            flex:5,
        },
        view1 : {
            backgroundColor:"blue",
            flex:1,
            justifyContent:"center",
            alignItems:"center"

        },
        view2 : {
            backgroundColor:"pink",
            flex:2,
            justifyContent:"center",
            alignItems:"center"         
        },
        view3 : {
            backgroundColor:"violet",
            flex:3,
            justifyContent:"center",
            alignItems:"center" 
        },
        view4 : {
            backgroundColor:"green",
            flex:1,
            flexDirection:'row',
            justifyContent:"center",
            alignItems:"center"
        },
        view5 : {
            backgroundColor:"red",
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        },
        view6 : {
            backgroundColor:"yellow",
            flex:1,
            justifyContent:"center",
            alignItems:"center" 
        },
        view7 : {
            backgroundColor:"purple",
            flex:1,
            justifyContent:"center",
            alignItems:"center"  
        },
    }
)
