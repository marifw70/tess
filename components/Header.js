import React from 'react';
import { View, Image } from 'react-native';
const styles = {
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    }
};
   
const Header = () => {
    const { headerStyle } = styles;
    return (
        <View style={headerStyle}>
            <Image
                style={{width:100,height:100,resizeMode:'contain'}}
                source={require('../../assets/logo-bmi.png')}
            />
        </View>
    );
};
   
export default Header;