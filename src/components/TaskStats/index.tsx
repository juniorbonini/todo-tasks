import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

export function TaskStats() {
  const [createdTask, setIsCreatedTask] = useState(0);
  const [completedTask, setIsCompletedTask] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.createdTask}>Criadas {createdTask}</Text>
      <Text style={styles.completedTask} >Concluidas  {completedTask}</Text>
    </View>
  );
}
