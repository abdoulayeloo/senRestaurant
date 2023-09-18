import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-heroicons/outline";
import themeColor from "../../themes/theme";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";

const header = () => {
  [displayCurrentAddress, setDisplayCurrentAddress] =
    useState("Chargement ...");
  [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  useEffect(() => {
    checkifLocationEnabled();
    getCurrentLocation();
  }, []);
  const checkifLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Localisation desactivés",
        "Veuillez l'aciver pour continuer",
        [
          {
            text: "Ask me later",
            onPress: () => console.log("Ask me later pressed"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission non accordée",
        "Veuillez autoriser la localisation",
        [
          {
            text: "Ask me later",
            onPress: () => console.log("Ask me later pressed"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }
    const {coords} = await Location.getCurrentPositionAsync();
    console.log(coords);
    if(coords){
      const {latitude, longitude} = coords;
      let response = await Location.reverseGeocodeAsync({latitude, longitude});
      console.log(response);
      for(let item of response){
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        setDisplayCurrentAddress(address);
        break;
      }
    }
  };

  const android = Platform.OS === "android";
  return (
    <SafeAreaView className={`${android ? "pt-12" : "pt-2"} mx-2`}>
      {android && <StatusBar style="auto" />}
      <View>
        <View className="flex-row items-center space-x-2 rounded-full shadow-lg ">
          <Image
            source={require("../../assets/images/abdoulayelo.jpg")}
            alt="Image de profil"
            className="rounded-full h-10 w-10"
          />
          <View className="flex">
            <Text className="font-bold text-xs">Fais toi livrer, Now !!</Text>
            <View className="flex-row items-center ">
              <Icon.MapPinIcon size={15} stroke={themeColor.red.RGBA(0.8)} />
              <Text className="font-light text-xs">{displayCurrentAddress}</Text>
              <Icon.ChevronDownIcon size={17} stroke={themeColor.red.RGBA(0.8)}  />
            </View>
          </View>
          {/* Search Bar */}
        </View>
        <View className="flex-row items-center space-x-2 mt-3">
          <View className="flex-1 items-center flex-row bg-gray-200 p-2 rounded-full ">
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
