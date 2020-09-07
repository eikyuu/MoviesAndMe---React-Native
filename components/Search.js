import React, { useState } from "react";

import {
  ActivityIndicator,
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import FilmItem from "./FilmItem";
import TMDApi from "../Services/TMDApi";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  let searchedText = "";

  const _loadFilms = async () => {
    if (searchedText.length > 0) {
      setLoading(true);
      try {
        const data = await TMDApi.getFilmsFromApiWithSearchedText(searchedText);
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.log("impossible de charger les films");
      }
    }
  };

  const handleSearch = (text) => {
    searchedText = text;
  };
  console.log(loading);
  return (
    <View style={styles.main_container}>
      <TextInput
        style={styles.textinput}
        placeholder="Titre du film"
        onChangeText={handleSearch}
        onSubmitEditing={_loadFilms}
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

      {loading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
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
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Search;
