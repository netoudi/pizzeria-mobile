import React, { Component } from 'react';

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

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { email, password } = this.state;

    // SAGA(email, password)
  };

  render() {
    const { email, password } = this.state;

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
              placeholder="Seu e-mail"
              value={email}
              onChangeText={text => this.setState({ email: text })}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              autoFocus
              returnKeyType="next"
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
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.buttonLink}>
              <Text style={styles.buttonLinkText}>Criar conta gratuita</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

export default SignIn;
