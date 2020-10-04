import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import { ILoadcurrentRMS } from "@/_service/models";
import service from "@/_service";
import Vue from "vue";
import { AxiosResponse } from "axios";
import store from "@/store";

@Module({
  namespaced: true,
  name: "history",
  dynamic: true,
  store,
  stateFactory: true,
})
class History extends VuexModule {
  public dataHistory: ILoadcurrentRMS[] = [];

  get getDataHistory(): ILoadcurrentRMS[] {
    return this.dataHistory;
  }

  @Mutation
  loadResults({ data }: AxiosResponse<{ data: ILoadcurrentRMS[] }>) {
    if (data && data.data.length) {
      this.dataHistory = data.data;
    }
  }

  @Action({ rawError: true, commit: "loadResults" })
  async searchHistory() {
    return await service.history.history(Vue.ls.get("token"));
  }
}
export default getModule(History);
