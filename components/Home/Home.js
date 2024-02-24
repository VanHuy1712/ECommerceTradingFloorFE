import { View, Text } from "react-native"
import MyStyles from "../../styles/MyStyles"
import Style from "./Style"

const Home = () => {
    return (
        <View style={MyStyles.container}>
            <Text style={Style.subject}>HOME</Text>
        </View>
    )
}

export default Home