import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { TextInput, View } from "react-native";

import { Color } from "@/styles/Color";
import { Input } from "@/components/Input";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";


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
      <View style={{
        justifyContent: 'center'
      }}>
        <Input />
      </View>
    </View>
  );
}
