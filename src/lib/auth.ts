import { ToastAndroid } from 'react-native';
import { supabase } from './supabase';

const showToast = (msg: string) => {
	ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.BOTTOM);
};

// TODO: Error handling
export async function signIn(mail: string, pw: string) {
	if (mail === '' || null || pw === '' || null) {
		showToast('Enter email address and password!');
		return;
	}

	const { error } = await supabase.auth.signInWithPassword({
		email: mail,
		password: pw,
	});

	if (error) console.error(error);
}

export async function signUp(mail: string, pw: string, username: string) {
	if (mail === '' || null || pw === '' || null) {
		showToast('Enter email address and password!');
		return;
	}

	const {
		data: { session },
		error,
	} = await supabase.auth.signUp({ email: mail, password: pw });

	if (error) {
		showToast(error.message);
		return;
	}

	if (!session) {
		return;
	}

	await supabase
		.from('users')
		.insert({ user_id: session.user.id, email: mail, username: username });
}

export async function signOut() {
	await supabase.auth.signOut();
}

export async function getUserId() {
	const { data: authData } = await supabase.auth.getSession();

	if (authData.session == null) {
		return 'no user';
	}

	const id = authData.session.user.id;
	return id;
}
