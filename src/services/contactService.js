import axios from "axios";

const SERVER_URL = "http://localhost:9000";

// @desc all contacts
// @route get contact http://localhost:9000
export const getAllContacts = () => {
    const url = `${SERVER_URL}/contact`;
    return axios.get(url);
}
// @desc one by one contact
// @route get contact http://localhost:9000
export const getContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url);
}
// @desc all groups
// @route get contact http://localhost:9000
export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}
// @desc one by one group
// @route get contact http://localhost:9000
export const getGroup = (groupId) => {
    const url = `${SERVER_URL}/groups/${groupId}`;
    return axios.get(url);
}
// @desc create new contact
// @route get contact http://localhost:9000
export const createContact  = (contact) => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact);
}
// @desc update contact
// @route get contact http://localhost:9000
export const updateContact = (contact, contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact);
}
// @desc delete contact
// @route get contact http://localhost:9000
export const deleteContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url);
}