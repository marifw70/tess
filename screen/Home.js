import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import Header from '../components/Header';
import Slider from '../components/Slider';
import ButtonHome from '../components/Button';
import MessageFooter from '../components/MessageFooter';
const {width,height} = Dimensions.get('window')

export default function Home({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto"/>
        <Header/>
        <Slider/>
        <ButtonHome navigation={navigation}/>   
        <MessageFooter/>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F5F5F5',
      paddingTop:10,
      justifyContent: 'center',
    }
  });