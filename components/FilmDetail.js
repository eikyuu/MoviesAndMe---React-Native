import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getFilmDetailFromApi } from "../Services/TMDApi";

const FilmDetail = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [film, setFilm] = useState(undefined);

  const id = route.params.idFilm;

  const _loadFilm = async (id) => {
    try {
      const data = await getFilmDetailFromApi(id);
      setFilm(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log("erreur");
    }
  };

  useEffect(() => {
    _loadFilm(id);
  }, [id]);

  const _displayLoading = () => {
    if (isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  };

  const _displayFilm = () => {
    if (!isLoading) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Text>{film.title}</Text>
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.main_container}>
      {_displayLoading()}
      {_displayFilm()}
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview_container: {
    flex: 1,
  },
});

export default FilmDetail;
