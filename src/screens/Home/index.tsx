import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { Image, View } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Loading } from "@/components/Loading";
import { TaskStats } from "@/components/TaskStats";
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
      <View style={styles.inputContainer}>
        <Input />
        <Button icon="add" onPress={() => {}} />
      </View>

      <View style={styles.tasksContainer}>
        <TaskStats />
      </View>
    </View>
  );
}
