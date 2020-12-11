import React from 'react';
import { SafeAreaView, Text, StyleSheet, ImageBackground, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const EntryScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.mainView}>
        {/* Welcoming Section */}
        <View style={styles.welcomeView}>
          <View>
            <Image style={styles.imageStyle} source={require('../assets/map_finance.png')} />
            <Text style={styles.welcomeContentView}>Expense</Text>
            <Text style={styles.welcomeContentView}>Trace</Text>
          </View>
        </View>
        {/* Button Section */}
        <View style={styles.buttonView}>
          <View style={styles.buttonComponentContainer}>
            <Button buttonName="Get Started" onPress={() => navigation.navigate("SignIn")} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: '#2F52E0' },
  mainView: { flex: 1, backgroundColor: '#E5E5E5' },
  welcomeView: {
    flex: 7,
    justifyContent: 'flex-end',
  },
  buttonComponentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '2%',
  },
  buttonView: {
    flex: 2,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: 20
  },
  welcomeContentView: {
    fontSize: 40,
    marginLeft: 40,
    marginBottom: 10,
    color: '#2F80ED',
  },
  imageStyle: {
    marginLeft: 40,
    marginBottom: 5
  }

});

export default EntryScreen;
