import { TextInput, TextInputProps, View } from "react-native";
import { Color } from "@/styles/Color";
import { styles } from "./style";
import { useState } from "react";
import { Button } from "../Button";

export function Input({ ...rest }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

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
            borderColor: isFocused
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
      <Button iconName="add" />
    </View>
  );
}
