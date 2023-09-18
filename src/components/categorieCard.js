import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as heightPercentageToDP,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import themeColor from "../../themes/theme";

const CategorieCard = ({ category, navigation }) => {
  return (
    <TouchableOpacity
      className=" mx-2 mt-5 items-center justify-between drop-shadow-2xl   "
      style={{ width: wp(30), height: wp(30) }}
    >
      <Image
        source={category.image}
        alt={category.name}
        style={{ width: wp(30), height: wp(30) }}
        className="rounded-lg"
      />
          <Text className=" p-0.5 ml-1 shadow-sm bottom-1 text-xs text-center absolute ">
            {category.name}
          </Text>
    </TouchableOpacity>
  );
};

export default CategorieCard;
