import { StyleSheet } from "react-native";
import { Color, fontFamily } from "@/styles/globalStyle";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 54,
    marginTop: -25,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5
  },
  input: {
    fontFamily: fontFamily.regular,
    color: "white",
    fontSize: 12,
    width: 271,
    padding: 16,
    backgroundColor: Color.gray[500],
    borderRadius: 8,
    borderWidth: 1,
  },
});
