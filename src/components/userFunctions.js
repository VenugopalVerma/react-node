import axios from "axios";

export const login = async user => {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      email: user.email,
      password: user.password
    });
    return response.data;
  } catch (error) {
    return false;
  }
};

export const register = async (user) => {
    try {
        const response = await axios.post("http://localhost:3000/users", {
          email: user.email,
          password: user.password,
          displayName: user.displayName
        });
        console.log(response);
        return response.data;
      } catch (error) {
        return false;
      }
}
