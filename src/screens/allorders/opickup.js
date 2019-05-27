import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Content, Segment, Button } from 'native-base';

import PickNew from './picknew';
import PickProgress from './pickprogress';
import PickServed from './pickserved';
import PickCanceled from './pickcanceled';

import styles from "./styles";


class OPickUp extends Component {
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
                {this.state.seg === 1 && <PickNew />}
                {this.state.seg === 2 && <PickProgress />}
                {this.state.seg === 3 && <PickServed />}
                {this.state.seg === 4 && <PickCanceled />}
              </View>
          </Content>
     );
  }
}

export default OPickUp;
