import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilmDetail = ({ route }) => {
  return (
    <View style={styles.main_container}>
      <Text>Détail du film {route.params.idFilm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
});

export default FilmDetail;
