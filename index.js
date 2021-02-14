import {
  listContacts,
    getContactById,
    addContact,
    removeContact
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
// Идиот 3 часа потратил на то чтобы понять, что нужно добавлять аргументы при вызове функций
    case 'get':

      getContactById(id)
      break;

    case 'add':
      addContact(name, email, phone)
      break;

    case 'remove':
      removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);


// # Получаем и выводим весь список контакстов в виде таблицы (console.table)
// node index.js --action="list"

// # Получаем контакт по id
// node index.js --action="get" --id=5

// # Добавялем контакт
// node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

// # Удаляем контакт
// node index.js --action="remove" --id=3