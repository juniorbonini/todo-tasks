import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { Image, View } from "react-native";

import { Loading } from "@/components/Loading";
import { Color } from "@/styles/Color";
import { styles } from "./style";
const logoImage = require('@/assets/todo-logo.png')
const fontsLoaded = [Inter_400Regular, Inter_700Bold];

const backgroundColor = Color.gray[700];

export function Home() {
  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <View style={styles.headerContainer}>
        <Image src={logoImage} />
      </View>
    </View>
  );
}
