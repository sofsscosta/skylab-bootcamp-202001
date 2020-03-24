import React, { Fragment, useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { authenticateUser, retrieveUser } from '../../logic'
import { AsyncStorage } from 'react-native'
import styles from './style'
import { Feedback, Button } from '../'

function Login({ goToRegister, goToLanding }) {

    const [error, setError] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function login(name, username, email, password) {

        try {
            let token = await authenticateUser(name, username, email, password)

            await AsyncStorage.setItem('token', token)

            let _token = await AsyncStorage.getItem('token')

            return goToLanding()
        }
        catch (error) {
            const { message } = error
            setError(message)
        }
    }

    return (
        <Fragment>
            <TouchableWithoutFeedback onPress={() => setError(undefined)}>
                <View style={styles.container}>
                    <Text style={styles.title}>LOGIN</Text>
                    <TextInput
                        onChangeText={(email) => setEmail(email)}
                        style={styles.input}
                        placeholder='Email here!'
                        title='email'>
                    </TextInput>
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                        style={styles.input}
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
                    {error &&
                        <View style={styles.feedback}>
                            <Feedback level='error' message={error} />
                        </View>
                    }
                </View>
            </TouchableWithoutFeedback>
        </Fragment >
    );
};

export default Login