import {
  Linking,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SecondPages = ({ route, navigation }) => {
  const { page, title, bgimage } = route.params.item;

  return (
    Linking.openURL(page),
    (
      <ImageBackground
        style={{ flex: 1 }}
        source={{ uri: bgimage }}
        resizeMode="cover"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              style={{ paddingTop: 15 }}
              name="arrow-left"
              size={25}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <Text
            style={{
              paddingRight: 100,
              fontSize: 40,
              textTransform: "uppercase",
              color: "#24685b",
            }}
          >
            {title}
          </Text>
        </View>
      </ImageBackground>
    )
  );
};
export default SecondPages;
