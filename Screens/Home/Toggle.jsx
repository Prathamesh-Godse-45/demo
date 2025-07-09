import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Toggle = ({ toggleSwitch, isOn, label }) => {
    return (
        <TouchableOpacity
            onPress={() => toggleSwitch()}
            activeOpacity={0.8}
            style={{
                width: 120,
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                backgroundColor: isOn ? 'green' : 'lightgreen',
                paddingHorizontal: 10,
                borderRadius: 20,
            }}
        >

            {isOn ? (
                <>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}></Text>
                    <View
                        style={{
                            height: 24,
                            width: 24,
                            backgroundColor: 'white',
                            borderRadius: 12,
                        }}
                    />

                </>
            ) : (
                <>
                    <View
                        style={{
                            height: 24,
                            width: 24,
                            backgroundColor: 'white',
                            borderRadius: 12,
                        }}
                    />
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>{label}</Text>
                </>
            )}
        </TouchableOpacity>
    )
}

export default Toggle

const styles = StyleSheet.create({})