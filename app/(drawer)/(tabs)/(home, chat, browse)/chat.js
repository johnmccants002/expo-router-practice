import { Stack, useRouter, Link } from "expo-router";
import Head from "expo-router/head";
import { Button, Text, TouchableOpacity } from "react-native";
export default function Details() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Details</title>
      </Head>
      <Stack.Screen options={{ title: "Chat" }} />
      <Button onPress={() => router.push("/users")} title={"Users"} />
      <Text>Chat Page</Text>
      <Link href="/chat/profile">Profile</Link>
    </>
  );
}
