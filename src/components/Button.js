import React from 'react';
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button = (props) => {
  return (
    < TouchableOpacity
      style={[props.style, styles.buttonStyle]}
      onPress={props.onPress}
    >
      <Text style={styles.textStyle}>{props.buttonName}</Text>
    </TouchableOpacity >
  );

};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight * 0.08,
    width: windowWidth * 0.39,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 7,
  },
  textStyle: {
    fontSize: RFValue(25),
    color: '#fff',
  },
});
export default Button;