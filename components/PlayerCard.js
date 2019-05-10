import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base'

export default class TeamCard extends Component {
    render() {
        const {
            strThumb,
            strCutout,
            strPlayer,
            strPosition,
            strNationality } = this.props.player
        const { navigate } = this.props.navigation

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: strCutout }} />
                        <Body>
                            <Text>{strPlayer}</Text>
                            <Text note>{strNationality}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: strThumb }} style={{ height: 350, width: 250, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button onPress={() => navigate('PlayerDetails', this.props.player)} >
                            <Text>View</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Text note>{strPosition}</Text>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}