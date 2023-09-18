import { View, Text } from "react-native";
import React from "react";
import Header from "../components/header";
import Categories from "../components/categories";
import Restaurants from "../components/restaurants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const HomeScreen = () => {
  return (
    <View className="mb-3" >
      {/* Header */}
      <View className="mb-3">
        <Header />
      </View>

      {/* Category */}
      <View className="mb-3" >
        <Categories />
      </View>

      {/* Restaurants */}
      <View style={{marginBottom: wp(138)}} >
        <Restaurants />
      </View>
    </View>
  );
};

export default HomeScreen;
