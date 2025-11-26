import { ButtonProps } from "@/@types/types";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Button({ icon, onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={.5} style={styles.container} {...rest}>
      {icon && <MaterialIcons name={icon} color={'white'} size={20} />}
    </TouchableOpacity>
  );
}
