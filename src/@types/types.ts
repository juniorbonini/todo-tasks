import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    onPress: () => void;
}