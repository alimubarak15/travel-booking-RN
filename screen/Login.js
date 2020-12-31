import React, {useEffect, useState} from 'react';
import {useLayoutEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Buttonheader from '../components/Buttonheader';
import icons from '../constants/icons';
import {COLOR, FONTS, SIZE} from '../constants/theme';
import images from '../constants/images';
import GradientButton from '../components/GradientButton';
import InputText from '../components/InputText';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const Login = () => {
  const nav = useNavigation();
  const {getItem, setItem} = useAsyncStorage('AuthLogin');
  const [authLogin, setAuthLogin] = useState(null);
  const [formInput, setFormInput] = useState({
    username: '',
    password: '',
  });

  const getFromAsyncStorage = async () => {
    const item = await getItem();
    setAuthLogin(JSON.parse(item));
  };

  const setItemAsyncStorage = async (item) => {
    const data = JSON.stringify(item);
    await setItem(data);
  };
  useLayoutEffect(() => {
    nav.setOptions({
      title: null,
      headerLeft: ({onPress}) => (
        <Buttonheader icon={icons.back} label="Back" onPress={onPress} />
      ),
      headerTransparent: true,
    });
  });

  useEffect(() => {
    getFromAsyncStorage();
  }, []);

  const handleFormInput = (value, name) => {
    // console.log(value, name);
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  // console.log(formInput);
  const handleSubmit = () => {
    setItemAsyncStorage(formInput);
    nav.navigate('Home');
    console.log('async Storage', authLogin);
  };
  return (
    <View style={styles.container}>
      <View style={{marginTop: -SIZE.padding * 3}}>
        <Image
          source={images.login}
          style={{width: '100%', height: 190}}
          resizeMode="contain"
        />
        <Text
          style={{...FONTS.body3, color: COLOR.gray, marginTop: SIZE.padding}}>
          Proceed with your
        </Text>
        <Text style={{...FONTS.h1, color: '#655'}}>Login</Text>
      </View>
      <View style={{marginVertical: SIZE.padding * 2}}>
        <InputText
          label="Username"
          placeholder="username"
          icon={icons.user}
          defaultValue={formInput.username}
          onChangeText={(value) => handleFormInput(value, 'username')}
        />
        <InputText
          label="Password"
          placeholder="password"
          icon={icons.edit}
          defaultValue={formInput.password}
          onChangeText={(value) => handleFormInput(value, 'password')}
          secureTextEntry={true}
        />
      </View>
      <GradientButton text="Sign In" onPress={handleSubmit} />
      <Text style={styles.forgot}>Forgot Password</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingHorizontal: SIZE.padding * 1.5,
    justifyContent: 'center',
    paddingTop: SIZE.padding * 2,
  },
  forgot: {
    ...FONTS.body3,
    color: COLOR.gray,
    textAlign: 'center',
    marginTop: SIZE.padding,
  },
});
