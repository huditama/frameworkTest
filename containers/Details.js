import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import DetailsCard from '../components/DetailsCard'

export default class Details extends Component {
    render() {
        const { params } = this.props.navigation.state
        return (
            <Container>
                <Content>
                    <DetailsCard team={params} {...this.props} />
                </Content>
            </Container>
        )
    }
}