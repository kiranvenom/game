import { useEffect, useState } from 'react';
import apiClinet from '../services/api-client';

const useGames = () => {
	const [games, setGames] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const controller = new AbortController();
		apiClinet
			.get('/games', { signal: controller.signal })
			.then((res) => setGames(res.data.results))
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
			});
		return () => controller.abort();
	}, []);

	return { games, error };
};

export default useGames;
