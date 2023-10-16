import { View, Text , ImageBackground, StyleSheet} from 'react-native';

import { Link , Slot} from 'expo-router';


export default function Page() {
  return (
    <View>

<ImageBackground 
        source={{uri:"../image/image.jpg"}} 
        resizeMode="cover" 
        style={pageStyle.image}>
        <Text>
            触れたプログラミング言語
        </Text>


    <Text>学歴</Text>
    
    <Text>東京工科大学 デザイン学部 卒業</Text>
        <Text>日本電算株式会社 経理部 退社</Text>  
    </ImageBackground>
    </View>
  );
}

const pageStyle = StyleSheet.create({
  image:{
    flex:1,
    justifyContent:"center",
  },
  Text:{
    color:"white",
  }
});