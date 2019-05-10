import React, { Component } from 'react'
import { Text } from 'react-native'
import axios from 'axios'

export default class Players extends Component {
    state = {
        player: []
    }

    async componentDidMount() {
        try {
            const { params } = this.props.navigation.state
            let { data } = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${params}`)
            const {player} = data
            this.setState({
                player
            })
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <Text>{JSON.stringify(this.state.player)}</Text>
        )
    }
}