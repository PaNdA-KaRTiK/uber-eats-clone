import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar() {

  return (
    <View style={styles.mainContainer}>
      <GooglePlacesAutocomplete
      query={{key: 'AIzaSyBew3Y5Qkb6_Wus4AFusbQkDWbMs8XUKyk'}}
        placeholder='Search'
        styles={styles.placesStyle}
        renderLeftButton={ () => (
            <View style={styles.leftIconContainer}>
                <Ionicons 
                    name='location-sharp'
                    size={24}
                />
            </View>
        )}
        renderRightButton={ () => (
            <View style={styles.rightIconContainer}>
                <AntDesign 
                    name='clockcircle' 
                    size={12} 
                    style={{marginRight: 6}} 
                />
                <Text>Search</Text>
            </View>
        )}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      marginVertical: 15
    },
    placesStyle: {
        textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7
        },
        textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
        }
    },
    leftIconContainer: {
        marginLeft: 10
    },
    rightIconContainer:{
        flexDirection: 'row',
        marginRight: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 30,
        padding: 8
    }
});