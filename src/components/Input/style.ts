import { StyleSheet } from "react-native";
import { fontFamily } from "../../styles/fontFamily";
import { Color } from "../../styles/Color";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 54,
    paddingHorizontal: 24,
    marginTop: -25
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
