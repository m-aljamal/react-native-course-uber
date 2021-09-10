import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;
