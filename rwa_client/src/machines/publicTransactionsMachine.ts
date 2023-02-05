import { isEmpty, omit } from "lodash/fp";
import { dataMachine } from "./dataMachine";
import { httpClient } from "../utils/asyncUtils";
import { backendUrl } from "../utils/urlUtils";

export const publicTransactionsMachine = dataMachine("publicTransactions").withConfig({
  services: {
    fetchData: async (ctx, event: any) => {
      const payload = omit("type", event);
      const resp = await httpClient.get(`${backendUrl}/transactions/public`, {
        params: !isEmpty(payload) ? payload : undefined,
      });
      return resp.data;
    },
  },
});
