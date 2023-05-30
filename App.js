import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
//console.disableYellowBox = true; //uncomment to disable yellow box dev warnings if wanted

export default function App() {
	return (
		<NavigationContainer>
			<Main />
		</NavigationContainer>
	);
}
