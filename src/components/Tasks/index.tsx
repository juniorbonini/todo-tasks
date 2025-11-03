import { Text, View } from "react-native";
import { styles } from "./style";
import { TasksData } from "@/@types/types";

export function Tasks({ data }: TasksData) {
  return (
    <View style={styles.container}>
      <Text>{data.id}</Text>
      <Text>{data.description}</Text>
    </View>
  );
}
