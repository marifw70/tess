import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
export default function MessageFooter(){
    return(
      <View style={{height:80,padding:20}}>
        <Text style={styles.submitTextSignUp}>
          Silahkan Login dan Aktifkan fitur Cek Saldo instan pada menu "Setelan/Setting"
        </Text>
      </View>
    )
}
const styles = StyleSheet.create({
    submitTextSignUp: {
      color: '#542D86',
      fontSize:13,
      textAlign: 'center',
    }
  });