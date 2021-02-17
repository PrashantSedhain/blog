import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  return <div> I am a new component </div>;
};

const styles = StyleSheet.create({});

export default ShowScreen;
