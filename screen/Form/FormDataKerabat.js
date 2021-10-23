import React, { useState, useEffect  } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Checkbox, Radio, Button } from 'native-base'
// import MyDatePicker from '../../components/MydatePicker'
import { fontSize, marginBottom } from 'styled-system';


// const {width,height} = Dimensions.get('window')
export default function FormDataKerabat() {

    const [ hubunganDenganNasabah, sethubunganDenganNasabah ] = useState('')
    const [ namaKerabat, setNamaKerabat ] = useState('')
    const [ telpRumahKerabat, settelpRumahKerabat ] = useState('')
    const [ noHpKerabat, setnoHpKerabat ] = useState('')
    const [ hubunganDenganNasabahLainnya, sethubunganDenganNasabahLainnya ] = useState('')

    const [btnReady, setBtnReady] = useState(false)

    const [kondisiA, setKondisiA] = useState(false)
    const [kondisiB, setKondisiB] = useState(false)

    function checkA() {
        if (namaKerabat && noHpKerabat && telpRumahKerabat && hubunganDenganNasabah && (hubunganDenganNasabah !== "disabled")){
          setKondisiA(true)
          console.log(true, "KondisiA")
        } else {
          setKondisiA(false)
        }
      }
      
      function checkB () {
        if(hubunganDenganNasabahLainnya){
          setKondisiB(true)
          console.log(true, "KondisiB")
        } else{
          setKondisiB(false)
        }
      }
      
      useEffect (() => {
         
      checkA()
      checkB()
      
      if(hubunganDenganNasabah == "Lainnya"){
        if (kondisiA && kondisiB) {
          setBtnReady(true)
        } else {
          setBtnReady(false)
        }
      } else {
        if (kondisiA) {
          setBtnReady(true)
        } else {
          setBtnReady(false)
        }
      }
         
      } ,[namaKerabat, telpRumahKerabat, noHpKerabat,hubunganDenganNasabah, hubunganDenganNasabahLainnya, kondisiB, kondisiA] )

    let viewLainnyaHubunganKerabat = null;
    if (hubunganDenganNasabah == "Lainnya") {
  
            viewLainnyaHubunganKerabat =  <View style={styles.viewContainer}>
            <Text style={styles.fieldName}>Lainnya</Text>
            <TextInput
            style={styles.field}
            placeholder="Lainnya"
            keyboardType="default"
            onChangeText={hubunganDenganNasabahLainnya=>sethubunganDenganNasabahLainnya(hubunganDenganNasabahLainnya)}
            defaultValue={hubunganDenganNasabahLainnya}
            />  
          </View>
    }

  return (
    <ScrollView>

      <View style={styles.viewContainer}>
        
        <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between',  marginLeft: 14, marginRight: 14}}>   
        <Text style={styles.fieldTitle}>Data Keluarga</Text>
        <Text style={styles.fieldTitle}>2/2</Text>
        </View>

        <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginLeft: 14, marginRight: 14,}}/>
        <Text style={styles.fieldTitle2}>Kerabat yang Tidak Tinggal Serumah</Text>

        <Text style={styles.fieldName}>Nama Kerabat</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukan Nama Kerabat"
          keyboardType="default"
          onChangeText={namaKerabat=>setNamaKerabat(namaKerabat)}
          defaultValue={namaKerabat}
        />

        <Text style={styles.fieldName} >Hubungan Dengan Nasabah</Text>
        <View style={styles.fieldDropDown}>
          <Picker
            mode="dropdown" selectedValue={hubunganDenganNasabah} onValueChange={(itemValue4) => sethubunganDenganNasabah(itemValue4)}
          >
            <Picker.Item style={{ fontSize: 14 }} label="Pilih Hubungan Dengan Nasabah" value="disabled" color="#aaa" />
            <Picker.Item style={{ fontSize: 14 }} label="Orang Tua" value="Orang Tua" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Saudara Kandung" value="Saudara Kandung" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Anak Kandung" value="Anak Kandung" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Paman / Bibi" value="Paman / Bibi" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Kakek / Nenek" value="Kakek / Nenek" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Ipar" value="Ipar" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Mertua" value="Mertua" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Menantu" value="Menantu" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Keponakan" value="Keponakan" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Sepupu" value="Sepupu" color="black" />
            <Picker.Item style={{ fontSize: 14 }} label="Lainnya" value="Lainnya" color="black" />
          </Picker>
        </View>

        {viewLainnyaHubunganKerabat}

        <Text style={styles.fieldName}>No. Telepon Rumah</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukkan No. Telepon Rumah"
          keyboardType="phone-pad"
          onChangeText={telpRumahKerabat=>settelpRumahKerabat(telpRumahKerabat)}
          defaultValue={telpRumahKerabat}
        />

        <Text style={styles.fieldName}>No. Handphone</Text>
        <View style={{ flexDirection: 'row', margin: 16 }}>
          <View style={{ flex: 0.2, borderRadius: 8 }}>
            <Text
              style={styles.fieldSpanLeft}
              keyboardType="phone-pad">
              +62
            </Text>
          </View>
          <TextInput
            style={styles.fieldSpanInputRight}
            placeholder="Masukkan No. Handphone"
            keyboardType="phone-pad"
            onChangeText={noHpKerabat=>setnoHpKerabat(noHpKerabat)}
            defaultValue={noHpKerabat}
          />
        </View>
        <Text style={styles.fieldDescription}>Nomor Handphone Minimal 10 Digit</Text>

        <View style={styles.fieldInputWrap}>
          <View style={styles.fieldWrapRadioButton}>
            <Button
                style={styles.fieldButton}
                size="lg"
                variant="outline" // onPress={() => console.log('hello world')}
                colorScheme="green"
              >
                Kembali
              </Button>
            <Button
                style={btnReady? styles.fieldButtonActive : styles.fieldButtonInactive}
                size="lg"
                 // onPress={() => console.log('hello world')}
              >
                Lanjut
              </Button> 

          </View>
        </View>


      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pickerStyle: {
    marginTop: -15,
    marginBottom: -10
  },
  inputLabel: {
    color: '#101010',
    fontSize: 14,
    paddingBottom: 0,
    paddingTop: 5,
    padding: 8
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#97979780',
    fontSize: 12,
    padding: 8,
    width: '100%',
    backgroundColor: 'white',
  },
  viewContainer: {
    fontFamily: 'Poppins-Reguler',
    backgroundColor: 'white',
    padding: 2
  },
  field: {
    margin: 16,
    fontSize: 14,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    padding: 8,
    lineHeight: 24,
    fontFamily:'Poppins-Reguler'
  },
  fieldRadioButton: {
    margin: 16,
    alignItems:'flex-start',
    flex: 1,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    padding: 8,
  },
  fieldButton: {
    margin: 16,
    alignItems:'flex-start',
    flex: 1,
    borderRadius: 8,
    marginTop:28,
  },

  fieldButtonActive: {
    margin: 16,
    alignItems:'flex-start',
    flex: 1,
    borderRadius: 8,
    marginTop:28,
    backgroundColor: "#70AD47"
  },

  fieldButtonInactive: {
    margin: 16,
    alignItems:'flex-start',
    flex: 1,
    borderRadius: 8,
    marginTop:28,
    backgroundColor:"#CAC8CE"
  },

  fieldName: {
    marginStart: 16,
    color: '#888888',
    fontSize: 12,
    marginBottom: -8,
    lineHeight: 16,
    fontFamily:"Poppins-Regular"
  },
  fieldTitle: {
    marginTop: 28,
    marginBottom: 10,
    color: 'black',
    fontSize: 16,
    fontFamily:"Poppins-Bold"
  },
  fieldTitle2: {
    marginStart: 16,
    marginTop: 10,
    marginBottom: 28,
    color: 'black',
    fontSize: 14,
    fontFamily:"Poppins-Bold"
  },
  fieldNameRow: {
    marginStart: 16,
    color: '#888888',
    fontSize: 12,
    marginBottom: -8,
    lineHeight: 16,
    flex: 1,
  },
  fieldRow: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 16,
    fontSize: 14,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    padding: 8,
    lineHeight: 24,
  },
  fieldWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  fieldWrapRadioButton: {
    flexDirection: 'row',
    flex: 1,
    
  },
  fieldInputWrap: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  fieldDescription: {
    flex:1,
    fontSize: 10,
    marginTop: -13,
    marginStart: 33,
    marginBottom: 12
  },
  containerSpan: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  fieldSpanLeft: {
    textAlign: 'center',
    paddingTop: 14,
    fontSize: 14,
    color: 'grey',
    backgroundColor: '#E3E3E3',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flex: 1,
  },
  fieldSpanInputRight: {
    paddingLeft: 8,
    backgroundColor: '#F4F4F4',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
  },
  fieldSpanRight: {
    textAlign: 'center',
    paddingTop: 14,
    fontSize: 15,
    color: 'grey',
    backgroundColor: '#E3E3E3',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    flex: 1,
  },
  fieldSpanInputLeft: {
    paddingLeft: 8,
    backgroundColor: '#F4F4F4',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    flex: 1,
  },
  fieldDropDown: {
    margin: 16,
    fontSize: 14,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
  },
  

})