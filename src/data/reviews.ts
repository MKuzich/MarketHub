import { products } from './products';

import OwnerPhoto from '../images/temp/owner.png';

export const reviews = products.map(({ id }) => {
  return {
    id: `review-${id}`,
    date: new Date(),
    owner: {
      name: 'Dart Vaider',
      id: `unique-owner-id-vaider`,
      image: OwnerPhoto,
      rate: 0,
    },
    productId: id,
    title: 'In mattis leo, eleifend nec interdu.',
    text: 'Ut. In odio. Nisi aenean justo cras ornare non odio. Et cursus dolor lectus et mattis tortor, urna velit aenean odio. Dui imperdiet et. Luctus habitasse habitasse sit mattis augue ex. Lorem est. Dictum. Vestibulum leo, sapien sapien efficitur ut. Sit lorem cras quam, in lacinia cras elit. Hac et. Dolor dictum quam, sit adipiscing lectus in amet, lectus sit dolor justo justo nis.',
    rate: Math.round(Math.random() * 50) * 0.1,
  };
});
