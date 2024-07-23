// TODO: lookup table for cards
import { Image } from 'react-native';

const cardImages: Record<string, any> = {
	ace_of_spades: require('@/assets/images/cards/ace_of_spades.png'),
	ace_of_hearts: require('@/assets/images/cards/ace_of_hearts.png'),
	ace_of_diamonds: require('@/assets/images/cards/ace_of_diamonds.png'),
	ace_of_clubs: require('@/assets/images/cards/ace_of_clubs.png'),
	two_of_spades: require('@/assets/images/cards/two_of_spades.png'),
	two_of_hearts: require('@/assets/images/cards/two_of_hearts.png'),
	two_of_diamonds: require('@/assets/images/cards/two_of_diamonds.png'),
	two_of_clubs: require('@/assets/images/cards/two_of_clubs.png'),
	three_of_spades: require('@/assets/images/cards/three_of_spades.png'),
	three_of_hearts: require('@/assets/images/cards/three_of_hearts.png'),
	three_of_diamonds: require('@/assets/images/cards/three_of_diamonds.png'),
	three_of_clubs: require('@/assets/images/cards/three_of_clubs.png'),
	four_of_spades: require('@/assets/images/cards/four_of_spades.png'),
	four_of_hearts: require('@/assets/images/cards/four_of_hearts.png'),
	four_of_diamonds: require('@/assets/images/cards/four_of_diamonds.png'),
	four_of_clubs: require('@/assets/images/cards/four_of_clubs.png'),
	five_of_spades: require('@/assets/images/cards/five_of_spades.png'),
	five_of_hearts: require('@/assets/images/cards/five_of_hearts.png'),
	five_of_diamonds: require('@/assets/images/cards/five_of_diamonds.png'),
	five_of_clubs: require('@/assets/images/cards/five_of_clubs.png'),
	six_of_spades: require('@/assets/images/cards/six_of_spades.png'),
	six_of_hearts: require('@/assets/images/cards/six_of_hearts.png'),
	six_of_diamonds: require('@/assets/images/cards/six_of_diamonds.png'),
	six_of_clubs: require('@/assets/images/cards/six_of_clubs.png'),
	seven_of_spades: require('@/assets/images/cards/seven_of_spades.png'),
	seven_of_hearts: require('@/assets/images/cards/seven_of_hearts.png'),
	seven_of_diamonds: require('@/assets/images/cards/seven_of_diamonds.png'),
	seven_of_clubs: require('@/assets/images/cards/seven_of_clubs.png'),
	eight_of_spades: require('@/assets/images/cards/eight_of_spades.png'),
	eight_of_hearts: require('@/assets/images/cards/eight_of_hearts.png'),
	eight_of_diamonds: require('@/assets/images/cards/eight_of_diamonds.png'),
	eight_of_clubs: require('@/assets/images/cards/eight_of_clubs.png'),
	nine_of_spades: require('@/assets/images/cards/nine_of_spades.png'),
	nine_of_hearts: require('@/assets/images/cards/nine_of_hearts.png'),
	nine_of_diamonds: require('@/assets/images/cards/nine_of_diamonds.png'),
	nine_of_clubs: require('@/assets/images/cards/nine_of_clubs.png'),
	ten_of_spades: require('@/assets/images/cards/ten_of_spades.png'),
	ten_of_hearts: require('@/assets/images/cards/ten_of_hearts.png'),
	ten_of_diamonds: require('@/assets/images/cards/ten_of_diamonds.png'),
	ten_of_clubs: require('@/assets/images/cards/ten_of_clubs.png'),
	jack_of_spades: require('@/assets/images/cards/jack_of_spades.png'),
	jack_of_hearts: require('@/assets/images/cards/jack_of_hearts.png'),
	jack_of_diamonds: require('@/assets/images/cards/jack_of_diamonds.png'),
	jack_of_clubs: require('@/assets/images/cards/jack_of_clubs.png'),
	queen_of_spades: require('@/assets/images/cards/queen_of_spades.png'),
	queen_of_hearts: require('@/assets/images/cards/queen_of_hearts.png'),
	queen_of_diamonds: require('@/assets/images/cards/queen_of_diamonds.png'),
	queen_of_clubs: require('@/assets/images/cards/queen_of_clubs.png'),
	king_of_spades: require('@/assets/images/cards/king_of_spades.png'),
	king_of_hearts: require('@/assets/images/cards/king_of_hearts.png'),
	king_of_diamonds: require('@/assets/images/cards/king_of_diamonds.png'),
	king_of_clubs: require('@/assets/images/cards/king_of_clubs.png'),
};

export function CardView({ card }: { card: string }) {
	return <Image source={cardImages[card]} style={{ width: 320, height: 464 }} />;
}
