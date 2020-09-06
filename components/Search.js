import React, { useState } from "react";
import films from "../helpers/filmsData";

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import FilmItem from "./FilmItem";
import TMDApi from "../Services/TMDApi";

const Search = () => {
  const [movies, setMovies] = useState([]);
  let searchedText = "";

  const _loadFilms = async () => {
    if (searchedText.length > 0) {
      try {
        const data = await TMDApi.getFilmsFromApiWithSearchedText(searchedText);
        setMovies(data.results);
      } catch (error) {
        console.log("impossible de charger les films");
      }
    }
  };

  const handleSearch = (text) => {
    searchedText = text;
  };

  console.log("RENDER");

  return (
    <View style={styles.main_container}>
      <TextInput
        style={styles.textinput}
        placeholder="Titre du film"
        onChangeText={handleSearch}
      />
      <Button
        style={styles.searchBtn}
        color="#FF0010"
        title="Rechercher"
        onPress={(text) => _loadFilms(text)}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FilmItem film={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  textinput: {
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default Search;
