import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '../../store/ducks/cart';

import Background from '../../components/background';
import Header from '../../components/header';

import AddressService from '../../services/address';

class Address extends Component {
  static propTypes = {
    addInfoRequest: PropTypes.func.isRequired,
  };

  state = {
    'description': '',
    'address': {
      'zipcode': '',
      'street': '',
      'number': '',
      'neighborhood': '',
      'city': '',
      'state': '',
    },
  };

  componentDidMount() {
    const { navigation, cart } = this.props;

    if (cart.data.number_items === 0) {
      navigation.navigate('Cart');
    }
  }

  searchZipcode = async () => {
    try {
      const address = await AddressService(this.state.address.zipcode);

      this.setState({
        address: {
          ...this.state.address,
          ...address,
        },
      });
    } catch (e) {
      // nothing to do...
    }
  };

  handleSubmit = () => {
    const { description, address } = this.state;
    const { addInfoRequest } = this.props;

    addInfoRequest(description, address);
  };

  render() {
    const { description, address } = this.state;

    return (
      <Background>
        <Header title="Pizzeria Don Juan" />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.container}
        >
          <View>
            <TextInput
              placeholder="Alguma observação?"
              value={description}
              onChangeText={text => this.setState({ description: text })}
              style={styles.inputDescription}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              autoFocus
              returnKeyType="next"
              onSubmitEditing={() => this.zipcodeInput.focus()}
              numberOfLines={5}
              multiline
            />

            <TextInput
              placeholder="Qual seu CEP?"
              value={address.zipcode}
              onChangeText={text => this.setState({
                address: {
                  ...address,
                  zipcode: text,
                },
              })}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="next"
              ref={(el) => {
                this.zipcodeInput = el;
              }}
              onSubmitEditing={() => {
                this.searchZipcode();
                this.streetInput.focus();
              }}
            />

            <View style={styles.inputGroup}>
              <TextInput
                placeholder="Rua"
                value={address.street}
                onChangeText={text => this.setState({
                  address: {
                    ...address,
                    street: text,
                  },
                })}
                style={styles.inputStreet}
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                ref={(el) => {
                  this.streetInput = el;
                }}
                onSubmitEditing={() => this.numberInput.focus()}
              />

              <TextInput
                placeholder="Nº"
                value={address.number}
                onChangeText={text => this.setState({
                  address: {
                    ...address,
                    number: text,
                  },
                })}
                style={styles.inputNumber}
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                ref={(el) => {
                  this.numberInput = el;
                }}
                onSubmitEditing={() => this.neighborhoodInput.focus()}
              />
            </View>

            <TextInput
              placeholder="Bairro"
              value={address.neighborhood}
              onChangeText={text => this.setState({
                address: {
                  ...address,
                  neighborhood: text,
                },
              })}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="send"
              ref={(el) => {
                this.neighborhoodInput = el;
              }}
              onSubmitEditing={this.handleSubmit}
            />

            <View style={styles.actionContainer}>
              <TouchableOpacity onPress={this.handleSubmit} style={styles.buttonNext}>
                <Text style={styles.buttonNextText}>CONTINUAR</Text>
                <Icon name="chevron-right" size={18} style={styles.buttonNextIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Address);
