import { View, StyleSheet, Button, Text } from "react-native";
import NavBar from "../components/NavigationBar";
import SearchBox from "../components/SearchBox";
import CardContainer from "../components/CardContainer";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <View style={styles.navBarContainer}>
        <NavBar />
        <Text style={styles.appVersion}>v1.0</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign in"
            color={"#FFCC00"}
            onPress={() => navigation.navigate("Signin")}
          />
        </View>
      </View>
      <SearchBox />
      <CardContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  navBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    maxHeight: "100%",
    paddingTop: 11,
  },
  appVersion: {
    paddingRight: 60,
    paddingTop: 28,
  }
});
