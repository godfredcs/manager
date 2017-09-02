import React from 'react';
import { View , ActivityIndicator } from 'react-native';


const Spinner = ({ size }) => {
	return (
		<View style={ styles.containerStyles }>
			<ActivityIndicator size={ 'large' || size } />
		</View>
	);
};

const styles = {
	containerStyles: {
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { Spinner };