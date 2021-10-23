import React from 'react';
import { View, Image, Dimensions, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormDataPemohon from './Form/FormDataPemohon';
import FormFasilitasPembiayaan from './Form/FormFasilitasPembiayaan'
import FormDataPekerjaanPemohon from './Form/FormDataPekerjaanPemohon';
import FormDataKerabat from './Form/FormDataKerabat';
import FormDataPasangan from './Form/FormDataPasangan';
import FormDataAgunan from './Form/FormDataAgunan';
import UploadDokumen from './UploadDokumen';
import Home from './Home';
import LandingKPR from './LandingKPR';
import PengajuanKPR from './PengajuanKPR';
import FormDataPekerjaanPasangan from './Form/FormDataPekerjaanPasangan'
import RingkasanPengajuan from './RingkasanPengajuan';
import PernyataanPengajuan from './PernyataanPengajuan';

import Stepper from '../components/stepper'
const {width,height} = Dimensions.get('window')

const Stack = createNativeStackNavigator();
export default function MainStackNavigator() {
    return (
        <NavigationContainer>
           
            <Stack.Navigator initialRouteName="Stepper">
            <Stack.Screen
                    name="Form Fasilitas Pembiayaan"
                    component={FormFasilitasPembiayaan}
                    options={{
                        title: 'Pengajuan KPR',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                    }}
                />
                <Stack.Screen
                    name="PengajuanKPR"
                    component={PengajuanKPR}
                    options={{headerTitleAlign: 'center',title:"Pengajuan KPR"}}
                />
                <Stack.Screen
                    name="FormDataPekerjaanPasangan"
                    component={FormDataPekerjaanPasangan}
                    options={{headerTitleAlign: 'center',title: 'Pengajuan KPR',headerStyle: {
                        backgroundColor: '#542D86',
                      },headerTintColor: '#fff'}}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="LandingKPR"
                    component={LandingKPR}
                    options={({ navigation, route }) => ({
                        headerStyle: {
                          backgroundColor: '#fff',
                        },
                        headerTintColor: '#542D86',
                        headerTitle:() => (
                                <View
                                    style={{width:width*0.65,height:50,padding:8}}
                                >
                                    <Image
                                        style={{alignSelf:'center',alignContent:'center',resizeMode:'contain',height:35}}
                                        source={require('../../assets/logo-bmi.png')}
                                    />
                                </View>
                        ),
                        headerRight: () => (
                          <TouchableHighlight
                            onPress={()=>{
                            //   clearAsyncStorage()
                            //   getData()
                            //   navigation.navigate('Home')
                            }}
                            // style={{display:token?"flex":"none"}}
                          >
                            <Icon name="user" size={30} color="#500878" />
                          </TouchableHighlight>
                        )
                      })}
                />
                <Stack.Screen
                    name="Data Pemohon"
                    component={FormDataPemohon}
                    options={{
                        title: 'Pengajuan KPR',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                        headerTitleStyle: {            
                            fontFamily:'Poppins-Bold'         
                        },
                    }}
                />

                <Stack.Screen
                    name="Data Agunan"
                    component={FormDataAgunan}
                    options={{
                        title: 'Pengajuan KPR',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                        headerTitleStyle: {            
                            fontFamily:'Poppins-Bold'         
                        },
                    }}
                />
                
                <Stack.Screen
                    name="Data Pekerjaan"
                    component={FormDataPekerjaanPemohon}
                    options={{
                        title: 'Pengajuan KPR',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                        headerTitleStyle: {            
                            fontFamily:'Poppins-Bold'         
                        },
                    }}
                />
                <Stack.Screen
                    name="Form Data Kerabat"
                    component={FormDataKerabat}
                    options={{
                        title: 'Pengajuan KPR',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                        headerTitleStyle: {            
                            fontFamily:'Poppins-Bold'         
                        },
                    }}
                />
                <Stack.Screen
                    name="Form Data Pasangan"
                    component={FormDataPasangan}
                    options={{
                        title: 'Pengajuan KPR',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                        headerTitleStyle: {            
                            fontFamily:'Poppins-Bold'         
                        },
                    }}
                />
                <Stack.Screen
                    name="RingkasanPengajuan"
                    component={RingkasanPengajuan}
                    options={{
                        title: 'Ringkasan Pengajuan',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                        headerTitleStyle: {            
                            fontFamily:'Poppins-Bold'         
                        },
                    }}
                />
                <Stack.Screen
                    name="PernyataanPengajuan"
                    component={PernyataanPengajuan}
                    options={{
                        title: 'Pernyataan Pengajuan',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                        headerTitleStyle: {            
                            fontFamily:'Poppins-Bold'         
                        },
                    }}
                />
                <Stack.Screen
                    name="Upload Dokumen"
                    component={UploadDokumen}
                    options={{
                        title: 'Pengajuan KPR',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                        headerTitleStyle: {            
                            fontFamily:'Poppins-Bold'         
                        },
                    }}
                />
                <Stack.Screen
                    name="Stepper"
                    component={Stepper}
                    options={{
                        title: 'Pengajuan KPR',
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#542D86' },
                        headerTitleStyle: {            
                            fontFamily:'Poppins-Bold'         
                        },
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}