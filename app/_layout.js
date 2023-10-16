import { Slot , Link} from 'expo-router';
import { Text , View , StyleSheet } from "react-native";
import Header from '../components/Header';

import styles from '../CSS/style';

export default function Layout() {
  return (
    <View style={styles.container}>
      <Header/>
      <Slot />
    </View>
  );
}

const pageStyle = StyleSheet.create({
  slot: {
    height:"10px"
  },
});
