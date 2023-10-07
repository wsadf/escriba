<template>
  <div>
    <header-component />
    <main-component>
      <bread-crump :title="txtTitle"/>
      <div class="d-flex justify-content-sm-between flex-column flex-sm-row">
        <h2>{{ txtTitle }}</h2>
      </div>
      <b-row class="justify-content-center pt-5">
        <b-col md="8">
          <b-form @submit="onSubmit">
            <div v-if="loadingDataContact" class="loading-data d-flex justify-content-center pt-5">
              <b-spinner
                class="mt-5"
                label="Loading"
                style="width: 3rem; height: 3rem;"
                variant="primary"
              />
            </div>
            <b-form-group
              id="input-group-1"
              label="Nome:"
              label-for="input-1"
            >
              <b-form-input
                ref="nameInput"
                id="input-1"
                v-model="form.name"
                type="text"
                required
              />
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="CPF:"
              label-for="input-1"
            >
              <b-form-input
                ref="cpfInput"
                id="input-1"
                v-model="form.cpf"
                @input="validateCPF"
                v-mask="['###.###.###-##']"
                maxlength="14"
                type="text"
                required
              />
            </b-form-group>
            <p class="text-danger" v-if="cpfError && form.cpf">CPF inválido</p>


            <b-form-group
              id="input-group-1"
              label="Data de nascimento:"
              label-for="input-1"
            >
              <b-form-input
                ref="dataNascimentoInput"
                id="input-1"
                v-model="form.dataNascimento"
                v-mask="['##/##/####']"
                type="text"
                required
                @blur="validateDataNascimento"
              />
              <p class="text-danger" v-if="form.dataNascimento && !isValidDataNascimento">Data de nascimento inválida</p>
            </b-form-group>

            <b-button
              type="submit"
              variant="warning"
              class="mt-4"
              :disabled="saveLoading"
            >
              <template v-if="saveLoading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                Salvando...
              </template>
              <template v-else>
                {{ txtBtnSubmit }}
              </template>
            </b-button>
          </b-form>
        </b-col>
      </b-row>

      <b-modal
        v-model="modalFinished"
        hideHeaderClose
        noCloseOnEsc
      >
        <b-alert :variant="errorSaving ? 'danger': 'success'" show class="mb-0">
          <p class="mb-0">
            <span v-html="errorSaving ? txtModalFinishedError : txtModalFinishedSuccess" />
          </p>
        </b-alert>

        <template #modal-footer>
          <b-button
            variant="primary"
            @click="fillAgain(!errorSaving)"
          >
            Sim
          </b-button>
          <b-button
            variant="success"
            to="/"
          >
            Não, ir para tela inicial
          </b-button>
        </template>
      </b-modal>
    </main-component>
    <footer-component />
  </div>
</template>

<script>
import ApiContacts from '@/api/contacts'

import { mapActions, mapGetters, mapState } from 'vuex';
import { mask } from 'vue-the-mask'
import { BAlert, BButton, BCol, BForm, BModal, BRow, BSpinner } from 'bootstrap-vue'

import BreadCrump from '@/components/BreadCrump'
import FooterComponent from '@/components/FooterComponent'
import HeaderComponent from '@/components/HeaderComponent'
import MainComponent from '@/components/MainComponent'

function initialForm() {
  return {
    name: '',
    cpf: '',
    dataNascimento: '',
  }
}

