import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Rows, Table } from 'react-native-table-component';
import { pokemonsDetailsSelector } from '../../store/pokemons/pokemonsSelector';
import { getPokemonsDetailsFetchStart } from '../../store/pokemons/pokemonsAction';

export default function DetailsScreen({ route }) {
  const dispatch = useDispatch();
  const { name: pokemonName, prevPokemon, nextPokemon } = route.params;
  const details = useSelector(pokemonsDetailsSelector);
  const navigation = useNavigation();

  const capitalize = (text) => {
    const newText = text.charAt(0).toUpperCase() + text.slice(1);
    return newText;
  };

  const pokemonDetails = useMemo(() => details[pokemonName], [details, pokemonName]);

  useEffect(() => {
    if (!pokemonDetails) {
      dispatch(getPokemonsDetailsFetchStart(pokemonName));
    }
  }, [pokemonDetails, pokemonName]);

  const pokemonMoves = useMemo(() => {
    const newArr = [];
    if (pokemonDetails) {
      const movesArray = pokemonDetails.moves.map((move) =>
        capitalize(move.move.name).replace(/-/g, ' ')
      );
      for (let index = 0; index < movesArray.length; index += 2) {
        const element = movesArray[index];
        const nextEl = movesArray[index + 1];
        newArr.push([element, nextEl]);
      }
    }
    return newArr;
  }, [pokemonDetails]);

  const handlePrevPokemon = () => {
    navigation.navigate('Details', {
      name: prevPokemon,
      prevPokemon: prevPokemon - 1,
      nextPokemon: pokemonName,
    });
  };
  const handleNextPokemon = () => {
    navigation.navigate('Details', {
      name: nextPokemon,
      prevPokemon: pokemonName,
      nextPokemon: nextPokemon + 1,
    });
  };

  return pokemonDetails ? (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.nameIdContainer}>
        <Text style={styles.nameIdText}>
          Name: {capitalize(pokemonDetails.name)} {'     '}Id: {pokemonDetails.id}
        </Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.imageContainer}>
          <Image style={{ width: 170, height: 170 }} source={{ uri: pokemonDetails.image }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.heightText}>Height: {pokemonDetails.height} dm</Text>
          <Text style={styles.weightText}>Weight: {pokemonDetails.weight} hg</Text>
          <Text style={styles.typeText}>
            Type:
            {pokemonDetails.types.map((type, index) => (
              <Text key={type.type.name}>
                {' '}
                {capitalize(type.type.name)}
                {pokemonDetails.types.length > 1 && index < pokemonDetails.types.length - 1
                  ? ','
                  : null}
              </Text>
            ))}
          </Text>
          <View style={styles.statsContainer}>
            {pokemonDetails.stats.map((stat) => {
              return (
                <Text style={styles.statNameText} key={stat.stat.name}>
                  {capitalize(stat.stat.name).replace(/-/g, ' ')}: {stat.base_stat}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
      <Text>Moves: </Text>
      <View style={styles.movesContainer}>
        <Table
          borderStyle={{
            borderWidth: 2,
            borderColor: '#ddd',
          }}
        >
          <Rows data={pokemonMoves} textStyle={{ alignSelf: 'center', fontSize: 15 }} />
        </Table>
      </View>

      {pokemonDetails.name !== 'bulbasaur' ? (
        <View style={styles.pokemonNavigatorContainer}>
          <TouchableOpacity style={styles.pokemonNavigator} onPress={handlePrevPokemon}>
            <Text style={styles.pokemonNavigatorText}>Prev Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pokemonNavigator} onPress={handleNextPokemon}>
            <Text style={styles.pokemonNavigatorText}>Next Pokemon</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.pokemonNavigator} onPress={handleNextPokemon}>
          <Text style={styles.pokemonNavigatorText}>Next Pokemon</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  ) : (
    <Text>Loading...</Text>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 8,
    backgroundColor: '#f0f4f7',
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameIdContainer: {
    alignSelf: 'center',
    marginBottom: 10,
    width: '70%',
  },
  imageContainer: {
    width: 170,
    height: 170,
  },
  infoContainer: {
    width: 210,
  },
  movesContainer: {
    width: '100%',
  },
  statsContainer: {},
  pokemonNavigatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  pokemonNavigator: {
    backgroundColor: '#b5c9e6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 15,
    width: '40%',
    alignSelf: 'center',
  },
  nameIdText: {
    alignSelf: 'center',
    fontSize: 18,
  },
  heightText: {
    fontSize: 15,
    backgroundColor: '#d5dce6',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 2,
    flexWrap: 'nowrap',
    alignSelf: 'flex-start',
  },
  weightText: {
    fontSize: 15,
    backgroundColor: '#d5dce6',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 2,
    flexWrap: 'nowrap',
    alignSelf: 'flex-start',
  },

  typeText: {
    fontSize: 15,
    backgroundColor: '#d5dce6',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 2,
    flexWrap: 'nowrap',
    alignSelf: 'flex-start',
  },
  statNameText: {
    fontSize: 15,
    backgroundColor: '#d5dce6',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 2,
    flexWrap: 'nowrap',
    alignSelf: 'flex-start',
  },
  pokemonNavigatorText: {
    alignSelf: 'center',
  },
});
