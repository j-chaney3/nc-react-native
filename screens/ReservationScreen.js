import { useState } from 'react';
import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	Switch,
	Button,
	Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';

const ReservationScreen = () => {
	const [campers, setCampers] = useState(1);
	const [hikeIn, setHikeIn] = useState(false);
	const [date, setDate] = useState(new Date());
	const [showCalender, setShowCalender] = useState(false);

	const onDateChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShowCalender(Platform.OS === 'ios');
		setDate(currentDate);
	};

	const handleReservation = () => {
		console.log('campers:', campers);
		console.log('hikeIn', hikeIn);
		console.log('date:', date);

		Alert.alert(
			'Begin Search?',
			`Number of Campers: ${campers} \nhike in? ${
				hikeIn ? 'True' : 'False'
			} \nDate: ${date.toLocaleDateString('en-US')}`,
			[
				{
					text: ' cancel',
					style: 'cancel',
				},
				{
					text: 'Ok',
				},
			],
			{ cancelable: false }
		);
	};

	const resetForm = () => {
		setCampers(1);
		setHikeIn(false);
		setDate(new Date());
		setShowCalender(false);
	};

	return (
		<Animatable.View animation="zoomIn" duration={2000} delay={1000}>
			<ScrollView>
				<View style={styles.formRow}>
					<Text style={styles.formLabel}>Number of Campers:</Text>
					<Picker
						style={styles.formItem}
						selectedValue={campers}
						onValueChange={(itemValue) => setCampers(itemValue)}
					>
						<Picker.Item label="1" value={1} />
						<Picker.Item label="2" value={2} />
						<Picker.Item label="3" value={3} />
						<Picker.Item label="4" value={4} />
						<Picker.Item label="5" value={5} />
						<Picker.Item label="6" value={6} />
					</Picker>
				</View>
				<View style={styles.formRow}>
					<Text style={styles.formLabel}>Hike In?</Text>
					<Switch
						style={styles.formItem}
						value={hikeIn}
						trackColor={{ true: '#5637dd', false: null }}
						onValueChange={(value) => setHikeIn(value)}
					/>
				</View>
				<View style={styles.formRow}>
					<Text style={styles.formLabel}>Date:</Text>
					<Button
						onPress={() => setShowCalender(!showCalender)}
						title={date.toLocaleDateString('en-US')}
						color="#5637dd"
						accessibilityLabel="Tap me to select a reservation date"
					/>
				</View>
				{showCalender && (
					<DateTimePicker
						style={styles.formItem}
						value={date}
						mode="date"
						display="default"
						onChange={onDateChange}
					/>
				)}
				<View style={styles.formRow}>
					<Button
						onPress={() => handleReservation()}
						title="Search Availibilty"
						color="#5637dd"
						accessibilityLabel="Tap me to search for available campsites"
					/>
				</View>
			</ScrollView>
		</Animatable.View>
	);
};

const styles = StyleSheet.create({
	formRow: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row',
		margin: 20,
	},
	formLabel: {
		fontSize: 18,
		flex: 2,
	},
	formItem: {
		flex: 1,
	},
	modal: {
		justifyContent: 'center',
		margin: 20,
	},
	modalTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		backgroundColor: '#5637dd',
		textAlign: 'center',
		color: '#fff',
		marginBottom: 20,
	},
	modalText: {
		fontSize: 18,
		margin: 10,
	},
});

export default ReservationScreen;
