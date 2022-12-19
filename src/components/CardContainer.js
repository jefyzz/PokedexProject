import { View, StyleSheet, Text, FlatList } from "react-native";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/userSelector";
import CardItem from "./CardItem";

export default function CardContainer() {
  const currentUser = useSelector(selectCurrentUser);
  const pokemons = useSelector((state) => state.apiReducer.pokemons);
  return (
    <View style={styles.mainContainer}>
      <Text style={{ paddingLeft: 9 }}>Pokemon:</Text>
      {pokemons && (
        <View style={styles.listContainer}>
          <FlatList
          scrollEnabled={!currentUser ? false : true}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={pokemons.results}
          keyExtractor={pokemons.results.name}
          renderItem={(pokemonData) => {
            return (
              <CardItem
                name={pokemonData.item.name}
                key={pokemonData.item.name}
              />
            );
          }}
        />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 50,
  },
  listContainer: {
    alignItems: "center",
    height: "94%"
  }
});
