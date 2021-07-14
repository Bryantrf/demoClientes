import axios, { AxiosResponse } from "axios";
import { ClientVM } from "./models";

export default {
  async getClients(): Promise<AxiosResponse<ClientVM[]>> {
    const res = await axios.get("/clients.json");

    console.log(res);
    return res ;
  },

};
