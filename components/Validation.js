import { View, Text, StatusBar, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'

const Validation = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [isvalidMail, setIsValidMail] = useState(true)
    const [isvalidPhone, setIsValidPhone] = useState(true)
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar barStyle="dark-content" />

            <Text style={{ padding: 10, fontSize: 20 }}>EMail</Text>
            <TextInput
                style={{ height: 40, margin: 13, borderWidth: 1, padding: 10 }}
                onChangeText={(text) => { setEmail(text) }}
                value={email}
            ></TextInput>
            <Text style={{ padding: 10, fontSize: 20, color: 'red' }}>email is invalid !</Text>



            <Text style={{ padding: 10, fontSize: 20, marginTop: 40 }}>PHone</Text>
            <TextInput
                style={{ height: 40, margin: 13, borderWidth: 1, padding: 10 }}
                onChangeText={(text) => { setPhone(text) }}
                value={phone}
                keyboardType="numeric"
            ></TextInput>
            <Text style={{ padding: 10, fontSize: 20, color: 'red' }}>phoone is invalid !</Text>

        </SafeAreaView>
    )
}

export default Validation