// import React, { useState, useEffect } from "react";
// import {
//   ActivityIndicator,
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   FlatList,
// } from "react-native";
// import FilmItem from "./FilmItem";
// import TMDApi from "../services/TMDApi";

// const Search = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [totalPages, setTotalPages] = useState(0);
//   const [page, setPage] = useState(0);
//   let searchedText = "";

//   const _loadFilms = async () => {
//     if (searchedText.length > 0) {
//       setLoading(true);
//       try {
//         const data = await TMDApi.getFilmsFromApiWithSearchedText(
//           searchedText,
//           page + 1
//         );
//         setPage(data.page);

//         setTotalPages(data.total_pages);
//         setMovies(data.results);
//         setLoading(false);
//       } catch (error) {
//         console.log("impossible de charger les films");
//       }
//     }
//   };

//   const handleSearch = (text) => {
//     searchedText = text;
//   };

//   return (
//     <View style={styles.main_container}>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Titre du film"
//         onChangeText={handleSearch}
//         onSubmitEditing={_loadFilms}
//       />

//       <Button
//         style={styles.searchBtn}
//         color="#FF0010"
//         title="Rechercher"
//         onPress={_loadFilms}
//       />
//       <FlatList
//         data={movies}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <FilmItem film={item} />}
//         onEndReachedThreshold={0.5}
//         onEndReached={() => {
//           if (page < totalPages) {
//             _loadFilms();
//           }
//         }}
//       />

//       {loading ? (
//         <View style={styles.loading_container}>
//           <ActivityIndicator size="large" />
//         </View>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main_container: {
//     flex: 1,
//     marginTop: 50,
//     marginLeft: 5,
//     marginRight: 5,
//   },
//   textinput: {
//     height: 50,
//     borderColor: "#000000",
//     borderWidth: 1,
//     paddingLeft: 5,
//   },
//   loading_container: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     top: 100,
//     bottom: 0,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default Search;

// Components/Search.js
