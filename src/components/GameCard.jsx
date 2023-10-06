import { Card, CardBody, Image, Heading } from '@chakra-ui/react';
import CriticScore from './CriticSrore';

const GameCard = ({ game }) => {
	return (
		<Card borderRadius={'10px'} overflow={'hidden'}>
			<Image src={game.background_image} />
			<CardBody>
				<Heading fontSize={'2xl'}>{game.name}</Heading>
				<CriticScore score={game.metacritic}/>
			</CardBody>
		</Card>
	);
};

export default GameCard;
