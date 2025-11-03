import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import { View } from "react-native";
import { Color } from "./src/styles/Color";
import { Header } from "./src/components/Header";
import { Input } from "./src/components/Input";

export default function App() {
  const backgroundColor = Color.gray[700];
  const fontsLoaded = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      <Header />
      <View>
        <Input />
      </View>
    </View>
  );
}
