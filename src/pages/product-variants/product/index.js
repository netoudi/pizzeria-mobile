import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, View } from 'react-native';
import styles from './styles';

const makeImage = (style, source) => <Image style={style} source={source} />;

const hasSizes = (value, ...args) => {
  const found = (new RegExp(args.join('|'), 'gi')).exec(value);

  return (found || []).length > 0;
};

const formatMoney = (value) => {
  const amount = (value).toFixed(2)
    .replace(/\./g, ',')
    .replace(/\d(?=(\d{3})+,)/g, '$&.');

  return `R$ ${amount}`;
};

const sizes = {
  small: makeImage(styles.iconSmall, require('../../../assets/images/tamanho-p.png')),
  medium: makeImage(styles.iconMedium, require('../../../assets/images/tamanho-m.png')),
  big: makeImage(styles.iconBig, require('../../../assets/images/tamanho-g.png')),
  larger: makeImage(styles.iconLarger, require('../../../assets/images/tamanho-gg.png')),
  notFound: makeImage(styles.notFound, require('../../../assets/images/logo.png')),
};

const image = (product) => {
  if (product.image_url === null) {
    if (hasSizes(product.title, 'pequena', 'pequeno', 'small')) return sizes.small;
    if (hasSizes(product.title, 'media', 'medium')) return sizes.medium;
    if (hasSizes(product.title, 'grande', 'big')) return sizes.big;
    if (hasSizes(product.title, 'gigante', 'larger')) return sizes.larger;

    return sizes.notFound;
  }

  return makeImage(styles.image, { uri: product.image_url });
};

const Product = ({ product }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      {image(product)}
    </View>
    <Text style={styles.title}>{product.title}</Text>
    <Text style={styles.price}>{formatMoney(product.price)}</Text>
  </View>
);

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    image_url: PropTypes.string,
  }).isRequired,
};

export default Product;
