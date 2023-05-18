import React, { useEffect } from "react";
import {
  SplashScreen,
  Stack,
  Tabs,
  useNavigation,
  useRouter,
  Slot,
  useSegments,
  Redirect,
} from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { useDrawerStatus, DrawerToggleButton } from "@react-navigation/drawer";

export default function RootLayout(props) {
  console.log("Root Layout Props: ", props);
  const segments = useSegments();
  console.log(`Segments: ${segments}`);
  const [isReady, setReady] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const navigation = useNavigation();
  const router = useRouter();

  console.log("Root Layout navigation: ", navigation);
  useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  useEffect(() => {
    //TODO: Setup Auth and route to signIn or Home
    if (isAuthenticated) {
    }
  });

  const isBusiness = true;

  return (
    <SafeAreaProvider testID="Root_Layout_Wrapper">
      {/* When all loading is setup, unmount the splash screen component. */}
      <Slot />
    </SafeAreaProvider>
  );
}
