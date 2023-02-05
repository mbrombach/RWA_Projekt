import { isEmpty, omit } from "lodash/fp";
import { dataMachine } from "./dataMachine";
import { httpClient } from "../utils/asyncUtils";
import { backendUrl } from "../utils/urlUtils";

export const contactsTransactionsMachine = dataMachine("contactsTransactions").withConfig({
  services: {
    fetchData: async (ctx, event: any) => {
      const payload = omit("type", event);
      const resp = await httpClient.get(`${backendUrl}/transactions/contacts`, {
        params: !isEmpty(payload) ? payload : undefined,
      });
      return resp.data;
    },
  },
});
