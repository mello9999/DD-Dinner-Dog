import firebase from 'firebase'

import { authConstanst } from './constants';
export const Signup = (user ,id) => {
    const auth = firebase.auth
    const firestore = firebase.firestore
    
    return async (dispatch) => {

        const db = firestore();
        
        dispatch({ type: `${authConstanst.USER_LOGIN}_REQUEST` });

        auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                
                const currentUser = auth().currentUser;
                const name = `${user.name}`;
                currentUser.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        
                        //if you are here means it is updated successfully
                        db.collection('users')
                            .doc(data.user.uid)
                            .set({
                                name: user.name,
                                uid: data.user.uid,
                                createdAt: new Date(),
                                isOnline: true,
                                id:id
                            })

                    });
            })
            .catch(error => {
                console.log(error);
            })

    }


}

export const signin = (user) => {
    const auth = firebase.auth
    const firestore = firebase.firestore
    return async dispatch => {

        dispatch({ type: `${authConstanst.USER_LOGIN}_REQUEST` });

        auth()
            .signInWithEmailAndPassword(user.username, user.password)
            .then((data) => {
                

                
                const db = firestore();
                db.collection('users')
                    .doc(data.user.uid)
                    .update({
                        isOnline: true
                    })
                    .then(() => {
                        const name = data.user.displayName;
                        
                        const loggedInUser = {
                            name,
                            uid: data.user.uid,
                            email: data.user.username,
                            
                        }

                        localStorage.setItem('user', JSON.stringify(loggedInUser));

                        dispatch({
                            type: `${authConstanst.USER_LOGIN}_SUCCESS`,
                            payload: { user: loggedInUser }
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })





            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: `${authConstanst.USER_LOGIN}_FAILURE`,
                    payload: { error }
                })
            })



    }
}

export const isLoggedInUser = () => {
    const auth = firebase.auth
    const firestore = firebase.firestore
    return async dispatch => {

        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

        if (user) {
            dispatch({
                type: `${authConstanst.USER_LOGIN}_SUCCESS`,
                payload: { user }
            });
        } else {
            dispatch({
                type: `${authConstanst.USER_LOGIN}_FAILURE`,
                payload: { error: 'Login again please' }
            });
        }


    }
}

export const logout = (uid) => {
    const auth = firebase.auth
    const firestore = firebase.firestore
    return async dispatch => {
        dispatch({ type: `${authConstanst.USER_LOGOUT}_REQUEST` });
        //Now lets logout user

        const db = firestore();
        db.collection('users')
            .doc(uid)
            .update({
                isOnline: false
            })
            .then(() => {

                auth()
                    .signOut()
                    .then(() => {
                        //successfully
                        localStorage.clear();
                        dispatch({ type: `${authConstanst.USER_LOGOUT}_SUCCESS` });
                    })
                    .catch(error => {
                        console.log(error);
                        dispatch({ type: `${authConstanst.USER_LOGOUT}_FAILURE`, payload: { error } })
                    })

            })
            .catch(error => {
                console.log(error);
            })




    }
}

