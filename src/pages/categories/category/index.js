import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Category = ({ category }) => (
  <View style={styles.container}>
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
  </View>
);

Category.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default Category;
