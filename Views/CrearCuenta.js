import React, {useState} from 'react';
import { View } from 'react-native';
import { Container,Input, Button, Text, H1, Form, Item, Toast } from 'native-base';
import globalStyles from '../styles/global';
import { Root } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { gql, useMutation } from '@apollo/client';

const NUEVA_CUENTA = gql`
    mutation crearUsuario($input: UsuarioInput){
        crearUsuario(input:$input)
    }
`
const CrearCuenta = () => {
    //navigación del formulario
    const navigation = useNavigation();

    const [crearUsuario] = useMutation(NUEVA_CUENTA);

    //State del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [mensaje, setMensaje] = useState(null)

    const handleSubmit = async () => {
        // validar
        if (nombre === '' || email == '' || password === ''){
            setMensaje('Todos los campos son obligatorios');
            return;
        }
        // password longitud mínima
        if (password.length < 6){
            setMensaje('El nombre debe ser de al menos 6 caracteres');
        }
        // guardar usuario

        try {
            console.log('previo a la creación');
            const { data } = await crearUsuario({
                variables: {
                    input: {
                        nombre,
                        email,
                        password
                    }
                }
            });

            console.log('después de la creación');
            setMensaje(data.crearUsuario);
            navigation.navigate('Login')
        } catch (error) {
            setMensaje(error.message.replace('Graphl error:', ''));
        }
    }

    const mostrarAlerta = () => {
        Toast.show({
            text: mensaje,
            buttonText: 'OK',
            duration: 5000
        })
    }
    return (
        <Root>
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
                        placeholder="Nombre"
                        onChangeText={texto=>setNombre(texto)}
                        />
                    </Item>
                <Item inlineLabel last
                    style={globalStyles.input}>
                        <Input 
                        placeholder="Email"
                        onChangeText={texto=>setEmail(texto)}/>
                </Item>
                <Item inlineLabel last
                    style={globalStyles.input}>
                        <Input 
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={texto=>setPassword(texto)}/>
                    </Item>
                </Form>
                
                <Button
                square
                block
                style={globalStyles.boton}
                onPress={() => handleSubmit()}
                >
                    <Text 
                        style={globalStyles.botonTexto}>
                        Crear Cuenta
                    </Text>
                </Button>

{mensaje && mostrarAlerta() }
            </View>
        </Container>
        </Root>
        )
}
 
export default CrearCuenta;