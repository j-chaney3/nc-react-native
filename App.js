import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
//console.disableYellowBox = true; //uncomment to disable yellow box dev warnings if wanted

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Main />
			</NavigationContainer>
		</Provider>
	);
}
