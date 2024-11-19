import { BingoItem } from '@/components/BingoItem';
import { TopBar } from '@/components/layout/TopBar';
import { ThemedIconPressable } from '@/components/themed/ThemedIconPressable';
import { ThemedText } from '@/components/themed/ThemedText';
import { ThemedTextPressable } from '@/components/themed/ThemedTextPressable';
import { ThemedView } from '@/components/themed/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { getFields, setFields } from '@/util/db';
import { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Bingo() {
	const buttonActiveColor = useThemeColor('primary_dark');
	const textColor = useThemeColor('text');
	const textButtonColor = useThemeColor('text_button');
	const fadedTextColor = useThemeColor('text_faded');
	const warningColor = useThemeColor('warning');
	const neutralColor = useThemeColor('neutral');

	const [editMode, setEditMode] = useState(false);
	const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

	const board: any[] = [];
	useEffect(() => {
		getFields(auth().currentUser?.uid).then((res) => {
			for (let i = 0; i < 9; i++) {
				board.push(res![i]);
			}
			setField0(board[0]);
			setField1(board[1]);
			setField2(board[2]);
			setField3(board[3]);
			setField4(board[4]);
			setField5(board[5]);
			setField6(board[6]);
			setField7(board[7]);
			setField8(board[8]);
		});
	});

	const [field0, setField0] = useState('');
	const [field1, setField1] = useState('');
	const [field2, setField2] = useState('');
	const [field3, setField3] = useState('');
	const [field4, setField4] = useState('');
	const [field5, setField5] = useState('');
	const [field6, setField6] = useState('');
	const [field7, setField7] = useState('');
	const [field8, setField8] = useState('');

	function resetFields(): void {
		setField0('');
		setField1('');
		setField2('');
		setField3('');
		setField4('');
		setField5('');
		setField6('');
		setField7('');
		setField8('');
	}

	const fields = [
		field0,
		field1,
		field2,
		field3,
		field4,
		field5,
		field6,
		field7,
		field8,
	];

	return (
		<ThemedView style={styles.default}>
			<TopBar />
			<Modal
				visible={showConfirmationPopup}
				transparent={true}
				animationType='fade'
				statusBarTranslucent={true}
			>
				<ThemedView style={styles.modal}>
					<ThemedView style={styles.textContainer}>
						<ThemedText style={[styles.text, { color: textColor }]}>
							Are you sure you want to delete all entries?
						</ThemedText>
					</ThemedView>
					<ThemedView style={styles.buttonContainer}>
						<ThemedTextPressable
							text='No'
							style={styles.button}
							onPress={() => {
								setShowConfirmationPopup(false);
							}}
						/>
						<ThemedTextPressable
							text='Yes'
							style={styles.button}
							onPress={() => {
								setShowConfirmationPopup(false);
								resetFields();
							}}
						/>
					</ThemedView>
				</ThemedView>
			</Modal>
			<ThemedView style={styles.bingoContainer}>
				<ThemedView style={styles.row}>
					<BingoItem editMode={editMode} corner='TopLeft'>
						<ThemedText
							style={[
								styles.bingoText,
								{ color: textButtonColor },
								editMode ? styles.hidden : {},
							]}
						>
							{field0}
						</ThemedText>
						<TextInput
							placeholder='Enter...'
							placeholderTextColor={useThemeColor('placeholderText')}
							defaultValue={field0}
							onChangeText={(newText) => setField0(newText)}
							style={[
								styles.bingoInput,
								editMode ? {} : styles.hidden,
								{ color: fadedTextColor },
							]}
						/>
					</BingoItem>
					<BingoItem editMode={editMode}>
						<ThemedText
							style={[
								styles.bingoText,
								{ color: textButtonColor },
								editMode ? styles.hidden : {},
							]}
						>
							{field1}
						</ThemedText>
						<TextInput
							placeholder='Enter...'
							placeholderTextColor={useThemeColor('placeholderText')}
							value={field1}
							onChangeText={(newText) => setField1(newText)}
							style={[
								styles.bingoInput,
								editMode ? {} : styles.hidden,
								{ color: fadedTextColor },
							]}
						/>
					</BingoItem>
					<BingoItem editMode={editMode} corner='TopRight'>
						<ThemedText
							style={[
								styles.bingoText,
								{ color: textButtonColor },
								editMode ? styles.hidden : {},
							]}
						>
							{field2}
						</ThemedText>
						<TextInput
							placeholder='Enter...'
							placeholderTextColor={useThemeColor('placeholderText')}
							defaultValue={field2}
							onChangeText={(newText) => setField2(newText)}
							style={[
								styles.bingoInput,
								editMode ? {} : styles.hidden,
								{ color: fadedTextColor },
							]}
						/>
					</BingoItem>
				</ThemedView>
				<ThemedView style={styles.row}>
					<BingoItem editMode={editMode}>
						<ThemedText
							style={[
								styles.bingoText,
								{ color: textButtonColor },
								editMode ? styles.hidden : {},
							]}
						>
							{field3}
						</ThemedText>
						<TextInput
							placeholder='Enter...'
							placeholderTextColor={useThemeColor('placeholderText')}
							defaultValue={field3}
							onChangeText={(newText) => setField3(newText)}
							style={[
								styles.bingoInput,
								editMode ? {} : styles.hidden,
								{ color: fadedTextColor },
							]}
						/>
					</BingoItem>
					<BingoItem editMode={editMode}>
						<ThemedText
							style={[
								styles.bingoText,
								{ color: textButtonColor },
								editMode ? styles.hidden : {},
							]}
						>
							{field4}
						</ThemedText>
						<TextInput
							placeholder='Enter...'
							placeholderTextColor={useThemeColor('placeholderText')}
							defaultValue={field4}
							onChangeText={(newText) => setField4(newText)}
							style={[
								styles.bingoInput,
								editMode ? {} : styles.hidden,
								{ color: fadedTextColor },
							]}
						/>
					</BingoItem>
					<BingoItem editMode={editMode}>
						<ThemedText
							style={[
								styles.bingoText,
								{ color: textButtonColor },
								editMode ? styles.hidden : {},
							]}
						>
							{field5}
						</ThemedText>
						<TextInput
							placeholder='Enter...'
							placeholderTextColor={useThemeColor('placeholderText')}
							defaultValue={field5}
							onChangeText={(newText) => setField5(newText)}
							style={[
								styles.bingoInput,
								editMode ? {} : styles.hidden,
								{ color: fadedTextColor },
							]}
						/>
					</BingoItem>
				</ThemedView>
				<ThemedView style={styles.row}>
					<BingoItem editMode={editMode} corner='BottomLeft'>
						<ThemedText
							style={[
								styles.bingoText,
								{ color: textButtonColor },
								editMode ? styles.hidden : {},
							]}
						>
							{field6}
						</ThemedText>
						<TextInput
							placeholder='Enter...'
							placeholderTextColor={useThemeColor('placeholderText')}
							defaultValue={field6}
							onChangeText={(newText) => setField6(newText)}
							style={[
								styles.bingoInput,
								editMode ? {} : styles.hidden,
								{ color: fadedTextColor },
							]}
						/>
					</BingoItem>
					<BingoItem editMode={editMode}>
						<ThemedText
							style={[
								styles.bingoText,
								{ color: textButtonColor },
								editMode ? styles.hidden : {},
							]}
						>
							{field7}
						</ThemedText>
						<TextInput
							placeholder='Enter...'
							placeholderTextColor={useThemeColor('placeholderText')}
							defaultValue={field7}
							onChangeText={(newText) => setField7(newText)}
							style={[
								styles.bingoInput,
								editMode ? {} : styles.hidden,
								{ color: fadedTextColor },
							]}
						/>
					</BingoItem>
					<BingoItem editMode={editMode} corner='BottomRight'>
						<ThemedText
							style={[
								styles.bingoText,
								{ color: textButtonColor },
								editMode ? styles.hidden : {},
							]}
						>
							{field8}
						</ThemedText>
						<TextInput
							placeholder='Enter...'
							placeholderTextColor={useThemeColor('placeholderText')}
							defaultValue={field8}
							onChangeText={(newText) => setField8(newText)}
							style={[
								styles.bingoInput,
								editMode ? {} : styles.hidden,
								{ color: fadedTextColor },
							]}
						/>
					</BingoItem>
				</ThemedView>
			</ThemedView>
			<ThemedView style={styles.bottomBar}>
				<ThemedIconPressable
					disabled={!editMode}
					icon='trash-outline'
					onPress={() => setShowConfirmationPopup(true)}
					style={
						editMode
							? { backgroundColor: warningColor }
							: { backgroundColor: neutralColor }
					}
				/>
				<Text
					style={[
						styles.editModeText,
						{ color: fadedTextColor },
						editMode ? {} : { color: 'transparent' },
					]}
				>
					Edit Mode
				</Text>
				<ThemedIconPressable
					icon={editMode ? 'checkmark-done' : 'cog-outline'}
					onPress={() => {
						if (editMode) {
							setFields(auth().currentUser?.uid, fields);
						}
						setEditMode(!editMode);
					}}
					style={editMode ? { backgroundColor: buttonActiveColor } : {}}
				/>
			</ThemedView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	default: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bingoContainer: {
		flex: 3,
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
	},
	bingoText: {
		textAlign: 'center',
		textAlignVertical: 'center',
		flexWrap: 'wrap',
	},
	bingoInput: {
		textAlignVertical: 'center',
		textAlign: 'center',
		flexWrap: 'wrap',
		alignSelf: 'center',
	},
	bottomBar: {
		width: '100%',
		marginBottom: '5%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	editModeText: {
		textAlign: 'center',
		textAlignVertical: 'center',
		color: '#afafaf',
	},
	modal: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.9,
	},
	buttonContainer: {
		backgroundColor: 'transparent',
		display: 'flex',
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	textContainer: {
		backgroundColor: 'transparent',
		display: 'flex',
		flex: 0,
		justifyContent: 'center',
		textAlignVertical: 'center',
		width: '60%',
	},
	button: {
		padding: 10,
		margin: 10,
		marginTop: 20,
		height: 50,
		width: '45%',
	},
	text: {
		display: 'flex',
		flex: 0,
		flexWrap: 'wrap',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	hidden: {
		display: 'none',
	},
});
