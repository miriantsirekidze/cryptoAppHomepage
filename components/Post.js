import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Upload from "react-native-vector-icons/Feather"
import Heart from "react-native-vector-icons/AntDesign"
import Dots from "react-native-vector-icons/Entypo"
import React from 'react'

const Post = () => {
  return (
    <View style={{marginTop: 25, marginRight: 20, marginLeft: 20}}>
      <Image source={require("../img/image.jpg")} style={styles.image}/>
      <Text style={styles.artText}>ART</Text>
      <Text style={styles.unlockableText}>UNLOCKABLE</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable}>
          <Upload name="upload" size={28} color={"#667fd4"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Heart name="heart" size={28} color={"#ff40ac"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Dots name="dots-three-horizontal" size={28} color="#667fd4" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  image:{
    width: 320, 
    height: 450,
    borderRadius: 20
  },
  artText:{
    backgroundColor: "white",
    fontWeight: 'bold',
    width: 45,
    height: 25,
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    position: "absolute",
    left: 25,
    top: 25
  },
  unlockableText:{
    backgroundColor: "#aa6ff7",
    fontWeight: "bold",
    color: "white",
    width: 100,
    height: 25,
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    position: "absolute",
    left: 78,
    top: 25
  },
  container:{
    flex: 1,
    width: 250,
    height: 75,
    borderRadius: 40,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#3a4357",
    bottom: 25,
    left: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  touchable:{
    width: 65, 
    height: 65, 
    borderRadius: 50, 
    borderWidth: 2, 
    borderColor: "#9fb1e4", 
    alignContent: "center", 
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  }

}) 