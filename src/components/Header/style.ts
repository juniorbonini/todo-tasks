import { StyleSheet } from "react-native";
import { Color } from "../../styles/Color";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 173,
    backgroundColor: Color.black.black,
  },
  imageContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 25

  },
  image: {
    marginLeft: '35%'
  },
});
