import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/sign-in/SignInScreen";
import DetailsScreen from "./src/screens/details/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { LogBox } from "react-native";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["AsyncStorage"]);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
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
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{ title: "" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
