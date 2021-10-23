import React, {useEffect, useState} from 'react';
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
import { Checkbox, Radio, Button, NativeBaseProvider } from 'native-base'
import MyDatePicker from '../../components/MydatePicker'
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('window')


export default function FasilitasPembiayaan({navigation}) {
    // useState page 1
    const [skemaPengajuan, setSkemaPengajuan] = useState('')
    const [peruntukanPembiayaan, setPeruntukanPembiayaan] = useState('')
    const [program, setProgram] = useState('')
    const [masaFixMMQ, setMasaFixMMQ] = useState('')
    const [lainnya, setLainnya] = useState('')
    const [akad, setAkad] = useState('')
    const [lainnyaAkad, setLainnyaAkad] = useState('')
    const [totalPlatfond, setTotalPlatfond] = useState('')
    const [jangkaWaktuPembiayaan, setJangkaWaktuPembiayaan] = useState('')
    const [jenisPenjual, setJenisPenjual] = useState('')
    const [namaPenjual, setNamaPenjual] = useState('')
    const [nilaiSPR, setNilaiSPR] = useState('')
    const [page, setPage] = useState(1)


    // useState page 2
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

      //kontenLainnya
    const [messageTopAlert, setMessageTopAlert] = useState(false)
    const [messageBottomAlert, setMessageBottomAlert] = useState()
    const [iconAlert, setIconAlert] = useState()
    const [colorIcon, setColorIcon] = useState()
    const [cancelButton, setCancelButton] = useState(true)
    const [navigationDirect, setNavigationDirect] = useState()
    const [isShow, setShow] = useState(false)

    // function checkA() {
    //     if (skemaPengajuan && peruntukanPembiayaan && program && akad && totalPlatfond && jangkaWaktuPembiayaan && jenisPenjual && namaPenjual && nilaiSPR){
    //       setKondisiA(true)
    //       console.log(true,"kondisiA")
    //     } else{
    //       setKondisiA(false)
    //     }
    //   }

    // useEffect(() => {
    //   checkA()
    // })

    // if (kondisiA) {
    //   setBtnReady(true)
    // } else { 
    //   setBtnReady(false)
    // }

    // } , [skemaPengajuan, peruntukanPembiayaan, program, akad, totalPlatfond, jangkaWaktuPembiayaan, jenisPenjual, namaPenjual, nilaiSPR] )
    
    return(
        <NativeBaseProvider>
            <View style={{ backgroundColor: 'white' }}>
                <StatusBar style="auto" />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 16
                }}>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', fontFamily: "Poppins-Bold" }}>Fasilitas Pembiayaan</Text>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', fontFamily: "Poppins-Regular" }}>{page}/2</Text>
                </View>

                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 14, marginRight: 14, marginTop: -8 }} />
                <ScrollView>
                    <View style={styles.viewContainer}>

                        {/* page 1 */}
                        <View style={page === 1 ? { display: 'flex' } : { display: 'none' }}>

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

                            {program === "specialMMQ" ? 
                             <View>
                                <Text style={styles.fieldName}>Masa Fix MMQ</Text>
                                <TextInput
                                    style={styles.field}
                                    placeholder="Masukkan Masa Fix MMQ"
                                    onChangeText={masaFixMMQ=>setMasaFixMMQ(masaFixMMQ)}
                                    defaultValue={masaFixMMQ}
                                />
                             </View>: null}

                            {program === "lainnya" ? 
                             <View>
                                <Text style={styles.fieldName}>Lainnya</Text>
                                <TextInput
                                    style={styles.field}
                                    placeholder="Masukkan Akad"
                                    onChangeText={lainnyaAkad=>setLainnyaAkad(lainnyaAkad)}
                                    defaultValue={lainnyaAkad}
                                />
                             </View>: null}

                            <Text style={styles.fieldName}>Akad Fasilitas yang Diajukan</Text>
                            <View style={styles.fieldDropDown}>
                                <Picker
                                    mode="dropdown"
                                    selectedValue={akad} onValueChange={(itemValue3) => setAkad(itemValue3)}
                                >
                                    <Picker.Item style={{ fontSize: 14 }} label="Pilih Akad Fasilitas" value="disabled" color="#aaa" />
                                    <Picker.Item style={{ fontSize: 14 }} label="Murabahah" value="murabahah" />
                                    <Picker.Item style={{ fontSize: 14 }} label="MMQ (Musyarakah Mustanaqishah)" value="mmq" />
                                    <Picker.Item style={{ fontSize: 14 }} label="Istishna" value="istishna" />
                                    <Picker.Item style={{ fontSize: 14 }} label="Lainnya" value="lainnya" />
                                </Picker>
                            </View>

                            {akad === "lainnya" ? 
                             <View>
                                <Text style={styles.fieldName}>Lainnya</Text>
                                <TextInput
                                    style={styles.field}
                                    placeholder="Masukkan Program"
                                    onChangeText={lainnya=>setLainnya(lainnya)}
                                    defaultValue={lainnya}
                                />
                             </View>: null}

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
                                    selectedValue={jenisPenjual} onValueChange={(itemValue4) => setJenisPenjual(itemValue4)}
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
                            </View>

                            {/* page 2 */}
                            <View style={page === 2 ? { display: 'flex' } : { display: 'none' }}>
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
                            navigation.navigate("Data Agunan");
                            }
                        }}
                        />

                       
            </View>
        </NativeBaseProvider>
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
      fieldDescription: {
        flex:1,
        fontSize: 10,
        marginTop: -13,
        marginStart: 33,
        marginBottom: 12
      },
    
})