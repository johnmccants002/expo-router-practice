import { Stack, Tabs, useRouter, useNavigation, Slot } from "expo-router";
import Head from "expo-router/head";
import { Text, View, TouchableOpacity } from "react-native";
export default function Home() {
  const isBusiness = true;
  const router = useRouter();
  const randomId = Math.floor(Math.random() * 100);

  if (isBusiness) return null;
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Stack.Screen
        options={{ title: "Test" }}
        screenOptions={{
          title: "Home",
          headerBackTitle: "",
          headerLeft: (props) => <DrawerToggleButton {...props} />,
        }}
      />
      <Text>Home Page</Text>
      <Link
        href={{
          pathname: `/profile/[user]`,
          params: { user: randomId },
        }}
        style={{ marginTop: 50 }}
        // onPress={() => router.push(`/${randomId}`)}
      >
        <Text>Go To Random Profile</Text>
      </Link>
      <View
        style={{
          marginTop: 50,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => router.push("/chat")}>
          <Text>Test</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
