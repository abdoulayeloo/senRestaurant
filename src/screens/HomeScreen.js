import { View, Text } from "react-native";
import React from "react";
import Header from "../components/header";
import Categories from "../components/categories";
import Restaurants from "../components/restaurants";

const HomeScreen = () => {
  return (
    <View className="space-x-4 flex">
      {/* Header */}
      <Header />
      
      {/* Category */}
      <Categories />

      {/* Restaurants */}
      <Restaurants />
    </View>
  );
};

export default HomeScreen;
