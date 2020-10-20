import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
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
          <Image
            style={styles.image}
            source={{
              uri: "https://image.tmdb.org/t/p/original" + film.backdrop_path,
            }}
          />
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.overview}>{film.overview}</Text>
          <Text style={styles.title_text}>{film.title}</Text>
          <Text style={styles.description_text}>{film.overview}</Text>
          <Text style={styles.default_text}>
            Sorti le {moment(new Date(film.release_date)).format("DD/MM/YYYY")}
          </Text>
          <Text style={styles.default_text}>
            Note : {film.vote_average} / 10
          </Text>
          <Text style={styles.default_text}>
            Nombre de votes : {film.vote_count}
          </Text>
          <Text style={styles.default_text}>
            Budget : {numeral(film.budget).format("0,0[.]00 $")}
          </Text>
          <Text style={styles.default_text}>
            Genre(s) :{" "}
            {film.genres
              .map(function (genre) {
                return genre.name;
              })
              .join(" / ")}
          </Text>
          <Text style={styles.default_text}>
            Companie(s) :{" "}
            {film.production_companies
              .map(function (company) {
                return company.name;
              })
              .join(" / ")}
          </Text>
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
  image: {
    height: 169,
    margin: 5,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
  },
  overview: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15,
  },
});

export default FilmDetail;
