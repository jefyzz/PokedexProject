import { StyleSheet, View, Text } from "react-native";

const CardItem = ({ name }) => {
  return (
    <View style={styles.cardsItem}>
      <Text style={styles.cardsText}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  cardsItem: {
    margin: 8,
    backgroundColor: "#ccc",
    borderRadius: 10,
    height: 120,
    width: 100,
  },
  cardsText: {
    color: "#000",
    marginTop: 4,
    alignSelf: "center",
    fontSize: 16,
  },
});
