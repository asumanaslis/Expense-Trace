import React from 'react';
import {TextInput, View, StyleSheet, Text, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Input = (props) => {
  return (
    <View style={props.style}>
      <Text style={styles.inputLabel}>{props.label}</Text>
      <TextInput
        style={styles.inputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: RFValue(15),
    color: '#2F52E0',
    marginBottom: 5,
  },
  inputStyle: {
    padding: 10,
    width: windowWidth * 0.75,
    height: windowHeight * 0.05,
    borderRadius: 10,
    borderColor: '#2F52E0',
    borderWidth: 1,
  },
});

export default Input;
