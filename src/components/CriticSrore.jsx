import { Badge } from '@chakra-ui/react';
import React from 'react';

const CriticSrore = ({ score }) => {
	let color = score > 75 ? 'greendis' : score > 60 ? 'yello' : '';
	return (
		<Badge colorScheme={color} marginTop={'20px'}>
			{score}
		</Badge>
	);
};

export default CriticSrore;
