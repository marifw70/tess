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
import MyDatePicker from '../../components/MydatePicker'
import { fontSize, marginBottom, padding } from 'styled-system';


// const {width,height} = Dimensions.get('window')
export default function FormFasilitasPembiayaan2() {

    const [ uangMuka, setUangMuka ] = useState('')
    const [ namaProyek, setNamaProyek ] = useState('')
    const [ kondisiBangunan, setKondisiBangunan ] = useState('')
    const [ alamatProperti, setAlamatProperti ] = useState('')
    const [ rtProperti, setRtProperti ] = useState('')
    const [ rwProperti, setRwProperti ] = useState('')
    const [ provinsiProperti, setProvinsiProperti ] = useState('')
    const [ kabKotaProperti, setKabKotaProperti ] = useState('')
    const [ kecamatanProperti, setKecamatanProperti ] = useState('')
    const [ kelurahanProperti, setKelurahanProperti ] = useState('')
    const [ kodePosProperti, setKodePosProperti ] = useState('')

    
    

    const [btnReady, setBtnReady] = useState(false)

    const [kondisiA, setKondisiA] = useState(false)


    function checkA() {
        if (uangMuka && namaProyek && kondisiBangunan && alamatProperti && rtProperti && rwProperti && provinsiProperti && kabKotaProperti && kecamatanProperti && kelurahanProperti && kodePosProperti &&
        (provinsiProperti !== "disabled") && (kabKotaProperti !== "disabled") && (kecamatanProperti !== "disabled") && (kelurahanProperti !== "disabled") && (kodePosProperti !== "disabled")){
          setKondisiA(true)
          console.log(true, "KondisiA")
        } else {
          setKondisiA(false)
        }
      }
      
    //   function checkB () {
    //     if(hubunganDenganNasabahLainnya){
    //       setKondisiB(true)
    //       console.log(true, "KondisiB")
    //     } else{
    //       setKondisiB(false)
    //     }
    //   }
      
      useEffect (() => {
         
      checkA()
    //   checkB()
      
     if (kondisiA) {
        setBtnReady(true)
      } else {
        setBtnReady(false)
      }
         
      } ,[uangMuka, namaProyek, kondisiBangunan,alamatProperti, rtProperti, rwProperti, provinsiProperti, kabKotaProperti, kecamatanProperti, kelurahanProperti,kodePosProperti, kondisiA] )


  return (
    <ScrollView>

      <View style={styles.viewContainer}>
        
        <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between',  marginLeft: 14, marginRight: 14}}>   
        <Text style={styles.fieldTitle}>Fasilitas Pembiayaan</Text>
        <Text style={styles.fieldTitle}>2/2</Text>
        </View>

        <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginLeft: 14, marginRight: 14, marginBottom: 20}}/>
      
        <Text style={styles.fieldName}>Uang Muka</Text>
        <View style={{ flexDirection: 'row', margin: 16 }}>
          <View style={{ flex: 0.2, borderRadius: 8 }}>
            <Text
              style={styles.fieldSpanLeft}
              keyboardType="numeric">
              Rp
            </Text>
          </View>
          <TextInput
            style={styles.fieldSpanInputRight}
            placeholder="0"
            keyboardType="numeric"
            onChangeText={uangMuka=>setUangMuka(uangMuka)}
            defaultValue={uangMuka}
          />
        </View>

        <Text style={styles.fieldName}>Nama Proyek</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukan Nama Proyek"
          keyboardType="default"
          onChangeText={namaProyek=>setNamaProyek(namaProyek)}
          defaultValue={namaProyek}
        />
        <Text style={styles.fieldDescription}>Jika Penjual Developer</Text>

        <Text style={styles.fieldName}>Kondisi Bangunan</Text>
        <View style={styles.fieldInputWrap}>
          <Radio.Group

            key="ArrowRight"
            name="myRadioGroup"
            accessibilityLabel="favorite number"
          >
            <View style={[styles.fieldRadioButton, {paddingVertical:8, paddingLeft:8, paddingRight: "40%", marginHorizontal: 16, marginTop: 16}]}>
              <Radio value="1" size="sm" my={0.5 }  onPress={() => setKondisiBangunan({ kondisiBangunan: 'Ready Stock' })} selected={kondisiBangunan == 'Ready Stock'} >
                Siap Huni (Ready Stock)
              </Radio>
            </View> 
            <View style={[styles.fieldRadioButton, {paddingVertical:8, paddingLeft:8, paddingRight: "17%", marginHorizontal:16 ,marginTop: 6, marginBottom:16}]}>
              <Radio value="2" size="sm" my={0.5} onPress={() => setKondisiBangunan({ kondisiBangunan: 'Indent' })} selected={kondisiBangunan == 'Indent'}>
                Dalam Proses Pembangunan (Indent)
              </Radio>
            </View>
          </Radio.Group>
        </View>


        <Text style={styles.fieldName}>Alamat Properti</Text>
                <TextInput
                    style={styles.field}
                    placeholder="Masukkan Alamat Properti"
                    onChangeText={alamatProperti=>setAlamatProperti(alamatProperti)}
                    defaultValue={alamatProperti}
                />

                <View style={styles.fieldWrap}>
                    <View style={styles.fieldInputWrap}>
                        <Text style={styles.fieldNameRow}>RT</Text>
                        <TextInput
                            style={styles.fieldRow}
                            placeholder="000"
                            keyboardType="numeric"
                            onChangeText={rtProperti=>setRtProperti(rtProperti)}
                            defaultValue={rtProperti}
                        />
                    </View>
                    <View style={styles.fieldInputWrap}>
                        <Text style={styles.fieldNameRow}>RW</Text>
                        <TextInput
                            style={styles.fieldRow}
                            placeholder="000"
                            keyboardType="numeric"
                            onChangeText={rwProperti=>setRwProperti(rwProperti)}
                            defaultValue={rwProperti}
                        />
                    </View>
                </View>


                <Text style={styles.fieldName}>Provinsi</Text>
                <View style={styles.fieldDropDown}>
                    <Picker
                        mode="dropdown"
                        selectedValue={provinsiProperti} onValueChange={(itemValue1) => setProvinsiProperti(itemValue1)}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                        <Picker.Item style={{ fontSize: 14 }} label="Test" value="Test" color="black" />
                    </Picker>
                </View>

                <Text style={styles.fieldName}>Kabupaten/Kota</Text>
                <View style={styles.fieldDropDown}>
                    <Picker
                        mode="dropdown"
                        selectedValue={kabKotaProperti} onValueChange={(itemValue2) => setKabKotaProperti(itemValue2)}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                        <Picker.Item style={{ fontSize: 14 }} label="Test" value="Test" color="black" />
                    </Picker>
                </View>

                <Text style={styles.fieldName}>Kelurahan</Text>
                <View style={styles.fieldDropDown}>
                    <Picker
                        mode="dropdown"
                        selectedValue={kelurahanProperti} onValueChange={(itemValue3) => setKelurahanProperti(itemValue3)}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                        <Picker.Item style={{ fontSize: 14 }} label="Test" value="Test" color="black" />
                    </Picker>
                </View>

                <Text style={styles.fieldName}>Kecamatan</Text>
                <View style={styles.fieldDropDown}>
                    <Picker
                        mode="dropdown"
                        selectedValue={kecamatanProperti} onValueChange={(itemValue4) => setKecamatanProperti(itemValue4)}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                        <Picker.Item style={{ fontSize: 14 }} label="Test" value="Test" color="black" />
                    </Picker>
                </View>

                <Text style={styles.fieldName}>Kode Pos</Text>
                <View style={styles.fieldDropDown}>
                    <Picker
                        mode="dropdown"
                        selectedValue={kodePosProperti} onValueChange={(itemValue5) => setKodePosProperti(itemValue5)}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                        <Picker.Item style={{ fontSize: 14 }} label="Test" value="Test" color="black" />
                    </Picker>
                </View>


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
    alignItems:'flex-start',
    flex: 1,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
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