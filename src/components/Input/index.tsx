import { Color } from "@/styles/Color";
import { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";

export function Input({ ...rest }: TextInputProps) {
  const [foused, setIsFocused] = useState(false);

  function handleFocusInput() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: foused
              ? `${Color.blue["blue-dark"]}`
              : `${Color.black}`,
          },
        ]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={Color.gray[300]}
        onFocus={handleFocusInput}
        onBlur={handleBlur}
        {...rest}
      />
    </View>
  );
}
