import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Container, Content, Header, Segment, Button, Left, H1,Right, Icon, Body, Title, Badge } from 'native-base';

import SetDinein from '../setdinein';
import SetPickup from '../setpickup';
import SetReservation from '../setreservation';

import HeaderView from '../headerview';

import styles from "./styles";
const logo = require("../../../assets/logo.png");

class Settings extends Component {
  constructor(props) {
      super(props);
      this.state = {
        seg: 1
      };
    }
  render() {
    return(
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
          <H1 style={styles.headline}>Settings</H1>
          <Segment style={{alignSelf: 'flex-start', marginLeft: 5}}>
            <Button transparent large
              active={this.state.seg === 1 ? true : false}
              onPress={() => this.setState({ seg: 1 })}
            >
              <Text style={styles.textday}>Dine In</Text>
            </Button>
            <Button transparent large
              active={this.state.seg === 2 ? true : false}
              onPress={() => this.setState({ seg: 2 })}
            >
              <Text style={styles.textday}>Pickup</Text>
            </Button>
            <Button transparent large
              active={this.state.seg === 3 ? true : false}
              onPress={() => this.setState({ seg: 3 })}
            >
              <Text style={styles.textday}>Reservation</Text>
            </Button>
          </Segment>
            <View>
              {this.state.seg === 1 && <SetDinein />}
              {this.state.seg === 2 && <SetPickup />}
              {this.state.seg === 3 && <SetReservation />}
            </View>        
      </Content>
     </Container>
      
    );

  }
}

export default Settings;