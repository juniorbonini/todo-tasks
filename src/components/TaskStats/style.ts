import { Color } from "@/styles/Color";
import { fontFamily } from "@/styles/FontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: Color.gray[300],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  createdTask: {
    color: Color.blue["blue-dark"],
    fontFamily: fontFamily.bold,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10

  },
  completedTask: {
    color: Color.purple["purple-dark"],
    fontFamily: fontFamily.bold,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
});
