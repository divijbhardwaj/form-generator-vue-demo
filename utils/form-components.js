export const vuetifyComponents = [
  {
    type: ['text', 'password', 'email', 'number'],
    component: { name: 'v-text-field', errorProp: 'errorMessages' }
  },
  {
    type: ['radio'],
    component: { name: 'v-radio-group' }
  }
]

export const elementComponents = [
  {
    type: ['text', 'password', 'email', 'number'],
    component: { name: 'el-input', errorProp: 'errorMessages' }
  }
]