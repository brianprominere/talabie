import React, {Component} from 'react';
import { View, Text,} from 'react-native';
import { Content, Card, Switch, CardItem, Input, Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";


import styles from "./styles";
const launchscreenlogo = require("../../../assets/logo.png");

class SetDinein extends Component {

  render() {
    return (
        <Content>
            <Card style={{borderTopColor: '#81B864', borderTopWidth: 2,}}>
                <CardItem>
                    <Text style={styles.textday}>Active</Text>
                    <Col><Switch value={true} /></Col>
                    <Col />
                </CardItem>
                <CardItem>
                    <Col style={{width: '15%'}}><Text style={styles.textday}>Monday</Text></Col>
                    <Col style={{width: '5%'}}><Text style={styles.textday}>:</Text></Col>
                    <Col style={styles.inputfield}>
                        <Input style={styles.inputbox} placeholder='Start Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col>
                        <Input style={styles.inputbox} placeholder='End Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col style={{width: '25%'}} />
                </CardItem>
                <CardItem>
                    <Col style={{width: '15%'}}><Text style={styles.textday}>Tuesday</Text></Col>
                    <Col style={{width: '5%'}}><Text style={styles.textday}>:</Text></Col>
                    <Col style={styles.inputfield}>
                        <Input style={styles.inputbox} placeholder='Start Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col>
                        <Input style={styles.inputbox} placeholder='End Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col style={{width: '25%'}} />
                </CardItem>
                <CardItem>
                    <Col style={{width: '15%'}}><Text style={styles.textday}>Wednesday</Text></Col>
                    <Col style={{width: '5%'}}><Text style={styles.textday}>:</Text></Col>
                    <Col style={styles.inputfield}>
                        <Input style={styles.inputbox} placeholder='Start Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col>
                        <Input style={styles.inputbox} placeholder='End Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col style={{width: '25%'}} />
                </CardItem>
                <CardItem>
                    <Col style={{width: '15%'}}><Text style={styles.textday}>Thursday</Text></Col>
                    <Col style={{width: '5%'}}><Text style={styles.textday}>:</Text></Col>
                    <Col style={styles.inputfield}>
                        <Input style={styles.inputbox} placeholder='Start Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col>
                        <Input style={styles.inputbox} placeholder='End Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col style={{width: '25%'}} />
                </CardItem>
                <CardItem>
                    <Col style={{width: '15%'}}><Text style={styles.textday}>Friday</Text></Col>
                    <Col style={{width: '5%'}}><Text style={styles.textday}>:</Text></Col>
                    <Col style={styles.inputfield}>
                        <Input style={styles.inputbox} placeholder='Start Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col>
                        <Input style={styles.inputbox} placeholder='End Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col style={{width: '25%'}} />
                </CardItem>
                <CardItem>
                    <Col style={{width: '15%'}}><Text style={styles.textday}>Saturday</Text></Col>
                    <Col style={{width: '5%'}}><Text style={styles.textday}>:</Text></Col>
                    <Col style={styles.inputfield}>
                        <Input style={styles.inputbox} placeholder='Start Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col>
                        <Input style={styles.inputbox} placeholder='End Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col style={{width: '25%'}} />
                </CardItem>
                <CardItem>
                    <Col style={{width: '15%'}}><Text style={styles.textday}>Sunday</Text></Col>
                    <Col style={{width: '5%'}}><Text style={styles.textday}>:</Text></Col>
                    <Col style={styles.inputfield}>
                        <Input style={styles.inputbox} placeholder='Start Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col>
                        <Input style={styles.inputbox} placeholder='End Time' placeholderTextColor='#959595'/>
                    </Col>
                    <Col style={{width: '25%'}} />
                </CardItem>
                <CardItem>
                    <Col style={{width: '20%'}} />
                    <Col style={{width: '50%'}}>
                        <Button block style={{backgroundColor: '#81B864'}}>
                            <Text style={{color: '#ffffff', fontSize: 20}}>Submit</Text>
                        </Button>
                    </Col>
                </CardItem>
            </Card>
        </Content>
    );
  }
}

export default SetDinein;
