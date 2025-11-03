import { Color } from "@/styles/Color";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  textBold: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: Color.gray[300],
  },
  text: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: Color.gray[300],
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
});
