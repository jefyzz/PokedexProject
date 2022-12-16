import { TextInput, StyleSheet, View } from "react-native";

export default function SearchBox() {
  const searchPokemonHandler = () => {};
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search Pokémon by Name"
        onChangeText={searchPokemonHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 10,
  },
  searchBox: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
});
