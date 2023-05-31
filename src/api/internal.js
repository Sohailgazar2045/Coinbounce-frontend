import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_INTERNAL_API_PATH,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data) => {
  let response;

  try {
    response = await api.post("/api/v1/login", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const signup = async (data) => {
  let response;

  try {
    response = await api.post("/api/v1/register", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const signout = async () => {
  let response;
  try {
    response = await api.post("/api/v1/logout");
  } catch (error) {
    return error;
  }

  return response;
};

export const getAllBlogs = async () => {
  let response;

  try {
    response = await api.get("/api/v1/blog/all");
  } catch (error) {}

  return response;
};

export const submitBlog = async (data) => {
  let response;

  try {
    response = await api.post("/api/v1/blog", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const getBlogById = async (id) => {
  let response;
  try {
    response = await api.get(`/api/v1/blog/${id}`);
  } catch (error) {
    return error;
  }
  return response;
};

export const getCommentsById = async (id) => {
  let response;

  try {
    response = await api.get(`/comment/${id}`, {
      validateStatus: false,
    });
  } catch (error) {
    return error;
  }

  return response;
};

export const postComment = async (data) => {
  let response;

  try {
    response = await api.post("/comment", data);
  } catch (error) {
    return error;
  }
  return response;
};

export const deleteBlog = async (id) => {
  let response;
  try {
    response = await api.delete(`/blog/${id}`);
  } catch (error) {
    return error;
  }

  return response;
};

export const updateBlog = async (data) => {
  let response;
  try {
    response = await api.put("/blog", data);
  } catch (error) {
    return error;
  }
  return response;
};
