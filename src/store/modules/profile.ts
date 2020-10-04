import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { ILoadcurrent, ILonLat } from "@/_service/models";
import service from "@/_service";
import Vue from "vue";

@Module({ namespaced: true })
class Profile extends VuexModule {
  public data: ILoadcurrent = {
    timeWork:"0"
  };

  get getCheckInLocation(): ILonLat {
    const result = this.data.checkinLocation?.split(",") ?? ["", ""];
    return {
      lat: result[0],
      lon: result[1],
    };
  }

  get getPercentTimeWork(): number {
    return  ~~((+this.data.timeWork/8)*100);
  }

  @Mutation
  private SET_DATA(data: ILoadcurrent) {
    this.data = data;
  }
  /* eslint-disable @typescript-eslint/camelcase */
  @Action({ rawError: true })
  public loadcurrent(): Promise<any> {
    return new Promise((resolve, reject) => {
      service.profile
        .loadcurrent(Vue.ls.get("token"))
        .then((res) => {
          const {
            checkin_location,
            checkout_location,
            checkout_type,
            date_end,
            date_start,
            device,
            id,
            local_trx_checkin_id,
            local_trx_checkout_id,
            time_work,
            user_id,
          } = res.data?.data;
          const body: ILoadcurrent = {
            checkinLocation: checkin_location,
            checkoutLocation: checkout_location,
            checkoutType: checkout_type,
            dateEnd: date_end,
            dateStart: date_start,
            device: device,
            id: id,
            localTrxCheckinId: local_trx_checkin_id,
            localTrxCheckoutId: local_trx_checkout_id,
            timeWork: time_work,
            userId: user_id,
          };
          this.context.commit("SET_DATA", body);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
export default Profile;
