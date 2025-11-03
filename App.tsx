import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { View } from "react-native";

import { Color } from "@/styles/Color";
import { Input } from "@/components/Input";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { List } from "@/components/List";
import { TasksProps } from "@/@types/types";
import { useState } from "react";
import { Tasks } from "@/components/Tasks";

export default function App() {
  const backgroundColor = Color.gray[700];
  const [tasks, setTasks] = useState<TasksProps[]>([]);
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
      <View>
        <List
          data={tasks}
          renderItem={({ item }) => <Tasks data={item} />}
          emptyContent
        />
      </View>
    </View>
  );
}
