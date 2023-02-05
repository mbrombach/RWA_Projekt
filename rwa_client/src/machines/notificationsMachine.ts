import { isEmpty, omit } from "lodash/fp";
import { dataMachine } from "./dataMachine";
import { httpClient } from "../utils/asyncUtils";
import { backendUrl } from "../utils/urlUtils";

export const notificationsMachine = dataMachine("notifications").withConfig({
  services: {
    fetchData: async (ctx, event: any) => {
      const payload = omit("type", event);
      const resp = await httpClient.get(`${backendUrl}/notifications`, {
        params: !isEmpty(payload) && event.type === "FETCH" ? payload : undefined,
      });
      return resp.data;
    },
    updateData: async (ctx, event: any) => {
      const payload = omit("type", event);
      const resp = await httpClient.patch(`${backendUrl}/notifications/${payload.id}`, payload);
      return resp.data;
    },
  },
});
