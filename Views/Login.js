import React from 'react';
import { View } from 'react-native';
import { Container,Input, Button, Text, H1, Form, Item, Toast } from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
const navigation = useNavigation();
    return (
        <Container
            style={[globalStyles.contenedor, 
                {backgroundColor: '#e84347'}]}>
            <View 
                style={globalStyles.contenido}>
                <H1 style={globalStyles.titulo}>UpTask</H1>
                <Form>
                    <Item inlineLabel last
                    style={globalStyles.input}>
                        <Input 
                        placeholder="Email"/>
                    </Item>
                    <Item inlineLabel last
                    style={globalStyles.input}>
                        <Input 
                        secureTextEntry={true}
                        placeholder="Password"/>
                    </Item>
                </Form>
                
                <Button
                square
                block
                style={globalStyles.boton}>
                    <Text 
                        style={globalStyles.botonTexto}>
                        Iniciar Sesión
                    </Text>
                </Button>

                <Text style={globalStyles.enlace}
                onPress={()=>navigation.navigate("CrearCuenta")}>Crear Cuenta</Text>
            </View>
        </Container>
        )
}
 
export default Login;