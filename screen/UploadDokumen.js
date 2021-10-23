import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Checkbox, Radio, Button} from 'native-base';
import {fontSize, marginBottom} from 'styled-system';
import DocumentPicker from 'react-native-document-picker';

// const {width,height} = Dimensions.get('window')
export default function UploadDokumen({navigation}) {
  const [ktp, setKtp] = useState('');
  const [npwp, setNpwp] = useState('');

  const KTP = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setKtp(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const NPWP = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setNpwp(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const [btnReady, setBtnReady] = useState(false);

  const [kondisiA, setKondisiA] = useState(false);

  function checkA() {
    if (ktp && npwp !== 'disabled') {
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
  }, [ktp, npwp]);

  return (
    <ScrollView>
      <View style={styles.viewContainer}>
        <View style={{flex: 1, marginLeft: 14, marginRight: 14}}>
          <Text style={styles.fieldTitle}>Upload Dokumen Pemohon</Text>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginLeft: 14,
            marginRight: 14,
          }}
        />
        <Text style={styles.fieldTitle2}>Dokumen Wajib</Text>

        <View
          style={{
            flex: 1,
            marginRight: 14,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={styles.fieldName}>KTP</Text>
          <View style={[{flexDirection: 'row'}]}>
            <TouchableOpacity>
              <Text style={styles.textUnggah} onPress={KTP}>
                {ktp ? `${ktp.name ? ktp.name : ''}` : 'Unggah'}
              </Text>
            </TouchableOpacity>
            <View>
              {ktp ? (
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/DeleteIcon.png')}
                    style={{
                      width: 12,
                      left: 5,
                      height: 20,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        </View>
        <Text style={styles.field}>Format file .jpeg, .jpg, .png, .pdf</Text>
        <Text style={styles.field}>Maksimal 5 Mb</Text>

        <View
          style={{
            borderBottomColor: '#888888',
            borderBottomWidth: 1,
            marginTop: 7,
            marginBottom: 15,
            marginLeft: 14,
            marginRight: 14,
          }}
        />

        <View
          style={{
            flex: 1,
            marginRight: 14,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={styles.fieldName}>NPWP</Text>
          <View style={[{flexDirection: 'row'}]}>
            <TouchableOpacity>
              <Text style={styles.textUnggah} onPress={NPWP}>
                {npwp ? `${npwp.name ? npwp.name : ''}` : 'Unggah'}
              </Text>
            </TouchableOpacity>
            <View>
              {npwp ? (
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/DeleteIcon.png')}
                    style={{
                      width: 12,
                      left: 5,
                      height: 20,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        </View>
        <Text style={styles.field}>Format file .jpeg, .jpg, .png, .pdf</Text>
        <Text style={styles.field}>Maksimal 5 Mb</Text>

        <View
          style={{
            borderBottomColor: '#888888',
            borderBottomWidth: 1,
            marginTop: 7,
            marginBottom: 15,
            marginLeft: 14,
            marginRight: 14,
          }}
        />

        <Text style={styles.fieldDescription}>
          Data yang Anda berikan akan tersimpan dan terlindungi dengan aman
          didalam sistem bank Muamalat
        </Text>

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
              onPress={() => navigation.navigate('RingkasanPengajuan')}
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
    marginLeft: 16,
    fontSize: 12,
    borderRadius: 8,
    // padding: 8,
    color: '#888888',
    // lineHeight: 4,
    fontFamily: 'Poppins-Reguler',
  },
  fieldRadioButton: {
    margin: 16,
    alignItems: 'flex-start',
    flex: 1,
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
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5,
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
    marginTop: 13,
    marginStart: 14,
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
  textUnggah: {
    color: '#500878',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
