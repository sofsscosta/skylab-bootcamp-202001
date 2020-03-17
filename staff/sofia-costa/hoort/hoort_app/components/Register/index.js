import React, { Fragment, useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { registerUser } from '../../logic'
import styles from './style'
import Button from '../Button'

function Register({ goToLogin }) {

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function register(name, username, email, password) {

        try {
            await registerUser(name, username, email, password)
            console.log('yeah baby')
            goToLogin()
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
                <Text style={styles.title}>REGISTER</Text>
                <TextInput
                    onChangeText={(name) => setName(name)}
                    style={styles.input}
                    placeholder='Your name here...'>
                </TextInput>
                <TextInput
                    onChangeText={(username) => setUsername(username)}
                    style={styles.input}
                    placeholder='Your unique username!'
                    title='username'>
                </TextInput>
                <TextInput
                    onChangeText={(email) => setEmail(email)}
                    style={styles.input}
                    placeholder='Email'
                    title='email'>
                </TextInput>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    style={styles.input}
                    placeholder="Password"
                    title='password'>
                </TextInput>
                <Button
                    text='Register'
                    type='submit'
                    onPress={function (event) {

                        return register(name, username, email, password)
                    }} />
                <Button
                    text='Sign in'
                    type='redirect'
                    onPress={function (event) {

                        return goToLogin()
                    }} />
            </View>
        </Fragment>
    );
};

export default Register