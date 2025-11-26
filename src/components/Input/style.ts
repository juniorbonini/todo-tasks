import { Color } from "@/styles/Color";
import { fontFamily } from "@/styles/FontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    justifyContent: "center",
  },
  input: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    width: 300,
    height: 57,
    padding: 16,
    backgroundColor: Color.gray[500],
    borderRadius: 8,
    borderWidth: 1,
    color: Color.gray[100]
  },
});
