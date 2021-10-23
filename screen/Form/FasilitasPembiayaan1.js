import React, {useEffect, useState} from 'react';
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
import MyDatePicker from '../MydatePicker'
  // import { fontSize, marginBottom, styles } from 'styled-system';


export default function FasilitasPembiayaan() {

    const [skemaPengajuan, setSkemaPengajuan] = useState('')
    const [peruntukanPembiayaan, setPeruntukanPembiayaan] = useState('')
    const [program, setProgram] = useState('')
    const [masaFixMMQ, setMasaFixMMQ] = useState('')
    const [lainnya, setLainnya] = useState('')
    const [akad, setAkad] = useState('')
    const [totalPlatfond, setTotalPlatfond] = useState('')
    const [jangkaWaktuPembiayaan, setJangkaWaktuPembiayaan] = useState('')
    const [jenisPenjual, setJenisPenjual] = useState('')
    const [namaPenjual, setNamaPenjual] = useState('')
    const [nilaiSPR, setNilaiSPR] = useState('')

    const [btnReady, setBtnReady] = useState(false) 
    
    const [kondisiA, setKondisiA] = useState(false)


    function checkA() {
        if (skemaPengajuan && peruntukanPembiayaan && program && akad && totalPlatfond && jangkaWaktuPembiayaan && jenisPenjual && namaPenjual && nilaiSPR){
          setKondisiA(true)
          console.log(true,"kondisiA")
        } else{
          setKondisiA(false)
        }
      }

    useEffect(() => {
      checkA()
    // })

    if (kondisiA) {
      setBtnReady(true)
    } else { 
      setBtnReady(false)
    }

    } , [skemaPengajuan, peruntukanPembiayaan, program, akad, totalPlatfond, jangkaWaktuPembiayaan, jenisPenjual, namaPenjual, nilaiSPR] )
    
    return(
        <ScrollView>

            <View style={styles.viewContainer}>
                
                <View style={{flexDirection:'row', flex:1, justifyContent:'space-between',  marginRight: 14}}>
                    <Text style={[styles.fieldTitle,{fontSize:16}]}>Fasilitas Pembiayaan</Text>
                    <Text style={[styles.fieldTitle, {fontSize:12}]}>1/2</Text>
                </View>

                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginHorizontal:14, marginVertical: 8}}/>

                <Text style={styles.fieldName}>Skema Pengajuan</Text>
                <View >
                    <Radio.Group
                          key="ArrowRight"
                          name="myRadioGroup"
                          accessibilityLabel="favorite number">
                    <View style={[styles.fieldRadioButton,{paddingLeft: 8, paddingRight:"47%"}]}>
                        <Radio value="1" size="sm" my={0.5} onPress={()=> setSkemaPengajuan ({ skemaPengajuan: 'Penghasilan Tunggal'})} selected={skemaPengajuan == 'Penghasilan Tunggal'} >
                            Penghasilan Tunggal
                        </Radio>
                    </View>
                    <View style={[styles.fieldRadioButton,{paddingLeft: 8, paddingRight:"43%"}]}>
                        <Radio value="2" size="sm" my={0.5} onPress={()=> setSkemaPengajuan ({ skemaPengajuan: 'Penghasilan Gabungan'})} selected={skemaPengajuan == 'Penghasilan Gabungan'} >
                            Penghasilan Gabungan
                        </Radio>
                    </View>
                    </Radio.Group>
                </View>

                <Text style={styles.fieldName}>Peruntukan Pembiayaan</Text>
                <View style={styles.fieldDropDown}>
                    <Picker
                        mode="dropdown"
                        selectedValue={peruntukanPembiayaan} onValueChange={(itemValue1) => setPeruntukanPembiayaan(itemValue1)}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label="Pilih Peruntukan Pembiayaan" value="disabled" color="#aaa" />
                        <Picker.Item style={{ fontSize: 14 }} label="Pembelian Properti" value="pembelianProperti" />
                    </Picker>
                </View>

                <Text style={styles.fieldName}>Program</Text>
                <View style={styles.fieldDropDown}>
                    <Picker
                        mode="dropdown"
                        selectedValue={program} onValueChange={(itemValue2) => setProgram(itemValue2)}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label="Pilih Program" value="disabled" color="#aaa" />
                        <Picker.Item style={{ fontSize: 14 }} label="Fix & Fix" value="fix" />
                        <Picker.Item style={{ fontSize: 14 }} label="Angsuran Super Ringan (ASR)" value="asr" />
                        <Picker.Item style={{ fontSize: 14 }} label="Special MMQ" value="specialMMQ" />
                        <Picker.Item style={{ fontSize: 14 }} label="Lainnya" value="lainnya" />
                    </Picker>
                </View>

                {/* {program? } */}

                <Text style={styles.fieldName}>Akad Fasilitas yang Diajukan</Text>
                <View style={styles.fieldDropDown}>
                    <Picker
                        mode="dropdown"
                        selectedValue={akad} onValueChange={(itemValue3) => setAkad(itemValue3)}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label="Pilih Akad Fasilitas" value="disabled" color="#aaa" />
                        <Picker.Item style={{ fontSize: 14 }} label="Murabahah" value="murabahah" />
                        <Picker.Item style={{ fontSize: 14 }} label="MMQ (Musyarakah Mustanaqishah" value="mmq" />
                        <Picker.Item style={{ fontSize: 14 }} label="Istishna" value="istishna" />
                        <Picker.Item style={{ fontSize: 14 }} label="Lainnya" value="lainnya" />
                    </Picker>
                </View>


                <Text style={styles.fieldName}>Total Platfond Diajukan</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 16 , marginBottom:8,}}>
                  <View style={{ flex: 0.2, borderRadius: 8 }}>
                    <Text
                      style={styles.fieldSpanLeft}
                      keyboardType="phone-pad">
                      Rp
                    </Text>
                  </View>
                  <TextInput
                    style={styles.fieldSpanInputRight}
                    placeholder="0"
                    keyboardType="phone-pad"
                    onChangeText={totalPlatfond=>setTotalPlatfond(totalPlatfond)}
                    defaultValue={totalPlatfond}
                  />
                </View>

                <Text style={styles.fieldName}>Jangka Waktu Pembiayaan</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 16 , marginBottom:8,}}>
                <TextInput
                    style={styles.fieldSpanInputLeft}
                    placeholder="0"
                    keyboardType="phone-pad"
                    onChangeText={jangkaWaktuPembiayaan=>setJangkaWaktuPembiayaan(jangkaWaktuPembiayaan)}
                    defaultValue={jangkaWaktuPembiayaan}
                  />
                  <View style={{ flex: 0.2, borderRadius: 8 }}>
                    <Text
                      style={styles.fieldSpanRight}
                      keyboardType="phone-pad">
                      Bulan
                    </Text>
                  </View>
                
                </View>

                <Text style={styles.fieldName}>Jenis Penjual</Text>
                <View style={styles.fieldDropDown}>
                    <Picker
                        mode="dropdown"
                        selectedValue={jenisPenjual} onValueChange={(itemValue4) => setJenisPenjual(jenisPenjual)}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label="Pilih Jenis Penjual" value="disabled" color="#aaa" />
                        <Picker.Item style={{ fontSize: 14 }} label="Developer Rekanan" value="developerRekanan" />
                        <Picker.Item style={{ fontSize: 14 }} label="Developer Non Rekanan" value="developerNonRekanan" />
                        <Picker.Item style={{ fontSize: 14 }} label="Non Developer" value="nonDeveloper" />
                    </Picker>
                </View>

                <Text style={styles.fieldName}>Nama Penjual</Text>
                <TextInput
                    style={styles.field}
                    placeholder="Masukkan Nama Penjual"
                    keyboardType="default"
                    onChangeText={namaPenjual=>setNamaPenjual(namaPenjual)}
                    defaultValue={namaPenjual}
                />    

                <Text style={styles.fieldName}>Harga Penawaran Penjual atau Nilai SPR</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 16 , marginBottom:4,}}>
                    <View style={{ flex: 0.2, borderRadius: 8 }}>
                        <Text
                          style={styles.fieldSpanLeft}
                          keyboardType="phone-pad">
                          Rp
                        </Text>
                    </View>
                        <TextInput
                          style={styles.fieldSpanInputRight}
                          placeholder="0"
                          keyboardType="phone-pad"
                          onChangeText={nilaiSPR=>setNilaiSPR(nilaiSPR)}
                          defaultValue={nilaiSPR}
                        />
                </View>

                <Text style={{paddingLeft:30, fontSize:10, marginBottom:8}}>Surat Pemesanan Rumah</Text>
                <Text style={styles.fieldName}>No. Telepon Penjual</Text>
                <TextInput
                  style={styles.field}
                  placeholder="Masukkan No. Telepon Penjual"
                  keyboardType="phone-pad"
                />


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
    viewContainer: {
        fontFamily: 'Poppins-Reguler',
        backgroundColor: 'white',
        padding: 2
      },
      fieldTitle: {
        marginStart: 16,
        marginTop: 28,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
        lineHeight: 16,
        fontFamily:"Poppins-Regular"
      },
      fieldName: {
        marginStart: 16,
        color: '#888888',
        fontSize: 12,
        marginTop:8,
        marginBottom:4,
        lineHeight: 16,
        fontFamily: "Poppins-Regular"
      },
      fieldInputWrap: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      fieldRadioButton: {
        marginHorizontal: 14,
        alignItems: 'flex-start',
        flex: 1,
        backgroundColor: '#F4F4F4',
        borderRadius: 8,
        marginVertical:4,
        paddingVertical: 8,
      },
      fieldDropDown: {
        marginBottom: 8,
        marginHorizontal: 16,
        fontSize: 14,
        backgroundColor: '#F4F4F4',
        borderRadius: 8,
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
        paddingLeft: 16,
        backgroundColor: '#F4F4F4',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        flex: 1,
      },
      fieldSpanRight: {
        textAlign: 'center',
        paddingTop: 14,
        paddingRight:8,
        fontSize: 15,
        color: 'grey',
        backgroundColor: '#E3E3E3',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        flex: 1,
      },
      fieldSpanInputLeft: {
        paddingLeft: 16,
        backgroundColor: '#F4F4F4',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        flex: 1,
      },
      field: {
        marginHorizontal: 16,
        marginBottom: 8,
        fontSize: 14,
        backgroundColor: '#F4F4F4',
        borderRadius: 8,
        paddingHorizontal: 16,
        lineHeight: 24,
        fontFamily: 'Poppins-Reguler'
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
      fieldWrapRadioButton: {
        flexDirection: 'row',
        flex: 1,
        
      },
    
    
    
})