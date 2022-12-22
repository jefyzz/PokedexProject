import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function LogoSignIn() {
  const navigation = useNavigation();
  function goBackHandler() {
    navigation.navigate('Home');
  }
  return (
    <View>
      <TouchableOpacity onPress={goBackHandler}>
        <Image source={require('../../assets/images/logo.png')} />
      </TouchableOpacity>
    </View>
  );
}
