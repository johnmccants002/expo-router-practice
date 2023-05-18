import { Drawer } from "./Drawer";

export default function DrawerStack() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(home)" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="details" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "details",
          title: "overview",
        }}
      />
    </Drawer>
  );
}
