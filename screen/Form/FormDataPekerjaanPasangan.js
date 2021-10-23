import React, { useState } from "react";
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
import { CheckIcon,Radio, Select, NativeBaseProvider} from 'native-base';
import CurrencyInput from 'react-native-currency-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
import UploadDokumen from '../UploadDokumen';
const {width,height} = Dimensions.get('window')

export default function FormDataPekerjaanPasangan({ navigation }) {
  const [messageTopAlert, setMessageTopAlert] = useState(false);
  const [messageBottomAlert, setMessageBottomAlert] = useState();
  const [iconAlert, setIconAlert] = useState();
  const [colorIcon, setColorIcon] = useState();
  const [cancelButton, setCancelButton] = useState(true);
  const [navigationDirect, setNavigationDirect] = useState();
  const [isShow, setShow] = useState(false);
  const [jenisPekerjaan, setJenisPekerjaan] = useState("");
  const [statusKaryawan, setstatusKaryawan] = useState("");
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [kategoriInstansi, setKategoriInstansi] = useState("");
  const [jabatan, setJabatan] = useState("");

  const [tahunBekerja, setTahunBekerja] = useState("");
  const [bulanBekerja, setBulanBekerja] = useState("");
  const [pendapatanPerbulan, setPendapatanPerbulan] = useState("");
  const [penghasilanTidakTetapPerbulan, setPenghasilanTidakTetapPerbulan] =
    useState("");
  const [perngeluaranTetapPerbulan, setPerngeluaranTetapPerbulan] =
    useState("");
  const [informasiPenghasilanTambahan, setInformasiPenghasilanTambahan] =
    useState("");
  const [noTeleponKantor, setNoTeleponKantor] = useState("");
  const [noHandphoneHRD, setNoHandphoneHRD] = useState("");
  const [alamatKantor, setAlamatKantor] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [page, setPage] = useState(1);

  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <View
        style={{
          width: width * 0.975,
          height: height * 0.07,
          borderBottomWidth: 1,
          flexDirection: "row",
          padding: "2%",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Data Pekerjaan</Text>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{page}/2</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={page === 1 ? { display: "flex" } : { display: "none" }}>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              padding: "2%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Data Pekerjaan Pasangan
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Jenis Pekerjaan
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={jenisPekerjaan}
              width={width * 0.93}
              accessibilityLabel="Pilih Jenis Pekerjaan"
              placeholder="Pilih Jenis Pekerjaan"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setJenisPekerjaan(itemValue)}
            >
              <Select.Item label="Karyawan" value="Karyawan" />
              <Select.Item label="Wiraswasta" value="Wiraswasta" />
            </Select>
          </View>
          <View
            style={{
              display: jenisPekerjaan === "Karyawan" ? "flex" : "none",
            }}
          >
            <View
              style={{
                width: width * 0.975,
                height: height * 0.045,
                flexDirection: "row",
                alignItems: "center",
                marginTop: "1%",
                padding: "1.5%",
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "600" }}>
                Status Karyawan
              </Text>
            </View>
            <Radio.Group
              name="myRadioGroup"
              value={statusKaryawan}
              onChange={(nextValue) => {
                setstatusKaryawan(nextValue);
              }}
              style={{
                width: width * 0.975,
                height: height * 0.07,
                flexDirection: "row",
                alignItems: "center",
                marginTop: "1%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: width * 0.48,
                  height: height * 0.07,
                  backgroundColor: "#dbdbdb",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Radio value="Karyawan Tetap">Karyawan Tetap</Radio>
              </View>
              <View
                style={{
                  width: width * 0.48,
                  height: height * 0.07,
                  backgroundColor: "#dbdbdb",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Radio value="Karyawan Kontrak">Karyawan Kontrak</Radio>
              </View>
            </Radio.Group>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "1.5%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Nama Perusahaan
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <TextInput
              // style={styles.input}
              placeholder="Nama Perusahaan"
              value={namaPerusahaan}
              onChangeText={(value) => setNamaPerusahaan(value)}
              underlineColorAndroid="transparent"
            />
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Kategori Instansi
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={kategoriInstansi}
              width={width * 0.93}
              accessibilityLabel="Pilih Kategori Intansi"
              placeholder="Pilih Kategori Intansi"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setKategoriInstansi(itemValue)}
            >
              <Select.Item label="BUMN" value="BUMN" />
              <Select.Item label="Swasta" value="Swasta" />
            </Select>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Jabatan</Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={jabatan}
              width={width * 0.93}
              accessibilityLabel="Pilih Jabatan"
              placeholder="Pilih Jabatan"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setJabatan(itemValue)}
            >
              <Select.Item label="Manager" value="Manager" />
              <Select.Item label="Supervisor" value="Supervisor" />
              <Select.Item label="Staff" value="Staff" />
            </Select>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "1.5%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Lama Bekerja
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: width * 0.48,
                height: height * 0.07,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: width * 0.28,
                  height: height * 0.07,
                  paddingLeft: "2%",
                  borderTopLeftRadius: 8,
                  backgroundColor: "#dbdbdb",
                  borderBottomLeftRadius: 8,
                }}
              >
                <TextInput
                  // style={styles.input}
                  keyboardType="numeric"
                  placeholder="Tahun"
                  value={tahunBekerja}
                  onChangeText={(value) => setTahunBekerja(value)}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View
                style={{
                  width: width * 0.2,
                  height: height * 0.07,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#bdbdbd",
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                <Text style={{ fontSize: 18 }}>Tahun</Text>
              </View>
            </View>
            <View
              style={{
                width: width * 0.48,
                height: height * 0.07,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: width * 0.28,
                  height: height * 0.07,
                  paddingLeft: "2%",
                  borderTopLeftRadius: 8,
                  backgroundColor: "#dbdbdb",
                  borderBottomLeftRadius: 8,
                }}
              >
                <TextInput
                  // style={styles.input}
                  keyboardType="numeric"
                  placeholder="Bulan"
                  value={bulanBekerja}
                  onChangeText={(value) => setBulanBekerja(value)}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View
                style={{
                  width: width * 0.2,
                  height: height * 0.07,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#bdbdbd",
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                <Text style={{ fontSize: 18 }}>Bulan</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "1.5%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Pendapatan Perbulan
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: width * 0.975,
                height: height * 0.07,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: width * 0.15,
                  height: height * 0.07,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#bdbdbd",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}
              >
                <Text style={{ fontSize: 18 }}>Rp.</Text>
              </View>
              <View
                style={{
                  width: width * 0.83,
                  height: height * 0.07,
                  paddingLeft: "2%",
                  borderTopRightRadius: 8,
                  backgroundColor: "#dbdbdb",
                  borderBottomRightRadius: 8,
                }}
              >
                <CurrencyInput
                  onChangeValue={(value) => setPendapatanPerbulan(value)}
                  value={pendapatanPerbulan}
                  placeholder="0"
                  // prefix="Rp "
                  delimiter="."
                  separator=","
                  precision={0}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Penghasilan Tidak Tetap Per Bulan (Opsional)
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={penghasilanTidakTetapPerbulan}
              width={width * 0.93}
              accessibilityLabel="Pilih Penghasilan Tidak Tetap"
              placeholder="Pilih Penghasilan Tidak Tetap"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) =>
                setPenghasilanTidakTetapPerbulan(itemValue)
              }
            >
              <Select.Item label="Manager" value="Manager" />
              <Select.Item label="Supervisor" value="Supervisor" />
              <Select.Item label="Staff" value="Staff" />
            </Select>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Pengeluaran Tetap Per Bulan
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={perngeluaranTetapPerbulan}
              width={width * 0.93}
              accessibilityLabel="Pilih Pengeluaran Tetap Per Bulan"
              placeholder="Pilih Pengeluaran Tetap Per Bulan"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) =>
                setPerngeluaranTetapPerbulan(itemValue)
              }
            >
              <Select.Item label="< Rp. 5.000.000" value="< Rp. 5.000.000" />
              <Select.Item
                label="Rp. 5.000.000 - Rp. 10.000.000"
                value="Rp. 5.000.000 - Rp. 10.000.000"
              />
              <Select.Item label="> Rp. 10.000.000" value="> Rp. 10.000.000" />
            </Select>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Informasi Penghasilan Tambahan (Opsional)
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={informasiPenghasilanTambahan}
              width={width * 0.93}
              accessibilityLabel="Pilih Informasi Penghasilan Tambahan"
              placeholder="Pilih Informasi Penghasilan Tambahan"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) =>
                setInformasiPenghasilanTambahan(itemValue)
              }
            >
              <Select.Item label="Surat Berharga" value="Surat Berharga" />
              <Select.Item label="Sampingan" value="Sampingan" />
            </Select>
          </View>
        </View>

        <View style={page === 2 ? { display: "flex" } : { display: "none" }}>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "1.5%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              No. Telepon Kantor
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <TextInput
              // style={styles.input}
              keyboardType="numeric"
              placeholder="No. Telepon Kantor"
              value={noTeleponKantor}
              onChangeText={(value) => setNoTeleponKantor(value)}
              underlineColorAndroid="transparent"
            />
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "1.5%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              No Handphone HRD
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: width * 0.975,
                height: height * 0.07,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: width * 0.15,
                  height: height * 0.07,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#bdbdbd",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}
              >
                <Text style={{ fontSize: 18 }}>+62</Text>
              </View>
              <View
                style={{
                  width: width * 0.83,
                  height: height * 0.07,
                  paddingLeft: "2%",
                  borderTopRightRadius: 8,
                  backgroundColor: "#dbdbdb",
                  borderBottomRightRadius: 8,
                }}
              >
                <TextInput
                  // style={styles.input}
                  keyboardType="numeric"
                  placeholder="No. Handphone HRD"
                  value={noHandphoneHRD}
                  onChangeText={(value) => setNoHandphoneHRD(value)}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "1.5%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Alamat Kantor
            </Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.15,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <TextInput
              // style={styles.input}
              placeholder="Alamat Kantor"
              value={alamatKantor}
              multiline
              onChangeText={(value) => setAlamatKantor(value)}
              underlineColorAndroid="transparent"
            />
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Provinsi</Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={provinsi}
              width={width * 0.93}
              accessibilityLabel="Pilih Provinsi"
              placeholder="Pilih Provinsi"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setProvinsi(itemValue)}
            >
              <Select.Item label="Surat Berharga" value="Surat Berharga" />
              <Select.Item label="Sampingan" value="Sampingan" />
            </Select>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Kabupaten</Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={kabupaten}
              width={width * 0.93}
              accessibilityLabel="Pilih Kabupaten"
              placeholder="Pilih Kabupaten"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setKabupaten(itemValue)}
            >
              <Select.Item label="Surat Berharga" value="Surat Berharga" />
              <Select.Item label="Sampingan" value="Sampingan" />
            </Select>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Kecamatan</Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={kecamatan}
              width={width * 0.93}
              accessibilityLabel="Pilih Kecamatan"
              placeholder="Pilih Kecamatan"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setKecamatan(itemValue)}
            >
              <Select.Item label="Surat Berharga" value="Surat Berharga" />
              <Select.Item label="Sampingan" value="Sampingan" />
            </Select>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Kelurahan</Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={kelurahan}
              width={width * 0.93}
              accessibilityLabel="Pilih Kelurahan"
              placeholder="Pilih Kelurahan"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setKelurahan(itemValue)}
            >
              <Select.Item label="Surat Berharga" value="Surat Berharga" />
              <Select.Item label="Sampingan" value="Sampingan" />
            </Select>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.045,
              flexDirection: "row",
              alignItems: "center",
              padding: "1.5%",
              marginTop: "1%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Kode Pos</Text>
          </View>
          <View
            style={{
              width: width * 0.975,
              height: height * 0.07,
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1%",
              padding: "2%",
              backgroundColor: "#dbdbdb",
              borderRadius: 8,
            }}
          >
            <Select
              selectedValue={kodePos}
              width={width * 0.93}
              accessibilityLabel="Pilih Kode Pos"
              placeholder="Pilih Kode Pos"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setKodePos(itemValue)}
            >
              <Select.Item label="Surat Berharga" value="Surat Berharga" />
              <Select.Item label="Sampingan" value="Sampingan" />
            </Select>
          </View>
        </View>

        <View
          style={{
            marginTop: "1%",
            width: width * 0.975,
            height: height * 0.15,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableHighlight style={styles.btnLanjutInActive}>
            <Text
              style={{
                color: "#70AD47",
                fontSize: 20,
              }}
              onPress={() => {
                if (page === 2) {
                  setPage(1);
                } else {
                  setMessageTopAlert("Kamu akan kembali ke Halaman Awal ?");
                  setMessageBottomAlert("Simpan Data ?");
                  setIconAlert("exclamation-circle");
                  setColorIcon("#f2d968");
                  setNavigationDirect("Home");
                  setShow(true);
                }
              }}
            >
              Kembali
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              // jenisPekerjaan === "" ||
              // namaPerusahaan === "" ||
              // kategoriInstansi === "" ||
              // jabatan === "" ||
              // bulanBekerja === "" ||
              // pendapatanPerbulan === "" ||
              // perngeluaranTetapPerbulan === "" ||
              // noTeleponKantor === "" ||
              // noHandphoneHRD === "" ||
              // alamatKantor === "" ||
              // provinsi === "" ||
              // kabupaten === "" ||
              // kecamatan === "" ||
              // kelurahan === "" ||
              // kodePos === ""
              //   ? styles.btnLanjutInActive
              //   : 
              styles.btnLanjut
            }
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
              onPress={() => {
                if (page === 1) {
                  setPage(2);
                } else {
                  setMessageTopAlert("Kamu akan ke Halaman Upload ?");
                  setMessageBottomAlert("Simpan Data ?");
                  setIconAlert("exclamation-circle");
                  setColorIcon("#f2d968");
                  setNavigationDirect("Home");
                  setShow(true);
                }
              }}
            >
              Lanjut
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <AwesomeAlert
        show={isShow}
        showProgress={false}
        //   title="Berhasil"
        customView={
          <View style={{ justifyContent: "center", alignContent: "center" }}>
            <Icon
              style={{ textAlign: "center" }}
              name={iconAlert}
              size={40}
              color={colorIcon}
            />
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}
            >
              {messageTopAlert}
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 15, fontWeight: "700" }}
            >
              {messageBottomAlert}
            </Text>
          </View>
        }
        //   message="Pengajuanmu sedang kami periksa!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={cancelButton}
        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="OK"
        confirmButtonColor="#490E73"
        onCancelPressed={() => {
          setShow(false);
        }}
        onConfirmPressed={() => {
          if (cancelButton) {
            setMessageTopAlert("Berhasil");
            setMessageBottomAlert("Data Tersimpan");
            setIconAlert("check-circle");
            setColorIcon("#4A9928");
            setCancelButton(false);
          } else {
            setPage(1)
            setCancelButton(true)
            navigation.navigate('Upload Dokumen');
          }
        }}
      />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    height: height,
    padding: "1%",
  },
  input: {
    flex: 1,
    // paddingTop: 10,
    paddingRight: 10,
    // paddingBottom: 10,
    paddingLeft: 10,
    width: width * 0.95,
    height: 20,
    backgroundColor: "#c0c1c2",
    color: "#424242",
  },
  btnLanjut: {
    width: width * 0.4,
    borderRadius: 5,
    height: height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#70AD47",
  },
  btnLanjutInActive: {
    width: width * 0.4,
    borderRadius: 5,
    height: height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#70AD47",
    borderWidth: 1,
  },
});
