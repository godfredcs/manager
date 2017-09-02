import React from 'react';
import { View , Text } from 'react-native';

const Card = ({ children }) => {
	return (
		<View style={ styles.containerStyles }>
			{ children }
		</View>
	);
};

const styles = {
	containerStyles: {
		borderColor: 'red',
		borderBottomWidth: 2,
		padding: 5
	}
};

export { Card };