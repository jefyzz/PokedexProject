import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DetailsScreen({ navigation, route }) {
  return (
    <View style={styles.mainContainer}>
      <Text>{route.params}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});
