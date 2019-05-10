import React, { Component } from 'react'
import { Container, Content, Spinner } from 'native-base'
import { Text, View } from 'react-native'
import axios from 'axios'
import PlayerCard from '../components/PlayerCard'

export default class Players extends Component {
    state = {
        player: []
    }

    async componentDidMount() {
        try {
            const { params } = this.props.navigation.state
            let { data } = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${params}`)
            const { player } = data
            this.setState({
                player
            })
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        const playerList = (this.state.player.length) ? (
            this.state.player.map((bball) => {
                return (
                    <PlayerCard key={bball.idPlayer} player={bball} {...this.props} />
                )
            })
        ) : (
                <Spinner />
            )

        return (
            <Container>
                <Content>
                    {playerList}
                </Content>
            </Container>
        )
    }
}