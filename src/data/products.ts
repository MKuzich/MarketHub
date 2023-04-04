import CardFirst from '../images/temp/card.jpg';
import CardSecond from '../images/temp/card-1.jpg';
import CardThird from '../images/temp/card-2.jpg';
import CardFour from '../images/temp/card-3.jpg';
import CardFifth from '../images/temp/card-4.jpg';
import CardSixth from '../images/temp/card-5.jpg';
import CardSeventh from '../images/temp/card-6.jpg';
import CardEight from '../images/temp/card-7.jpg';
import CardNineth from '../images/temp/card-8.jpg';
import CardTenth from '../images/temp/card-9.jpg';
import CardEleventh from '../images/temp/card-10.jpg';
import CardTwelfth from '../images/temp/card-11.jpg';
import CardThirteenth from '../images/temp/card-12.jpg';
import CardFourteenth from '../images/temp/card-13.jpg';
import CardFifteenth from '../images/temp/card-14.jpg';
import CardSixteenth from '../images/temp/card-15.jpg';
import OwnerPhoto from '../images/temp/owner.png';

const images = [
  CardFirst,
  CardSecond,
  CardThird,
  CardFour,
  CardFifth,
  CardSixth,
  CardSeventh,
  CardEight,
  CardNineth,
  CardTenth,
  CardEleventh,
  CardTwelfth,
  CardThirteenth,
  CardFourteenth,
  CardFifteenth,
  CardSixteenth,
];

export const products = images.map((image, idx) => {
  return {
    id: `unique-id-${idx}`,
    name: `Name ${idx}`,
    category: 'Health and Wellness',
    image,
    price: 50 + idx * 100,
    promoPrice: idx % 2 === 0 ? idx * 80 : 0,
    description:
      'Eget nunc lobortis mattis aliquam. Massa eget egestas purus viverra. Enim neque volutpat ac tincidunt. In hac habitasse platea dictumst. Pellentesque id nibh tortor id aliquet lectus. Cursus vitae congue mauris rhoncus aenean. Quisque sagittis purus sit amet. Sit amet risus nullam eget felis eget nunc lobortis mattis.',
    owner: {
      name: 'Jack Sparrow',
      id: `unique-owner-id-sparrow`,
      image: OwnerPhoto,
      rate: 4.8,
    },
    active: idx % 5 === 0 ? false : true,
    rate: Math.round(Math.random() * 50) * 0.1,
    ordersPerDay: Math.round(Math.random() * 20),
    totalOrders: 20 + Math.round(Math.random() * 200),
  };
});
