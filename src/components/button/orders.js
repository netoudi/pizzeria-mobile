import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../services/navigation';

const ButtonOrders = () => (
  <TouchableOpacity onPress={() => { NavigationService.navigate('Orders'); }}>
    <View style={{
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}
    >
      <Icon name="history" size={24} style={{ color: '#fff' }} />
    </View>
  </TouchableOpacity>
);

export default ButtonOrders;
