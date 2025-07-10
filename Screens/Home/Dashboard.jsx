import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toggle from './Toggle';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
const Dashboard = ({ navigation, admin }) => {
    const [isPetrol, setIsPetrol] = useState(true);

    const [isDesel, setIsDesel] = useState(false);
    const [isGas, setIsGas] = useState(false);

    const [isOn, setIsOn] = useState(false);
    const [vehicleNo, setVehicleNo] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');

    // const toggleSwitch = () => setIsPetrol(previousState => !previousState);

    const onProceed = async () => {
        try {

            // const res = await axios.post('http://192.168.58.158:3000/summary', { isPetrol, isDesel, isGas, vehicleNo, name, quantity, amount })
            // if (res) {
            navigation.navigate('summary', { isPetrol, isDesel, isGas, vehicleNo, name, quantity, amount });
            // }
        } catch (error) {
            console.error('Error proceeding with fuel selection:', error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 30 }}>

                        <LinearGradient
                            colors={['green', 'darkgreen']} // light green to dark green
                            style={{ padding: 10, width: 500, height: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 30 }}
                        >
                            <Image source={require('../../assets/profile.jpg')} style={{ width: 70, height: 70, borderRadius: 70 }} />
                            <Text style={{ color: '#fff', fontSize: 20 }}> welcome {admin ? 'Admin' : 'Staff'} </Text>
                        </LinearGradient>


                    </View>
                    <Text style={{ color: 'green', fontSize: 20 }}> Select fuel variant</Text>
                    <View display='flex' style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, gap: 20 }}>

                        <Toggle toggleSwitch={() => { setIsPetrol(!isPetrol); setIsDesel(false); setIsGas(false); }} isOn={isPetrol} label="Petrol" />
                        <Toggle toggleSwitch={() => { setIsDesel(!isDesel); setIsPetrol(false); setIsGas(false); }} isOn={isDesel} label="Diesel" />
                        <Toggle toggleSwitch={() => { setIsGas(!isGas); setIsPetrol(false); setIsDesel(false); }} isOn={isGas} label="Gas" />

                    </View>
                    <Text style={{ color: 'green', fontSize: 24, marginTop: 20 }}> Vehicle Details</Text>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                            <TextInput
                                placeholder='Vehicle Number'
                                value={vehicleNo}
                                onChangeText={setVehicleNo}
                                style={{
                                    backgroundColor: '#f0f0f0', width: 250,
                                    padding: 10,
                                    borderRadius: 10,
                                    borderColor: 'black',
                                    borderStyle: 'dashed',
                                    borderWidth: 2,
                                    marginTop: 20,
                                    marginLeft: 8
                                }}
                            />
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 20, marginTop: 20 }}
                                source={require('../../assets/camera.jpg')}
                            />
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 20, marginTop: 20 }}
                                source={require('../../assets/edit.png')}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>

                            <TextInput
                                placeholder='Name'
                                value={name}
                                onChangeText={setName}
                                style={{
                                    backgroundColor: 'white', width: 250,
                                    padding: 10,
                                    borderRadius: 10,
                                    borderColor: 'black',
                                    borderStyle: 'dashed',
                                    borderWidth: 2,
                                    marginTop: 20,
                                    // marginLeft: 5
                                }}
                            />
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 20, marginTop: 20 }}
                                source={require('../../assets/edit.png')}
                            />
                        </View>
                        <Text style={{ color: 'green', fontSize: 20, marginTop: 20 }}> Service Details</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                            <View style={{ position: 'absolute', left: 10, top: 8, backgroundColor: 'white', padding: 1, borderRadius: 10, width: 70, height: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                <Text>Quantity</Text>
                            </View>
                            <TextInput
                                placeholder='Quantity'
                                value={quantity}
                                onChangeText={setQuantity}
                                style={{
                                    backgroundColor: 'white', width: 250,
                                    padding: 10,
                                    borderRadius: 10,
                                    borderColor: 'black',
                                    borderStyle: 'dashed',
                                    borderWidth: 2,
                                    marginTop: 10,
                                    marginLeft: 8

                                }}
                            />
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 20, marginTop: 20 }}
                                source={require('../../assets/camera.jpg')}
                            />
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 20, marginTop: 20 }}
                                source={require('../../assets/edit.png')}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                            <View style={{ position: 'absolute', left: 10, top: 5, backgroundColor: 'white', padding: 1, borderRadius: 10, width: 70, height: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                <Text>Amount</Text>
                            </View>
                            <TextInput
                                placeholder='Amount'
                                value={amount}
                                onChangeText={setAmount}
                                style={{
                                    backgroundColor: '#f0f0f0', width: 250,
                                    padding: 10,
                                    borderRadius: 10,
                                    borderColor: 'black',
                                    borderStyle: 'dashed',
                                    borderWidth: 2,
                                    marginTop: 20,
                                    marginLeft: 8
                                }}
                            />
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 20, marginTop: 20 }}
                                source={require('../../assets/camera.jpg')}
                            />
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 20, marginTop: 20 }}
                                source={require('../../assets/edit.png')}
                            />
                        </View>

                    </View>
                    <View>
                        <Text style={{ color: 'green', fontSize: 20, marginTop: 20 }}> Customer Contact Details</Text>
                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                            <TextInput placeholder='Enter Custom Email' style={{ backgroundColor: '#f0f0f0', width: 350, padding: 10, borderRadius: 20, borderColor: 'black', borderWidth: 2, marginTop: 20 }} />
                            <Text style={{ color: 'green', fontSize: 20 }}>Or</Text>

                            <TextInput placeholder='Enter Custom Phone Number' style={{ backgroundColor: '#f0f0f0', width: 350, padding: 10, borderRadius: 20, borderColor: 'black', borderWidth: 2, marginTop: 10 }} />

                        </View>

                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <TouchableOpacity onPress={() => onProceed()} style={{ backgroundColor: 'green', padding: 5, borderRadius: 20, width: 100, height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 20 }}>Proceed</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({})