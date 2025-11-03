import { Image, View } from "react-native";
import { styles } from "./style";

const todoImage = require("@/assets/todo-logo.png");

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={todoImage} style={styles.image} />
      </View>
    </View>
  );
}
