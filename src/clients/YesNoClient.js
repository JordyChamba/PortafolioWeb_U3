import axios from "axios";

const consumirAPI = async () => {
  const response = await axios.get("https://yesno.wtf/api");
  return response.data;
};

export async function consumirFacade() {
  return await consumirAPI();
}
