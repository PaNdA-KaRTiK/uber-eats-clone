import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React,  { useState } from 'react'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <View style={styles.container}>
      <AppButtons 
        text='Delivery'
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
      <AppButtons 
        text='Pickup'
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
    </View>
  )
}

const AppButtons = ({text, btnColor, textColor, activeTab, setActiveTab}) => {
  const bgColor = activeTab === text ? 'black' : 'white'
  const txtColor = activeTab === text ? 'white' : 'black'
  const onPress = () => {
    setActiveTab(text)
  }

  return (
    <View>
      <TouchableOpacity 
        style={[styles.touchableContainer, {backgroundColor: bgColor}]}
        onPress={onPress}
      >
        <Text style={[styles.textContainer, {color: txtColor}]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  touchableContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
      borderRadius: 30
  },
  textContainer: {
    alignItems: 'center',
    fontSize: 15,
    fontWeight: "900"
  }
});