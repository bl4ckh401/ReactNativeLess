import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
// import Counter from './Components/Counter';
import LearnStyles from './Components/LearnStyles';
import SectionListed from './Components/SectionList';


export default function App() {
  return (
    <ScrollView style={styles.background}>
      {/* <Counter /> */}
      {/* <LearnStyles /> */}
      <SectionListed />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    // justifyContent:"center",
    // alignItems:'center',

  }})
