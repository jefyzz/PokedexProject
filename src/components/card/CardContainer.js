/* eslint-disable for-direction */
/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import { useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import selectCurrentUser from '../../store/user/userSelector';
import CardItem from './CardItem';
import { pokemonsNamesSelector } from '../../store/pokemons/pokemonsSelector';
import { getPokemonsNamesFetchStart } from '../../store/pokemons/pokemonsAction';

export default function CardContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const pokemons = useSelector(pokemonsNamesSelector);
  const currentUser = useSelector(selectCurrentUser);

  function handleDetails(name, prevPokemon, nextPokemon) {
    navigation.navigate('Details', { name, prevPokemon, nextPokemon });
  }
  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemonsNamesFetchStart());
    }
  }, []);

  const formattedPokemonData = useMemo(() => {
    return pokemons.map((pokemonData) => {
      const obj = pokemonData;
      const { url } = pokemonData;
      let backslashCount = 0;
      let startIndex;
      for (let index = url.length - 1; index > 0; index -= 1) {
        const element = url[index];
        if (element === '/') {
          backslashCount += 1;
        }
        if (backslashCount === 2) {
          startIndex = index;
          break;
        }
      }
      obj.pokemonId = Number(url.slice(startIndex + 1, url.length - 1));
      return obj;
    });
  }, [pokemons]);
  return (
    <View style={styles.mainContainer}>
      <Text style={{ paddingLeft: 9 }}>Pokémon:</Text>
      {pokemons && (
        <View style={styles.listContainer}>
          <FlatList
            onEndReachedThreshold={2}
            onEndReached={() => dispatch(getPokemonsNamesFetchStart())}
            scrollEnabled={!!currentUser}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={formattedPokemonData}
            keyExtractor={pokemons.name}
            renderItem={(pokemonData) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    handleDetails(
                      pokemonData.item.pokemonId,
                      pokemonData.item.pokemonId - 1,
                      pokemonData.item.pokemonId + 1
                    )
                  }
                >
                  <CardItem
                    name={pokemonData.item.name}
                    key={pokemonData.item.name}
                    imageId={pokemonData.item.pokemonId}
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
    alignItems: 'center',
    height: '94%',
  },
});
