import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Content } from 'native-base'
import PlayerDetailsCard from '../components/PlayerDetailsCard'

export default class PlayerDetails extends Component {
    render() {
        const { params } = this.props.navigation.state
        return (
            <Container>
                <Content>
                    <PlayerDetailsCard player={params} />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})