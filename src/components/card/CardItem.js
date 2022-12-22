import { StyleSheet, View, Text, Image } from 'react-native';

function CardItem({ name, imageId }) {
  return (
    <View style={styles.cardsItem}>
      <Text style={styles.cardsText}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
      <Image
        style={styles.pokemonImage}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`,
        }}
      />
    </View>
  );
}

export default CardItem;

const styles = StyleSheet.create({
  cardsItem: {
    margin: 8,
    backgroundColor: '#d5dce6',
    borderRadius: 10,
    height: 120,
    width: 100,
  },
  cardsText: {
    color: '#000',
    marginTop: 4,
    alignSelf: 'center',
    fontSize: 16,
  },
  pokemonImage: {
    width: "80%",
    height: "80%",
    alignSelf: "center",
  },
});
