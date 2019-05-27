import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Content, Segment, Button } from 'native-base';

import ReservationConf from './reservationconf';
import ReservationCan from './reservationcan';

import styles from "./styles";


class OReservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          seg: 1,
        };
    }   
 
  render() {
    return (
          <Content>
            <Segment style={styles.segmain}>
                <Button transparent
                  style={{backgroundColor: this.state.seg === 1 ? "#828282" : undefined,
                  borderColor: "#fff"}}
                  active={this.state.seg === 1 ? true : false}
                  onPress={() => this.setState({ seg: 1 })}
                  >
                <Text style={{color: this.state.seg === 1 ? "#fff" : undefined}}>Confirmed</Text>
                </Button>
                <Button transparent
                  style={{backgroundColor: this.state.seg === 2 ? "#828282" : undefined,
                  borderColor: "#fff"}}
                  active={this.state.seg === 2 ? true : false}
                  onPress={() => this.setState({ seg: 2 })}
                  >
                <Text style={{color: this.state.seg === 2 ? "#fff" : undefined}}>Canceled</Text>
                </Button>
              </Segment>
              <View>
                {this.state.seg === 1 && <ReservationConf />}
                {this.state.seg === 2 && <ReservationCan />}
              </View>
          </Content>
     );
  }
}

export default OReservation;
