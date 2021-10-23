import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
const {width} = Dimensions.get("window")
const height = width * 0.6

const imagesSlider = [
  require('../../assets/image-1.png'),
  {uri:'data:image/jpeg;base64,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'},
  {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFl0v4HMaJ1IXk8lveWIE9y5gQIRhx_Fs4NQ&usqp=CAU'},
]

export default function Slider () {
  const [active,setActive] = useState(0)

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if(slide!==active){
      setActive(slide)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {
          imagesSlider.map((images,i)=>
            <Image
              key={i}
              style={styles.images}
              source={images}
            />
          )
        }
      </ScrollView>
      <View
        style={styles.pagination}
      >
        {
          imagesSlider.map((i,k)=>
            <Image
              key={k}
              style={{alignSelf:'center',marginLeft:2,marginRight:2}}
              source={k==active?require('../../assets/bullet-rectangel.png'):require('../../assets/bullet-elipse.png')}
            />
            // <Text  
            //   key={k}
            //   style={k==active? styles.pagingactivetext : styles.pagingtext}
            // >
            //   ⬤
            // </Text>
          )
        }
      </View>
      </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    width, 
    height,
  },
  scroll:{
    width,
    height,
  },
  images:{
    width,
    height,
    resizeMode:'contain'
  },
  pagination:{flexDirection:'row',position:'absolute',bottom:5,alignSelf:'center'},
  pagingtext:{
    color:'#888',
    fontSize:(width/30),
    margin:3
  },
  pagingactivetext:{
    color:'#542D86',
    fontSize:(width/30),
    margin:3
  }
});
