import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import { Accordion, List, NativeBaseProvider, Center, Box } from 'native-base';
const {width,height} = Dimensions.get('window')
function AccordionComponent() {
  return (
    <Box m={2}>
      <Accordion index={[0, 1]}>
        <Accordion.Item bgColor="white">
          <Accordion.Summary _expanded={{backgroundColor:'#fff'}}>
            <View>
                <Text style={{color:'#500878',fontWeight:'700'}}>Proses KPR iB Syariah</Text>
                <Text style={{color:'#500878'}}>Bank Muamalat</Text>
            </View>
            <Accordion.Icon color="#000"/>
          </Accordion.Summary>
          <Accordion.Details>
            <List borderColor="white">
                <List.Item width={width}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={require('../../assets/Vector(1).png')} width={10} style={{marginRight:'2.5%',marginLeft:'1.5%'}}/>
                        <View>
                            <Text>Isi formulir KPR secara online melalui Aplikasi</Text> 
                            <Text>MDin dan Official Website Bank Muamalat</Text>
                        </View>
                    </View>
                </List.Item>
                <List.Item width={width}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={require('../../assets/bx_bx-upload.png')} width={10} style={{marginRight:'2%'}}/>
                        <View>
                            <Text>Upload Dokumen Syarat KPR </Text>
                        </View>
                    </View>
                </List.Item>
                <List.Item width={width}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={require('../../assets/Vector(2).png')} width={10} style={{marginRight:'2%'}}/>
                        <View>
                            <Text>Proses penilaian calon debitur,</Text>
                            <Text>agunan serta verifikasi dokumen.</Text>
                        </View>
                    </View>
                </List.Item>
            </List>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item bgColor="white">
          <Accordion.Summary _expanded={{backgroundColor:'#fff'}}>
            <View>
                <Text style={{color:'#500878',fontWeight:'700'}}>Syarat Pengajuan</Text>
            </View>
            <Accordion.Icon color="#000"/>
          </Accordion.Summary>
          <Accordion.Details>
            <List borderColor="white">
            <List.Item ordered={true}>Usia maksimal saat jatuh tempo pembiayaan</List.Item>
            <List.Item unordered={true}>Bagi pegawai/belum pensiun 55 tahun</List.Item>
            <List.Item unordered={true}>Bagi wiraswasta 60 tahun</List.Item>
            <List.Item ordered={true} start={-1}>Status karyawan:</List.Item>
            <List.Item unordered={true}>Karyawan tetap (minimal telah bekerja 1 tahun)</List.Item>
            <List.Item unordered={true}>Karyawan kontrak (minimal telah bekerja 2 tahun) </List.Item>
            <List.Item unordered={true}>Wiraswasta/Profesional Pembiayaan dicover dengan asuransi jiwa.</List.Item>
            <List.Item ordered={true} start={-4}>Tidak dalam Daftar Pembiayaan Bermasalah</List.Item>
            <List.Item ordered={true} start={-4}>Usia minimal 21 tahun dan sudah menikah</List.Item>
            </List>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item bgColor="white">
          <Accordion.Summary _expanded={{backgroundColor:'#fff'}}>
            <View>
                <Text style={{color:'#500878',fontWeight:'700'}}>Dokumen</Text>
            </View>
            <Accordion.Icon color="#000"/>
          </Accordion.Summary>
          <Accordion.Details>
            <List.Ordered borderColor="white">
                <List.Item>Formulir permohonan pembiayaan untuk individu</List.Item>
                <List.Item>Fotocopy KTP, KK, Surat Nikah (bila sudah menikah)</List.Item>
                <List.Item>Fotocopy NPW</List.Item>
                <List.Item>Asli slip gaji & surat keterangan kerja (untuk pegawai/karyawan)</List.Item>
                <List.Item>Fotocopy mutasi rekening buku tabungan/statement giro 3 bulan terakhir</List.Item>
                <List.Item>Laporan keuangan atau laporan usaha (untuk wiraswasta)</List.Item>
                <List.Item>Fotocopy sertifikat, IMB dan PBB</List.Item>
             </List.Ordered>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ScrollView>
          <AccordionComponent />
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
}


