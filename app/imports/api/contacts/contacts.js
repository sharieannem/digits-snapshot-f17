import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('Contacts');

/**
 * Create the schema for Stuff
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,
    custom: function () {
      if (this.value === this.field('last').value) {
        return "Not a unique "
      }
    },
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,
  },
  address: {
    label: 'address',
    type: String,
    optional: false,
    max: 200,
  },
  telephone: {
    label: 'telephone',
    type: String,
    optional: false,
    max: 200,
    regEx: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,
  },
});



Contacts.attachSchema(ContactsSchema);

