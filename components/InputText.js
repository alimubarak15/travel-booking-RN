import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import icons from '../constants/icons';
import {COLOR, FONTS, SIZE} from '../constants/theme';

const InputText = ({
  label,
  placeholder,
  icon,
  onChangeText,
  defaultValue,
  secureTextEntry,
}) => {
  return (
    <View style={{marginVertical: SIZE.padding / 2}}>
      <Text style={{...FONTS.h3, color: '#666'}}>{label}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 2,
            width: '100%',
            height: 40,
          }}
        />
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            height: 20,
            width: 20,
            position: 'absolute',
            right: 5,
            bottom: 8,
            tintColor: COLOR.primary,
          }}
        />
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({});
