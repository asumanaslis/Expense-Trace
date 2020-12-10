import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';



const BottomNavigator = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'grey'

        }}>

            <View style={{

                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: 'grey',
                width: 70,
                height: 70,
                borderRadius: 35,
                bottom: 35,
                zIndex: 10


            }}>

                <TouchableWithoutFeedback >
                    <View style={[styles.button, styles.actionBtn]}>

                        <Image style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                            source={{ uri: 'https://icon-library.net/images/android-plus-icon/android-plus-icon-0.jpg' }} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{

                position: 'absolute',
                backgroundColor: 'white',
                border: 2,
                radius: 3,
                shadowOpacity: 0.3,
                shadowRadius: 3,
                shadowOffset: {

                    height: 3, width: 3
                },
                x: 0,
                y: 0,
                style: { marginVertical: 5 },
                bottom: 0,
                width: '100%',
                height: 70,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
                paddingHorizontal: 25
            }}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }


});

export default BottomNavigator;