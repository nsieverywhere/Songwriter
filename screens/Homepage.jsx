import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import React from "react";
import Topbar from "../components/Topbar";

const Homepage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Topbar heading="Welcome" />
        <View style={styles.content}>
          <View>
            <TextInput
              value={title}
              placeholder="Title"
              style={styles.title}
              onChangeText={(title) => {
                setTitle(title);
              }}
            ></TextInput>
          </View>
          <View>
            <TextInput
              value={content}
              multiline
              placeholder="Your Song Starts Here..."
              style={styles.body}
              onChangeText={(content) => {
                setContent(content);
              }}
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  title: {
    height: 40,
    fontSize: 30,
    marginBottom: 10,
    marginTop: 5,
    padding: 10,
  },
  container: {
    // padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  body: {
    minHeight: 100,
    fontSize: 18,
    padding: 10,
  },
  topbar: {
    backgroundColor: "#091426",
    height: 60,
  },
  content: {
    padding: 20,
  },
});
