import { View, StyleSheet } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: 'white',
  },
});

export default function Home() {
  return (
    <>
      <View style={styles.mainContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </>
  )
}