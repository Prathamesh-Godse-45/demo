import { useRef } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const Summary = ({ navigation }) => {
    const refRBSheet = useRef();

    return (
        <View>
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 30, marginTop: 70 }}>
                <ImageBackground
                    source={require('../../assets/background.jpg')}
                    style={{
                        width: 300,
                        height: 100,
                        borderRadius: 20,
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
                        Number Plate image
                    </Text>
                </ImageBackground>

                <ImageBackground
                    source={require('../../assets/background.jpg')}
                    style={{
                        width: 300,
                        height: 200,
                        borderRadius: 20,
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
                        Dispenser image
                    </Text>
                </ImageBackground>

                <TouchableOpacity
                    onPress={() => refRBSheet.current.open()}
                    style={{
                        backgroundColor: 'green',
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 10
                    }}
                >
                    <Text style={{ color: 'white' }}>Show Summary</Text>
                </TouchableOpacity>

                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        draggableIcon: {
                            backgroundColor: '#000',
                        },
                        container: {
                            height: 400, // ⬅️ set the height you want here
                        },
                    }}
                >
                    <View style={{ padding: 20, backgroundColor: 'lightgreen', height: 400, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>Vehicle Data and billing summary</Text>
                        <View style={{ marginTop: 20, alignItems: 'flex-start', justifyContent: 'center', gap: 10, width: 300, height: 100, backgroundColor: 'green', borderRadius: 10, padding: 10 }}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                Vehicle Number: ABC1234
                            </Text>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                Customer Name: shaurya berawala
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>
                                <Image
                                    source={require('../../assets/call.png')}
                                    style={{ width: 20, height: 20, borderRadius: 10 }}
                                />
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                    : 00000000000
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, alignItems: 'flex-start', justifyContent: 'center', gap: 10, width: 300, height: 100, backgroundColor: 'lightgreen', borderRadius: 10, padding: 10, borderWidth: 2 }}>
                            <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>
                                Fuel Quantity: 12L

                            </Text>
                            <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>
                                Fuel Varient: Petrol
                            </Text>
                            <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>
                                Varient type: Power
                            </Text>
                            <View style={{ position: 'absolute', bottom: -10, left: 180, backgroundColor: 'green', padding: 5, borderRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                    Total : ₹ 1200
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, alignItems: 'flex-end', justifyContent: 'center', gap: 10, width: 300, height: 100, backgroundColor: 'lightgreen', borderRadius: 10, padding: 10 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('payment')}
                                style={{
                                    backgroundColor: 'grey',
                                    padding: 10,
                                    borderRadius: 20,
                                    marginTop: 20
                                }}
                            >
                                <Text style={{ color: 'white' }}>Next -{'>'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </RBSheet>
            </View>
        </View>
    )
}

export default Summary;

const styles = StyleSheet.create({});
