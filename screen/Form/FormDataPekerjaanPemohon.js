import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  StatusBar,
  Dimensions
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Radio, Button, NativeBaseProvider } from 'native-base'
import axios from 'axios'
import CurrencyInput from 'react-native-currency-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
const { width, height } = Dimensions.get('window')

export default function FormDataPekerjaanPemohon({navigation}) {
  const [jenisPekerjaan, setJenisPekerjaan] = useState("");
  const [statusPekerjaan, setStatusPekerjaan] = useState('');
  const [namaPerusahaan, setNamaPerusahaan] = useState('');
  const [kategoriInstansi, setKategoriInstansi] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [lamaBekerjaTahun, setLamaBekerjaTahun] = useState('');
  const [lamaBekerjaBulan, setLamaBekerjaBulan] = useState('');
  const [pendapatanTetap, setPendapatanTetap] = useState('');
  const [pendapatanTidakTetap, setPendapatanTidakTetap] = useState('');
  const [pendapatanPerBulan, setPendapatanPerBulan] = useState('');
  const [informasiPenghasilan, setInformasiPenghasilan] = useState('');
  const [page, setPage] = useState(1)

  //kontenLainnya
  const [messageTopAlert, setMessageTopAlert] = useState(false)
  const [messageBottomAlert, setMessageBottomAlert] = useState()
  const [iconAlert, setIconAlert] = useState()
  const [colorIcon, setColorIcon] = useState()
  const [cancelButton, setCancelButton] = useState(true)
  const [navigationDirect, setNavigationDirect] = useState()
  const [isShow, setShow] = useState(false)

  // kontePage2
  const [noTelpKantor, setNoTelpKantor] = useState("");
  const [noTelpHRD, setNoTelpHRD] = useState('');
  const [alamatKantorPemohon, setAlamatKantorPemohon] = useState('');
  const [provinsiPemohon, setProvinsiPemohon] = useState("");
  const [kabKotaPemohon, setKabKotaPemohon] = useState("");
  const [kecamatanPemohon, setKecamatanPemohon] = useState("");
  const [kelurahanPemohon, setKelurahanPemohon] = useState("");
  const [kodePosPemohon, setKodePosPemohon] = useState("");

  //ListAlamatKTP
  const [daftarProvinsi, setDaftarProvinsi] = useState([]);
  const [daftarKabupatenKota, setDaftarKabupatenKota] = useState([]);
  const [daftarKecamatan, setDaftarKecamatan] = useState([]);
  const [daftarKelurahan, setDaftarKelurahan] = useState([]);


  //hitAPIAlamat
  const fetchData = () => {
    axios({
      method: 'GET',
      url: `https://dev.farizdotid.com/api/daerahindonesia/provinsi`,

    })
      .then((response) => {
        setDaftarProvinsi(response.data.provinsi)
        console.log(response.data.provinsi);
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onProvinsiItemClick = (itemValue, itemPositions) => {
    setProvinsiPemohon(itemValue)
    getKab(itemValue)
  }

  const onProvinsiSaatIni = (itemValue, itemPositions) => {
    setProvinsiNowPemohon(itemValue)
    getKab(itemValue)
  }

  const onKabClick = (itemValue, itemPositions) => {
    setKabKotaPemohon(itemValue)
    getKec(itemValue)
  }

  const onKabClickSaatIni = (itemValue, itemPositions) => {
    setKabKotaNowPemohon(itemValue)
    getKec(itemValue)
  }

  const onKecClick = (itemValue, itemPositions) => {
    setKecamatanPemohon(itemValue)
    getKel(itemValue)
  }

  const onKecClickSaatIni = (itemValue, itemPositions) => {
    setKecamatanNowPemohon(itemValue)
    getKel(itemValue)
  }

  const onKelClick = (itemValue, itemPositions) => {
    setKelurahanPemohon(itemValue)
  }

  const onKelClickSaatIni = (itemValue, itemPositions) => {
    setKelurahanNowPemohon(itemValue)
  }

  const getKab = (provinsiId) => {
    axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsiId}`)
      .then((response) => {
        setDaftarKabupatenKota(response.data.kota_kabupaten)
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  const getKec = (kota_kabupatenId) => {
    axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kota_kabupatenId}`)
      .then((response) => {
        setDaftarKecamatan(response.data.kecamatan)
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  const getKel = (kecamatanId) => {
    axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${kecamatanId}`)
      .then((response) => {
        setDaftarKelurahan(response.data.kelurahan)
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }

  return (
    <NativeBaseProvider>
      <View style={{ backgroundColor: 'white' }}>
        <StatusBar style="auto" />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 16
        }}>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', fontFamily: "Poppins-Bold" }}>Data Pekerjaan</Text>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', fontFamily: "Poppins-Regular" }}>{page}/2</Text>
        </View>

        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 14, marginRight: 14, marginTop: -8 }} />
        <ScrollView>
          <View style={styles.viewContainer}>
            {/* page 1 */}
            <View style={page === 1 ? { display: 'flex' } : { display: 'none' }}>
              <Text style={styles.fieldTitle2}>Data Pekerjaan Pemohon</Text>

              <Text style={styles.fieldName}>Jenis Pekerjaan</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={jenisPekerjaan}
                  onValueChange={(itemValue, itemIndex) => setJenisPekerjaan(itemValue)}
                >
                  <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                  <Picker.Item style={{ fontSize: 14 }} label="Karyawan" value="karyawan" />
                  <Picker.Item style={{ fontSize: 14 }} label="Self Employee" value="selfEmployee" />
                  <Picker.Item style={{ fontSize: 14 }} label="Professional (Self Employee)" value="professionalSelfEmployee" />
                </Picker>
              </View>

              <Text style={styles.fieldName}>Status Pekerjaan</Text>
              <View style={styles.fieldInputWrap}>
                <Radio.Group
                  style={styles.fieldWrapRadioButton}
                  key="ArrowRight"
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={statusPekerjaan}
                  onChange={(nextValue) => {
                    setStatusPekerjaan(nextValue)
                  }}
                >
                  <View style={styles.fieldRadioButton}>
                    <Radio
                      value="karyawanTetap"
                      size="sm"
                      my={0.5}
                    >
                      Karyawan Tetap
                    </Radio>
                  </View>
                  <View style={styles.fieldRadioButton}>
                    <Radio
                      value="karyawanKontrak"
                      size="sm"
                      my={0.5}
                    >
                      Karyawan Kontrak
                    </Radio>
                  </View>
                </Radio.Group>
              </View>

              <Text style={styles.fieldName}>Nama Perusahaan</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan Nama Perusahaan"
                onChangeText={namaPerusahaan => setNamaPerusahaan(namaPerusahaan)}
                defaultValue={namaPerusahaan}
              />

              <Text style={styles.fieldName}>Kategori Instansi</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={kategoriInstansi}
                  onValueChange={(itemValue, itemIndex) => setKategoriInstansi(itemValue)}
                >
                  <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                  <Picker.Item label="Pemerintahan" value="pemerintahan" />
                  <Picker.Item label="BUMN" value="BUMN" />
                  <Picker.Item label="TNI/POLRI" value="tniPolri" />
                  <Picker.Item label="Wiraswasta/Profesional" value="wiraswastaProfesional" />
                  <Picker.Item label="Swasta Asing" value="swastaAsing" />
                  <Picker.Item label="Swasta Nasional" value="swastaNasional" />
                  <Picker.Item label="Lainnya" value="lainnya" />
                </Picker>
              </View>

              <Text style={styles.fieldName}>Jabatan</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={jabatan}
                  onValueChange={(itemValue, itemIndex) => setJabatan(itemValue)}
                >
                  <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                  <Picker.Item style={{ fontSize: 14 }} label="Staff" value="staff" />
                  <Picker.Item style={{ fontSize: 14 }} label="Supervisor" value="supervisor" />
                  <Picker.Item style={{ fontSize: 14 }} label="Manager" value="manager" />
                  <Picker.Item style={{ fontSize: 14 }} label="Head / General Manager" value="headManager" />
                  <Picker.Item style={{ fontSize: 14 }} label="Direktur" value="direktur" />
                  <Picker.Item style={{ fontSize: 14 }} label="Komisaris" value="komisaris" />
                  <Picker.Item style={{ fontSize: 14 }} label="Lainnya" value="lainnya" />
                </Picker>
              </View>

              <Text style={styles.fieldName}>Lama Bekerja</Text>
              <View style={styles.fieldWrap}>
                <View style={styles.fieldInputWrap}>
                  <View style={{ flexDirection: 'row', margin: 16 }}>
                    <TextInput
                      style={styles.fieldSpanInputLeft}
                      placeholder="0"
                      keyboardType="numeric"
                      onChangeText={lamaBekerjaTahun => setLamaBekerjaTahun(lamaBekerjaTahun)}
                      defaultValue={lamaBekerjaTahun}
                    />
                    <View style={{ flex: 0.8, borderRadius: 8 }}>
                      <Text
                        style={styles.fieldSpanRight}>
                        Tahun
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.fieldInputWrap}>
                  <View style={{ flexDirection: 'row', margin: 16 }}>
                    <TextInput
                      style={styles.fieldSpanInputLeft}
                      placeholder="0"
                      keyboardType="numeric"
                      onChangeText={lamaBekerjaBulan => setLamaBekerjaBulan(lamaBekerjaBulan)}
                      defaultValue={lamaBekerjaBulan}

                    />
                    <View style={{ flex: 0.8, borderRadius: 8 }}>
                      <Text
                        style={styles.fieldSpanRight}>
                        Bulan
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <Text style={styles.fieldName}>Pendapatan Perbulan</Text>
              <View style={{ flexDirection: 'row', margin: 16 }}>
                <View style={{ flex: 0.2, borderRadius: 8 }}>
                  <Text
                    style={styles.fieldSpanLeft}
                  >
                    Rp
                  </Text>
                </View>
                <TextInput
                  style={styles.fieldSpanInputRight}
                  placeholder="0"
                  keyboardType="numeric"
                  onChangeText={pendapatanPerBulan => setPendapatanPerBulan(pendapatanPerBulan)}
                  defaultValue={pendapatanPerBulan}
                />
              </View>

              <Text style={styles.fieldName}>Penghasilan Tidak Tetap Perbulan (Opsional)</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={pendapatanTidakTetap}
                  onValueChange={(itemValue, itemIndex) => setPendapatanTidakTetap(itemValue)}
                >
                  <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                  <Picker.Item style={{ fontSize: 14 }} label="< 10 Juta" value="10juta" />
                  <Picker.Item style={{ fontSize: 14 }} label="10-50 Juta" value="50juta" />
                  <Picker.Item style={{ fontSize: 14 }} label="> 50 juta" value="kurang50juta" />
                </Picker>
              </View>

              <Text style={styles.fieldName}>Pengeluaran Tetap Perbulan</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={pendapatanTetap}
                  onValueChange={(itemValue, itemIndex) => setPendapatanTetap(itemValue)}
                >
                  <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                  <Picker.Item style={{ fontSize: 14 }} label="< 10 Juta" value="10juta" />
                  <Picker.Item style={{ fontSize: 14 }} label="10-50 Juta" value="50juta" />
                  <Picker.Item style={{ fontSize: 14 }} label="> 50 juta" value="kurang50juta" />
                </Picker>
              </View>

              <Text style={styles.fieldName}>Informasi Penghasilan Tambahan (Opsional)</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={informasiPenghasilan}
                  onValueChange={(itemValue, itemIndex) => setInformasiPenghasilan(itemValue)}
                >
                  <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" /> 
                  <Picker.Item style={{ fontSize: 14 }} label="Kerja Paruh Waktu" value="paruhWaktu" />
                  <Picker.Item style={{ fontSize: 14 }} label="Hasil Usaha" value="hasilUsaha" />
                  <Picker.Item style={{ fontSize: 14 }} label="Hasil Sewa" value="hasilSewa" />
                  <Picker.Item style={{ fontSize: 14 }} label="Deviden" value="deviden" />
                  <Picker.Item style={{ fontSize: 14 }} label="Investasi" value="investasi" />
                  <Picker.Item style={{ fontSize: 14 }} label="Warisan" value="warisan" />
                  <Picker.Item style={{ fontSize: 14 }} label="Lainnya" value="lainnya" />
                </Picker>
              </View>
            </View>

            {/* page 2 */}
            <View style={page === 2 ? { display: 'flex' } : { display: 'none' }}>

              <Text style={styles.fieldName}>No. Telepon Kantor</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan No. Telepon Kantor"
                onChangeText={noTelpKantor => setNoTelpKantor(noTelpKantor)}
                defaultValue={noTelpKantor}
              />

              <Text style={styles.fieldName}>No. Handphone HRD</Text>
              <View style={{ flexDirection: 'row', margin: 16 }}>
                <View style={{ flex: 0.2, borderRadius: 8 }}>
                  <Text
                    style={styles.fieldSpanLeft}
                  >
                    +62
                  </Text>
                </View>
                <TextInput
                  style={styles.fieldSpanInputRight}
                  placeholder="81234567890"
                  keyboardType="phone-pad"
                  onChangeText={noTelpHRD => setNoTelpHRD(noTelpHRD)}
                  defaultValue={noTelpHRD}
                />
              </View>


              <Text style={styles.fieldName}>Alamat Kantor</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan Alamat Kantor"
                onChangeText={alamatKantorPemohon => setAlamatKantorPemohon(alamatKantorPemohon)}
                defaultValue={alamatKantorPemohon}
              />

              <Text style={styles.fieldName}>Provinsi</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={provinsiPemohon}
                  onValueChange={onProvinsiItemClick}
                >
                  <Picker.Item label="Pilih Provinsi" value="disabled" color="#aaa" />
                  {
                    daftarProvinsi.map((provinsi) =>

                      <Picker.Item
                        key={provinsi.id}
                        label={provinsi.nama}
                        value={provinsi.id}

                      />
                    )
                  }
                </Picker>
              </View>

              <Text style={styles.fieldName}>Kabupaten/Kota</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={kabKotaPemohon}
                  onValueChange={onKabClick}
                >
                  <Picker.Item label="Pilih Kabupaten/Kota" value="disabled" color="#aaa" />
                  {
                    daftarKabupatenKota.map((kota_kabupaten) =>

                      <Picker.Item
                        key={kota_kabupaten.id}
                        value={kota_kabupaten.id}
                        label={kota_kabupaten.nama}
                      />
                    )
                  }
                </Picker>
              </View>

              <Text style={styles.fieldName}>Kecamatan</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={kecamatanPemohon}
                  onValueChange={onKecClick}
                >
                  <Picker.Item label="Pilih Kecamatan" value="disabled" color="#aaa" />
                  {
                    daftarKecamatan.map((kecamatan) =>

                      <Picker.Item
                        key={kecamatan.id}
                        value={kecamatan.id}
                        label={kecamatan.nama}
                      />
                    )
                  }
                </Picker>
              </View>

              <Text style={styles.fieldName}>Kelurahan</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={kelurahanPemohon}
                  onValueChange={onKelClick}
                >
                  <Picker.Item label="Pilih Kelurahan" value="disabled" color="#aaa" />
                  {
                    daftarKelurahan.map((kelurahan) =>

                      <Picker.Item
                        key={kelurahan.id}
                        value={kelurahan.id}
                        label={kelurahan.nama}
                      />
                    )
                  }
                </Picker>
              </View>

              <Text style={styles.fieldName}>Kode Pos</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan Kode Pos"
                onChangeText={kodePosPemohon => setKodePosPemohon(kodePosPemohon)}
                defaultValue={kodePosPemohon}
              />
            </View>

            {/* button */}
            <View style={{
              height: height*0.25,
              marginTop:-30,
              justifyContent:'space-around',
              alignItems:'center',
              flexDirection:'row'
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
              navigation.navigate('FormDataPekerjaanPasangan');
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
    fontFamily: 'Poppins-Reguler'
  },
  fieldTitle: {
    marginTop: 28,
    marginBottom: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Poppins-Bold"
  },
  fieldInputWrapButton: {
    flex:1,
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  fieldTitle2: {
    marginStart: 16,
    marginTop: 10,
    marginBottom: 28,
    color: 'black',
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Poppins-Bold"
  },
  fieldRadioButton: {
    margin: 16,
    alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    padding: 8,
  },
  fieldButton: {
    margin: 16,
    alignItems: 'flex-start',
    flex: 1,
    color:'white',
    borderRadius: 8,
    marginTop: 0
  },
  fieldName: {
    marginStart: 16,
    color: '#888888',
    fontSize: 12,
    marginBottom: -8,
    lineHeight: 16,
    fontFamily: "Poppins-Regular"
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
    marginTop: '1%',

  },
  fieldInputWrap: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  fieldDescription: {
    flex: 1,
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