import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, View, Icon, Left, Right, Card, Body, Title, CardItem } from "native-base";
import styles from "./../../GlobalStyling";

export default class HomeScreen extends Component {
    constructor (props){
        super(props)
    }

    render() {
        const app_url = process.env.APP_URL;
        return(
        <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Home Screen</Text>
                <Text>{app_url}</Text>
              </Body>
            </CardItem>
          </Card>

          <Button full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Popups")}>
              <Text>
                Go to popup
              </Text>
          </Button>          
        </Content>
      </Container>
        )
    }
}