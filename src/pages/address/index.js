import React, { Component } from 'react';

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

class Address extends Component {
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

  handleSubmit = () => {
    const { description, address } = this.state;

    // SAGA(description, address)
  };

  render() {
    const { description, address } = this.state;

    return (
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
            onSubmitEditing={() => this.streetInput.focus()}
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
            <TouchableOpacity onPress={() => {}} style={styles.buttonNext}>
              <Text style={styles.buttonNextText}>FINALIZAR</Text>
              <Icon name="chevron-right" size={18} style={styles.buttonNextIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Address;
