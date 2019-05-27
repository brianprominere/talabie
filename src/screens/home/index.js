import React, { Component } from "react";
import { View,ImageBackground,StatusBar } from "react-native";
import { Container,Text,Form,Item,Label,Input,Button } from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");

class Home extends Component {
  render() {
    return (
      <Container style={styles.bg}>
        <StatusBar hidden={true}/>
          <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />
            <View style={{width: '80%',alignSelf: 'center'}}>
              <Form>
                <Item regular style={styles.regItem}>
                  <Input placeholder='Email Id' placeholderTextColor="#EFE4E5" />
                </Item>
                <Item regular style={styles.regItem}>
                  <Input placeholder='Password' placeholderTextColor="#EFE4E5" />
                </Item>
              </Form>
            </View>
            <View style={styles.password}>
              <Text style={{color: '#EFE4E5'}}>Forgot Password</Text>
            </View>
            <View style={styles.buttonman}>
              <Button block style={{backgroundColor: '#81B864'}} 
                onPress={() => this.props.navigation.navigate('Dashboard')}>
                <Text style={styles.buttontext}>SUBMIT</Text>
              </Button>
            </View>
      </Container>
    );
  }
}

export default Home;
