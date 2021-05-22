<template>
  <div class="vuetify-demo-page">
    <div class="form-container">
      <!-- {{formData}} -->
      <fom-generator
        v-model="formData"
        :components="vuetifyComponents"
        :schema="formConfig"
        :onSubmit="submitHandler"
        class="form"
        activeValidation
        logs
      >
        <!-- section labels -->
        <template v-slot:row-start={models}>
          <h1 class="section-label" v-if="sectionLabel(models)">{{sectionLabel(models)}}</h1>
        </template>

        <!-- field labels -->
        <template v-slot:before-col={models}>
          <h2 calss="field-label" v-if="fieldLabels(models)">{{fieldLabels(models)}}</h2>
        </template>

        <!-- paymentFrequency slots -->
        <template v-slot:paymentFrequency>
          <v-radio
            v-for="n in paymentFreqOptions"
            :key="n"
            :label="n"
            :value="n"
            color="green"
          />
        </template>
        <!-- paymentFrequency slots ends-->

        <!-- paymentDay slots -->
        <template v-slot:paymentDay>
          <v-radio
            v-for="n in paymentDayOptions"
            :key="n"
            :label="n"
            :value="n"
            color="green"
          />
        </template>
        <!-- paymentDay slots ends -->

        <!-- form footer -->
        <template v-slot:footer>
          <v-btn class="form-submit-btn" color="green" dark type="submit">Submit</v-btn>
        </template>
      </fom-generator>
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
    FomGenerator: () => import("form-generator-vue"),
    SubmitSuccess: () => import("../components/SubmitSuccess.vue"),
  },
  data() {
    return {
      showPassword: false,
      submitSuccess: false,
      useEmail: false, 
      formData: {
        fields: {
          asd:1201
        }
      },
      storeNames: [
        'Cornucopia',
        'The Corner Store',
        'Sweet Spot',
        'Decorama Boutique',
        'One of a Kind Studio',
        'Not Just Groceries',
        'The Full Cart',
        'Dollar Savings Store'
      ],
      employeeNames: [
        'Rose',
        'Angela',
        'Frank',
        'Patrick',
        'Lisa',
        'Kimberly',
        'Bonnie'
      ],
      paymentFreqOptions: [
        'Weekly',
        'Every other Week',
        'Twice a Month',
        'Day of the Month',
        'Weekday of the Month'
      ],
      paymentDayOptions: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ]
    };
  },
  computed: {
    elementComponents: () => elementComponents,
    vuetifyComponents: () => vuetifyComponents,
    formConfig() {
      return {
        fields: [
          // store info row
          [
            {
              model: "storeName",
              vBind: {
                type: 'select', 
                label: "Store Name",
                outlined: true,
                items: this.storeNames,
                required: true
              }
            },
            {
              model: "employee",
              vBind: {
                type: 'select',
                label: "employee",
                outlined: true,
                items: this.employeeNames
              },
            },
          ],
          // income row
          [
            {
              model: 'monthlyIncome',
              vBind: {
                // type: 'number',
                label: "Monthly Income",
                outlined: true,
                // required: true,
              },
              rules: [
                v => !!v || 'required',
                // undefined,
                v => v.length <= 10 || 'Name must be less than 10 characters',
              ]
            },
            {
              model: 'paymentFrequency',
              vBind: {
                type: 'radio',
                row: true,
              }
            },
            {
              model: 'paymentDay',
              vBind: {
                type: 'radio',
                row: true,
              }
            }
          ],
          // bank account row
          [
            {
              model: 'routingNumber',
              vBind: {
                type: 'number',
                label: "Routing Number",
                outlined: true,
                required: true
              }
            },
            {
              model: 'bankNumber',
              vBind: {
                type: 'number',
                label: "Account Number",
                outlined: true,
                required: true
              }
            }
          ]

        ],
      };
    },
  },
  methods: {
    submitHandler() {
      this.formData.fields = 10;
      // this.submitSuccess = !this.submitSuccess;
    },
    sectionLabel(models) {
      if(models.every(model => ['storeName', 'employee'].includes(model))) {
        return 'Store Information'
      }
      if(models.every(model => ['monthlyIncome', 'paymentFrequency', 'paymentDay'].includes(model))) {
        return 'Income'
      }
      if(models.every(model => ['routingNumber', 'bankNumber'].includes(model))) {
        return 'Bank Account Information'
      }
      return '';
    },
    fieldLabels(models) {
      if(models.every(model => ['paymentFrequency'].includes(model))) {
        return 'How often do you get paid?'
      }
      if(models.every(model => ['paymentDay'].includes(model))) {
        return 'Which day of the week do you normally get paid?'
      }
      return '';
    }
  },
};
</script>

<style lang="scss">
.vuetify-demo-page {
  background: #F2F3F7;
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

      .fgv-form__body__row {
        border-radius: 20px;
        background: white;
        padding:20px;
        margin-bottom: 30px;

        .section-label {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .field-label {
          font-size: 16px;
          margin-bottom: 12px;
        }
      }
      .form-submit-btn { 
        float: right;
      }
      
      @media only screen and(min-width: 600px) {
        max-width: 448px;

        .fgv-form__body__row {
          padding: 30px;
          &:first-child, &:last-child{
            .fgv-form__body__row__col-container {
               display: flex;

               &__col {
                 flex:1;
                 margin-right: 20px;
                 &:last-child{
                   margin-right: 0;
                 }
               }
            }
          }
          .section-label {
            font-size: 28px;
          }

          .field-label {
            font-size: 21px;
          }
        }
      }

      @media only screen and(min-width: 900px) {
        max-width: 748px;
      }
    }
  }
}
</style>