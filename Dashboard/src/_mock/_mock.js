import { sub } from 'date-fns';
// config
import { ASSETS_API } from 'src/config-global';
//
import {
  _id,
  _ages,
  _roles,
  _prices,
  _emails,
  _ratings,
  _nativeS,
  _nativeM,
  _nativeL,
  _percents,
  _booleans,
  _sentences,
  _lastNames,
  _fullNames,
  _tourNames,
  _jobTitles,
  _taskNames,
  _postTitles,
  _firstNames,
  _fullAddress,
  _companyNames,
  _productNames,
  _descriptions,
  _phoneNumbers,
} from './assets';

// ----------------------------------------------------------------------

const _customers = [
  {
    name: 'Lindsay Walton',
  },
  {
    name: 'Walton Customer	',
  },
  {
    name: 'Aindsay Walton',
  },
  {
    name: 'Bindsay Walton',
  },
  {
    name: 'Zindsay Walton',
  }
]



const _participants = [ 4, 2, 6, 4, 4 ]
const _takeaways = [ 4, 2, 6, 4, 4 ]
export const _mock = {
  id: (index) => _id[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => _booleans[index],
  role: (index) => _roles[index],
  // meetingReport: (index) => index % 2 === 0 ? {
  //   name: 'User Interview on First Project',
  //   Analyzing: index === 0
  // }: {
  //   name: index === 3 ? 'Customer Feedback on Second Project Customer Feedback on Second Project' :  'Customer Feedback on Second Project',
  //   Analyzing: index === 0
  // },
  // Customer
  customer: (index) => index >= _customers.length ? _customers[_customers.length - 1] : _customers[index],
  // Participant
  participants: (index) => index >= _participants.length ? _participants[_participants.length - 1] : _participants[index],
  // Takeaway
  takeaways: (index) => index >= _takeaways.length ? _takeaways[_takeaways.length - 1] : _takeaways[index],
  // Text
  taskNames: (index) => _taskNames[index],
  postTitle: (index) => _postTitles[index],
  jobTitle: (index) => _jobTitles[index],
  tourName: (index) => _tourNames[index],
  productName: (index) => _productNames[index],
  sentence: (index) => index >= _sentences.length ? _sentences[_sentences.length - 2] : _sentences[index],
  name: (index) => _descriptions[index],
  // Contact
  email: (index) => _emails[index],
  phoneNumber: (index) => _phoneNumbers[index],
  fullAddress: (index) => _fullAddress[index],
  // Name
  firstName: (index) => _firstNames[index],
  lastName: (index) => _lastNames[index],
  fullName: (index) => _fullNames[index],
  companyName: (index) => _companyNames[index],
  // Number
  number: {
    percent: (index) => _percents[index],
    rating: (index) => _ratings[index],
    age: (index) => _ages[index],
    price: (index) => _prices[index],
    nativeS: (index) => _nativeS[index],
    nativeM: (index) => _nativeM[index],
    nativeL: (index) => _nativeL[index],
  },
  // Image
  image: {
    cover: (index) => `${ASSETS_API}/assets/images/cover/cover_${index + 1}.jpg`,
    avatar: (index) => `${ASSETS_API}/assets/images/avatar/avatar_${index + 1}.jpg`,
    travel: (index) => `${ASSETS_API}/assets/images/travel/travel_${index + 1}.jpg`,
    company: (index) => `${ASSETS_API}/assets/images/company/company_${index + 1}.png`,
    product: (index) => `${ASSETS_API}/assets/images/m_product/product_${index + 1}.jpg`,
    portrait: (index) => `${ASSETS_API}/assets/images/portrait/portrait_${index + 1}.jpg`,
  },  
};
