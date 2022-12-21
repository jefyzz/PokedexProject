import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Text, Image } from "react-native";

import { pokemonsDetailsSelector } from "../../store/pokemons/pokemonsSelector";
import { getPokemonsDetailsFetchStart } from "../../store/pokemons/pokemonsAction";

export default function DetailsScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const pokemonName = route.params;

  const details = useSelector((state) => state.pokemonsReducer.details);
  useEffect(() => {
    if (details) {
      dispatch(getPokemonsDetailsFetchStart(pokemonName));
    }
  }, []);
  const pokemonDetails = useMemo(() => {
    return details[pokemonName];
  }, [details, pokemonName]);
  // console.log(pokemonDetails);

  return (
    <View style={styles.appContainer}>
      {pokemonDetails ? (
        <View styles={styles.mainContainer}>
          <View>
            <Text styles={styles.nameIdText}>
              Id: {pokemonDetails.id} Name:{" "}
              {pokemonDetails.name.charAt(0).toUpperCase() +
                pokemonDetails.name.slice(1)}
            </Text>
          </View>
          <View styles={styles.imageContainer}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: pokemonDetails.image }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text>Height: {pokemonDetails.height} hg</Text>
            <Text>Weight: {pokemonDetails.weight} dm</Text>
            <Text>
              Type:
              {pokemonDetails.types.map((type) => (
                <Text key={type.type.name}> {type.type.name}</Text>
              ))}
            </Text>
          </View>
          <View style={styles.statsContainer}>
            {pokemonDetails.stats.map((stat) => {
              return (
                <Text key={stat.stat.name}>
                  {stat.stat.name} {stat.base_stat}
                </Text>
              );
            })}
          </View>
        </View>
      ) : (
        <Text>"Loading..."</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});
