import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { authFunc } from "../../utils/firebase";
import NavBar from "../components/NavigationBar";
import SearchBox from "../components/SearchBox";
import CardContainer from "../components/CardContainer";
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../store/user/userSelector";

export default function HomeScreen({ navigation }) {
  const currentUser = useSelector(selectCurrentUser);
  function handleSignIn() {
    navigation.navigate("Signin");
  }
  function handleSignOut() {
    authFunc
      .signOut()
      .then(() => {
        navigation.navigate("Signin");
      })
      .catch((e) => alert(e.message));
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.navBarContainer}>
        <NavBar />
        <Text style={styles.appVersion}>v1.0</Text>
        <View style={styles.buttonContainer}>
          {!currentUser ? (
            <TouchableOpacity
              onPress={handleSignIn}
              style={styles.sessionButton}
            >
              <Text style={styles.signOutText}>Sign In</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleSignOut}
              style={styles.sessionButton}
            >
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          )}
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
  },
  appVersion: {
    paddingRight: 30,
    paddingTop: 28,
    fontSize: 16,
  },
  sessionButton: {
    backgroundColor: "#3B4CCA",
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  signOutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
