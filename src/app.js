import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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

        // Bind to login/logout state. user is object
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                    </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={{ alignSelf: 'center' }}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;