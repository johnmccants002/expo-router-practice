import { Stack, useRouter, Link, useNavigation } from "expo-router";
import Head from "expo-router/head";
import { Button, Text, TouchableOpacity, Pressable } from "react-native";
export default function Browse({ segment }) {
  const router = useRouter();
  const randomId = Math.floor(Math.random() * 100);
  const navigate = useNavigation();

  return (
    <>
      <Head>
        <title>Browse</title>
      </Head>
      <Stack.Screen options={{ title: "Browse" }} />
      <Button onPress={() => router.push("profile")} title={"Users"} />
      <Text>Browse Page</Text>
      <Link href={`/profile`}>
        <Pressable>{({ hovered, pressed }) => <Text>Home</Text>}</Pressable>
      </Link>
    </>
  );
}
