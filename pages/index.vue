<template>
  <div class="vuetify-demo-page">
    <div class="form-container">
      <fom-generator-vue
        v-model="fields"
        :form-components="vuetifyComponents"
        :form-config="formConfig"
        :form-rules="FormRules"
        :submit-handler="submitHandler"
        @setFormContext="(ctx) => (formCtx = ctx)"
        class="form"
      >
        <template v-slot:header>
          <div class="header-container">
            <h2 class="form-heading">Create your Account</h2>
          </div>
        </template>
        <template v-slot:username_after>
          <div class="username-after-container">
            <p class="field-desc">You can use letters, numbers & periods</p>
            <p
              class="field-change"
              @click="useEmail = true"
              text
              color="blue"
              small
            >
              Use my current email address instead
            </p>
          </div>
        </template>
        <template v-slot:email_after>
          <div class="email-after-container">
            <p class="field-desc">
              You'll need to confirm that this email belongs to you.s
            </p>
            <p
              class="field-change"
              @click="useEmail = false"
              text
              color="blue"
              small
            >
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
import {
  vuetifyComponents,
  elementComponents,
} from "@/utils/form-components.js";
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
      fields: {},
    };
  },
  computed: {
    elementComponents: () => elementComponents,
    vuetifyComponents: () => vuetifyComponents,
    FormRules: () => FormRules,
    isDev: () => process.env.NODE_ENV === "development",
    formConfig() {
      return {
        activeValidation: true,
        logs: true,
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

<style lang="scss">
.vuetify-demo-page {
  padding: 90px 12px 24px !important;
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

        .generated-form__body__row {
          display: flex;

          &__col {
            flex: 1;

            &:nth-child(even) {
              margin-left: 16px;
            }
          }
        }
      }

      @media only screen and(min-width: 900px) {
        max-width: 748px;
      }

      .header-container {
        .form-heading {
          margin-bottom: 20px;
        }
      }

      .username-after-container,
      .email-after-container {
        .field-desc {
          font-size: 12px;
          margin: -15px 10px 30px !important;
        }
        .field-change {
          margin: -20px 0px 40px !important;
          color: #1a73e8;
          font-weight: 600;
          cursor: pointer;
        }
      }

      .action-container {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>