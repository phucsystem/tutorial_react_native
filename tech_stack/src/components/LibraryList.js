import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library.item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        keyExtractor={(library) => library.id}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {libraries: state.libraries, selectedLibraryId: state.selectedLibraryId};
};

export default connect(mapStateToProps)(LibraryList);
