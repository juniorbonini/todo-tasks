import { Color } from "@/styles/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    height: 173,
    backgroundColor: Color.black.black,
    justifyContent: "center",
    alignContent: "center",
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    marginTop: -25
  }, 
  tasksContainer: {
    paddingHorizontal: 35,
    marginTop: 30
  }
});
