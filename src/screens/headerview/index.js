import React, { Component } from "react";
import { View,ImageBackground } from "react-native";
import { Header, Text, Left, Right, Badge, Icon, Button } from "native-base";

import styles from "./styles";

const logo = require("../../../assets/logo.png");

const HeaderView =(children) => (

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
      
    );

export default HeaderView;
