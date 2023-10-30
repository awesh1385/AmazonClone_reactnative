import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
// Icons
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const SearchBox = () => {
  return (
    <View
      style={{
        backgroundColor: "#00CED1",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 7,
          gap: 10,
          backgroundColor: "white",
          borderRadius: 3,
          height: 38,
          flex: 1,
        }}
      >
        <AntDesign
          style={{ paddingLeft: 10 }}
          name="search1"
          size={22}
          color="black"
        />
        <TextInput placeholder="Search Amazon.in" />
      </Pressable>
      <Feather name="mic" size={24} color="black" />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
