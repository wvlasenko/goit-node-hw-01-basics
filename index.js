import {
    listContacts,
    getContactById
} from './contacts.js'

// import yargs from 'yargs'

// const argv = require('yargs').argv;
import {argv} from './lib/yargs.js'

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
listContacts()
      break;

    case 'get':
      getContactById()
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);