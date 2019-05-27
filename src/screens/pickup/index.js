import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Header, Left, Right, Icon, Badge, Container, Content, Button, H1, Card} from 'native-base';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


import styles from "./styles";

const logo = require("../../../assets/logo.png");

class PickUp extends Component { 
 
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Order #', 'Tips', 'Sub Total', 'Tax', 'Total Paid', 'Pickup Time', 'Time & Date', 'Status'],
      tableData: [
        ['01', '$ 02.00', '$ 16.00', '$ 02.00', '$ 20.00', '12:00 AM 11 Nov 2017', '12:00 AM 11 Nov 2017', '1'],
        ['02', '$ 02.00', '$ 16.00', '$ 02.00', '$ 20.00', '12:00 AM 11 Nov 2017', '12:00 AM 11 Nov 2017', '2'],
        ['03', '$ 02.00', '$ 16.00', '$ 02.00', '$ 20.00', '12:00 AM 11 Nov 2017', '12:00 AM 11 Nov 2017', '3'],
        ['04', '$ 02.00', '$ 16.00', '$ 02.00', '$ 20.00', '12:00 AM 11 Nov 2017', '12:00 AM 11 Nov 2017', '4'],
      ]
    }
  }
 
  render() {
      const state = this.state;
    const element = (data, index) => (
      <Button small style={styles.btn}onPress={() => this.props.navigation.navigate("PickUpView")}>
          <Text style={styles.btnText}>View</Text>
      </Button>
    );

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
              <H1 style={styles.headline}>Pick Up</H1>
              <Card>
              <View style={styles.container}>
            <Table borderStyle={{borderColor: '#E8E8E8'}}>
                <Row data={state.tableHead} style={styles.head} textStyle={styles.text1}/>
                {
                state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                  {
                    rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 7 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                      ))
                    }
                  </TableWrapper>
                ))
              }
            </Table>
          </View>
          </Card>
          </Content>
      </Container>


     );
  }
}

export default PickUp;
