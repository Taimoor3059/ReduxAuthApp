//import firebase
import firebase from '../../../firebase/config';

export const onUserLogin = ({email, password}) => {
    return async (dispatch) => {
        try {
            const response = firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then( (response) => {
                    console.log('your response is ',response)
                } )
            dispatch({ type: 'DO_LOGIN', payload: response.data })
        } catch(e) {
            console.log('your error is',e)
            dispatch({ type: 'ON_ERROR', payload: e })
        }
    }
}