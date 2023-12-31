import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
	const { games, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={3} spacing="10px">
				{isLoading && skeletons.map((ske) => <GameCardSkeleton key={ske} />)}
				{Array.isArray(games) &&
					games.map((game) => <GameCard key={game.id} game={game} />)}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
