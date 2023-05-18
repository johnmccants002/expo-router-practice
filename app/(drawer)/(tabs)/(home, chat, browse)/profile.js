import { Stack, Tabs, useRouter, useNavigation, Slot } from "expo-router";
import { Text } from "react-native";

export default function Profile({ segment }) {
  //   const { user, extra } = useSearchParams();
  //   console.log("Profile::: ", user, extra);
  //   console.log("Segment: ", segment);
  //   const router = useRouter();
  //   const navigation = useNavigation();
  //   const state = navigation.getState();
  //   console.log("Navigation State, navigation", state, navigation);

  return (
    <>
      <Stack.Screen
        options={{ title: "Profile" }}
        screenOptions={{
          title: "Profile",
          headerBackTitle: "",
        }}
      />
      <Text>Profile</Text>
    </>
  );
}
