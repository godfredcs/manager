import React , { Component } from 'react';
import { View , Text } from 'react-native';
import { Provider , connect } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Header } from './components/common';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		const config = {
			apiKey: 'AIzaSyAGAKbY3d2nV_jXRqo8zR4fK1jcpH1K4yY',
			authDomain: 'manager-b624f.firebaseapp.com',
			databaseURL: 'https://manager-b624f.firebaseio.com',
			projectId: 'manager-b624f',
			storageBucket: 'manager-b624f.appspot.com',
			messagingSenderId: '592664041821'
		};

		firebase.initializeApp(config);	
	}

	render() {
		const store = createStore(reducers , {} , applyMiddleware(ReduxThunk));
		return (
			<Provider store={ store }>
				<Router />
			</Provider>
		);
	}
}

export default App;