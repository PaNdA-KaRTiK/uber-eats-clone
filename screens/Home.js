import { View, StyleSheet } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: 'white',
  },
});

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <HeaderTabs />
      <SearchBar />
    </View>
  )
}