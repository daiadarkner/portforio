import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';


function Header() {
  return (

  <View style={styles.container}>
    <View style={styles.titleBox}>
      <Pressable href="/">
      <Text style={styles.title}>Portforio</Text>

      </Pressable>
    </View>

    <View style={styles.headerContentBox}>
      <Link href="/" style={styles.headerContent}>
        <Text >ホーム</Text>
      </Link>
      <Link href="/profile" style={styles.headerContent}>
        <Text>学歴</Text>
      </Link>
      <Link href="/works"style={styles.headerContent}>
        <Text>作品</Text>
      </Link>
      <Link href="/contact" style={styles.headerContent}>
        <Text>連絡先</Text>
      </Link>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:"40px",
    borderBottomWidth:"2px",
    borderColor:"#ff7f50",
    flexDirection:"row" //横並び
  },

  titleBox:{
    flexDirection:"column",
    marginLeft:"48px",

  },
  title:{
    fontSize: "64px",
    color:"#ff7f50",
  },
  headerContentBox:{
    flexDirection:"row",
    marginLeft:"auto",
    marginRight:"20px",

    alignItems:"flex-end",
  },
  headerContent:{
    margin:"10px",
    fontSize:"20px",
    color:"#808080",
    // flex:1,
  },

  });


export default Header;