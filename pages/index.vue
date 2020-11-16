<template>
  <div class="vuetify-demo-page">
    <div class="form-container">
      <fom-generator-vue
        :form-components="vuetifyComponents"
        :form-config="formConfig"
        :form-rules="FormRules"
        :submit-handler="submitHandler"
        @setFormContext="(ctx) => (formCtx = ctx)"
        class="form"
      >
        <template v-slot:header>
          <div class="header-container">
            <p>Create your Example Account</p>
          </div>
        </template>
        <template v-slot:username_after>
          <div>
            <p>You can use letters, numbers & periods</p>
            <p @click="useEmail = true" text color="blue" small>
              Use my current email address instead
            </p>
          </div>
        </template>
        <template v-slot:email_after>
          <div>
            <p>You'll need to confirm that this email belongs to you.s</p>
            <p @click="useEmail = false" text color="blue" small>
              Create a new email address instead
            </p>
          </div>
        </template>
        <template v-slot:actions>
          <div class="action-container">
            <v-btn small dark color="blue" type="submit">Next</v-btn>
          </div>
        </template>
      </fom-generator-vue>
    </div>
    <submit-success :show="submitSuccess" />
  </div>
</template>

<script>
// import { jsToXml } from "json-xml-parse";
import { vuetifyComponents } from "@/utils/form-components.js";
import FormRules from "@/utils/form-rules.js";
export default {
  components: {
    FomGeneratorVue: () => import("form-generator-vue"),
    SubmitSuccess: () => import("../components/SubmitSuccess.vue"),
  },
  data() {
    return {
      showPassword: false,
      formCtx: undefined,
      submitSuccess: false,
      useEmail: false,
      initial: "",
    };
  },
  computed: {
    vuetifyComponents: () => vuetifyComponents,
    FormRules: () => FormRules,
    isDev: () => process.env.NODE_ENV === "development",
    formConfig() {
      return {
        activeValidation: true,
        logs: this.isDev,
        fields: [
          [
            {
              model: "firstName",
              props: {
                label: "First name",
                outlined: true,
                dense: true,
              },
            },
            {
              model: "lastName",
              props: {
                label: "Last name",
                outlined: true,
                dense: true,
              },
            },
          ],
          {
            model: "username",
            show: !this.useEmail,
            props: {
              label: "Username",
              outlined: true,
              suffix: "@example.com",
              dense: true,
            },
          },
          {
            model: "email",
            show: this.useEmail,
            props: {
              label: "Your email address",
              outlined: true,
              dense: true,
            },
            rules: {
              type: "regex",
              ruleName: "email",
              errorMsg: "Invalid email",
            },
          },
          [
            {
              model: "password",
              type: this.showPassword ? "text" : "password",
              props: {
                label: "Password",
                outlined: true,
                dense: true,
              },
              rules: {
                type: "regex",
                ruleName: "password",
                errorMsg: `Password must be a combination of at least 6 alphanumeric 
                and special character(s) (e.g. '~','!','@','#','$','%', etc.)`,
              },
            },
            {
              model: "confirmPassword",
              type: this.showPassword ? "text" : "password",
              props: {
                // "append-icon": this.showPassword ? "mdi-eye" : "mdi-eye-off",
                label: "Confirm",
                outlined: true,
                dense: true,
              },
              // triggers: (ctx) => ({
              //   "click:append": () => (this.showPassword = !this.showPassword),
              // }),
            },
          ],
        ],
      };
    },
  },
  methods: {
    submitHandler() {
      this.submitSuccess = !this.submitSuccess;
    },
  },
};
</script>

<style lang="scss" scoped>
.vuetify-demo-page {
  padding: 12px 12px 24px;

  @media only screen and(min-width: 450px) {
    padding: 36px 28px 24px;
  }

  .form-container {
    width: 100%;
    display: flex;
    justify-content: center;
    .form {
      width: 100%;

      @media only screen and(min-width: 600px) {
        max-width: 448px;
      }

      @media only screen and(min-width: 900px) {
        max-width: 748px;
      }
    }
  }
}
</style>