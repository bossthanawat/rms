<template>
  <v-container id="profile" fluid tag="section">
    <v-row justify="center" align="center">
      <v-progress-circular
        :indeterminate="indeterminate"
        :rotate="rotate"
        :size="size"
        :value="value"
        :width="width"
        color="light-blue"
      >{{valueShowTimeHours}}</v-progress-circular>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { ILoadcurrent } from "@/_service/models";
import moment from "moment";
const profile = namespace("profile");

@Component
export default class ProgressCheckIn extends Vue {
  @profile.State
  public data!: ILoadcurrent;

  private indeterminate = false;
  private rotate = -90;
  private size = 100;
  private width = 4;
  private time = 0;
  private interval?: number;

  created() {
    this.toggleTimer();
  }
  destroyed() {
    this.interval && clearInterval(this.interval);
  }

  get valueTimeMilliseconds(): number {
    return ((+this.data.timeWork * 100) / 100) * 60 * 60000;
  }
  get valueIncrementTimeMilliseconds(): number {
    return this.valueTimeMilliseconds + this.time;
  }

  //value use
  get value(): number {
    return ~~((this.valueIncrementTimeMilliseconds / (60000 * 60) / 8) * 100);
  }
  get valueShowTimeHours(): string {
    return moment.utc(this.valueIncrementTimeMilliseconds).format("HH:mm:ss");
  }

  //count time
  public toggleTimer(): void {
    this.interval = setInterval(this.incrementTime, 1000);
  }
  public incrementTime(): void {
    if (this.data.dateEnd === null) {
      this.time = this.time + 1000;
    }
  }
}
</script>
