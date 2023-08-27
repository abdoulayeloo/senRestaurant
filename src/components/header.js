import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Icon from "react-native-heroicons/outline";
import themeColor from "../../themes/theme";

const header = () => {
  const android = Platform.OS === "android";
  return (
    <SafeAreaView className={`${android ? "pt-12" : "pt-2 mx-2"}`}>
      <View>
        <View className="flex-row items-center space-x-2 rounded-full shadow-lg ">
          <Image
            source={require("../../assets/images/abdoulayelo.jpg")}
            alt="Image de profil"
            className="rounded-full h-12 w-12"
          />
          <View className="flex">
            <Text className="font-bold text-xs">Fais toi livrer, Now !!</Text>
            <View className="flex-row items-center ">
              <Text className="font-light text-xs">Localisation</Text>
              <Icon.ChevronDownIcon size={23} />
            </View>
          </View>
          {/* Search Bar */}
        </View>
        <View className="flex-row items-center space-x-2 mt-3">
          <View className="flex-1 flex-row bg-gray-200 p-2 rounded-full ">
            <Icon.MagnifyingGlassIcon
              strokeWidth={2.5}
              color={themeColor.red.RGBA(1)}
            />
            <TextInput
              className="flex-1 ml-1 border-gray-400 "
              placeholder=" Restaurant ou plat"
            />
          </View>
          <TouchableOpacity
            className="rounded-full p-2 items-center justify-center"
            style={{ backgroundColor: themeColor.red.RGBA(1) }}
          >
            <Icon.AdjustmentsVerticalIcon
              strokeWidth={1.5}
              color={themeColor.white.HEX}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default header;
