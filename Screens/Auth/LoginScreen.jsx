import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [admin, setAdmin] = useState(true);
    const [userType, setUserType] = useState('Admin');

    const onPressUserType = (isAdminSelected) => {
        setAdmin(isAdminSelected);
        setUserType(isAdminSelected ? 'Admin' : 'Staff');
    };

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/splash-icon.png')} style={{ width: 500, height: 200 }} />
            </View>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, gap: 30 }}>
                <TouchableHighlight
                    style={{ backgroundColor: admin ? 'green' : '#f0f0f0', padding: 10, borderRadius: 10, width: 100, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => onPressUserType(true)}
                    underlayColor="#ddd"
                >
                    <Text style={{ color: admin ? '#fff' : '#000' }}>Admin</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={{ backgroundColor: !admin ? 'green' : '#f0f0f0', padding: 10, borderRadius: 10, width: 100, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => onPressUserType(false)}
                    underlayColor="#ddd"
                >
                    <Text style={{ color: !admin ? '#fff' : '#000' }}>Staff</Text>
                </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'column', gap: 20, alignItems: 'center' }}>
                <TextInput
                    placeholder={userType == 'Admin' ? 'Admin Phone' : 'Staff Phone'}
                    // value={userType}
                    style={{
                        backgroundColor: '#f0f0f0', width: 300,
                        padding: 10,
                        borderRadius: 10,
                        borderColor: 'green',
                        borderWidth: 2
                    }}
                // editable={false}
                />
                <TextInput placeholder="Password" secureTextEntry style={{
                    backgroundColor: '#f0f0f0', width: 300,
                    padding: 10,
                    borderRadius: 10,
                    borderColor: 'green',
                    borderWidth: 2
                }} />

            </View>
            <View style={{ marginTop: 20, width: 300, alignItems: 'flex-start' }}>
                <Text>Forgot password?</Text>
            </View>
            <View style={{ flexDirection: 'column', gap: 20, alignItems: 'center', marginTop: 30 }}>
                <TouchableHighlight onPress={() => navigation.navigate('dashboard')} style={{ width: 250, height: 40, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Login</Text>
                </TouchableHighlight>
                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Image
                        source={require('../../assets/arrow.png')}
                        style={{ width: 150, height: 3, tintColor: 'black' }}
                    />
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>OR</Text>
                    <Image
                        source={require('../../assets/arrow.png')}
                        style={{ width: 150, height: 3, tintColor: 'black' }}
                    />

                </View>
                <TouchableHighlight onPress={() => navigation.navigate('register')} style={{ width: 250, height: 40, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }} >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Register</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

});
