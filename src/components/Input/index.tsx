import { TextInput, View } from "react-native";
import { Color } from "../../styles/Color";
import { styles } from "./style";

export function Input() {
    return (
        <View style={styles.container}
>
            <TextInput
              style={styles.input}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor={Color.gray[400]}
             />
        </View>
    )
}