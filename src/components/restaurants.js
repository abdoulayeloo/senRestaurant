import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { restaurants } from "../../constants/index";
import RestaurantsCard from "./restaurantsCard";
import { useNavigation } from "@react-navigation/native";

const Restaurants = () => {
  return (
    <ScrollView
        className="pt-5 mx-3"
        showsVerticalScrollIndicator={false}
      >
    <View className="flex-row justify-between flex-wrap">
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantsCard
              key={index}
              restaurant={restaurant}
            />
          );
        })}
    </View>
      </ScrollView>
  );
};

export default Restaurants;
