import { StyleSheet } from "react-native";
import { Color, fontFamily } from "@/styles/globalStyle";

export const styles = StyleSheet.create({
  container: {
    height: 54,
    marginTop: -25,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4
  },
  input: {
    fontFamily: fontFamily.regular,
    color: "white",
    fontSize: 14,
    width: 271,
    padding: 16,
    backgroundColor: Color.gray[500],
    borderRadius: 8,
    borderWidth: 1,
  },
});
