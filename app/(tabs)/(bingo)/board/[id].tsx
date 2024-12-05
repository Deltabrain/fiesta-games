import { Loading } from '@/components/Loading';
import { BingoBoardItem } from '@/components/bingo/BingoBoardItem';
import { getBoard, shuffleBoard, toggleActive } from '@/lib/db';
import { supabase } from '@/lib/supabase';
import { Corner, type Board } from '@/lib/types';
import { ThemedIconPressable } from '@/themed/ThemedIconPressable';
import { ThemedView } from '@/themed/ThemedView';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

export default function BoardView() {
	const [loading, setLoading] = useState(true);
	const [reloadToggle, setReloadToggle] = useState(false);
	const [items, setItems] = useState<React.JSX.Element[]>();
	const { id } = useLocalSearchParams();

	// Subscribe to changes in bingo table for shuffling
	supabase
		.channel('custom-filter-channel')
		.on(
			'postgres_changes',
			{
				event: '*',
				schema: 'public',
				table: 'boards',
				filter: `id=eq.${id}`,
			},
			() => {
				setReloadToggle(!reloadToggle);
			},
		)
		.subscribe();

	useEffect(() => {
		var nextCorner: Corner = Corner.TopLeft;
		var row: React.JSX.Element[] = [];
		var rowNumber: number = 0;
		const itemArray: React.JSX.Element[] = [];

		getBoard(id.toString()).then((data) => {
			// TODO: save info on active fields to update later
			rowNumber = 0;
			for (var i = 0; i < data.size ** 2; i++) {
				var corner: Corner | null = null;
				if (i === 0) {
					corner = nextCorner++;
				}
				if (i === data.size - 1) {
					corner = nextCorner++;
				}
				if (i === data.size * (data.size - 1)) {
					corner = nextCorner++;
				}
				if (i === data.size ** 2 - 1) {
					corner = nextCorner++;
				}

				console.log(i);

				row.push(
					<BingoBoardItem
						key={i}
						field={i}
						id={data.id}
						value={data.fields[i]}
						initActive={data.fields_active[i]}
						corner={corner}
					/>,
				);
				if (i % data.size === data.size - 1) {
					itemArray.push(
						<ThemedView key={rowNumber} style={styles.row}>
							{row}
						</ThemedView>,
					);
					rowNumber++;
					row = [];
				}
			}

			setItems(itemArray);
			setLoading(false);
			setReloadToggle(false);
		});
	}, [reloadToggle]);

	return loading ? (
		<Loading />
	) : (
		<ThemedView style={styles.default}>
			<ThemedView style={styles.topBar}>
				<ThemedIconPressable
					icon='arrow-back-outline'
					onPress={() => {
						router.back();
					}}
				/>
				<ThemedIconPressable
					icon='reload-outline'
					onPress={() => {
						// TODO: update active fields in db before shuffling
						shuffleBoard(id.toString());
					}}
				/>
			</ThemedView>
			<ThemedView style={styles.bingoContainer}>{items}</ThemedView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	default: {
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	topBar: {
		flex: 0,
		height: '10%',
		marginTop: '5%',
		flexDirection: 'row',
		width: '90%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	bingoContainer: {
		flex: 1,
		height: '100%',
		width: '95%',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		marginBottom: '5%',
	},
	row: {
		flexDirection: 'row',
		height: '15%',
	},
});
