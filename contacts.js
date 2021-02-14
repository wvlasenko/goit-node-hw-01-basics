
// import { read } from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';
// const fs = require('fs');
// const path = require('path')
import { v4 as uuidv4 } from 'uuid';

import {handleError} from './lib/handlerror.js'

const contactsPath  = path.resolve('./db/contacts.json')
// console.log(contactsPath)


 async function getContacts() {
 try {
     const listResult = await fs.readFile(contactsPath, "utf8")
     const contacts  = JSON.parse(listResult)
 
    return contacts
      
 } catch (error) {
    handleError(error) 
 }
  }

export async function listContacts(){
  try {
    const contacts = await getContacts()
    console.table(contacts)
  } catch (error) {
    handleError(error)
  }
}


  
export async function getContactById(contactId) {

try {
    const contacts = await getContacts();
const filteredContact = contacts.filter(
  contact => contact.id === contactId,
  )
// console.log(filteredContact)
console.table(filteredContact)

} catch (error) {
    handleError(error) 
}
   
  }


  export async function addContact(name, email, phone) {
    try {
      const contacts = await getContacts()
      const newContact = {id : uuidv4(), name, email, phone }
      // console.log(newContact)
      const updateContacts = [...contacts, newContact ]

      await fs.writeFile(contactsPath, JSON.stringify(updateContacts))
      console.log(`contact with name ${name} added successfully`)
      listContacts()
    } catch (error) {
      handleError(error)
    }
    
   }


  
  export async function removeContact(contactId) {
    try {
      const contacts = await getContacts()
      if (contacts.find (contact => contact.id === contactId)){
        const updateContactList = contacts.filter(contact =>contact.id !==contactId)

        await fs.writeFile(contactsPath , JSON.stringify(updateContactList))
         console.log(`contact with id ${contactId} was removed`)
         listContacts()
         return
      }else{
        console.log("contact with this id does not exist")
      }
      
    } catch (error) {
      handleError(error)
      
    }
  }
  
