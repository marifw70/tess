import React, { useState , useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Checkbox, Radio, Button , NativeBaseProvider } from 'native-base'
import MyDatePicker from '../../components/MydatePicker'
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window')


// const {width,height} = Dimensions.get('window')
export default function FormAgunan({navigation}) {

    // useState page 1
  const [jenisAgunan, setJenisAgunan] = useState ('')
  const [luasTanah, setLuasTanah] = useState ('')
  const [luasBangunan, setLuasBangunan] = useState ('')
  const [statusKepemilikan, setStatusKepemilikan] = useState ('')
  const [kondisiBangunan, setKondisiBangunan] = useState ('')
  const [statusAgunan, setStatusAgunan] = useState ('')
  const [atasNamaSertifAgunan, setAtasNamaSertifAgunan] = useState ('')
  const [nomorSertifAgunan, setNomorSertifAgunan] = useState ('')
  const [expiredSertifAgunan, setExpiredSertifAgunan] = useState ('')
  const [page, setPage] = useState(1)

  // useState page 2
  const [noSPRAgunan, setNoSPRAgunan] = useState ('')
  const [alamatAgunan, setAlamatAgunan] = useState ('')
  const [rtAgunan, setRtAgunan] = useState ('')
  const [rwAgunan, setRwAgunan] = useState ('')
  const [provinsiAgunan, setProvinsiAgunan] = useState ('')
  const [kabKotaAgunan, setKabKotaAgunan] = useState ('')
  const [kecamatanAgunan, setKecamatanAgunan] = useState ('')
  const [kelurahanAgunan, setKelurahanAgunan] = useState ('')
  const [kodePosAgunan, setKodePosAgunan] = useState ('')

        //kontenLainnya
        const [messageTopAlert, setMessageTopAlert] = useState(false)
        const [messageBottomAlert, setMessageBottomAlert] = useState()
        const [iconAlert, setIconAlert] = useState()
        const [colorIcon, setColorIcon] = useState()
        const [cancelButton, setCancelButton] = useState(true)
        const [navigationDirect, setNavigationDirect] = useState()
        const [isShow, setShow] = useState(false)

  const [btnReady, setBtnReady] = useState(false)

  const [kondisiA, setKondisiA] = useState(false)

  function checkA() {
    if (jenisAgunan && luasTanah && luasBangunan && statusKepemilikan && kondisiBangunan && statusAgunan && atasNamaSertifAgunan && nomorSertifAgunan &&
    (jenisAgunan !== "disabled") && (statusKepemilikan !== "disabled") && (statusAgunan !== "disabled")){
      setKondisiA(true)
      console.log(true, "KondisiA")
    } else {
      setKondisiA(false)
    }
  }

  useEffect (() => {
         
    checkA()
  //   checkB()
    
   if (kondisiA) {
      setBtnReady(true)
    } else {
      setBtnReady(false)
    }
       
    } ,[jenisAgunan,luasTanah,luasBangunan,statusKepemilikan,kondisiBangunan,statusAgunan,atasNamaSertifAgunan,nomorSertifAgunan, kondisiA] )


  return (
    <NativeBaseProvider>
    <View style={{ backgroundColor: 'white' }}>
        <StatusBar style="auto" />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 16
        }}>
        <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', fontFamily: "Poppins-Bold" }}>Data Agunan</Text>
        <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', fontFamily: "Poppins-Regular" }}>{page}/2</Text>
        </View>

        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 14, marginRight: 14, marginTop: -8 }} />
    <ScrollView>

    <View style={styles.viewContainer}>

    {/* page 1 */}
    <View style={page === 1 ? { display: 'flex' } : { display: 'none' }}>

      <Text style={styles.fieldName} >Jenis Agunan</Text>
        <View style={styles.fieldDropDown}>
          <Picker
            mode="dropdown" selectedValue={jenisAgunan} onValueChange={(itemValue1) => setJenisAgunan(itemValue1)}
          >
            <Picker.Item style={{ fontSize: 14 }} label="Pilih Jenis Agunan" value="disabled" color="#aaa" />
            <Picker.Item style={{ fontSize: 14 }} label="Rumah" value="rumah" />
            <Picker.Item style={{ fontSize: 14 }} label="Apartemen/Rusun" value="apartemen/rusun" />
            <Picker.Item style={{ fontSize: 14 }} label="Ruko/Rukan" value="Ruko/Rukan" />
            <Picker.Item style={{ fontSize: 14 }} label="Kavling" value="kavling" />
          </Picker>
        </View>

        <View style={styles.fieldWrap}>
          <View style={styles.fieldInputWrap}>
        <Text style={styles.fieldNameRow}>Luas Tanah</Text>
        <View style={{ flexDirection: 'row', margin: 16 }}>
          <TextInput
            style={styles.fieldSpanInputLeft}
            placeholder="0"
            keyboardType="numeric"
            onChangeText={luasTanah=>setLuasTanah(luasTanah)}
            defaultValue={luasTanah}
          />
          <View style={{ flex: 0.8, borderRadius: 8 }}>
            <Text
              style={styles.fieldSpanRight}>
              ㎡
            </Text>
          </View>
        </View>
          </View>
          <View style={styles.fieldInputWrap}>
          <Text style={styles.fieldNameRow}>Luas Bangunan</Text>
          <View style={{ flexDirection: 'row', margin: 16 }}>
          <TextInput
            style={styles.fieldSpanInputLeft}
            placeholder="0"
            keyboardType="numeric"
            onChangeText={luasBangunan=>setLuasBangunan(luasBangunan)}
            defaultValue={luasBangunan}
          />

          <View style={{ flex: 0.8, borderRadius: 8 }}>
            <Text
              style={styles.fieldSpanRight}>
              ㎡
            </Text>
          </View>
        </View>
          </View>
        </View>

        <Text style={styles.fieldName} >Status Kepemilikan</Text>
        <View style={styles.fieldDropDown}>
          <Picker
            mode="dropdown" selectedValue={statusKepemilikan} onValueChange={(itemValue2) => setStatusKepemilikan(itemValue2)}
          >
            <Picker.Item style={{ fontSize: 14 }} label="Pilih Status Kepemilikan" value="disabled" color="#aaa" />
            <Picker.Item style={{ fontSize: 14 }} label="SHM" value="SHM" />
            <Picker.Item style={{ fontSize: 14 }} label="SHGB" value="SHGB" />
            <Picker.Item style={{ fontSize: 14 }} label="Strata Title/SMHRIS" value="Strata Title/SMHRIS" />
          </Picker>
        </View>


        <Text style={styles.fieldName}>Kondisi Bangunan</Text>
          <View style={styles.fieldInputWrap}>
            <Radio.Group
              key="ArrowRight"
              name="myRadioGroup"
              accessibilityLabel="favorite number"
            >
              <View style={[styles.fieldRadioButton, {paddingVertical: 8, paddingLeft: 8, paddingRight: 240, marginHorizontal: 16, marginTop: 16}]}>
                <Radio value="1" size="sm" my={0.5}  onPress={() => setKondisiBangunan({ kondisiBangunan: 'Ready Stock' })} selected={kondisiBangunan == 'Ready Stock'}>
                  Siap Huni
                </Radio>
              </View>
              <View style={[styles.fieldRadioButton, , {paddingVertical: 8, paddingLeft: 8, paddingRight: 120, marginHorizontal: 16, marginTop: 6, marginBottom: 16}]}>
                <Radio value="2" size="sm" my={0.5} onPress={() => setKondisiBangunan({ kondisiBangunan: 'Indent' })} selected={kondisiBangunan == 'Indent'}>
                  Dalam Proses Pembangunan
                </Radio>
              </View>
            </Radio.Group>
          </View>

          <Text style={styles.fieldName} >Status Agunan</Text>
        <View style={styles.fieldDropDown}>
          <Picker
            mode="dropdown" selectedValue={statusAgunan} onValueChange={(itemValue3) => setStatusAgunan(itemValue3)}
          >
            <Picker.Item style={{ fontSize: 14 }} label="Pilih Status Agunan" value="disabled" color="#aaa" />
            <Picker.Item style={{ fontSize: 14 }} label="Ditinggal" value="ditinggali" />
            <Picker.Item style={{ fontSize: 14 }} label="Disewakan" value="disewakan" />
          </Picker>
        </View>

        <Text style={styles.fieldName}>Atas Nama Sertifikat</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukkan Atas Nama Sertifikat"
          keyboardType="default"
          onChangeText={atasNamaSertifAgunan=>setAtasNamaSertifAgunan(atasNamaSertifAgunan)}
          defaultValue={atasNamaSertifAgunan}
        />
        <Text style={styles.fieldDescription}>Eksisting/Balik Nama Jual Beli</Text>


        <Text style={styles.fieldName}>Nomor Sertifikat</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukkan Nomor Sertifikat"
          onChangeText={nomorSertifAgunan=>setNomorSertifAgunan(nomorSertifAgunan)}
          defaultValue={nomorSertifAgunan}
        />

        <Text style={styles.fieldName}>Berlaku Hingga</Text>
        {/* <TextInput
          style={styles.field}
          placeholder="Masukkan Tanggal Lahir"
        /> */}
        <View style={styles.field}>
          <MyDatePicker/>
        </View>
    </View>

     {/* page 2 */}
     <View style={page === 2 ? { display: 'flex' } : { display: 'none' }}>
     <Text style={styles.fieldName}>Nomor SPR Developer</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukkan SPR Developer"
          keyboardType="default"
        />
        <Text style={styles.fieldDescription}>Surat Pemesanan Rumah</Text>

        <Text style={styles.fieldName}>Alamat Agunan</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukkan Alamat Tunggal"
          keyboardType="default"
        />

        <View style={styles.fieldWrap}>
          <View style={styles.fieldInputWrap}>
            <Text style={styles.fieldNameRow}>RT</Text>
            <TextInput
              style={styles.fieldRow}
              placeholder="000"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.fieldInputWrap}>
            <Text style={styles.fieldNameRow}>RW</Text>
            <TextInput
              style={styles.fieldRow}
              placeholder="000"
              keyboardType="numeric"
            />
          </View>
        </View>


        <Text style={styles.fieldName}>Provinsi</Text>
        <View style={styles.fieldDropDown}>
          <Picker
            mode="dropdown"
            >
            <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
          </Picker>
        </View>

        <Text style={styles.fieldName}>Kabupaten/Kota</Text>
        <View style={styles.fieldDropDown}>
          <Picker
            mode="dropdown"
            >
            <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
          </Picker>
        </View>

        <Text style={styles.fieldName}>Kelurahan</Text>
        <View style={styles.fieldDropDown}>
          <Picker
            mode="dropdown"
            >
            <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
          </Picker>
        </View>

        <Text style={styles.fieldName}>Kecamatan</Text>
        <View style={styles.fieldDropDown}>
          <Picker
            mode="dropdown"
            >
            <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
          </Picker>
        </View>

        <Text style={styles.fieldName}>Kode Pos</Text>
        <TextInput
          style={styles.field}
          placeholder="Pilih Kode Pos"
          keyboardType="numeric"
        />
        </View>

         {/* button  */}
         <View style={{
                            height: height * 0.25,
                            marginTop: -30,
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexDirection: 'row'
                            }}>
                            <Button
                                style={styles.fieldButton}
                                size="lg"
                                variant="outline" // onPress={() => console.log('hello world')}
                                colorScheme="green"
                                onPress={() => {
                                if (page === 2) {
                                    setPage(1)
                                } else {
                                    setMessageTopAlert("Kamu akan kembali ke Halaman Awal ?")
                                    setMessageBottomAlert("Simpan Data ?")
                                    setIconAlert('exclamation-circle')
                                    setColorIcon('#f2d968')
                                    setNavigationDirect('Home')
                                    setShow(true)
                                }
                                }}
                            >
                                Kembali
                            </Button>
                            <Button
                                style={styles.fieldButton}
                                size="lg"
                                colorScheme="purple"
                                onPress={() => {
                                if (page === 1) {
                                    setPage(2)
                                } else {
                                    setMessageTopAlert("Kamu akan ke Halaman Upload ?")
                                    setMessageBottomAlert("Simpan Data ?")
                                    setIconAlert('exclamation-circle')
                                    setColorIcon('#f2d968')
                                    setNavigationDirect('Home')
                                    setShow(true)
                                }
                                }}
                            >
                                Lanjut
                            </Button>
                            </View>

                        </View>
                        </ScrollView>

                        <AwesomeAlert
                        show={isShow}
                        showProgress={false}
                        //   title="Berhasil"
                        customView={
                            <View
                            style={{ justifyContent: 'center', alignContent: 'center' }}
                            >
                            <Icon style={{ textAlign: 'center' }} name={iconAlert} size={40} color={colorIcon} />
                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700' }}>{messageTopAlert}</Text>
                            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '700' }}>{messageBottomAlert}</Text>
                            </View>}
                        //   message="Pengajuanmu sedang kami periksa!"
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        showCancelButton={cancelButton}
                        showConfirmButton={true}
                        cancelText="No, cancel"
                        confirmText="OK"
                        confirmButtonColor="#490E73"
                        onCancelPressed={() => {
                            setShow(false)
                        }}
                        onConfirmPressed={() => {
                            if (cancelButton) {
                            setMessageTopAlert("Berhasil")
                            setMessageBottomAlert("Data Tersimpan")
                            setIconAlert('check-circle')
                            setColorIcon('#4A9928')
                            setCancelButton(false)
                            } else {
                            navigation.navigate('Data Pekerjaan');
                            }
                        }}
                        />

                       
            </View>
        </NativeBaseProvider>
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
    marginTop:0
  },

  fieldName: {
    marginStart: 16,
    color: '#888888',
    fontSize: 12,
    marginBottom: -8,
    lineHeight: 16,
    fontFamily:"Poppins-Regular"
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
    // margin: 0,
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

    // height: 90
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
    flex: 1,
    marginLeft: -5,
    fontSize: 14,
    backgroundColor: '#E3E3E3',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center'
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
  fieldTitle: {
    marginTop: 28,
    marginBottom: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
    fontFamily: "Poppins-Regular"
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

})