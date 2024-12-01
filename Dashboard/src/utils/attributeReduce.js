import uuid from 'react-uuid';

export const Apps_arReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newApps;
      return state;
    case 'remove':
      return action.newApps;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Apps_enReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newApps;
      return [...state];
    case 'remove':
      return action.newApps;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Apps_crReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newApps;
      return [...state];
    case 'remove':
      return action.newApps;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};


export const Avenues_arReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newAvenues;
      return state;
    case 'remove':
      return action.newAvenues;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Avenues_enReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newAvenues;
      return [...state];
    case 'remove':
      return action.newAvenues;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Avenues_crReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newAvenues;
      return [...state];
    case 'remove':
      return action.newAvenues;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Words_arReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newWords;
      return state;
    case 'remove':
      return action.newWords;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Words_enReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newWords;
      return [...state];
    case 'remove':
      return action.newWords;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Words_crReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newWords;
      return [...state];
    case 'remove':
      return action.newWords;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Solution_arReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newSolution;
      return state;
    case 'remove':
      return action.newSolution;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Solution_enReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newSolution;
      return [...state];
    case 'remove':
      return action.newSolution;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Solution_crReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newSolution;
      return [...state];
    case 'remove':
      return action.newSolution;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Insights_arReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newInsights;
      return state;
    case 'remove':
      return action.newInsights;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Insights_enReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newInsights;
      return [...state];
    case 'remove':
      return action.newInsights;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Insights_crReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newInsights;
      return [...state];
    case 'remove':
      return action.newInsights;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Challenges_arReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newChallenges;
      return state;
    case 'remove':
      return action.newChallenges;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Challenges_enReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newChallenges;
      return [...state];
    case 'remove':
      return action.newChallenges;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Challenges_crReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newChallenges;
      return [...state];
    case 'remove':
      return action.newChallenges;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Trusted_Reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newTrusted;
      return [...state];
    case 'remove':
      return action.newTrusted;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const Rates_Reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newRates;
      return [...state];
    case 'remove':
      return action.newRates;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const PlatformProp_Reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newProps;
      return [...state];
    case 'remove':
      return action.newProps;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};

export const PropMethods_Reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: action.id }];
    case 'removeAll':
      return [];
    case 'addAttriputes':
      return [...state, ...action.attriputes];
    case 'edit':
      state = action.newMethods;
      return [...state];
    case 'remove':
      return action.newMethods;
    default:
      throw new Error('error in Apps Dispatcher');
  }
};