import React, { useState } from "react";
import Stepper from "react-native-stepper-ui";
import { View, Alert, Text } from "react-native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { fontSize } from "styled-system";

import  DataPemohon from "../screen/Form/FormDataPemohon";
import FasilitasPembiayaan from "../screen/Form/FormFasilitasPembiayaan";
import DataAgunan from "../screen/Form/FormDataAgunan";
import DataKerabat from "../screen/Form/FormDataKerabat"
import DataPekerjaan from "../screen/Form/FormDataPekerjaanPemohon"
// const MyComponent = (props) => {
//   return (
//     <View>
//       <Text>{props.title}</Text>
//     </View>
//   );
// };
// const content = [
//   <MyComponent title="Component 1" />,
//   <MyComponent title="Component 2" />,
//   <MyComponent title="Component 3" />,
// ];
const App = () => {
  const ProgressStepsStyle={
    labelFontSize: 11,
    activeStepIconBorderColor: '#500878',
        // borderStyle: 'solid',
      activeLabelColor: '#500878',
      activeStepNumColor: '#500878',
      activeStepIconColor: 'white',
      completedStepIconColor: '#500878',
      completedProgressBarColor: '#500878',
      completedCheckColor: 'white',
      completedLabelColor: '#500878',
      flexWrap:'wrap',
      topOffset: 10,
      
    //   activeStep: 3
    //   marginBottom: 50
    //   flex: 0.1,  flexWrap: 'wrap', alignItems:'center'
  }  
//   const coba={
//       activeStep: 0
//   }
  const ProgressStepStyle = {   
      removeBtnRow : true}
    
  
  const [active, setActive] = useState(0);
//   const stepArr = ['Data Pemohon', 'Fasilitas Pembiayaan', 'Data Agunan', 'Data Keluarga', 'Data Pekerjaan'];
  return (
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin:16}}>
        <ProgressSteps {...ProgressStepsStyle}  >
        {/* {stepArr.map((element, index) => (
         */}
            <ProgressStep label="Data              Pemohon" {...ProgressStepStyle}  >
                <View style={{ alignItems: 'center' ,fontSize: 12 }}>
                    <DataPemohon />
                </View>
            </ProgressStep>
            <ProgressStep label="Fasilitas Pembiayaan" {...ProgressStepStyle}>
                <View style={{ alignItems: 'center' }}>
                    <FasilitasPembiayaan />
                    {/* <Text>This is the content within step 2!</Text> */}
                </View>
            </ProgressStep>
            <ProgressStep label="Data                 Agunan" {...ProgressStepStyle}>
                <View style={{ alignItems: 'center' }}>
                    <DataAgunan />
                    {/* <Text>This is the content within step 3!</Text> */}
                </View>
            </ProgressStep>
            <ProgressStep label="Data              Keluarga" {...ProgressStepStyle}>
                <View style={{ alignItems: 'center' }}>
                    <DataKerabat />
                    {/* <Text>This is the content within step 4!</Text> */}
                </View>
            </ProgressStep>
            <ProgressStep label="Data            Pekerjaan" {...ProgressStepStyle}>
                <View style={{ alignItems: 'center' }}>
                    <DataPekerjaan />
                    {/* <Text>This is the content within step 3!</Text> */}
                </View>
            </ProgressStep>
        </ProgressSteps>
    </View>
  );
};
 
export default App;