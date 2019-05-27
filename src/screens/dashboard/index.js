import React, { Component } from "react";
import { View, StatusBar, ImageBackground, ScrollView } from "react-native";
import { Container, Header, Title, Left, H1, Icon,Badge, Thumbnail, Right, Button, Body, Content,Text, Card, CardItem, } from "native-base";

import styles from "./styles";

const logo = require("../../../assets/logo.png");
const Dinein = require("../../../assets/Dinein.png");
const Pick = require("../../../assets/Pick.png");
const Reserva = require("../../../assets/Reserva.png");
const User = require("../../../assets/User.png");

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Left style={styles.menuview}>
              <Button transparent style={{marginRight: 20}}
                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="bars" />
              </Button>
                <ImageBackground source={logo} style={styles.logo} />
            </Left>
            <Right>
              <Button transparent>
                <Icon Badge name="bell-o" style={styles.iconsview}/>
                <Badge warning style={styles.badgeview}><Text>2</Text></Badge>
              </Button>
              <Button transparent>
                <Icon name="user-o" style={styles.iconsview} />
              </Button>
            </Right>
          </Header>
          <Content padder style={{backgroundColor: '#f5f5f5'}}>
              <H1 style={styles.headline}>Dashboard</H1>
              
            <View style={styles.cardsview}>        
              <Card style={styles.cardspace}>
                <CardItem>
                  <Left>
                    <Thumbnail source={Dinein} />
                  <Body>
                    <Text style={styles.cardtitle}>Dinein Orders</Text>
                  </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={styles.textdec}>New Orders</Text>
                  </Left>
                  <Body>
                    <Text style={styles.textdec1}>13</Text>
                  </Body>
                  <Right>
                    <Button small style={{backgroundColor: '#AF3A40'}}
                      onPress={() => this.props.navigation.navigate("DineIn")}>
                      <Text style={styles.textdec}>View</Text>
                    </Button>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={styles.textdec}>Total Orders</Text>
                  </Left>
                  <Body>
                    <Text style={styles.textdec1}>50</Text>
                  </Body>
                  <Right>
                    <Button small style={{backgroundColor: '#AF3A40'}}
                      onPress={() => this.props.navigation.navigate("AllOrders")}>
                      <Text style={styles.textdec}>View</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
              <Card style={styles.seccardspace}>
                <CardItem>
                  <Left>
                    <Thumbnail source={Pick} />
                  <Body>
                    <Text style={styles.cardtitle}>Pickup Orders</Text>
                  </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={styles.textdec}>New Orders</Text>
                  </Left>
                  <Body>
                    <Text style={styles.textdec1}>13</Text>
                  </Body>
                  <Right>
                    <Button small style={{backgroundColor: '#AF3A40'}}
                      onPress={() => this.props.navigation.navigate("PickUp")}>
                      <Text style={styles.textdec}>View</Text>
                    </Button>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={styles.textdec}>Total Orders</Text>
                  </Left>
                  <Body>
                    <Text style={styles.textdec1}>50</Text>
                  </Body>
                  <Right>
                    <Button small style={{backgroundColor: '#AF3A40'}}
                      onPress={() => this.props.navigation.navigate("AllOrders")}>
                      <Text style={styles.textdec}>View</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
            </View>
            <View>
              <Card style={{width: '48.5%'}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={Reserva} />
                  <Body>
                    <Text style={styles.cardtitle}>Reservation Orders</Text>
                  </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={styles.textdec}>New Orders</Text>
                  </Left>
                  <Body>
                    <Text style={styles.textdec1}>13</Text>
                  </Body>
                  <Right>
                    <Button small style={{backgroundColor: '#AF3A40'}}
                      onPress={() => this.props.navigation.navigate("Reservation")}>
                      <Text style={styles.textdec}>View</Text>
                    </Button>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text style={styles.textdec}>Total Orders</Text>
                  </Left>
                  <Body>
                    <Text style={styles.textdec1}>50</Text>
                  </Body>
                  <Right>
                    <Button small style={{backgroundColor: '#AF3A40'}}
                     onPress={() => this.props.navigation.navigate("AllOrders")}>
                      <Text style={styles.textdec}>View</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
             
            </View>
            
          </Content>
        
      </Container>
    );
  }
}

export default Dashboard;