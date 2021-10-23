import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import Accordion from '../components/Accordion';
import SliderKPR from '../components/SliderKPR';
const {width,height} = Dimensions.get('window')

export default function LandingKPR({ navigation }) {
    return (
      <ScrollView style={styles.container}>
        <StatusBar style="auto"/>
        <Image source={require('../../assets/image-1.png')} style={{resizeMode:'contain',width,height:width*0.6,marginBottom:5}}/>
        <SliderKPR/>
        <Accordion/>
        <View style={{flexDirection:'column',alignItems:'center',height:height*0.3,margin:'1%',width:width*0.98,justifyContent:'center'}}>
          <Text style={{color:'#500878', fontWeight:'900', fontSize:25}}>Daftar diri anda segera</Text>
          <Text style={{color:'#500878', fontWeight:'900', fontSize:25}}>KPR iB Bank Muamalat</Text>
          <TouchableHighlight
            onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('PengajuanKPR', {
                    // itemId: 86,
                    // otherParam: 'anything you want here'
                    // token:token,
                    // noRekening:noRekening    
                });
            }}
            style={{
              marginTop:'5%',
              backgroundColor:'#500878',
              width:width*0.6,
              height:height*0.07,
              justifyContent:'center',
              alignItems:'center',
              borderRadius:10
            }}
          >
            <Text
              style={{color:'#FFFFFF', fontWeight:'900', fontSize:25}}
            >
              Ajukan sekarang
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F5F5F5',
      paddingTop:5,
      paddingBottom:5,
      height:height
    }
  });