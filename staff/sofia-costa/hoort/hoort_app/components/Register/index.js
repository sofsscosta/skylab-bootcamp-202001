import React, { Fragment, useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'
import Button from '../Button'

function Register({ register, goToLogin }) {

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Fragment>
            <View style={styles.container}>
                <Text style={styles.title}>REGISTER</Text>
                <Text style={styles.subtitle}>Name</Text>
                <TextInput
                    onChangeText={(name) => setName(name)}
                    style={styles.query}
                    placeholder='Your name here...'>
                </TextInput>
                <Text style={styles.subtitle}>Username</Text>
                <TextInput
                    onChangeText={(username) => setUsername(username)}
                    style={styles.query}
                    placeholder='Decide your unique username!'
                    title='username'>
                </TextInput>
                <Text style={styles.subtitle}>Email</Text>
                <TextInput
                    onChangeText={(email) => setEmail(email)}
                    style={styles.query}
                    placeholder='So you can keep yourself updated ;)'
                    title='email'>
                </TextInput>
                <Text style={styles.subtitle}>Password</Text>
                <TextInput
                    onChangeText={(password) => setPassword(password)}
                    style={styles.query}
                    placeholder="Don't put 123"
                    title='password'>
                </TextInput>
                <Button text='Register' type='submit' onPress={function (event) {

                    return register(name, username, email, password)
                }} />
                <TouchableOpacity text='login' onPress={() => {
                    goToLogin()
                }}></TouchableOpacity>
            </View>
        </Fragment>
    );
};

export default Register