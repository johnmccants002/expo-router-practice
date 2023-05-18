import React, { useEffect } from "react";
import { Stack, Tabs, useRouter, useNavigation, Slot } from "expo-router";
import { useDrawerStatus, DrawerToggleButton } from "@react-navigation/drawer";
// export const unstable_settings = {
//     initialRouteName: 'index',
// };
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

export function BrowseLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Browse",
        headerBackTitle: "Back",
        // headerLeft: (props) => <DrawerToggleButton {...props} />,
      }}
    >
      {/* <Slot /> */}
      {/* <Stack.Screen name={"profile"} /> */}
    </Stack>
  );
}

export function ChatLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Chat",
        headerBackTitle: "Back",
        headerLeft: (props) => <DrawerToggleButton {...props} />,
      }}
    />
  );
}

export function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Home",
        headerBackTitle: "Back",
        headerLeft: (props) => <DrawerToggleButton {...props} />,
      }}
    >
      {/* <Slot /> */}
      {/* <Stack.Screen name={"profile"} /> */}
    </Stack>
  );
}

export default function DynamicLayout({ segment }) {
  if (segment === "(browse)") {
    return <BrowseLayout />;
  }

  if (segment === "(chat)") {
    return <ChatLayout />;
  }

  if (segment === "(home)") {
    return <HomeLayout />;
  }

  return <Stack />;
}
