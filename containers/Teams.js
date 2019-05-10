import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Container, Content } from 'native-base'
import TeamCard from '../components/TeamCard'
import axios from 'axios'

export default class Team extends Component {
    state = {
        teams: []
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387')
            const { teams } = data
            this.setState({
                teams
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const teamList = (this.state.teams.length) ? (
            this.state.teams.map((team) => {
                return (
                    <TeamCard key={team.idTeam} team={team} {...this.props} />
                )
            })
        ) : (
                <View style={styles.container}>
                    <Text>Loading bos</Text>
                </View>
            )

        return (
            <Container>
                <Content>
                    {teamList}
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});