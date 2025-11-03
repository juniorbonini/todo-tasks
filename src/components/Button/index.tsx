import { ButtonProps } from "@/@types/types";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Button({ iconName, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
        {iconName && <MaterialIcons name={iconName} color="white" size={20} />}
    </TouchableOpacity>
  );
}
