import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Header, Left, Right, Icon, Badge, Container, Content, H1, Card, Input, Item, Button} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


import styles from "./styles";

const logo = require("../../../assets/logo.png");

class MenuItem
 extends Component { 
 
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
              <View style={{flexDirection: 'row'}}>
                <H1 style={styles.headline}>Reservation</H1>
                <Text note style={styles.textnote}>Request# 1234567</Text>
              </View>
              <Card>
                <Grid  style={{marginLeft: 15, marginTop: 15, marginBottom: 15}}>
                  <Row>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>Name</Text></Col>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>Prabakar</Text></Col>
                  </Row>
                  <Row>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>Reservation Time</Text></Col>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>25 Jan 2018, 12:00 PM</Text></Col>
                  </Row>
                  <Row>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>Guests</Text></Col>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>2</Text></Col>
                  </Row>
                  <Row>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>Phone</Text></Col>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>9848782955</Text></Col>
                  </Row>
                  <Row>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>Status</Text></Col>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>Name</Text></Col>
                  </Row>
                  <Row>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>Reason</Text></Col>
                    <Col style={{width: '30%'}}><Text style={styles.textview}>Name</Text></Col>
                  </Row>
                  <Row>
                    <Col style={{width: '50%'}}><Text style={styles.textview}></Text>
                    <Item regular>
                      <Input placeholder='Regular Textbox' />
                    </Item>
                      </Col>
                  </Row>
                </Grid>
                <Button block style={styles.buttonview}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>Submit</Text>
                  </Button>
              </Card>
          </Content>
      </Container>


     );
  }
}

export default MenuItem
;
