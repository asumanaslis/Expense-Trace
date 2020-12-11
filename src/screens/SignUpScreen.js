import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { register } from '../redux/Auth/actions';
import { useDispatch } from 'react-redux';

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const registerUser = (email, password) => {
    dispatch(register(email, password));
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.mainView}>
        {/*Form Section*/}
        <View style={styles.formView}>
          <View style={styles.formContentContainer}>
            <Text style={styles.Register}>Register</Text>
            <Input label="Full Name" style={{ marginBottom: '4%' }} onChangeText={(name) => setName(name)} />
            <Input label="Email" style={{ marginBottom: '4%' }} onChangeText={(i) => setEmail(i)} />
            <Input label="Password" secureTextEntry={true} onChangeText={(pass) => setPassword(pass)} />
          </View>
        </View>
        {/*Footer Section*/}
        <View style={styles.footerView}>
          <View style={styles.footerComponentContainer}>
            <Text style={styles.registerText}>
              Already member?
              <Text
                style={styles.boldText}
                onPress={() => navigation.navigate('SignIn')}>
                {' '}
                Login
              </Text>
            </Text>
            <Button buttonName="Register" onPress={() => {
              registerUser(email, password);
              navigation.navigate('Home')
            }} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  boldText: { fontWeight: 'bold' },
  registerText: {
    fontSize: RFValue(15),
    color: '#fff',
    marginTop: 15,
  },
  Register: {
    fontSize: RFValue(32),
    color: '#2F52E0',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  formContentContainer: { width: '82%', marginLeft: '7%' },
  footerComponentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '2%',
  },
  footerView: { flex: 2, justifyContent: 'flex-end' },
  formView: {
    flex: 7,
    justifyContent: 'flex-end',
  },
  mainView: { flex: 1, backgroundColor: '#E5E5E5' },
  safeAreaView: { flex: 1, backgroundColor: '#2F52E0' },
});

export default SignUpScreen;
