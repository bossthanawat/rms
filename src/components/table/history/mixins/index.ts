import { Vue, Component, Prop } from "vue-property-decorator";
import { ILoadcurrentRMS } from "@/_service/models";
import historyState from "@/store/modules/history";
@Component
class HistoryMixin extends Vue {
  created() {
    this.getAPI &&
      historyState.searchHistory().finally(() => (this.loading = false));
  }

  @Prop({ required: false, type: Boolean, default: true })
  readonly getAPI!: boolean;

  get getData(): ILoadcurrentRMS[] {
    return historyState.getDataHistory;
  }

  private loading = true;
}
export default HistoryMixin;