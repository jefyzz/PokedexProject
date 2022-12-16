import { View, StyleSheet, Button } from "react-native";
import Logo from "./Logo";

export default function NavBar({ navigation }) {
  const signInHandler = () => {};
  return (
    <View style={styles.signIn}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  signIn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
