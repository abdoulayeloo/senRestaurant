import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { categories } from "../../constants";
import CategorieCard from "./categorieCard";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop:10
      }}
    >
      {categories?.map((category, index) => {
        return (
            <CategorieCard navigation={navigation} category={category} index={index} key={index} />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
