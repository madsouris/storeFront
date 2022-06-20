// would want this to be a global data fetch and can access everywhere in the app

import axios from 'axios';

let storeData = null;

async function getStore() {
  try {
    const store = await axios.get(
      'https://api.hangme-staging.app/api/v2/marketplace/stores/2'
    );
    console.log(store);
    storeData = store;
  } catch (error) {
    console.error(error);
  }
}

async function getProducts() {
  try {
    const products = await axios.get(
      'https://api.hangme-staging.app/api/v2/marketplace/stores/2/products'
    );
    console.log(products);
  } catch (error) {
    console.error(error);
  }
}

export { getStore, storeData, getProducts };
