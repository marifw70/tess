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
  TouchableHighlight,
} from "react-native";
import { CheckIcon, Radio, Select, NativeBaseProvider } from "native-base";
import CurrencyInput from "react-native-currency-input";
import Icon from "react-native-vector-icons/FontAwesome";
import AwesomeAlert from "react-native-awesome-alerts";
const { width, height } = Dimensions.get("window");

export default function RingkasanPengajuan({ navigation }) {
  const [messageTopAlert, setMessageTopAlert] = useState(false);
  const [messageBottomAlert, setMessageBottomAlert] = useState();
  const [iconAlert, setIconAlert] = useState();
  const [colorIcon, setColorIcon] = useState();
  const [cancelButton, setCancelButton] = useState(true);
  const [navigationDirect, setNavigationDirect] = useState();
  const [isShow, setShow] = useState(false);
  const [namaPemohon, setnNamaPemohon] = useState("");
  const [noHandphone, setNoHandphone] = useState("");
  const [peruntukanPembiayaan, setPeruntukanPembiayaan] = useState("");
  const [totalPlafondYangDiajukan, setTotalPlafondYangDiajukan] = useState("");
  const [jangkaWaktuPembiayaan, setJangkaWaktuPembiayaan] = useState("");
  const [ktp, setKtp] = useState("");
  const [npwp, setNpwp] = useState("");

  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        <View
            style={{
            width: width * 0.975,
            height: height * 0.25,
            borderWidth:1,
            flexDirection: "column",
            padding: "2.5%",
            justifyContent:'space-evenly',
            }}
        >
            <Text style={{ fontSize: 20, fontWeight: "700", color:'#000' }}>Ringkasan Pegajuan</Text>
            <Text style={{ fontSize: 13, flexWrap:'wrap', textAlign:'justify'}}>
                Mohon lakukan pengecekan sebelum menekan tombol “Ajukan KPR” untuk pengajuan kredit kepemilikan properti Anda secara seksama, informasi yang telah Anda isi akan kami gunakan untuk menindak lanjuti  pengajuan Anda.    
            </Text>
        </View>
        <View
            style={{
            width: width * 0.975,
            height: height * 0.07,
            flexDirection: "row",
            marginTop:'1%',
            padding: "2.5%",
            justifyContent: "space-between",
            }}
        >
            <Text style={{ fontSize: 20, fontWeight: "700", color:'#000' }}>Ringkasan Pemohon</Text>
        </View>

        <View
          style={{
            width: width * 0.975,
            height: height * 0.07,
            flexDirection: "row",
            marginTop:'1%',
            alignItems: "center",
            padding: "2%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Nama Pemohon</Text>
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
            placeholder="Nama Pemohon"
            value={namaPemohon}
            editable={false}
            // onChangeText={value => setnNamaPemohon(value)}
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
          <Text style={{ fontSize: 15, fontWeight: "600" }}>No Handphone</Text>
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
                editable={false}
                // style={styles.input}
                keyboardType="numeric"
                placeholder="No. Handphone"
                value={noHandphone}
                // onChangeText={value => setNoHandphone(value)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
        </View>

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
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            Peruntukan Pembiayaan
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
            editable={false}
            placeholder="Peruntukan Pembiayaan"
            value={peruntukanPembiayaan}
            // onChangeText={value => setnNamaPemohon(value)}
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
            Jangka Waktu Pembiayaan
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
                width: width * 0.83,
                height: height * 0.07,
                paddingLeft: "2%",
                borderTopLeftRadius: 8,
                backgroundColor: "#dbdbdb",
                borderBottomLeftRadius: 8,
              }}
            >
              <TextInput
                // style={styles.input}
                editable={false}
                keyboardType="numeric"
                placeholder="Jangka Waktu Pembiayaan"
                value={jangkaWaktuPembiayaan}
                // onChangeText={value => setNoHandphone(value)}
                underlineColorAndroid="transparent"
              />
            </View>
            <View
              style={{
                width: width * 0.15,
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
            Total Plafond yang Diajukan
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
                editable={false}
                onChangeValue={(value) => setTotalPlafondYangDiajukan(value)}
                value={totalPlafondYangDiajukan}
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
            height: height * 0.07,
            flexDirection: "row",
            marginTop:'1%',
            alignItems:'center',
            justifyContent: "space-between",
            }}
        >
            <Text style={{ fontSize: 20, fontWeight: "700", color:'#000' }}>Dokumen Pemohon</Text>
        </View>

        <View
            style={{
            width: width * 0.975,
            height: height * 0.05,
            borderBottomWidth:0.5,
            flexDirection: "row",
            alignItems:'center',
            justifyContent:'space-between',
            }}
        >
            <Text style={{ fontSize: 15, color:'#000', fontWeight:'600' }}>KTP</Text>
            <Text style={{ fontSize: 15, color:'#000', fontWeight:'600' }}>
                KTP.jpg    
            </Text>
        </View>

        <View
            style={{
            width: width * 0.975,
            height: height * 0.05,
            borderBottomWidth:0.5,
            flexDirection: "row",
            alignItems:'center',
            justifyContent:'space-between',
            }}
        >
            <Text style={{ fontSize: 15, color:'#000', fontWeight:'600' }}>NPWP</Text>
            <Text style={{ fontSize: 15, color:'#000', fontWeight:'600' }}>
                NPWP.jpg    
            </Text>
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
                setMessageTopAlert("Kamu akan kembali ke Halaman Awal ?");
                setMessageBottomAlert("Simpan Data ?");
                setIconAlert("exclamation-circle");
                setColorIcon("#f2d968");
                setNavigationDirect("Home");
                setShow(true);
              }}
            >
              Kembali
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btnLanjut} s>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
              onPress={() => {
                setMessageTopAlert("Kamu akan ke Halaman Upload ?");
                setMessageBottomAlert("Simpan Data ?");
                setIconAlert("exclamation-circle");
                setColorIcon("#f2d968");
                setNavigationDirect("PernyataanPengajuan");
                setShow(true);
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
            navigation.navigate(navigationDirect);
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
