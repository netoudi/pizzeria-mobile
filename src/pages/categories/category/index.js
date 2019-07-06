import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import NavigationService from '../../../services/navigation';

const Category = ({ category }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => { NavigationService.navigate('Products', { categoryId: category.id }); }}
  >
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: category.image_url }} />
    </View>

    <View style={styles.infoContainer}>
      <Text style={styles.title}>{category.title}</Text>
      <Text style={styles.description}>{category.description}</Text>
      {category.time && (
        <View style={styles.time}>
          <Icon name="timer" size={12} style={styles.timeIcon} />
          <Text style={styles.timeText}>{category.time}</Text>
        </View>
      )}
    </View>
  </TouchableOpacity>
);

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default Category;
