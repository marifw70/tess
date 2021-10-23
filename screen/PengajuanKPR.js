import React,{useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { Radio, NativeBaseProvider} from 'native-base';
const {width,height} = Dimensions.get('window')

export default function PengajuanKPR({ navigation }) {
    const [noRekening,setNoRekening] = useState()
    const [nasabah,setNasabah] = useState(false)
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <StatusBar style="auto"/>
          <Image source={require('../../assets/image-1.png')} style={{resizeMode:'contain',width,height:width*0.6,marginBottom:5}}/>
          <View
            style={{
              margin:'1%',
              width:width*0.98,
              height:height*0.39,
              padding:'2%'
            }}
          >
            <Text
              style={{
                color:'#500878',
                fontSize:18,
                fontWeight:'600'
              }}
            >
              Apakah Anda Nasabah Bank Muamalat?
            </Text>
            <Radio.Group
              name="myRadioGroup"
              value={nasabah}
              onChange={(nextValue)=>{
                setNasabah(nextValue)
              }}
            >
              <Radio value={false} my={2}>
                Tidak
              </Radio>
              <Radio value={true} my={2}>
                Ya
              </Radio>
            </Radio.Group>
            <View
              style={nasabah?{display:'flex'}:{display:'none'}}
            >
              <Text>Nomor Rekening</Text>
              <View
                style={{
                  padding:10,
                  height:height*0.09,
                  width:width*0.935,
                  backgroundColor:'#c0c1c2',
                  borderRadius:5
                }}
              >
                  <TextInput
                      keyboardType='numeric'
                      // style={styles.input}
                      placeholder="Nomor Rekening"
                      value={noRekening}
                      onChangeText={value => value.length >= 10?setNoRekening(value):setNoRekening(null)}
                      underlineColorAndroid="transparent"
                  />
              </View>
            </View>
          </View>
          <View
            style={{
              width:width*0.98,
              height:height*0.1,
              margin:'1%',
              marginTop:'10%',
              padding:'5%',
              alignContent:'flex-end',
              alignItems:'flex-end',
              justifyContent:'center'
            }}
          >
              <TouchableHighlight
                style={nasabah? noRekening?styles.btnLanjut:styles.btnLanjutInActive:styles.btnLanjut}
s              >
                  <Text
                    style={{
                      color:'#fff',
                      fontSize:20
                    }}
                    onPress={() => {
                        if(!nasabah){
                          // navigation.navigate('Pendaftaran', {
                          // });
                        }else if(noRekening){
                          navigation.navigate('Data Pemohon');
                        }                        
                    }}
                  >{nasabah?"Lanjut":"Daftar"}</Text>
              </TouchableHighlight>
          </View>    
        </View>
      </NativeBaseProvider>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F5F5F5',
      paddingTop:5,
      paddingBottom:5,
      height:height
    },
    input: {
      flex: 1,
      // paddingTop: 10,
      paddingRight: 10,
      // paddingBottom: 10,
      paddingLeft: 10,
      width:width*0.95,
      height:20,
      backgroundColor: '#c0c1c2',
      color: '#424242',
    },
    btnLanjut:{
      width:width*0.4,
      borderRadius:5,
      height:height*0.07,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#500878'
    },
    btnLanjutInActive:{
      width:width*0.4,
      borderRadius:5,
      height:height*0.07,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#C2C2C2'
    }
  });