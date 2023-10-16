import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <View style= {styles.container}>
      <Header/>
      
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
     
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },
  text: {
    
  }
});
