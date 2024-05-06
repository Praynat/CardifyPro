import axios from "axios";



const apiUrl= "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/"
export const getCards = async()=>{
try {
    const response = await axios.get(
        apiUrl);
          const data =response.data;
    return data
    
} catch (err) {
    throw new Error(err.message)
}
}

export const getCard = async (cardId) => {
    try {
      if (cardId && cardId !== "") {
        const response = await axios.get(`${apiUrl}/${cardId}`);
        const data = response.data;
        return data;
      } else {
        throw new Error("Invalid card ID");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
