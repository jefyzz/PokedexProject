import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/sign-in/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/store";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(["AsyncStorage"]);
function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Signin"
              component={SignInScreen}
              options={{ title: "" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
