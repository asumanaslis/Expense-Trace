import auth from '@react-native-firebase/auth';
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER_FAILED
} from './types';


export const register = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: REGISTER_START });
        await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
                dispatch({ type: REGISTER_SUCCESS });
            })
            .catch(error => {
                dispatch({ type: REGISTER_FAILED });
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email is already in use');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
            })
    };
};

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_START });
        await auth()
            .signInWithEmailAndPassword(email, password)
            .then(async () => {
                dispatch({ type: LOGIN_SUCCESS });
            })
            .catch((error) => {
                dispatch({ type: LOGIN_FAILED });
                console.log('login failed')
            })

    };
};

