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
import { CheckIcon, Checkbox, Radio, Select, NativeBaseProvider } from "native-base";
import CurrencyInput from "react-native-currency-input";
import Icon from "react-native-vector-icons/FontAwesome";
import AwesomeAlert from "react-native-awesome-alerts";
import { CheckBox } from '@react-native-community/checkbox';
const { width, height } = Dimensions.get("window");

export default function PernyataanPengajuan({ navigation }) {
  const [messageTopAlert, setMessageTopAlert] = useState(false);
  const [messageBottomAlert, setMessageBottomAlert] = useState();
  const [iconAlert, setIconAlert] = useState();
  const [colorIcon, setColorIcon] = useState();
  const [cancelButton, setCancelButton] = useState(true);
  const [navigationDirect, setNavigationDirect] = useState();
  const [isShow, setShow] = useState(false);
  const [isSetuju, setIsSetuju] = useState(false);
  

  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <View
        style={{
        width: width * 0.975,
        height: height * 0.175,
        flexDirection: "column",
        padding: "2.5%",
        margin:'1%',
        justifyContent:'space-evenly',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color:'#000' }}>Pernyataan</Text>
        <Text style={{ fontSize: 13, lineHeight:25, flexWrap:'wrap', textAlign:'justify'}}>
            Sehubungan dengan data/informasi serta dokumen yang saya berikan dengan ini saya selaku pemohon kredit menyatakan sebagai berikut:     
        </Text>
      </View>
      <ScrollView style={styles.container}>        
        <View style={{padding:'2.5%'}}>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>1.Bahwa semua informasi dan dokumen yang saya lampirkan dalam permohonan ini adalah benar dan apabila terdapat perubahan data dalam aplikasi, saya wajib memberikan informasi terbaru kepada Bank Muamalat. </Text>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>2.Apabila kemudian hari terdapat data, informasi,dokumen, identitas diri, keterangan atau sehubungan dengan Formulir Aplikasi ini tidak benar, maka saya bersedia untuk mempertanggungjawabkannya sesuai dengan ketentuan hukum yang berlaku.</Text>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>3.Dengan ini saya memberikan kuasa kepada Bank Muamalat untuk melakukan pemeriksaan terhadap kebenaran data/ informasi serta dokumen-dokumen yang saya serahkandari sumber maupun denga ncara yang dianggap baik dan perlu oleh Bank Muamalat, termasuk pengecekan terhadao kebenaran rekening terkait, dan membebaskan Bank Muamalat dari segala tuntutan dari pihak manapun sehubungan pemeriksaan tersebut.</Text>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>4.Bank Muamalat berhak dan berwenang untuk menolak atau menyetujui seluruh atau sebagian dari jumlah yang saya mohon berdasarkan verifikasi dan analisa Bank Muamalat.</Text>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>5.Bank Muamalat berhak melakukan penilaian atas tanah dan bangunan yang akan dijaminkan dengan atau tanpa bantuan dari perusahaan penilai independen yang ditunjuk oleh Bank Muamalat dan untuk keperluan tersebut saya mengikatkan diri untuk membayar seluruh biaya yang berkaitan dengan penilaian ruma tersebut meskipun permohonan pembiayaan saya tidak disetujui oleh Bank Muamalat atau terjadi pembatalan permohonan pembiayaan atas permintaan  saya.</Text>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>6.Saya akan menyediakan seluruh biaya-biaya prarealisasi di rekening pribadi atas nama saya yang ada di Bank Muamalat</Text>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>7.Semua Dokumen yang telah diserahkan dan dibiayai penilaian agunan yang telah diset      or melalui Bank Muamalat tidak akan saya tarik kembali.</Text>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>8.Seluruh fasilitas pembiayaan Bank Muamalat dilaporkan ke dalam Sistem Layanan Informasi Keuangan (SLIK)</Text>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>9.Saya menyatakan bersedia dan akan mentaati segala persyaratan dan ketentuan yang berlaku di Bank Muamalat, ketentuan dari Regulator maupun ketentuan perundang-undangan yang berlaku.</Text>
            <Text style={{fontSize:13,lineHeight:25,flexWrap:'wrap', textAlign:'justify'}}>10.Saya bersedia meneripa penawaran produk lainnya dari Bank Muamalat. </Text>
        </View>
        <View
            style={styles.tabSK}
        >
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Checkbox
                    onChange={setIsSetuju}
                    value={isSetuju}
                    accessibilityLabel="SK"
                />
                <View style={{flexDirection:'column',width:width*0.83,marginLeft:'2%'}}>
                    <Text style={{fontSize:13, textAlign:'justify', lineHeight:25}}>
                      Bahwa semua informasi dan dokumen yang saya lampir   kan dalam permohonan ini adalah benar dan apabila terdapat perubahan data dalam aplikasi, saya wajib segera memberikan informasi terbaru kepada Bank Muamalat.  
                    </Text>
                </View>
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
          <TouchableHighlight style={isSetuju?styles.btnLanjut:styles.btnInactive}>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
              onPress={() => {
                if(isSetuju){
                    setMessageTopAlert("Data Kamu Akan kami Periksa ?");
                    setMessageBottomAlert("Submit Data ?");
                    setIconAlert("exclamation-circle");
                    setColorIcon("#f2d968");
                    setNavigationDirect("Home");
                    setShow(true);
                }
              }}
            >
              Submit
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
  btnInactive: {
    width: width * 0.4,
    borderRadius: 5,
    height: height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CAC8CE",
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
  tabSK:{padding:'2%', width, justifyContent:'space-between',alignItems:'center',flexDirection:'row'}
});
