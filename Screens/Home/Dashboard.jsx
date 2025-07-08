import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toggle from './Toggle';
const Dashboard = ({ navigation }) => {
    const [isPetrol, setIsPetrol] = useState(false);

    const [isDesel, setIsDesel] = useState(false);
    const [isGas, setIsGas] = useState(false);

    const toggleSwitch = () => setIsPetrol(previousState => !previousState);

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 30 }}>

                <LinearGradient
                    colors={['green', 'darkgreen']} // light green to dark green
                    style={{ padding: 10, width: 500, height: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 30 }}
                >
                    <Image source={require('../../assets/profile.jpg')} style={{ width: 70, height: 70, borderRadius: 70 }} />
                    <Text style={{ color: '#fff', fontSize: 20 }}> staff Dashboard</Text>
                </LinearGradient>


            </View>
            <Text style={{ color: 'green', fontSize: 20 }}> Select fuel variant</Text>
            <View display='flex' style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, gap: 20 }}>

                <Toggle isPetrol={isPetrol} toggleSwitch={toggleSwitch} isdesale={isDesel} isgas={isGas} />
                <Toggle isPetrol={isPetrol} toggleSwitch={toggleSwitch} isdesale={isDesel} isgas={isGas} />
                <Toggle isPetrol={isPetrol} toggleSwitch={toggleSwitch} isdesale={isDesel} isgas={isGas} />

            </View>
            <Text style={{ color: 'green', fontSize: 24, marginTop: 20 }}> Vehicle Details</Text>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                    <TextInput
                        placeholder='MH02XT0420'
                        style={{
                            backgroundColor: '#f0f0f0', width: 250,
                            padding: 10,
                            borderRadius: 10,
                            borderColor: 'black',
                            borderStyle: 'dashed',
                            borderWidth: 2,
                            marginTop: 20
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
                        source={require('../../assets/edit.png')}
                    />
                </View>
                <Text style={{ color: 'green', fontSize: 20, marginTop: 20 }}> Service Details</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                    <View style={{ position: 'absolute', left: 20, top: 10, backgroundColor: 'white', padding: 1, borderRadius: 10, width: 70, height: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                        <Text>Quantity</Text>
                    </View>
                    <TextInput
                        placeholder='MH02XT0420'
                        style={{
                            backgroundColor: '#f0f0f0', width: 250,
                            padding: 10,
                            borderRadius: 10,
                            borderColor: 'black',
                            borderStyle: 'dashed',
                            borderWidth: 2,
                            marginTop: 20,

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
                    <View style={{ position: 'absolute', left: 20, top: 10, backgroundColor: 'white', padding: 1, borderRadius: 10, width: 70, height: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                        <Text>Amount</Text>
                    </View>
                    <TextInput
                        placeholder='Name'
                        style={{
                            backgroundColor: '#f0f0f0', width: 250,
                            padding: 10,
                            borderRadius: 10,
                            borderColor: 'black',
                            borderStyle: 'dashed',
                            borderWidth: 2,
                            marginTop: 20,

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
                    <TouchableOpacity onPress={() => navigation.navigate('summary')} style={{ backgroundColor: 'green', padding: 5, borderRadius: 20, width: 100, height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Proceed</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({})