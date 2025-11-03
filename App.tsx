import { Inter_400Regular, Inter_700Bold ,useFonts } from "@expo-google-fonts/inter"
import { Loading } from "./src/components/Loading"
import { View } from "react-native"


export default function App() {
 const fontsLoaded = useFonts({
 Inter_400Regular,
 Inter_700Bold
 })

 if(!fontsLoaded) {
    return <Loading />
 }

    return 
    (
        <View>
            
        </View>
    )
}