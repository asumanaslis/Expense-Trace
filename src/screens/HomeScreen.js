import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';


const Home = () => {
    return (
      <View style={styles.container}>

          <View>
            <TouchableOpacity style={styles.buton}>
                <Text style={{color: "#rgb(125,146,235)"}}>Create Group</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex:1}}>
            <RNPickerSelect
                placeholder={{
                    label: 'Month',
                    value: null,
                }}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'January', value: 'january' },
                    { label: 'February', value: 'february' },
                    { label: 'March', value: 'march' },
                    { label: 'April', value: 'april' },
                    { label: 'May', value: 'may' },
                    { label: 'June', value: 'june' },
                    { label: 'July', value: 'july' },
                    { label: 'August', value: 'august' },
                    { label: 'September', value: 'september' },
                    { label: 'October', value: 'october' },
                    { label: 'November', value: 'november' },
                    { label: 'December', value: 'december' },
                ]}
            />
            </View>

            <View style={{flex:1}}>
                <RNPickerSelect
                    placeholder={{
                        label: 'Group',
                        value: null,
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Individual', value: 'individual' },
                        { label: 'Corporate', value: 'corporate' },
                    ]}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row",
        margin:5
    },
    buton: {
        borderColor: "#rgb(125,146,235)",
        borderWidth:2,
        borderRadius:5,
        padding:10,
    },
})

export default Home


