<template>
  <v-container id="history" fluid tag="section">
    <v-btn @click="onClick">get</v-btn>
    <v-btn @click="onClickTest">log</v-btn>
    <!-- {{getData}} -->
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import { namespace } from "vuex-class";
import { ILoadcurrentRMS } from "@/_service/models";

// import { getModule } from "vuex-module-decorators";
import historyState from "@/store/modules/history";

// const historyState = namespace("history");

@Component
export default class History extends Vue {
  // @historyState.State
  // public data!:ILoadcurrentRMS[];
  // @historyState.Action searchHistory: any;
  // @historyState.Getter getData!: ILoadcurrentRMS[];
  // public onClick(): void {
  // this.searchHistory();
  // this.$store.dispatch("history/searchHistory").then();
  //   historyState.searchHistory();
  // }

  get getData(): ILoadcurrentRMS[] {
    return historyState.getDataHistory;
  }

  public onClick(): void {
    historyState.searchHistory();
  }
  public onClickTest(): void {
    console.log(historyState);
    console.log(historyState.dataHistory);
    console.log(this.getData);
  }

  private headers: Array<object> = [
    {
      sortable: false,
      text: "Check In",
      value: "date_start"
    },
    {
      sortable: false,
      text: "Check Out",
      value: "date_end"
    },
    {
      sortable: false,
      text: "Work hours",
      value: "time_work",
      align: "right"
    }
  ];
}
</script>
