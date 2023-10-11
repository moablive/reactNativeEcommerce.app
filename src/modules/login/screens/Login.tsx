import { View,Text  } from "react-native"
import { ContainerLogin } from "../styles/login.style"
import  Input  from "../../../shared/components/input/input"
import Button from "../../../shared/components/button/Button"

const Login = () => {
    const handleOnPress = () => {
      console.log('CLICOU AQUI ')
    }
    return(
      <View>
        <ContainerLogin> 
          <Text> TXT </Text>
          <Input />
          <Button margin="15px" title="ENTRAR" onPress={handleOnPress}/>
        </ContainerLogin>
      </View>
    )
}

export default Login
