/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

import { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSelector";
import CardItem from "./CardItem";
import { pokemonsNamesSelector } from "../../store/pokemons/pokemonsSelector";
import { getPokemonsNamesFetchStart } from "../../store/pokemons/pokemonsAction";

export default function CardContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const pokemons = useSelector(pokemonsNamesSelector);
  const currentUser = useSelector(selectCurrentUser);

  function handleDetails(name) {
    navigation.navigate("Details", name);
  }
  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemonsNamesFetchStart());
    }
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={{ paddingLeft: 9 }}>Pokemon:</Text>
      {pokemons && (
        <View style={styles.listContainer}>
          <FlatList
            onEndReachedThreshold={2}
            onEndReached={() => dispatch(getPokemonsNamesFetchStart())}
            scrollEnabled={!currentUser ? false : true}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={pokemons}
            keyExtractor={pokemons.name}
            renderItem={(pokemonData) => {
              return (
                <TouchableOpacity
                  onPress={() => handleDetails(pokemonData.item.name)}
                >
                  <CardItem
                    name={pokemonData.item.name}
                    key={pokemonData.item.name}
                  />
                </TouchableOpacity>
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
    height: "94%",
  },
});
