<template>
  <div class="vuetify-demo-page">
    <div class="form-container">
      <fom-generator-vue
        v-model="fields"
        :components="vuetifyComponents"
        :schema="formConfig"
        :onSubmit="submitHandler"
        :disabled="false"
        class="form"
        activeValidation
      >    
        <template v-slot:header>
          <div class="header-container">
            <h2 class="form-heading">Create your Account</h2>
          </div>
        </template>
        <template v-slot:after-username>
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
        <template v-slot:after-email>
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
        <template v-slot:footer>
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
import {
  vuetifyComponents,
  elementComponents,
} from "@/utils/form-components.js";
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
      fields: {
        values: {
          firstName: 'Pewdiepie',
        }
      }
    };
  },
  computed: {
    elementComponents: () => elementComponents,
    vuetifyComponents: () => vuetifyComponents,
    FormRules: () => FormRules,
    isDev: () => false,
    formConfig() {
      return {
        fields: [
          [
            {
              model: "firstName",
              props: {
                label: "First name",
                outlined: true,
                dense: true,
                required: true
              },
            },
            {
              model: "lastName",
              props: {
                label: "Last name",
                outlined: true,
                dense: true,
                required: true
              },
            },
          ],
          {
            model: "username",
            hide: this.useEmail,
            props: {
              label: "Username",
              outlined: true,
              suffix: "@example.com",
              dense: true,
              required: true
            },
          },
          {
            model: "email",
            hide: !this.useEmail,
            props: {
              label: "Your email address",
              outlined: true,
              dense: true,
              required: true
            },
            validator: ()=> !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.fields.values.email) && 'Invalid email'
          },
          [
            {
              model: "password",
              hide: false,
              type: this.showPassword ? "text" : "password",
              props: {
                label: "Password",
                outlined: true,
                dense: true,
                required: true
              },
              validator: () => !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(this.fields.values.password) && `Password must be a combination of at least 6 alphanumeric 
                and special character(s) (e.g. '~','!','@','#','$','%', etc.)`,
              errorProp: 'errorMessages'
            },
            {
              model: "confirmPassword",
              type: this.showPassword ? "text" : "password",
              props: {
                "append-icon": this.showPassword ? "mdi-eye" : "mdi-eye-off",
                label: "Confirm",
                outlined: true,
                dense: true,
                required: true
              },
              validator: () => this.fields.values.confirmPassword !== this.fields.values.password && 'Confirm Password',
              'v-on': {
                "click:append": () => (this.showPassword = !this.showPassword),
              },
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