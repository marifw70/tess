import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import DateTimePicker from '@react-native-community/datetimepicker';

function MyDatePicker() {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [tglLahirPemohon, setTglLahirPemohon] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || tglLahirPemohon;
    console.log(currentDate);
    setIsPickerShow(Platform.OS === 'android');
    setTglLahirPemohon(currentDate);
    setIsPickerShow(false);
  };

  const showMode = currentMode => {
    setIsPickerShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        {/* <Text style={styles.pickedDate}>Pilih Tanggal Lahir</Text> */}
        <Text style={styles.pickedDate} placeholder={'Pilh tanggal lahir anda'} >{tglLahirPemohon.toLocaleDateString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={styles.buttonStyle}>
          <TouchableOpacity onPress={showDatepicker}>
            <Image
              style={styles.kalender}
              source={require('../../assets/kalender.png')}
            />
          </TouchableOpacity>
          {/* <Button title="date" color="purple" onPress={showDatepicker} /> */}
        </View>
      )}

      {isPickerShow && (
        <DateTimePicker
          testID="dateTimePicker"
          value={tglLahirPemohon}
          mode={mode}
          display="spinner"
          onChange={onChange}
        />
      )}
    </View>
  );
}

// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
    marginBottom: -10,
    flex: 1,
    justifyContent: 'space-between',
    // padding: 50,
  },
  pickedDateContainer: {
    display: 'flex',
    marginTop: -2,
    padding: 18,
    borderRadius: 10,
  },
  kalender: {
    width: 20,
    height: 22,
    marginLeft: 50
  },
  buttonStyle: {
    width: '15%',
    marginEnd: 36,
  },
  row: {
    marginLeft: 12,
    alignItems: 'center',
  },
  pickedDate: {
    fontSize: 14,
    color: 'black',
    marginLeft: -15
  },
  btnContainer: {
    padding: 30,
  },
});

export default MyDatePicker;
