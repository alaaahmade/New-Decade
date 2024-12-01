import { random } from 'lodash';
import { _mock } from './_mock';
import {
  _Keywords,
  _descriptions,
  _fullNames,
  _jobTitles,
  _postTitles,
  _productNames,
  _sentences,
  _taskNames
} from './assets';

export const _mockDetails = [...Array(20)].map((_, index) => {
  const id = index + 1;
  const title = _postTitles[index];
  const description = _postTitles[random(0, _postTitles.length - 1)];

  const participants = [...Array(random(1, 4))].map((e, i) => ({
      name: _fullNames[i],
      jop: _jobTitles[i],
      id: i
    }))

  const time = new Date();

  const summary = _descriptions[index];

  const LoremIpsum = ([...Array(random(2, 4))]).map((e, i) => ({
    text : _taskNames[random(i)],
    id: i + random(0, 4000000000000000)
  }))

  const Keywords = ([...Array(random(5, 10))]).map((e, i) => ({
    text: _Keywords[random(i)],
    id: i + random(0, 4000000000000000)
  }))


  const user = (num) => ({
    id: index,
    name: _fullNames[num],
    avatarUrl: _mock.image.avatar(index),
  });
  const transcripts = ([...Array(random(4, 10))]).map(( e , i) =>({
    text: _productNames[random(0, _sentences.length - 1)],
    user: user(random(0, _fullNames.length - 1)),
    time: `${random(0, 59)}:${random(0, 59)}`,
    id: i + random(0, 4000000000000000)
  }))
   
  const Author = _fullNames[index]

  const Published = index % 2 === 0 

  return {
    id,
    title,
    description,
    participants,
    time,
    summary,
    LoremIpsum,
    Keywords,
    transcripts,
    Author,
    Published: !Published,
  };
});