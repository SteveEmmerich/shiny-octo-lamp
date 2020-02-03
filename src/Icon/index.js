import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLevelUpAlt,
  faMinusCircle,
  faPlus,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';

library.add(faLevelUpAlt, faMinusCircle, faPlus, faSmile);

const getIconProps = icon => {
  switch (icon) {
    case 'add':
      return {
        icon: 'plus',
      };
    case 'indent':
      return {
        icon: 'level-up-alt',
        rotation: 90,
        fixedWidth: true,
        size: 'sm',
      };
    case 'remove':
      return {
        icon: 'minus-circle',
      };
    case 'smile':
      return {
        icon: 'smile',
      };
    default:
      return {};
  }
};

const Icon = ({ icon }) => {
  const iconProps = getIconProps(icon);

  return <FontAwesomeIcon {...iconProps} />;
};

export default Icon;
