import Vue from "vue";
import { VuexModule, Module, Mutation, Action ,MutationAction} from "vuex-module-decorators";
import service from "@/_service";
import { IUser } from "@/_service/models"

enum STATUS_AUTH {
  SUCCESS = "success",
  FAIL = "fail",
}
const lsToken = Vue.ls.get('token') || ''

@Module({ namespaced: true })
class User extends VuexModule implements IUser{
  public id = "";
  public email = "";
  public token = lsToken;
  public authen = ""

  @Mutation
  private  SET_TOKEN(token: string) {
    this.token = token;
  }
  @Mutation
  private  SET_ID(id: string) {
    this.id = id;
  }
  @Mutation
  private  SET_EMAIL(email: string) {
    this.email = email;
  }
  @Mutation
  private  SET_AUTHEN(authen: string) {
    this.authen = authen;
  }
  
  @Action
  public  AUTH_LOGOUT() {
    Vue.ls.remove("token");
    this.context.commit("SET_ID", "")
    this.context.commit("SET_EMAIL", "")
    this.context.commit("SET_TOKEN", "")
  }

  @Action
  public AUTH_REQUEST(): void {
    this.context.commit("SET_ID", "")
    this.context.commit("SET_EMAIL", "")
  }
  /* eslint-disable @typescript-eslint/camelcase */
  @Action({ rawError: true })
  public login({ email,password }: { email: string ,password:string}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.context.dispatch("AUTH_REQUEST");
      service.auth
        .login(email, password)
        .then(async res => {
          const authen: string = res.data?.user.authen || "";
          switch (authen) {
            case STATUS_AUTH.SUCCESS: {
              const {id, email, access_token} = res.data.user
              this.context.commit("SET_ID", id)
              this.context.commit("SET_EMAIL", email)
              this.context.commit("SET_TOKEN", access_token)
              Vue.ls.set("token", access_token);
              resolve(res);
              break;
            }
            case STATUS_AUTH.FAIL: {
              const msg: string = res.data?.user.msg;
              reject(msg);
              break;
            }
            default:
              reject(res);
              break;
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
export default User;
