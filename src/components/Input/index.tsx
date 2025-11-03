import {
  Keyboard,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";

import { styles } from "./style";
import { Button } from "../Button";
import { Color } from "@/styles/Color";

export function Input({ ...rest }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocusInput() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
    </TouchableWithoutFeedback>
  );
}
