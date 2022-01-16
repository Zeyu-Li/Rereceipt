import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";

export const ButtonWithStyle = ({children}) => {
  const onPress = () => alert('you pressed');
  return <TouchableOpacity onPress={onPress} style={styles.plus}>{children}</TouchableOpacity>;

};


const styles = StyleSheet.create({
  // box: {
  //   height: 80,
  //   width: 80,
  //   backgroundColor: 'darkblue', // tentative 
  //   borderRadius: '50%',
  //   borderColor: '#000',
  //   borderStle: 'solid',
  //   justifyContent: 'center',
  //   margin: 500
  // },

  plus: {
    alignItems: 'center',
    backgroundColor: 'darkblue',
    height: 80,
    width: 80,
    borderRadius: '50%',
  }

})