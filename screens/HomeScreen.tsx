import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={require("../images/logo.png")}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where From?"
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
