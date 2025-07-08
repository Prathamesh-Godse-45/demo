import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Payment = () => {
  return (
    <View>
      <LinearGradient
        colors={['green', 'darkgreen']} // light green to dark green
        style={{ padding: 10, width: 500, height: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 30 }}
      >

        <Text style={{ color: '#fff', fontSize: 20 }}> Payment method</Text>
      </LinearGradient>
      <View style={{ alignItems: 'center', justifyContent: 'center', gap: 20, width: 400, backgroundColor: 'grey', paddingVertical: 30, borderRadius: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, borderRadius: 10, width: 300, elevation: 3 }}>
          <Image source={require('../../assets/card.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <Text style={{ color: 'black', fontSize: 16, marginLeft: 15, fontWeight: '500', flex: 1 }}>Card Payment {'>'}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, borderRadius: 10, width: 300, elevation: 3 }}>
          <Image source={require('../../assets/card.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <Text style={{ color: 'black', fontSize: 16, marginLeft: 15, fontWeight: '500', flex: 1 }}>Card Payment {'>'}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, borderRadius: 10, width: 300, elevation: 3 }}>
          <Image source={require('../../assets/card.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <Text style={{ color: 'black', fontSize: 16, marginLeft: 15, fontWeight: '500', flex: 1 }}>Card Payment {'>'}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, borderRadius: 10, width: 300, elevation: 3 }}>
          <Image source={require('../../assets/card.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
          <Text style={{ color: 'black', fontSize: 16, marginLeft: 15, fontWeight: '500', flex: 1 }}>Card Payment {'>'}</Text>
        </View>
      </View>


      <View style={{ marginTop: 20, backgroundColor: 'white', paddingVertical: 20, borderRadius: 20, width: 400, height: 200, elevation: 3, borderWidth: 2, borderEndColor: 'green' }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', marginTop: 20, marginLeft: 20 }}>Payment Details</Text>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', marginTop: 20, marginLeft: 20 }}>Fuel Quantity   12.3 Leaters</Text>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', marginTop: 20, marginLeft: 20 }}>Total Amount  1200</Text>


      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})