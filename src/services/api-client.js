import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'fc0f093332894661b00259989179667a',
	},
});