export default {
  
  name: 'FormView',

  components: {
    BAlert,
    BButton,
    BCol,
    BForm,
    BModal,
    BRow,
    BSpinner,
    BreadCrump,
    FooterComponent,
    HeaderComponent,
    MainComponent
  },

  directives: { mask },

  data() {
    return {
      errorSaving: false,
      form: initialForm(),
      loadingDataContact: false,
      modalFinished: false,
      saveLoading: false,
      isValidCPF: false,
      isValidDataNascimento: true,
      cpfError: false,
    }
  },

  computed: {
    ...mapGetters(['detailContact']),
    ...mapState(['contacts']),

    newRegister() {
      return this.$route.name  === 'new-register';
    },
    txtTitle() {
      return this.newRegister ? 'Novo cadastro' : 'Editar cadastro'
    },
    txtBtnSubmit() {
      return this.newRegister ? 'Cadastrar' : 'Alterar'
    },
    txtModalFinishedError() {
      return this.newRegister ?
        "Houve um erro ao salvar o contato.<br />Deseja adicionar novamente o contato?" :
        "Houve um erro ao alterar o contato.<br />Deseja tentar alterar novamente o contato?";
    },
    txtModalFinishedSuccess() {
      return this.newRegister ?
        "Contato adicionado com sucesso.<br />Deseja adicionar um novo contato?":
        "Contato alterado com sucesso.<br />Deseja continuar na editando este contato?";
    },
  },

  watch: {
    contacts() {
      this.getDetailContact(this.$route.params);
    },
  },

  created () {
    if (this.$route.name === 'edit-register') {
      this.loadingDataContact = true;
      if (this.contacts.length === 0) {
        this.getAllContacts();
      } else {
        this.getDetailContact(this.$route.params);
      }
    }
  },

  methods: {
    ...mapActions(['getAllContacts']),

    clearForm() {
      this.form = initialForm();
    },

    async createNewContact(form) {
      this.errorSaving = false;
      this.saveLoading = true;

      await ApiContacts.newContact(form)
        .then()
        .catch(() => {
          this.errorSaving = true;
        })
        .finally(() => {
          this.modalFinished = true;
          this.saveLoading = false;
        })
    },

    async editContact(form) {
      this.errorSaving = false;
      this.saveLoading = true;

      await ApiContacts.editContact(this.$route.params.id, form)
        .then()
        .catch(() => {
          this.errorSaving = true;
        })
        .finally(() => {
          this.modalFinished = true;
          this.saveLoading = false;
        })
    },

    fillAgain(clear) {
      if (clear && this.newRegister) {
        this.clearForm();
      }
      this.modalFinished = false;
      this.$refs.nameInput.focus();
    },

    getDetailContact(id) {
      const detail = this.detailContact(parseInt(id.id));
      Object.assign(this.form, detail);
      this.loadingDataContact = false;
    },

    onSubmit(event) {
  event.preventDefault();

  if (this.newRegister) {
    // Página de criação
    if (this.isFormValid()) {
      console.log('Formulário válido, criando novo contato');
      this.createNewContact(this.form);
    } else {
      console.log('O formulário contém campos inválidos.');
    }
  } else {
    // Página de edição
      this.editContact(this.form);
  }
},




  isFormValid() {
    const isNameValid = this.form.name.trim() !== '';
    const isCPFValid = this.isValidCPF;
    const isDataNascimentoValid = this.isValidDataNascimento;

    return isNameValid && isCPFValid && isDataNascimentoValid;
  },

    showModal(title) {
      this.$bvModal.msgBoxOk(title, {
        centered: true,
        okVariant: 'success'
      })
    },

    validateDataNascimento() {
    const dataNascimento = this.form.dataNascimento;

    if (!dataNascimento) {
      this.isValidDataNascimento = false;
      return;
    }

    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(dataNascimento)) {
      this.isValidDataNascimento = false;
      return;
    }

    const parts = dataNascimento.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const today = new Date();
    const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    const inputDate = new Date(year, month - 1, day);

    if (inputDate < minDate || inputDate > maxDate) {
      this.isValidDataNascimento = false;
    } else {
      this.isValidDataNascimento = true;
    }
  },

  validateCPF() {
  const cpf = this.form.cpf.replace(/\D+/g, "");
  this.cpfError = false; // Reinicialize a variável cpfError

  if (cpf === "") {
    this.cpfError = true;
    return;
  }

  if (/^(\d)\1{10}$/.test(cpf)) {
    this.cpfError = true;
    return;
  }

  if (cpf.length !== 11) {
    this.cpfError = true;
    return;
  }

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(9, 10))) {
    this.cpfError = true;
    return;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.substring(10, 11))) {
    this.cpfError = true;
  }

  // Atualize isValidCPF com base na validação final
  this.isValidCPF = !this.cpfError;
},


  },
}
</script>

<style lang="scss">
.input-zipcode {
  > div {
    align-items: center;
    display: flex
  }
}
</style>

<style lang="scss" scope>
.loading-data {
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  left: -5px;
  position: absolute;
  top: -5px;
  width: 100%;
  z-index: 10;
}
</style>
