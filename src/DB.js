import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    let value = await SecureStore.getItemAsync(key);
    return value;
//   if (result) {
//       return re
//   } else {
//     alert('No values stored under that key.');
//   }
}


export { save, getValueFor }; 