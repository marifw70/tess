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
import { Radio, Button, NativeBaseProvider, Checkbox } from 'native-base'
import MyDatePicker from '../../components/MydatePicker'
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
const { width, height } = Dimensions.get('window')
import axios from 'axios';
import Stepper from '../../components/stepper'

export default function FormDataPemohon({ navigation }) {
  // useState page 1
  const [nikPemohon, setNikPemohon] = useState("");
  const [namaPemohon, setNamaPemohon] = useState("");
  const [tempatLahirPemohon, setTempatLahirPemohon] = useState("");
  const [jenisKelaminPemohon, setJenisKelaminPemohon] = useState("");
  const [statusPerkawinanPemohon, setStatusPerkawinanPemohon] = useState("");
  const [pendidikanTerakhirPemohon, setPendidikanTerakhirPemohon] = useState("");
  const [emailPemohon, setEmailPemohon] = useState("");
  const [noHpSatuPemohon, setNoHpSatuPemohon] = useState("");
  const [noHpDuaPemohon, setNoHpDuaPemohon] = useState("");
  const [npwpPemohon, setNpwpPemohon] = useState("");
  const [namaIbuKandungPemohon, setNamaIbuKandungPemohon] = useState("");
  const [page, setPage] = useState(1)
  const [step, setStep] = useState(1)

  //kontenLainnya
  const [messageTopAlert, setMessageTopAlert] = useState(false)
  const [messageBottomAlert, setMessageBottomAlert] = useState()
  const [iconAlert, setIconAlert] = useState()
  const [colorIcon, setColorIcon] = useState()
  const [cancelButton, setCancelButton] = useState(true)
  const [navigationDirect, setNavigationDirect] = useState()
  const [isShow, setShow] = useState(false)

  //useState Page 2
  const [alamatKTPPemohon, setAlamatKTPPemohon] = useState("");
  const [rtKTPPemohon, setRtKTPPemohon] = useState("");
  const [rwKTPPemohon, setRwKTPPemohon] = useState("");
  const [provinsiKTPPemohon, setProvinsiKTPPemohon] = useState("");
  const [kabKotaKTPPemohon, setKabKotaKTPPemohon] = useState("");
  const [kecamatanKTPPemohon, setKecamatanKTPPemohon] = useState("");
  const [kelurahanKTPPemohon, setKelurahanKTPPemohon] = useState("");
  const [kodePosKTPPemohon, setKodePosKTPPemohon] = useState("");

  const [alamatNowPemohon, setAlamatNowPemohon] = useState("");
  const [rtNowPemohon, setRtNowPemohon] = useState("");
  const [rwNowPemohon, setRwNowPemohon] = useState("");
  const [provinsiNowPemohon, setProvinsiNowPemohon] = useState("");
  const [kabKotaNowPemohon, setKabKotaNowPemohon] = useState("");
  const [kecamatanNowPemohon, setKecamatanNowPemohon] = useState("");
  const [kelurahanNowPemohon, setKelurahanNowPemohon] = useState("");
  const [kodePosNowPemohon, setKodePosNowPemohon] = useState("");
  const [noTelpRumahPemohon, setNoTelpRumahPemohon] = useState("");
  const [alamatSuratMenyuratPemohon, setAlamatSuratMenyuratPemohon] = useState("");

  //ListAlamatKTP
  const [daftarProvinsi, setDaftarProvinsi] = useState([]);
  const [daftarKabupatenKota, setDaftarKabupatenKota] = useState([]);
  const [daftarKecamatan, setDaftarKecamatan] = useState([]);
  const [daftarKelurahan, setDaftarKelurahan] = useState([]);

  //checkBox
  const [isEnabled, setIsEnabled] = useState(false);
  const checkBox = () => setIsEnabled(previousState => !previousState);

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
    setProvinsiKTPPemohon(itemValue)
    getKab(itemValue)
  }

  const onProvinsiSaatIni = (itemValue, itemPositions) => {
    setProvinsiNowPemohon(itemValue)
    getKab(itemValue)
  }

  const onKabClick = (itemValue, itemPositions) => {
    setKabKotaKTPPemohon(itemValue)
    getKec(itemValue)
  }

  const onKabClickSaatIni = (itemValue, itemPositions) => {
    setKabKotaNowPemohon(itemValue)
    getKec(itemValue)
  }

  const onKecClick = (itemValue, itemPositions) => {
    setKecamatanKTPPemohon(itemValue)
    getKel(itemValue)
  }

  const onKecClickSaatIni = (itemValue, itemPositions) => {
    setKecamatanNowPemohon(itemValue)
    getKel(itemValue)
  }

  const onKelClick = (itemValue, itemPositions) => {
    setKelurahanKTPPemohon(itemValue)
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
          {/* <Stepper /> */}
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', fontFamily: "Poppins-Bold" }}>Data Pemohon</Text>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', fontFamily: "Poppins-Regular" }}>{page}/2</Text>
        </View>

        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 14, marginRight: 14, marginTop: -8 }} />
        <ScrollView>
          <View style={styles.viewContainer}>

            {/* page 1 */}
            <View style={page === 1 ? { display: 'flex' } : { display: 'none' }}>

              <Text style={styles.fieldName}>NIK e-KTP</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan NIK e-KTP"
                keyboardType="numeric"
                maxLength={16}
                onChangeText={nikPemohon => setNikPemohon(nikPemohon)}
                defaultValue={nikPemohon}
              />
              <View style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end'
              }}>
                <Text style={{
                  fontSize: 10,
                  margin: 16,
                  marginTop: -12,
                  marginBottom: 6
                }}>0/16</Text>
              </View>


              <Text style={styles.fieldName}>Nama Lengkap Sesuai KTP</Text>
              <TextInput
                style={styles.field}
                placeholder="Nama Lengkap Sesuai KTP"
                keyboardType="default"
                onChangeText={namaPemohon => setNamaPemohon(namaPemohon)}
                defaultValue={namaPemohon}
              />

              <Text style={styles.fieldName}>Tempat Lahir</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan Tempat Lahir"
                onChangeText={tempatLahirPemohon => setTempatLahirPemohon(tempatLahirPemohon)}
                defaultValue={tempatLahirPemohon}
              />

              <Text style={styles.fieldName}>Tanggal Lahir</Text>
              <View style={styles.field}>
                <MyDatePicker />
              </View>

              <Text style={styles.fieldName}>Jenis Kelamin</Text>
              <View style={styles.fieldInputWrap}>
                <Radio.Group
                  style={styles.fieldWrapRadioButton}
                  key="ArrowRight"
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                >
                  <View style={styles.fieldRadioButton}>
                    <Radio
                      value="1"
                      size="sm"
                      my={0.5}
                      onPress={() => setJenisKelaminPemohon({ jenisKelaminPemohon: 'Laki-Laki' })}
                      selected={jenisKelaminPemohon == 'Laki-Laki'}
                    >
                      Laki-Laki
                    </Radio>
                  </View>
                  <View style={styles.fieldRadioButton}>
                    <Radio
                      value="2"
                      size="sm"
                      my={0.5}
                      onPress={() => setJenisKelaminPemohon({ jenisKelaminPemohon: 'Perempuan' })}
                      selected={jenisKelaminPemohon == 'Perempuan'}
                    >
                      Perempuan
                    </Radio>
                  </View>
                </Radio.Group>
              </View>

              <Text style={styles.fieldName} >Status Perkawinan</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={statusPerkawinanPemohon}
                  onValueChange={(itemValue, itemIndex) => setStatusPerkawinanPemohon(itemValue)}
                >
                  <Picker.Item style={{ fontSize: 14 }} label="Pilih Status Perkawinan" value="disabled" color="#aaa" />
                  <Picker.Item style={{ fontSize: 14 }} label="Belum Menikah" value="belumMenikah" />
                  <Picker.Item style={{ fontSize: 14 }} label="Menikah" value="menikah" />
                  <Picker.Item style={{ fontSize: 14 }} label="Cerai" value="cerai" />
                </Picker>
              </View>

              <Text style={styles.fieldName}>Pendidikan Terakhir</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={pendidikanTerakhirPemohon}
                  onValueChange={(itemValue, itemIndex) => setPendidikanTerakhirPemohon(itemValue)}
                >
                  <Picker.Item style={{ fontSize: 14 }} label="Pilih Pendidikan Terakhir" value="disabled" color="#aaa" />
                  <Picker.Item style={{ fontSize: 14 }} label="SD/MI" value="SD/MI" />
                  <Picker.Item style={{ fontSize: 14 }} label="SMP/MTS" value="SMP/MTS" />
                  <Picker.Item style={{ fontSize: 14 }} label="SMA/MA" value="SMA/MA" />
                  <Picker.Item style={{ fontSize: 14 }} label="Diploma I-IV" value="Diploma I-IV" />
                  <Picker.Item style={{ fontSize: 14 }} label="S1" value="Sarjana" />
                  <Picker.Item style={{ fontSize: 14 }} label="S2" value="Magister" />
                  <Picker.Item style={{ fontSize: 14 }} label="S3" value="Doktor" />
                </Picker>
              </View>

              <Text style={styles.fieldName}>Alamat Email</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan Alamat Email"
                keyboardType="email-address"
                onChangeText={emailPemohon => setEmailPemohon(emailPemohon)}
                defaultValue={emailPemohon}
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
                  placeholder="81234567890"
                  keyboardType="phone-pad"
                  onChangeText={noHpSatuPemohon => setNoHpSatuPemohon(noHpSatuPemohon)}
                  defaultValue={noHpSatuPemohon}
                />
              </View>
              <Text style={styles.fieldDescription}>Nomor Handphone Minimal 10 Digit</Text>

              <Text style={styles.fieldName}>No. Handphone (Optional)</Text>
              <View style={{ flexDirection: 'row', margin: 16 }}>
                <View style={{ flex: 0.2, borderRadius: 8 }}>
                  <Text
                    style={styles.fieldSpanLeft}>
                    +62
                  </Text>
                </View>
                <TextInput
                  style={styles.fieldSpanInputRight}
                  placeholder="81234567890"
                  keyboardType="phone-pad"
                  onChangeText={noHpDuaPemohon => setNoHpDuaPemohon(noHpDuaPemohon)}
                  defaultValue={noHpDuaPemohon}
                />
              </View>
              <Text style={styles.fieldDescription}>Nomor Handphone Minimal 10 Digit</Text>


              <Text style={styles.fieldName}>Nomor NPWP</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan Nomor NPWP"
                keyboardType="numeric"
                maxLength={15}
                onChangeText={npwpPemohon => setNpwpPemohon(npwpPemohon)}
                defaultValue={npwpPemohon}
              />
              <View style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end'
              }}>
                <Text style={{
                  fontSize: 10,
                  margin: 16,
                  marginTop: -12,
                  marginBottom: 6
                }}>0/15</Text>
              </View>

              <Text style={styles.fieldName}>Nama Gadis Ibu Kandung</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan Nama Gadis Ibu Kandung"
                onChangeText={namaIbuKandungPemohon => setNamaIbuKandungPemohon(namaIbuKandungPemohon)}
                defaultValue={namaIbuKandungPemohon}
              />
            </View>

            {/* page 2 */}
            <View style={page === 2 ? { display: 'flex' } : { display: 'none' }}>
              <Text style={styles.fieldName}>Alamat Sesuai KTP</Text>
              <TextInput
                style={styles.field}
                multiline
                placeholder="Masukkan Alamat Sesuai KTP"
                onChangeText={alamatKTPPemohon => setAlamatKTPPemohon(alamatKTPPemohon)}
                defaultValue={alamatKTPPemohon}
              />

              <View style={styles.fieldWrap}>
                <View style={styles.fieldInputWrap}>
                  <Text style={styles.fieldNameRow}>RT</Text>
                  <TextInput
                    style={styles.fieldRow}
                    placeholder="000"
                    keyboardType="numeric"
                    onChangeText={rtKTPPemohon => setRtKTPPemohon(rtKTPPemohon)}
                    defaultValue={rtKTPPemohon}
                  />
                </View>
                <View style={styles.fieldInputWrap}>
                  <Text style={styles.fieldNameRow}>RW</Text>
                  <TextInput
                    style={styles.fieldRow}
                    placeholder="000"
                    keyboardType="numeric"
                    onChangeText={rwKTPPemohon => setRwKTPPemohon(rwKTPPemohon)}
                    defaultValue={rwKTPPemohon}
                  />
                </View>
              </View>


              <Text style={styles.fieldName}>Provinsi</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={provinsiKTPPemohon}
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
                  selectedValue={kabKotaKTPPemohon}
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
                  selectedValue={kecamatanKTPPemohon}
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
                  selectedValue={kelurahanKTPPemohon}
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
                onChangeText={kodePosKTPPemohon => setKodePosKTPPemohon(kodePosKTPPemohon)}
                defaultValue={kodePosKTPPemohon}
              />

              <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-start', marginBottom: 16 }}>
                <Checkbox
                  style={{ flex: 0.2, marginTop: -3 }}
                  colorScheme="purple"
                  onChange={checkBox}
                  value={isEnabled}
                  accessibilityLabel="This is a dummy checkbox" />
                <Text
                  style={{ fontSize: 10, alignItems: 'center', flex: 1, marginStart: -11 }}
                >Alamat Tinggal Saat Ini sama dengan Alamat Domisili </Text>
              </View>

              <Text style={styles.fieldName}>Alamat Tinggal Saat Ini</Text>
              <TextInput
                style={styles.field}
                multiline
                placeholder="Masukkan Alamat Tinggal Saat Ini"
                onChangeText={alamatNowPemohon => setAlamatNowPemohon(isEnabled ? alamatKTPPemohon : alamatNowPemohon)}
                defaultValue={isEnabled ? alamatKTPPemohon : alamatNowPemohon}
                editable={isEnabled ? false : true}

              />

              <View style={styles.fieldWrap}>
                <View style={styles.fieldInputWrap}>
                  <Text style={styles.fieldNameRow}>RT</Text>
                  <TextInput
                    style={styles.fieldRow}
                    placeholder="000"
                    keyboardType="numeric"
                    onChangeText={rtNowPemohon => setRtNowPemohon(isEnabled ? rtKTPPemohon : rtNowPemohon)}
                    defaultValue={isEnabled ? rtKTPPemohon : rtNowPemohon}
                    editable={isEnabled ? false : true}
                  />
                </View>
                <View style={styles.fieldInputWrap}>
                  <Text style={styles.fieldNameRow}>RW</Text>
                  <TextInput
                    style={styles.fieldRow}
                    placeholder="000"
                    keyboardType="numeric"
                    onChangeText={rwNowPemohon => setRwNowPemohon(isEnabled ? rwKTPPemohon : rwNowPemohon)}
                    defaultValue={isEnabled ? rwKTPPemohon : rwNowPemohon}
                    editable={isEnabled ? false : true}
                  />
                </View>
              </View>


              <Text style={styles.fieldName}>Provinsi</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={isEnabled ? provinsiKTPPemohon : provinsiNowPemohon}
                  enabled={!isEnabled}
                  onValueChange={onProvinsiSaatIni}
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
                  selectedValue={isEnabled ? kabKotaKTPPemohon : kabKotaNowPemohon}
                  enabled={!isEnabled}
                  onValueChange={onKabClickSaatIni}
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
                  selectedValue={isEnabled ? kecamatanKTPPemohon : kecamatanNowPemohon}
                  enabled={!isEnabled}
                  onValueChange={onKecClickSaatIni}
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
                  selectedValue={isEnabled ? kelurahanKTPPemohon : kelurahanNowPemohon}
                  enabled={!isEnabled}
                  onValueChange={onKelClickSaatIni}
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
                onChangeText={kodePosNowPemohon => setKodePosNowPemohon(kodePosNowPemohon)}
                defaultValue={kodePosNowPemohon}
              />

              <Text style={styles.fieldName}>No. Telepon Rumah (Optional)</Text>
              <TextInput
                style={styles.field}
                placeholder="Masukkan No. Telepon Rumah"
                keyboardType="phone-pad"
                onChangeText={noTelpRumahPemohon => setNoTelpRumahPemohon(noTelpRumahPemohon)}
                defaultValue={noTelpRumahPemohon}
              />
              <Text style={styles.fieldName}>Alamat Surat Menyurat</Text>
              <View style={styles.fieldDropDown}>
                <Picker
                  mode="dropdown"
                  selectedValue={alamatSuratMenyuratPemohon}
                  onValueChange={(itemValue, itemIndex) => setAlamatSuratMenyuratPemohon(itemValue)}
                >
                  <Picker.Item style={{ fontSize: 14 }} label="Pilih Opsi" value="disabled" color="#aaa" />
                  <Picker.Item style={{ fontSize: 14 }} label="Alamat KTP" value="alamatKTP" />
                  <Picker.Item style={{ fontSize: 14 }} label="Alamat Tinggal" value="alamatTinggal" />
                  <Picker.Item style={{ fontSize: 14 }} label="Alamat Kantor" value="alamatKantor" />
                  <Picker.Item style={{ fontSize: 14 }} label="Alamat Email" value="alamatEmail" />

                </Picker>
              </View>
            </View>


            {/* button */}
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
              navigation.navigate('Form Fasilitas Pembiayaan');
              setStep(2)
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
    fontFamily: "Poppins-Bold"
  },
  fieldTitle2: {
    marginTop: 10,
    marginBottom: 28,
    color: 'black',
    fontSize: 14,
    fontFamily: "Poppins-Regular"
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
  fieldInputWrapButton: {
    flex: 1,
    marginTop: 25,
    justifyContent: 'space-between',
    flexDirection: 'column'
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