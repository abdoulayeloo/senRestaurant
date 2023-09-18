import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-heroicons/outline";
import themeColor from "../../themes/theme";
import {
  heightPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { restaurants } from "../../constants";

const RestaurantScreen = (props) => {
  const restaurant = props.route.params;
  const navigation = useNavigation();
//   console.log(restaurant);
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>
      <Image
        source={restaurant.image}
        className="rounded-t-3xl rounded-b-3xl w-full h-96"
      />
      <TouchableOpacity
        onPress={navigation.goBack}
        className=" space-x-2 flex-row items-center rounded-lg p-2  ml-2 absolute top-12 left-4"
        style={{ backgroundColor: themeColor.red.RGBA(0.7) }}
      >
        <Icon.ArrowLeftIcon size={16} stroke="white" strokewidth={2.5} />
        <Text className="text-white font-semibold">Retour</Text>
      </TouchableOpacity>
      <View
        className=" flex-1 rounded-lg m-3 mx-2 items-center justify-center"
        style={{ backgroundColor: themeColor.red.RGBA(0.3) }}
      >
        <Text className="text-lg text-white font-semibold m-1">
          {restaurant.name}
        </Text>
      </View>
      <View>
        <Text className="text-lg text-center font-semibold m-1">{restaurant.description}</Text>
      </View>
      <View className="flex-row items-center justify-evenly mx-2 mt-2">
        <View className="flex space-x-1 items-center justify-center p-2 space-y-2 bg-gray-200 w-24 h-24 rounded-lg ">
          <Icon.MapPinIcon size={20} color={themeColor.red.RGBA(0.7)} />
          <Text className="text-xs text-gray-500 ">{restaurant.address}</Text>
        </View>
        <View className="flex space-x-1 items-center justify-start space-y-2 p-2 bg-gray-200 w-24 h-24 rounded-lg ">
          <Icon.ClockIcon size={20} color={themeColor.red.RGBA(0.7)} />
          <Text className="text-center text-xs text-gray-500 ">{restaurant.hours} 24/7</Text>
        </View>
        <View className="flex space-x-1 items-center justify-start p-2 bg-gray-200 w-24 h-24 rounded-lg ">
          <Icon.StarIcon size={20} color={themeColor.red.RGBA(0.7)} />

          <Text className="text-xs text-center mt-1 text-gray-500 ">{restaurant.rating} Avis Excellante Note</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
