import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
});
