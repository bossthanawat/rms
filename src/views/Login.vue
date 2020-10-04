<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-alert type="error" v-show="error">{{ error }}</v-alert>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field
                    id="input-email"
                    v-model="email"
                    prepend-icon="mdi-account"
                    label="E-mail"
                    required
                    :rules="rules.email"
                  ></v-text-field>

                  <v-text-field
                    id="input-password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    label="Password"
                    name="password"
                    type="password"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import { namespace } from "vuex-class";
// const auth = namespace("auth");
@Component
export default class Login extends Vue {
  private error?: string = "";
  private password?: string = "";
  private email?: string = "";
  private rules = {
    email: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    required: (v: string) => !!v || "Required."
  };

  public onLogin(): void {
    const form: any = this.$refs.form;
    if (form.validate()) {
      this.$store
        .dispatch("auth/login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Home" }).catch();
        })
        .catch(err => {
          this.error = err;
        });
      //   this.login(this.email || "", this.password || "")
      //     .then(res => {
      //       console.log(res);
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
    }
  }
}
</script>
