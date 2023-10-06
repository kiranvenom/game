import { useEffect, useState } from 'react';
import apiClinet from '../services/api-client';

const useGames = () => {
	const [games, setGames] = useState([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		apiClinet
			.get('/games', { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
				setLoading(false);
			})
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default useGames;
