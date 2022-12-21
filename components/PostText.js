import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PostText = () => {
  return (
    <View>
      <Text style={styles.header}>Awesome Work</Text>
      <View style={styles.ethTag}>
        <Text style={{textAlign: "center",  color: "#6dfcd6", fontWeight: "bold"}}>2.5 ETH</Text>
      </View>
      <View style={styles.moneyTag}>
        <Text style={{textAlign: "center", color: "#9fb1e4", fontWeight: "bold"}}>$4,429.87</Text>
      </View>
      <Text style={{marginTop: 25, color: "#9fb1e4", fontSize: 16, marginRight: 28, marginLeft: 28}}>
        This NFT Card will give you Access to Special Airdrops. To learn more about UI8 please visit
        <Text style={{color: "white"}}> https://ui8.net</Text>
      </Text>
    </View>
  )
}

export default PostText

const styles = StyleSheet.create({
  header:{
    marginLeft: 28,
    marginTop: 10,
    fontSize: 38,
    color: "white",
    fontWeight: "bold"
  },
  ethTag:{
    width: 60,
    height: 25,
    color: "#3a4357",
    borderRadius: 5,
    borderColor: "#6dfcd6",
    borderWidth: 1,
    marginLeft: 28,
    marginTop: 7,
    justifyContent: "center"
  },
  moneyTag:{
    width: 100,
    height: 25, 
    marginLeft: 95,
    marginTop: -25,
    color: "#3a4357",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#9fb1e4",
    justifyContent: "center"
  }
}) 