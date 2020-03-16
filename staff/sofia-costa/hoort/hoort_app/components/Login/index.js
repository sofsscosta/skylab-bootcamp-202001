import React, { Fragment, useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { authenticateUser, retrieveUser } from '../../logic'
import styles from './style'
import Button from '../Button'

function Login({ goToRegister, goToLanding }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function login(name, username, email, password) {
        try {
            let token = await authenticateUser(name, username, email, password)
            await retrieveUser(token)
            goToLanding()
        }
        catch (error) {
            console.log('error message here')
            const { message } = error

            console.log(message)
        }
    }

    return (
        <Fragment>
            <View style={styles.container}>
                <Text style={styles.title}>LOGIN</Text>
                <TextInput
                    onChangeText={(email) => setEmail(email)}
                    style={styles.query}
                    placeholder='Email here!'
                    title='email'>
                </TextInput>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    style={styles.query}
                    placeholder="Don't put 123"
                    title='password'>
                </TextInput>
                <Button
                    text='Login'
                    type='submit'
                    onPress={function (event) {

                        return login(email, password)
                    }} />
                <Button
                    text='Sign up!'
                    type='redirect'
                    onPress={function (event) {

                        return goToRegister()
                    }} />
            </View>
        </Fragment >
    );
};

export default Login