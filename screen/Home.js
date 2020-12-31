import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DestinationItem from '../components/DestinationItem';
import OptionItem from '../components/OptionItem';
import images from '../constants/images';
import {COLOR, FONTS, SIZE} from '../constants/theme';
import {destination, iconButton} from '../mock';
import {convertTo2dArray} from '../util';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLOR.white}}>
      <View style={{flex: 1, marginHorizontal: SIZE.padding}}>
        <Image
          source={images.home_banner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}
        />
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          paddingHorizontal: SIZE.padding,
        }}>
        {convertTo2dArray(iconButton, 4).map((row, i) => (
          <View key={i} style={{flexDirection: 'row', marginTop: SIZE.padding}}>
            {row.map((col, i) => (
              <OptionItem
                key={i}
                icon={col.icon}
                bgColor={col.bgColor}
                label={col.label}
              />
            ))}
          </View>
        ))}
      </View>
      <View
        style={{
          flex: 1.5,
          marginHorizontal: SIZE.padding,
          marginTop: SIZE.padding,
        }}>
        <Text style={{...FONTS.h2}}>Destination</Text>
        <ScrollView
          horizontal
          style={{marginTop: SIZE.padding}}
          showsHorizontalScrollIndicator={false}>
          {destination.map((i) => (
            <DestinationItem key={i.id} label={i.text} img={i.img} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
