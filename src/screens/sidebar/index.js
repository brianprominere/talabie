import React, { Component } from 'react';
import { View, ScrollView, Alert, ImageBackground } from 'react-native';
import { Container, Thumbnail, Content, Badge, Icon, CardItem, Item, Card, Text, Header, Drawer, Button, ListItem, Left, Body, Right } from 'native-base';

import styles from "./style";

const launchscreenLogo = require("../../../assets/logo.png");


class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = { item1: false, item2: false };
  }
  render() {
    const submenu = (<View>
            <ListItem onPress={() => this.props.navigation.navigate("DineIn")}>
                <Body><Text style={styles.menutitle}>Dine In</Text></Body>
                <Badge style={{backgroundColor: '#4A6D9F'}}><Text>5</Text></Badge>
                <Right />
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("PickUp")}>
                <Body><Text style={styles.menutitle}>Pick Up</Text></Body>
                <Badge style={{backgroundColor: '#CDCD42'}}><Text>5</Text></Badge>
                <Right />
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("Reservation")}>
                <Body><Text style={styles.menutitle}>Reservation</Text></Body>
                <Badge style={{backgroundColor: '#81B864'}}><Text>5</Text></Badge>
                <Right />
            </ListItem>
        </View>)

    const submenu2 = (<View>
            <ListItem onPress={() => this.props.navigation.navigate("MenuItem")}>
                <Body><Text style={styles.menutitle}>All Items</Text></Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("MenuItems")}>
                <Body><Text style={styles.menutitle}>Sandwiches</Text></Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("MenuItems")}>
                <Body><Text style={styles.menutitle}>Burger</Text></Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("MenuItems")}>
                <Body><Text style={styles.menutitle}>Most Popular Items</Text></Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("MenuItems")}>
                <Body><Text style={styles.menutitle}>Featured Items</Text></Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("MenuItems")}>
                <Body><Text style={styles.menutitle}>Sides & Addons</Text></Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("MenuItems")}>
                <Body><Text style={styles.menutitle}>Salads</Text></Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("MenuItems")}>
                <Body><Text style={styles.menutitle}>Sauces</Text></Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("MenuItems")}>
                <Body><Text style={styles.menutitle}>Drinks</Text></Body>
            </ListItem>
        </View>)
    return (
      <Container>
        <View style={styles.logoContainer}>
          <ImageBackground source={launchscreenLogo} style={styles.logo} />
        </View>
        <ScrollView>
        <ListItem onPress={() => this.props.navigation.navigate("Dashboard")}>
          <Icon name="dashboard"/>
          <Text style={{marginLeft: 20, fontSize: 18, fontWeight: 'bold' }}>Dashboard</Text>
          <Right />
        </ListItem>
        <ListItem onPress={() => this.setState({ item1: !this.state.item1 })}>
          <Icon name="bars" />
          <Text style={styles.menutitle}>Menu</Text>
          <Right style={{alignSelf: 'flex-end', flex: 1}}><Icon name="angle-right" /></Right>
        </ListItem>

        {this.state.item1 ? submenu2 : null}

         <ListItem onPress={() => this.props.navigation.navigate("AllOrders")}>
          <Icon name="dashboard" />
          <Text style={{marginLeft: 20, fontSize: 18, fontWeight: 'bold' }}>All Orders</Text>
          <Right />
        </ListItem>

        <ListItem onPress={() => this.setState({ item2: !this.state.item2 })}>
          <Icon name="bell-o" />
          <Text style={styles.menutitle}>New Orders</Text>
          <Right style={{alignSelf: 'flex-end', flex: 1}}><Icon name="angle-right" /></Right>
        </ListItem>

        {this.state.item2 ? submenu : null}

         <ListItem onPress={() => this.props.navigation.navigate("Settings")}>
          <Icon name="cog" />
          <Text style={{marginLeft: 20, fontSize: 18, fontWeight: 'bold' }}>Settings</Text>
          <Right />
        </ListItem>
         <ListItem>
          <Icon name="sign-out" />
          <Text style={styles.menutitle}>Logout</Text>
          <Right />
        </ListItem>
       </ScrollView>
      </Container>
    )
  }
}

export default SideBar;