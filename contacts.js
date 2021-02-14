
import { read } from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';
// const fs = require('fs');
// const path = require('path')

import {handleError} from './lib/handlerror.js'

const contactsPath  = path.resolve('./db/contacts.json')
console.log(contactsPath)


export async function listContacts() {
 try {
     const listResult = await fs.readFile(contactsPath, 'utf8')
     const contacts  = JSON.parse(listResult)
     console.table(contacts)
    return contacts
    
     
 } catch (error) {
    handleError(error) 
 }
  }


  
export async function getContactById(contactId) {

try {
    const contacts = await listContacts()
filteredContact = contacts.filter(
    contact => contact.id === contactId
)
return filteredContact

} catch (error) {
    handleError(error) 
}
   
  }




  
  function removeContact(contactId) {
    try {
      const contacts = await listContacts()
      if (contacts.find (contact => contact.id === contactId)){
        const updateContactList = contacts.filter(contact =>contact.id !==contactId)

         fs.writeFile(contactsPath , JSON.stringify(updateContactList))
         console.log(`contact with id ${contactId} was removed`)
         listContacts()
         return
      }else{
        console.log("contact with this id does not exist")
      }
      
    } catch (error) {
      handleError(error)
      
    }
 
  
 export async function addContact(name, email, phone) {
   try {
     const contacts = await listContacts()
     const newContact = {
       id : generateId(), name, email,phone
     }
     const updateContacts = [...contacts, newContact ]
     fs.writeFile(contactsPath, JSON.stringify(updateContacts))
     console.log(`contact with name ${name} added successfully`)
     listContacts()
   } catch (error) {
     handleError(error)
   }
   
  }