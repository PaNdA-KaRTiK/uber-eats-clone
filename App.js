import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: Platform.OS === "android" ? 50 : 0
  },
});