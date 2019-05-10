import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body, Button } from 'native-base'

export default class DetailsCard extends Component {
    render() {
        const {
            strTeam,
            strTeamShort,
            strTeamBadge,
            strTeamLogo,
            strDescriptionEN } = this.props.team
        const { navigate } = this.props.navigation
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: strTeamBadge }} />
                        <Body>
                            <Text>{strTeam}</Text>
                            <Text note>{strTeamShort}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: strTeamLogo }} style={{ height: 150, width: 250, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Text style={{ textAlign: 'justify' }}>{strDescriptionEN}</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button onPress={() => navigate('Players', this.props.team.idTeam)}>
                            <Text>Players</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}