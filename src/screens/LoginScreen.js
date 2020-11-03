import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { onUserLogin } from '../redux/index';



const _LoginScreen = (props) => {
    const { userReducer, onUserLogin } = props;
    const { user } = userReducer;

    console.log(user)
    return (
        <View style={styles.container}>
            <Text>hello to login screen</Text>
            <TouchableOpacity
                style={{
                    height:50,
                    width:220,
                    marginTop: 10,
                    marginBottom: 10,
                    backgroundColor: '#FF5733',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={ () => onUserLogin({email: 'iqra@gmail.com', password: '123456'}) }
            >
                <Text style={{color: '#FFF', fontSize:18}}>User Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const LoginScreen = connect(mapStateToProps, {onUserLogin})(_LoginScreen)

export { LoginScreen };