import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Container, Header, Badge,Title, Card, CardItem, Content, H1, Segment, Button, Left, Right, Icon, Body } from 'native-base';

import ODineIn from './odinein';
import OPickUp from './opickup';
import OReservation from './oreservation';
const logo = require("../../../assets/logo.png");

import HeaderView from '../headerview';

import styles from "./styles";

class AllOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
          seg: 1,
        };
    }   
 
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
            <H1 style={styles.headline}>All Orders</H1>
            <Card>
              <Segment style={styles.segmain}>
                <Button transparent
                  style={{borderBottomColor: this.state.seg === 1 ? "#81B864" : undefined,
                  borderColor: "#fff", backgroundColor: '#fff', borderBottomWidth: 3}}
                  active={this.state.seg === 1 ? true : false}
                  onPress={() => this.setState({ seg: 1 })}
                  >
                <Text>Dine In</Text>
                </Button>
                <Button transparent
                  style={{borderBottomColor: this.state.seg === 2 ? "#81B864" : undefined,
                  borderColor: "#fff", backgroundColor: '#fff', borderBottomWidth: 3}}
                  active={this.state.seg === 2 ? true : false}
                  onPress={() => this.setState({ seg: 2 })}
                  >
                <Text>Pickup</Text>
                </Button>
                <Button transparent
                  style={{borderBottomColor: this.state.seg === 3 ? "#81B864" : undefined,
                  borderColor: "#fff", backgroundColor: '#fff', borderBottomWidth: 3}}
                  active={this.state.seg === 3 ? true : false}
                  onPress={() => this.setState({ seg: 3 })}
                  >
                <Text>Reservation</Text>
                </Button>
              </Segment>
              <View>
                {this.state.seg === 1 && <ODineIn />}
                {this.state.seg === 2 && <OPickUp />}
                {this.state.seg === 3 && <OReservation />}
              </View>     
            </Card>
          </Content>
      </Container>


     );
  }
}

export default AllOrders;
