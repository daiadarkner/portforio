import { View , Pressable , Text, StyleSheet , ImageBackground} from 'react-native';
import { Link } from 'expo-router';
//↓ページ全体のスタイルシート
import styles from '../CSS/style';
import { themeColor1 } from '../CSS/style';
import { useState } from 'react';



export default function Page() {
    const [ isHover , setIsHover ] = useState(false);

 

  return (
    <View style={pageStyle.container}>

        <Text>
            触れたプログラミング言語
        </Text>



{/* 私について */}
        <View style={pageStyle.lineBox}>
            <View style={pageStyle.headingView}>
                <Text style={pageStyle.heading}>自己紹介</Text>
                <Text style={pageStyle.small}>About Me</Text>
            </View>

        <Text style={styles.text}>秋田 大輔</Text>
        </View>
       

        <View style={pageStyle.headingView}>
            <Pressable href="/works" style={{alignItems:"center"}}>
                <Text style={pageStyle.heading}>作品</Text>
                <Text>Works</Text>
            </Pressable>
        </View>

        <View style={pageStyle.headingView}>
            <Pressable href="/profile" 
            style={{alignItems:"center"}} >
                <Text style={pageStyle.heading}>学歴</Text>
                <Text>Studies Histry</Text>
            </Pressable>
        </View>

      

        <Pressable
            href="/profile"
            onHoverIn={() => {setIsHover(true);}}
            onHoverOut={() => {setIsHover(false);}}
        >
            <Text style={[pageStyle.heading,isHover ? pageStyle.Hover : pageStyle.NotHover]}>
            タッチャブルハイライト
            </Text>
        </Pressable>



        
    </View>
  );
}




const pageStyle = StyleSheet.create({
    // ページ全体のコンテナ
    container:{
        paddingTop:"50px",
        alignItems:"center",
        },
    // 大まかなコンテンツのボックス
    lineBox:{
        margin:"50px"
    },
    // 見だしView
    headingView:{
        padding:"20px",
        alignItems:"center",
    },
    // 見出し
    heading:{
        color:themeColor1,
        fontSize:"36px",
    },
    Hover:{
        color:"#FFFFFF",
        backgroundColor:themeColor1,
    },
    NotHover:{
        color:themeColor1,
    },
    // small
    small:{
        fontSize:"16px",
        color:"gray",
   
    },

    image:{
        flex:1,
        justifyContent:"center",

    },
});