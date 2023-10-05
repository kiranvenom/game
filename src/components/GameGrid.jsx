import { useEffect, useState } from 'react';
import apiClinet from '../services/api-client';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {
	const [games, setGame] = useState([]);
	const [error, seterror] = useState('');

	useEffect(() => {
		apiClinet
			.get('/games')
			.then((res) => setGame(res.data.results))
			.catch((error) => seterror(error.message));
	});

	return (
		<>
			{error && <Text>{error}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
