import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Topbar from "../components/Topbar";

const Search = () => {
  return (
    <View style={styles.container}>
      <View>
        <Topbar heading="Search" />
      </View>
      <View>
        <TextInput style={styles.searchbar} placeholder="Find word synonyms" />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  searchbar: {
    margin: 20,
    padding: 10,
    height: 44,
    borderColor: "silver",
    borderWidth: 1,
    borderRadius: 15,
  },
});
