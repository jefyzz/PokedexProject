import { View, StyleSheet, Text, Button } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { getPokemonsFetch } from "../store/api/apiAction";

export default function CardContainer() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.apiReducer.pokemons);
  return (
    <View>
      <Text>Pokemons: </Text>
      <Button
        onPress={() => dispatch(getPokemonsFetch())}
        title="get pokemon"
      />
      <View>
        <Text>
          Users:
          {pokemons &&
            pokemons.results.map((pokemon) => (
              <Text key={pokemon.name}>
                {" "}{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </Text>
            ))}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
