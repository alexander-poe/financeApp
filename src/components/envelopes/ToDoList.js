'use strict';
var styles = require('./styles/styles');
import React from 'react'
var ToDoListItem = require('./ToDoListItem');
import { ListView } from 'react-native'


class ToDoList extends React.Component {

    componentWillMount() {
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
    }

    render() {
        var dataSource = this.dataSource.cloneWithRows(this.props.items);
        return (
            <ListView
                dataSource={dataSource}
                renderRow={(rowData, sectionID, rowID) =>
          <ToDoListItem item={rowData}
          onPress={() => this.props.onPressItem(rowData, rowID)}
          onLongPress={() => this.props.onLongPressItem(rowData, rowID)} />
        }
                style={styles.listView}/>
        );
    }

}


module.exports = ToDoList;