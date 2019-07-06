import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

import NavigationService from '../../services/navigation';

import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { name, email, password } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(name, email, password);
  };

  signIn = () => NavigationService.navigate('SignIn');

  render() {
    const { name, email, password } = this.state;

    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <ImageBackground source={require('../../assets/images/fundo.jpg')}
          style={styles.background}
        >
          <View style={styles.backgroundDarker}>
            <View style={styles.logo}>
              <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
            </View>

            <TextInput
              placeholder="Nome completo"
              value={name}
              onChangeText={text => this.setState({ name: text })}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              autoFocus
              returnKeyType="next"
              onSubmitEditing={() => this.emailInput.focus()}
            />

            <TextInput
              placeholder="Seu e-mail"
              value={email}
              onChangeText={text => this.setState({ email: text })}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="next"
              ref={(el) => {
                this.emailInput = el;
              }}
              onSubmitEditing={() => this.passwordInput.focus()}
            />

            <TextInput
              placeholder="Senha secreta"
              value={password}
              onChangeText={text => this.setState({ password: text })}
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="send"
              ref={(el) => {
                this.passwordInput = el;
              }}
              onSubmitEditing={this.handleSubmit}
            />

            <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.signIn} style={styles.buttonLink}>
              <Text style={styles.buttonLinkText}>Já tenho login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
