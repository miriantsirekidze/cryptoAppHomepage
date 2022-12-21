import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Bell from "react-native-vector-icons/AntDesign"
import Menu from "react-native-vector-icons/Ionicons"

const Header = () => {
  return (
    <View style={{flexDirection: "row", marginTop: 15}}>
      <Image source={require("../img/logo.png")} style={{width: 140, height: 35, marginLeft: 28}}/>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity>
          <View style={styles.notification}/>
          <Bell name='bells' size={25} color={"#9fb1e4"} style={{marginLeft: 60, marginTop: 5}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../img/void.png")} style={{width: 31, height: 31, marginLeft: 10, borderRadius: 30}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Menu name='reorder-two-outline' size={30} color={"#9fb1e4"} style={{marginLeft: 9}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  notification:{
    backgroundColor:"#6dfcd6", 
    width: 13, 
    height: 13, 
    position: "absolute", 
    left: 75, 
    bottom: 25, 
    borderRadius: 30,
  }
})