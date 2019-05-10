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
            strHeight,
            strWeight,
            strDescriptionEN } = this.props.player

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: strCutout }} />
                        <Body>
                            <Text>{strPlayer}</Text>
                            <Text note>{strPosition}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: strThumb }} style={{ height: 350, width: 250, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Body>
                        <Text note>Height: {strHeight}</Text>
                        <Text note>Weight: {strWeight}</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Text style={{ textAlign: 'justify' }}>{strDescriptionEN}</Text>
                </CardItem>
            </Card>
        );
    }
}