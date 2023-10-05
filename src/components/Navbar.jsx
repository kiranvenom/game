import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/pear.png';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
	return (
		<HStack justify={'space-between'} padding={'0.8rem 2rem'}>
			<Image src={logo} boxSize={'60px'} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;
