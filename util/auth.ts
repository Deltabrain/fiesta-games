import auth from '@react-native-firebase/auth';

export function signIn(mail: string, pw: string) {
	if (mail === '' || null || pw === '' || null) {
		console.log('mail or password empty');
		return;
	}

	auth()
		.signInWithEmailAndPassword(mail, pw)
		.then(() => {
			console.log('signed in');
		})
		.catch((error) => {
			if (error.code === 'auth/invalid-email') {
				console.log('That email address is invalid!');
			}

			console.error(error);
		});
}

export function signUp(mail: string, pw: string) {
	if (mail === '' || null || pw === '' || null) {
		console.log('mail or password empty');
		return;
	}
	auth()
		.createUserWithEmailAndPassword(mail, pw)
		.then(() => console.log('User created'))
		.catch((error) => {
			if (error.code === 'auth/email-already-in-use') {
				console.log('That email address is already in use!');
			}

			if (error.code === 'auth/invalid-email') {
				console.log('That email address is invalid!');
			}

			console.error(error);
		});
}

export function signOut() {
	auth()
		.signOut()
		.then(() => console.log('Signed out'))
		.catch((error) => console.error(error));
}
