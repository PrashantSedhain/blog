import React, { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = (props) => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text> Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
