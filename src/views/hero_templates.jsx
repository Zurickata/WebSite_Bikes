import {
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

import CaptionCarousel from '../components/carrusel.jsx';
import Card from '../components/card';
import products from '../assets/ej_products';
import Divider from '../components/divider';

function HeroTemplates() {
  return (
    <Flex
		align={'center'}
		justify={'center'}
		direction="column" 
		bg={useColorModeValue('gray.50', 'gray.800')}>
      	<CaptionCarousel width="100%" />
		<Divider title="Productos Destacados"/>
      	<Flex
			wrap="wrap"
			justify="center"
			maxW="1200px"
			style={{ gap: '20px' }}>
			{products.slice(0, 3).map((product) => (
			<Card
				key={product.id}
				image={product.image}
				brand={product.brand}
				title={product.name}
				price={product.price}
				oldPrice={product.oldPrice}
				productId={product.id}
			/>
			))}
      	</Flex>
		<Divider title="Servicios Integrales"/>
    </Flex>
  );
}

export default HeroTemplates;