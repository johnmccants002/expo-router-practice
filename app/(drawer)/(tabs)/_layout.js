import { Tabs, Slot } from "expo-router";
import Head from "expo-router/head";
import { useDrawerStatus, DrawerToggleButton } from "@react-navigation/drawer";

export default function TabsLayout() {
  const isBusiness = true;
  return (
    <>
      <Head>
        <title>Expo OnDeck</title>
      </Head>

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "rgb(29, 155, 240)",
          headerLeft: (props) => <DrawerToggleButton {...props} />,
        }}
      >
        <Tabs.Screen name={"(home)"} />
        <Tabs.Screen name={"(chat)"} />
        <Tabs.Screen name={"(browse)"} />
      </Tabs>
    </>
  );
}
