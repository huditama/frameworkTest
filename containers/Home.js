import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 300, height: 300 }}
                    source={{ uri: 'https://diylogodesigns.com/wp-content/uploads/2016/06/nba-logo-transparent-png-logo-download-768x768.png' }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});