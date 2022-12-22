import { View, Image, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.pokeLogo} source={require('../../assets/images/pokelogo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginTop: 10,
  },
});
