import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://connections-api.herokuapp.com";

export const signupUser = createAsyncThunk("users/signupUser", async (user) => {
  try {
    const { data } = await axios.post(`${apiURL}/users/signup`, {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    return error?.response;
  }
});

export const loginUser = createAsyncThunk("users/loginUser", async (user) => {
  try {
    const { data } = await axios.post(`${apiURL}/users/login`, {
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    return error?.response;
  }
});

export const logoutUser = createAsyncThunk(
  "users/logoutUser",
  async (token) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.post(`${apiURL}/users/logout`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (token) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.get(`${apiURL}/contacts`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (token, userData) => {
    console.log(userData);
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.post(`${apiURL}/contacts`, {
        name: userData.name,
        number: userData.number,
      });
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (token, id) => {
    console.log(id);
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    await axios.delete(`${apiURL}/contacts/${id}`);
    try {
      const { data } = await axios.get(`${apiURL}/contacts`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);
