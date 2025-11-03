import { ActivityIndicator } from "react-native";
import { styles } from "./style";
import { Color } from "../../styles/Color";

export function Loading() {
  return <ActivityIndicator style={styles.container} color={Color.blue["blue-dark"]} />;
}
