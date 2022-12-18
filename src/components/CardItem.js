import { StyleSheet, View, Text } from "react-native";

const CardItem = (props) => {
  return (
    <View style={styles.cardsItem}>
          <Text style={styles.cardsText}>{props.name}</Text>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  cardsItem: {
    flexDirection: "row",
    alignContent: "flex-start",
    margin: 8,
    borderBottomColor: "#000",
    // borderBottomWidth: 1,
    backgroundColor: "#ccc",
    width: 100,
    height: 100,
  },
  cardsText: {
    color: "#000",
    padding: 8,
  },
});
