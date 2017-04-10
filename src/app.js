import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        //Firebase init
        firebase.initializeApp({
            apiKey: "AIzaSyA714cB9FYzxMnBa1DXEfbnrFeSxHDpOjM",
            authDomain: "react-native-auth-a222b.firebaseapp.com",
            databaseURL: "https://react-native-auth-a222b.firebaseio.com",
            projectId: "react-native-auth-a222b",
            storageBucket: "react-native-auth-a222b.appspot.com",
            messagingSenderId: "270065831633"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;