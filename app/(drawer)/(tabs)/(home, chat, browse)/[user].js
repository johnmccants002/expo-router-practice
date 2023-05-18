import React from "react";
import { Text } from "react-native";
import { useRouter, useSearchParams, useNavigation, Stack } from "expo-router";

export default function Profile({ segment }) {
  const { user, extra } = useSearchParams();
  console.log("Profile::: ", user, extra);
  console.log("Segment: ", segment);
  const router = useRouter();
  const navigation = useNavigation();
  const state = navigation.getState();
  console.log("Navigation State, navigation", state, navigation);

  return (
    <>
      <Stack.Screen
        options={{ title: "Test" }}
        screenOptions={{
          title: "Home",
          headerBackTitle: "",
          headerLeft: (props) => <DrawerToggleButton {...props} />,
        }}
      />
      <Text>Profile {user}</Text>
    </>
  );
}
