import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Header, Icon, Badge, Container, Content, H1, Card, Button, Body, Left, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


import styles from "./styles";

const logo = require("../../../assets/logo.png");

class PickUpView extends Component { 
 
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
                <H1 style={styles.headline}>Pick Up</H1>
                <Text note style={styles.textnote}>Order# 1234567</Text>
                <Body />
                <Right><Text style={{alignSelf: 'flex-end' }}>Pick up Time 25 Jan 2018, 12:00 PM</Text></Right>
              </View>
            <Card>
              <Grid style={{borderBottomWidth: 2, borderBottomColor: '#C5C5C5', marginTop: 10}}>
                <Row style={{marginLeft: 10,}}>
                  <Col style={{width: '33%'}}><Text style={styles.textview2}>Name</Text></Col>
                  <Col style={{width: '33%'}}><Text style={styles.textview2}>Order Time</Text></Col>
                  <Col style={{width: '33%'}}><Text style={styles.textview2}>Status</Text></Col>
                </Row>
                <Row style={{marginLeft: 10,}}>
                  <Col style={{width: '33%'}}><Text style={styles.textview2}>Prabakar</Text></Col>
                  <Col style={{width: '33%'}}><Text style={styles.textview2}>9 Nov 2017, 09:00 AM</Text></Col>
                  <Col style={{width: '33%'}}><Text style={styles.textview2}>Table</Text></Col>
                </Row>
              </Grid>
              <Grid style={{borderBottomWidth: 2, borderBottomColor: '#C5C5C5'}}>
                <Row style={{marginLeft: 10,}}>
                  <Col style={{width: '43%'}}><Text style={styles.textviewb}>Best Cheese Burger</Text></Col>
                  <Col style={{width: '43%'}}><Text style={styles.textviewb}>Quantity: 2</Text></Col>
                  <Col><Text style={styles.textviewb}>$ 6.00</Text></Col>
                </Row>
                <Row style={{marginLeft: 10,}}>
                  <Col><Text style={styles.textview}>Size</Text></Col>
                  <Col />
                  <Col />
                </Row>
                <Row style={{marginLeft: 10,}}>
                  <Col><Text style={styles.textview}>Drink Type</Text></Col>
                  <Col />
                  <Col />
                </Row>
                <Row style={{marginLeft: 10,}}>
                  <Col><Text style={styles.textview}>Special Instruction</Text></Col>
                  <Col />
                  <Col />
                </Row>
              </Grid>
              <Grid style={{borderBottomWidth: 2, borderBottomColor: '#C5C5C5'}}>
                <Row style={{marginLeft: 10,}}>
                  <Col style={{width: '43%'}}><Text style={styles.textviewb}>Best Cheese Burger</Text></Col>
                  <Col style={{width: '43%'}}><Text style={styles.textviewb}>Quantity: 2</Text></Col>
                  <Col><Text style={styles.textviewb}>$ 6.00</Text></Col>
                </Row>
                <Row style={{marginLeft: 10,}}>
                  <Col><Text style={styles.textview}>Size</Text></Col>
                  <Col />
                  <Col />
                </Row>
                <Row style={{marginLeft: 10,}}>
                  <Col><Text style={styles.textview}>Drink Type</Text></Col>
                  <Col />
                  <Col />
                </Row>
                <Row style={{marginLeft: 10,}}>
                  <Col><Text style={styles.textview}>Special Instruction</Text></Col>
                  <Col />
                  <Col />
                </Row>
              </Grid>
              <Grid style={{borderBottomWidth: 2, borderBottomColor: '#C5C5C5', width: '50%', alignSelf: 'flex-end'}}>
                <Row>
                  <Col />
                  <Col />
                  <Col><Text style={styles.textviewb}>Sub Total</Text></Col>
                  <Col><Text style={styles.textviewb}>$ 12.00</Text></Col>
                </Row>
                <Row>
                  <Col />
                  <Col />
                  <Col><Text style={styles.textviewb}>Tax</Text></Col>
                  <Col><Text style={styles.textviewb}>$ 2.00</Text></Col>
                </Row>
                <Row>
                  <Col />
                  <Col />
                  <Col><Text style={styles.textviewb}>Tips</Text></Col>
                  <Col><Text style={styles.textviewb}>$ 1.00</Text></Col>
                </Row>
              </Grid>
              <Grid style={{width: '50%', alignSelf: 'flex-end', padding: '1%'}}>
                <Row>
                  <Col />
                  <Col />
                  <Col><Text style={styles.textviewt}>Total Paid</Text></Col>
                  <Col><Text style={styles.textviewt}>$ 15.00</Text></Col>
                </Row>
              </Grid>
                  <Button block style={styles.buttonview}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>Save</Text>
                  </Button>
            </Card>
          </Content>
      </Container>
     );
  }
}

export default PickUpView;
