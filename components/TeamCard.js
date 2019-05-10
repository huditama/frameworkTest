import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base'

export default class TeamCard extends Component {
    render() {
        const { strTeam, strTeamShort, strTeamBadge, strTeamLogo, intFormedYear } = this.props.team
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
                    <Left>
                        <Button onPress={() => navigate('Details', this.props.team)} >
                            <Text>View</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Text>Est. {intFormedYear}</Text>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}