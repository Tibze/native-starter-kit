
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import styles from './styles';

// const {
//   reset,
//   pushRoute,
// } = actions;

class Settings extends Component {

  static navigationOptions = {
    title: 'Settings',
    tabBar: {
      label: 'Settings',
      icon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  };

  componentDidMount(){

    console.log(this.props);

  }

  // static propTypes = {
  //   name: React.PropTypes.string,
  //   list: React.PropTypes.arrayOf(React.PropTypes.string),
  //   setIndex: React.PropTypes.func,
  //   openDrawer: React.PropTypes.func,
  //   pushRoute: React.PropTypes.func,
  //   reset: React.PropTypes.func,
  //   navigation: React.PropTypes.shape({
  //     key: React.PropTypes.string,
  //   }),
  // }
  //
  // pushRoute(route, index) {
  //   this.props.setIndex(index);
  //   this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  // }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container}>


        <Content>
          <Grid style={styles.mt}>
            {this.props.list.map((item, i) =>
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => navigate('BlankModal')}
                >
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Row>
            )}
          </Grid>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Settings);
