import axios from "axios";


const apiUrl="https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users"
export const login = async(userLogin)=>{
    try {
        const response = await axios.post(apiUrl+"/login",userLogin);
              const data =response.data;
        return data
        
    } catch (err) {
        throw new Error(err.message)
    }
    }

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(apiUrl, normalizedUser);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getUserData = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/${id}`);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getAllUsersData = async () => {
  const adminToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBhZTc1OWRiMzgxM2E2NTAyZmMyZmMiLCJpc0J1c2luZXNzIjp0cnVlLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTg4NDI5NTJ9.En62ry5Gu9FMBAvxyltv0eRYhpJIJs_aW06QAtxXRck";
  try {
    const { data } = await axios.get(apiUrl,{
      headers: {
        Authorization: `Bearer ${adminToken}`
      }
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
