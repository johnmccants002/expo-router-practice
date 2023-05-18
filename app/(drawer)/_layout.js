// import { Drawer } from "expo-router/drawer";
import { useRouter } from "expo-router";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Drawer from "expo-router/drawer";
import { useDrawerStatus, DrawerToggleButton } from "@react-navigation/drawer";

export default function RootLayout() {
  const router = useRouter();
  const drawerContent = (props) => {
    return (
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          display: "flex",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={{ display: "flex" }}>
          <DrawerItem
            label="Home"
            icon={(props) => (
              <MaterialCommunityIcons name="home-outline" {...props} />
            )}
            onPress={() => router.push("/")}
          />
          <DrawerItem
            label="Profile"
            icon={(props) => (
              <MaterialCommunityIcons name="home-outline" {...props} />
            )}
            onPress={() => router.push("/profile")}
          />
        </View>
        <DrawerItem
          style={{}}
          label="Settings"
          icon={(props) => (
            <MaterialCommunityIcons name="cog-outline" {...props} />
          )}
          onPress={() => router.push("/home")}
        />
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer
      useLegacyImplementation
      screenOptions={{
        headerShown: true,
        headerLeft: (props) => <DrawerToggleButton {...props} />,
      }}
      drawerContent={drawerContent}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
        }}
      />
    </Drawer>
  );
}
