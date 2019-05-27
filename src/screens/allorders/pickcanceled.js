import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Content, Segment, Button } from 'native-base';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import styles from "./styles";


class PickCanceled extends Component {
   
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
      <Button small style={styles.btn}onPress={() => this._alertIndex(index)}>
          <Text style={styles.btnText}>Canceled</Text>
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
                    <Cell key={cellIndex} data={cellIndex === 7 ? element(cellData, index) : cellData} textStyle={styles.text}/>
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

export default PickCanceled;
