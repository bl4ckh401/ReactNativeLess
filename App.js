import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
// import Example from './Components/Example';
import Names from './Components/Name';


export default function App() {
  return (
    <View style={styles.background}>
      {/* <Counter /> */}
      {/* <LearnStyles /> */}
      {/* <SectionListed /> */}
      <Names />
      {/* <Example /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems:"center"
  },
})
