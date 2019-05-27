import React, {Component} from 'react';
import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import { Container, Header, Badge, Content, H1, Card, Segment, Button, CardItem, Left, Right, Body, Thumbnail, Icon } from 'native-base';


import styles from "./styles";

const logo = require("../../../assets/logo.png");
const ImageTumb = require("../../../assets/food.jpeg");

class MenuItems extends Component { 

   constructor(props) {
    super(props);
    this.state = {
      seg: 1
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
              <H1 style={styles.headline}>MenuItems</H1>
                <View style={{flexDirection: 'row'}}> 
              <ScrollView>
                <Card>
                  <CardItem cardBody style={{backgroundColor: '#E1E1E1', margin: 5}}>
                    <Left>
                      <Thumbnail style={{marginRight: 7}} square source={ImageTumb} />
                      <Text>NativeBase {"\n"} $ 6.00</Text>
                    </Left>
                    <Right>
                    <Button transparent
                        active={this.state.seg === 1 ? true : false}
                        onPress={() => this.setState({ seg: 1 })}
                        >
                      <Icon style={{color: '#A6A6A6', fontSize: 30, marginRight: 7}} name="eye"/>
                      </Button>
                    </Right>
                  </CardItem>   
                  <CardItem cardBody style={{backgroundColor: '#E1E1E1', margin: 5}}>
                    <Left>
                      <Thumbnail style={{marginRight: 7}} square source={ImageTumb} />
                      <Text>NativeBase {"\n"} $ 6.00</Text>
                    </Left>
                    <Right>
                    <Button transparent
                        active={this.state.seg === 2 ? true : false}
                        onPress={() => this.setState({ seg: 2 })}
                        >
                      <Icon style={{color: '#A6A6A6', fontSize: 30, marginRight: 7}} name="eye"/>
                      </Button>
                    </Right>
                  </CardItem>                 
                </Card>
                </ScrollView>
                <ScrollView>
                <Card>
                  <CardItem>
                      {this.state.seg === 1 && 
                        <Card>
                            <CardItem cardBody>
                              <Image source={ImageTumb} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{alignSelf: 'center'}}>
                              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Best Cheese Burger</Text>
                              </CardItem>
                              <CardItem style={{backgroundColor: '#E1E1E1'}}>
                              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Burger Addons</Text>
                            </CardItem>
                            <CardItem style={{borderBottomWidth: 1, borderBottomColor: '#E1E1E1'}}>
                              <Left><Text>Bacon</Text></Left>
                              <Body><Text>+2.40</Text></Body>
                              <Right style={{borderLeftWidth: 2, borderColor: '#E1E1E1'}}>
                              <Icon name="eye" style={{color: '#A6A6A6'}}/>
                              </Right>
                            </CardItem>
                            <CardItem style={{borderBottomWidth: 1, borderBottomColor: '#E1E1E1'}}>
                              <Left><Text>Onions Slies</Text></Left>
                              <Body><Text>+2.40</Text></Body>
                              <Right style={{borderLeftWidth: 2, borderColor: '#E1E1E1'}}>
                              <Icon name="eye" style={{color: '#A6A6A6'}}/>
                              </Right>
                            </CardItem>
                            <CardItem style={{borderBottomWidth: 1, borderBottomColor: '#E1E1E1'}}>
                              <Left><Text>Egg Fried</Text></Left>
                              <Body><Text>+2.40</Text></Body>
                              <Right style={{borderLeftWidth: 2, borderColor: '#E1E1E1'}}>
                              <Icon name="eye" style={{color: '#A6A6A6'}}/>
                              </Right>
                            </CardItem>

                        </Card>}
                      {this.state.seg === 2 && 
                       <Card>
                            <CardItem cardBody>
                              <Image source={ImageTumb} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{alignSelf: 'center'}}>
                              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Best Checkin Burger</Text>
                              </CardItem>
                              <CardItem style={{backgroundColor: '#E1E1E1'}}>
                              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Burger Addons</Text>
                            </CardItem>
                            <CardItem style={{borderBottomWidth: 1, borderBottomColor: '#E1E1E1'}}>
                              <Left><Text>Bacon</Text></Left>
                              <Body><Text>+2.40</Text></Body>
                              <Right style={{borderLeftWidth: 2, borderColor: '#E1E1E1'}}>
                              <Icon name="eye" style={{color: '#A6A6A6'}}/>
                              </Right>
                            </CardItem>
                            <CardItem style={{borderBottomWidth: 1, borderBottomColor: '#E1E1E1'}}>
                              <Left><Text>Egg</Text></Left>
                              <Body><Text>+2.40</Text></Body>
                              <Right style={{borderLeftWidth: 2, borderColor: '#E1E1E1'}}>
                              <Icon name="eye" style={{color: '#A6A6A6'}}/>
                              </Right>
                            </CardItem>
                            <CardItem style={{borderBottomWidth: 1, borderBottomColor: '#E1E1E1'}}>
                              <Left><Text>Onions</Text></Left>
                              <Body><Text>+2.40</Text></Body>
                              <Right style={{borderLeftWidth: 2, borderColor: '#E1E1E1'}}>
                              <Icon name="eye" style={{color: '#A6A6A6'}}/>
                              </Right>
                            </CardItem>

                        </Card>}
                  </CardItem>
                </Card>
                </ScrollView>
              </View>
          </Content>
      </Container>


     );
  }
}

export default MenuItems;
