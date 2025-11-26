import { Color } from "@/styles/Color";
import { ActivityIndicator } from "react-native";
import { styles } from "./style";

export function Loading() {
    return (
        <ActivityIndicator style={styles.container} color={Color.blue["blue-dark"]} />
    )
}

