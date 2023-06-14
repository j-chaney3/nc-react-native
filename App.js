import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/LoadingComponent';
//console.disableYellowBox = true; //uncomment to disable yellow box dev warnings if wanted
//
export default function App() {
	return (
		<Provider store={store}>
			<PersistGate lading={<Loading />} persistor={persistor}>
				<NavigationContainer>
					<Main />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
