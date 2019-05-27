import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Content, Segment, Button } from 'native-base';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


import styles from "./styles";


class ReservationConf extends Component {
   
 constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Request#', 'User Name', 'Time & Date', 'Status'],
      tableData: [
        ['01', 'Prakesh', '12:00 AM 11 Nov 2017', '1'],
        ['02', 'Ramesh', '12:00 AM 11 Nov 2017', '1'],
        ['03', 'Ganesh', '12:00 AM 11 Nov 2017', '1'],
        ['04', 'Mukesh', '12:00 AM 11 Nov 2017', '1'],
      ]
    }
  }

  render() {
  	const state = this.state;
    const element = (data, index) => (
      <Button small style={styles.btn}onPress={() => this._alertIndex(index)}>
          <Text style={styles.btnText}>Confirmed</Text>
      </Button>
    );

    return (
          <Content>
            <View style={styles.container}>
        		<Table borderStyle={{borderColor: '#E8E8E8'}}>
          			<Row data={state.tableHead} style={styles.head} textStyle={styles.text1}/>
          			{
            		state.tableData.map((rowData, index) => (
              		<TableWrapper key={index} style={styles.row}>
                	{
                  	rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
		                  ))
		                }
              		</TableWrapper>
		            ))
		          }
        		</Table>
      		</View>

          </Content>
     );
  }
}

export default ReservationConf;
