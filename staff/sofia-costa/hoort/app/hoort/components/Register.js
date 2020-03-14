import React, { Fragment } from 'react';
import { View, Text, StatusBar, Button, Image, TextInput } from 'react-native';
import styles from '../styles/App'

const Register = () => {

    return (
        <Fragment>
            <View>
                <Text>REGISTER</Text>
                <TextInput
                    style={styles.query}
                    placeholder='Your name here...'
                    title='hola'>
                </TextInput>
                <TextInput
                    style={styles.query}
                    placeholder='Decide your unique username!'
                    title='hola'>
                </TextInput>
                <TextInput
                    style={styles.query}
                    placeholder='So you can keep yourself updated ;)'
                    title='hola'>
                </TextInput>
                <TextInput
                    style={styles.query}
                    placeholder="Don't put 123"
                    title='hola'>
                </TextInput>
            </View>
        </Fragment>
    );
};

export default Register
