import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Icon from "react-native-heroicons/outline";
import themeColor from "../../themes/theme";
import { useNavigation } from "@react-navigation/native";

const RestaurantsCard = ({ restaurant }) => {
  const navigation = useNavigation();
  const ShrinkableText = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
      return <Text>{text}</Text>;
    } else {
      const shortenedText = text.substring(0, maxLength - 3) + "...";
      return <Text>{shortenedText}</Text>;
    }
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", {...restaurant})}
      className="mb-3 shadow-red-500 ">
      <Image
        source={restaurant.image}
        style={{ width: wp("45"), height: hp("20") }}
        className="rounded-lg rounded-b-none "
      />
      <View className="bg-gray-200 px-1 p-1 space-y-1 rounded-b-lg ">
        <Text className="font-bold text-xs">{restaurant.name}</Text>
        <View className="flex-row space-x-1">
          <Icon.MapPinIcon size={15} color={themeColor.red.RGBA(0.7)} />
          <ShrinkableText text={restaurant.address} maxLength={26} />
        </View>
        <View className="flex-row space-x-1">
          <Icon.StarIcon size={15} color={themeColor.black.RGBA(0.7)} />
          <Text className="text-xs text-gray-700 ">
            {restaurant.rating} Avis • <Text>{restaurant.hours}</Text>{" "}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantsCard;
