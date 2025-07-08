import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'

const Register = ({ navigation }) => {
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
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Register</Text>
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
                    placeholder='Phone'
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
                <TextInput placeholder="Password" secureTextEntry style={{
                    backgroundColor: '#f0f0f0', width: 300,
                    padding: 10,
                    borderRadius: 10,
                    borderColor: 'green',
                    borderWidth: 2
                }} />
                <View style={{ marginTop: 5, width: 300, alignItems: 'flex-start' }}>
                    <Text>Forgot password?</Text>
                </View>

            </View>
            <TouchableHighlight onPress={() => navigation.navigate('login')} style={{ marginTop: 50, width: 250, height: 40, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }} >
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Login</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
})