import { Image, Text, View } from "react-native";
import { styles } from "./style";

const emptyImage = require("../../assets/empty-tasks.png");

export function TasksEmpty() {
  return (
    <>
      <View style={styles.container}>
        <Image source={emptyImage} />
      </View>
      <View style={styles.emptyContainer}>
        <Text style={styles.textBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </>
  );
}
