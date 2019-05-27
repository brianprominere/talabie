import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Content, Segment, Button } from 'native-base';

import DineNew from './dinenew';
import DineProgress from './dineprogress';
import DineServed from './dineserved';
import DineCanceled from './dinecanceled';

import styles from "./styles";


class ODineIn extends Component {
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
                <Text style={{color: this.state.seg === 1 ? "#fff" : undefined}}>New</Text>
                </Button>
                <Button transparent
                  style={{backgroundColor: this.state.seg === 2 ? "#828282" : undefined,
                  borderColor: "#fff"}}
                  active={this.state.seg === 2 ? true : false}
                  onPress={() => this.setState({ seg: 2 })}
                  >
                <Text style={{color: this.state.seg === 2 ? "#fff" : undefined}}>In Progress</Text>
                </Button>
                <Button transparent
                  style={{backgroundColor: this.state.seg === 3 ? "#828282" : undefined,
                  borderColor: "#fff"}}
                  active={this.state.seg === 3 ? true : false}
                  onPress={() => this.setState({ seg: 3 })}
                  >
                <Text style={{color: this.state.seg === 3 ? "#fff" : undefined}}>Served</Text>
                </Button>
                <Button transparent
                  style={{backgroundColor: this.state.seg === 4 ? "#828282" : undefined,
                  borderColor: "#fff"}}
                  active={this.state.seg === 4 ? true : false}
                  onPress={() => this.setState({ seg: 4 })}
                  >
                <Text style={{color: this.state.seg === 4 ? "#fff" : undefined}}>Canceled</Text>
                </Button>
              </Segment>
              <View>
                {this.state.seg === 1 && <DineNew />}
                {this.state.seg === 2 && <DineProgress />}
                {this.state.seg === 3 && <DineServed />}
                {this.state.seg === 4 && <DineCanceled />}
              </View>
          </Content>
     );
  }
}

export default ODineIn;
