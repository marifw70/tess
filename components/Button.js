import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components';

const {width} = Dimensions.get('window')
export default function Button({navigation}) {
//   const [token,setToken] = useState()
//   const [noRekening,setNoRekening] = useState()
//   const getData = async () => {
//       try {
//           const value = await AsyncStorage.getItem('@storage_Key')
//           const valueNo = await AsyncStorage.getItem('noRekening')
//           if(value !== null) {
//               setToken(value)
//               setNoRekening(valueNo)
//           }else{
//               setToken(null)
//               setNoRekening(null)
//           }
//       } catch(e) {
//           Alert.alert(
//               "Error",
//               "No Token"
//           )
//       }
//   }
//   getData()
    return (
        <View>
            <View style={styles.fixToText}>
                <TouchableHighlight
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    // navigation.navigate('Login', {
                    // itemId: 86,
                    // otherParam: 'anything you want here',
                    // });
                }}
                // style={token?{display:'none'}:styles.submit}
                style={styles.submit}
                >

                    <Text style={styles.submitText}>
                    <Icon name="sign-in" size={15} color="#fff" />   Login
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={styles.submitSignUp}
                >
                    <Text style={styles.submitTextSignUp}>
                      <Icon name="user-plus" size={15} color="#542D86" />  Daftar
                       {/* {token?"   Buat Akun Baru":"   Daftar"} */}
                    </Text>
                </TouchableHighlight>
            </View>
            
            <View style={styles.fixToText}>
                <TouchableHighlight
                style={styles.buttonHome}
                >
                <Text style={styles.buttonTextHome}>
                    <Icon name="home" size={40} color="#f7b839" />   KPR
                </Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={styles.buttonHome}
                >
                <Text style={styles.buttonTextHome}>
                    <Icon name="home" size={40} color="#f7b839" />   KPR
                </Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={styles.buttonHome}
                >
                <Text style={styles.buttonTextHome}>
                    <Icon name="home" size={40} color="#f7b839" />   KPR
                </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.fixToText}>
                <TouchableHighlight
                style={styles.buttonHome}
                >
                <Text style={styles.buttonTextHome}>
                    <Icon name="home" size={40} color="#f7b839" />   KPR
                </Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={styles.buttonHome}
                >
                <Text style={styles.buttonTextHome}>
                    <Icon name="home" size={40} color="#f7b839" />   KPR
                </Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={styles.buttonHome}
                >
                <Text style={styles.buttonTextHome}>
                    <Icon name="home" size={40} color="#f7b839" />   KPR
                </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.fixToTextBottom}>
                <TouchableHighlight
                style={styles.buttonHome}
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('LandingKPR', {
                        // itemId: 86,
                        // otherParam: 'anything you want here'
                        // token:token,
                        // noRekening:noRekening    
                    });
                }}
                >
                <Text style={styles.buttonTextHome}>
                    <Icon name="home" size={40} color="#f7b839" />   KPR
                </Text>
                </TouchableHighlight>
                <View
                    style={styles.buttonHomeBlank}
                >
                </View>
                <View
                style={styles.buttonHomeBlank}
                >
                </View>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
      fixToText: {
        flexDirection:'row',
        justifyContent: 'space-around',
        padding:15
      },
      fixToTextBottom: {
        flexDirection:'row',
        justifyContent:'space-around',
        padding:15
      },
      submit: {
        backgroundColor:'#542D86',
        justifyContent:'center',
        borderRadius: 10,
        width:160,
        height:40
      },
      submitSignUp: {
        backgroundColor:'#fff',
        justifyContent:'center',
        borderRadius: 10,
        width:160,
        height:40
      },
      buttonHome: {
        backgroundColor:'#dbdbd5',
        justifyContent:'center',
        borderRadius: 10,
        width:70,
        height:70,
      },
      buttonHomeBlank: {
        justifyContent:'center',
        borderRadius: 10,
        width:70,
        height:70,
      },
      submitText: {
        color: '#fff',
        fontSize:15,
        textAlign: 'center',
      },
      submitTextSignUp: {
        color: '#542D86',
        fontSize:15,
        textAlign: 'center',
      },
      buttonTextHome: {
        color: '#500878',
        fontSize:15,
        textAlign: 'center',
      }
  });