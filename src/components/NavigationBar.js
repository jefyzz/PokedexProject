import { View, StyleSheet } from 'react-native';
import Logo from './Logo';

export default function NavBar() {
  return (
    <View style={styles.signIn}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  signIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
