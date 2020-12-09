import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
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
            <Input label="Full Name" style={{marginBottom: '4%'}}/>
            <Input label="Email" style={{marginBottom: '4%'}} />
            <Input label="Password" secureTextEntry={true} />
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
            <Button buttonName="Register" onPress={() => navigation.navigate("SignIn")}/>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  boldText: {fontWeight: 'bold'},
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
  formContentContainer: {width: '82%', marginLeft: '7%'},
  footerComponentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '2%',
  },
  footerView: {flex: 2, justifyContent: 'flex-end'},
  formView: {
    flex: 7,
    justifyContent: 'flex-end',
  },
  mainView: {flex: 1, backgroundColor: '#E5E5E5'},
  safeAreaView: {flex: 1, backgroundColor: '#2F52E0'},
});

export default SignUpScreen;
