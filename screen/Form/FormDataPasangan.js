import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Checkbox, Radio, Button} from 'native-base';
import MyDatePicker from '../../components/MydatePicker';
import {alignContent, fontSize, marginBottom} from 'styled-system';

// const {width,height} = Dimensions.get('window')
export default function FormDataPasangan() {
  const [NIKPasangan, setNIKPasangan] = useState('');
  const [namaPasangan, setNamaPasangan] = useState('');
  const [tempatlahirPasangan, settempatlahirPasangan] = useState('');
  const [tanggallahirPasangan, settanggallahirPasangan] = useState('');
  const [NPWPPasangan, setNPWPPasangan] = useState('');
  const [noHpPasangan, setnoHpPasangan] = useState('');
  const [emailPasangan, setemailPasangan] = useState('');

  const [btnReady, setBtnReady] = useState(false);

  const [kondisiA, setKondisiA] = useState(false);

  function checkA() {
    if (
      NIKPasangan &&
      namaPasangan &&
      tempatlahirPasangan &&
      // tanggallahirPasangan &&
      NPWPPasangan &&
      noHpPasangan &&
      emailPasangan !== 'disabled'
    ) {
      setKondisiA(true);
      console.log(true, 'KondisiA');
    } else {
      setKondisiA(false);
    }
  }

  useEffect(() => {
    checkA();
    if (kondisiA) {
      setBtnReady(true);
    } else {
      setBtnReady(false);
    }
  }, [
    NIKPasangan,
    namaPasangan,
    tempatlahirPasangan,
    tanggallahirPasangan,
    NPWPPasangan,
    noHpPasangan,
    emailPasangan,
    kondisiA,
  ]);

  return (
    <ScrollView>
      <View style={styles.viewContainer}>
        <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between',  marginLeft: 14, marginRight: 14}}>
          <Text style={styles.fieldTitle}>Data Keluarga</Text>
          <Text style={styles.fieldTitle}>1/2</Text>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginLeft: 14,
            marginRight: 14,
          }}
        />
        <Text style={styles.fieldTitle2}>Data Diri Pasangan</Text>

        <Text style={styles.fieldName}>NIK e-KTP</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukan NIK e-KTP"
          keyboardType="numeric"
          onChangeText={nikPasangan => setNIKPasangan(nikPasangan)}
          defaultValue={NIKPasangan}
        />

        <Text style={styles.fieldName}>Nama Pasangan</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukan Nama Pasangan"
          keyboardType="default"
          onChangeText={namaPasangan => setNamaPasangan(namaPasangan)}
          defaultValue={namaPasangan}
        />

        <Text style={styles.fieldName}>Tempat Lahir</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukan Tempat Lahir"
          keyboardType="default"
          onChangeText={tempatlahirPasangan => settempatlahirPasangan(tempatlahirPasangan)}
          defaultValue={tempatlahirPasangan}
        />

        <Text style={styles.fieldName}>Tanggal Lahir</Text>
        {/* <TextInput
          style={styles.field}
          placeholder="Masukkan Tanggal Lahir"
        /> */}
        <View style={styles.field}>
          <MyDatePicker />
        </View>

        <Text style={styles.fieldName}>Nomor NPWP</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukkan Nomor NPWP"
          keyboardType="numeric"
          onChangeText={NPWPPasangan => setNPWPPasangan(NPWPPasangan)}
          defaultValue={NPWPPasangan}
        />

        <Text style={styles.fieldName}>No. Handphone</Text>
        <View style={{flexDirection: 'row', margin: 16}}>
          <View style={{flex: 0.2, borderRadius: 8}}>
            <Text style={styles.fieldSpanLeft} keyboardType="numeric">
              +62
            </Text>
          </View>
          <TextInput
            style={styles.fieldSpanInputRight}
            placeholder="Masukkan No. Handphone"
            keyboardType="numeric"
            onChangeText={noHpPasangan => setnoHpPasangan(noHpPasangan)}
            defaultValue={noHpPasangan}
          />
        </View>
        <Text style={styles.fieldDescription}>
          Nomor Handphone Minimal 10 Digit
        </Text>

        <Text style={styles.fieldName}>Alamat Email Pasangan</Text>
        <TextInput
          style={styles.field}
          placeholder="Masukkan Alamat Email Pasangan"
          keyboardType="default"
          onChangeText={emailPasangan => setemailPasangan(emailPasangan)}
          defaultValue={emailPasangan}
        />

        <View style={styles.fieldInputWrap}>
          <View style={styles.fieldWrapRadioButton}>
            <Button
              style={styles.fieldButton}
              size="lg"
              variant="outline" // onPress={() => console.log('hello world')}
              colorScheme="green">
              Kembali
            </Button>
            <Button
              style={
                btnReady ? styles.fieldButtonActive : styles.fieldButtonInactive
              }
              size="lg"
              // onPress={() => console.log('hello world')}
            >
              Lanjut
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pickerStyle: {
    marginTop: -15,
    marginBottom: -10,
  },
  inputLabel: {
    color: '#101010',
    fontSize: 14,
    paddingBottom: 0,
    paddingTop: 5,
    padding: 8,
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
    padding: 2,
  },
  field: {
    margin: 16,
    fontSize: 14,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    padding: 8,
    lineHeight: 24,
    fontFamily: 'Poppins-Reguler',
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
    marginTop: 28,
  },

  fieldButtonActive: {
    margin: 16,
    alignItems: 'flex-start',
    flex: 1,
    borderRadius: 8,
    marginTop: 28,
    backgroundColor: '#70AD47',
  },

  fieldButtonInactive: {
    margin: 16,
    alignItems: 'flex-start',
    flex: 1,
    borderRadius: 8,
    marginTop: 28,
    backgroundColor: '#CAC8CE',
  },

  fieldName: {
    marginStart: 16,
    color: '#888888',
    fontSize: 12,
    marginBottom: -8,
    lineHeight: 16,
    fontFamily: 'Poppins-Regular',
  },
  fieldTitle: {
    marginTop: 28,
    marginBottom: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
    fontFamily: 'Poppins-Regular',
    // alignContent: 'space-between'
  },
  fieldTitle2: {
    marginStart: 16,
    marginTop: 10,
    marginBottom: 28,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
    fontFamily: 'Poppins-Regular',
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
    alignItems: 'flex-start',
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
    flex: 1,
    fontSize: 10,
    marginTop: -13,
    marginStart: 33,
    marginBottom: 12,
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
});
