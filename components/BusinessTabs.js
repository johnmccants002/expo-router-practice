import { Tabs } from "expo-router";
import Head from "expo-router/head";

export default function BusinessTabs() {
  const isBusiness = true;
  return (
    <>
      <Head>
        <title>Expo OnDeck</title>
      </Head>

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "rgb(29, 155, 240)",
        }}
      >
        <Tabs.Screen
          name="businesshome"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="businessdetails"
          options={{
            title: "Profile",
          }}
        />
      </Tabs>
    </>
  );
}
