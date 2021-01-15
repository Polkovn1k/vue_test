<template>
  <div class="container column">
    <form class="card card-w30">
      <app-select :options="selectFormControl"
                  v-model:selected_value="selected"
                  :key="selectFormControl.id"></app-select>
      <app-text-area :options="textAreaFormControl"
                     v-model:area_value="textArea"
                     :key="textAreaFormControl.id"></app-text-area>
      <app-button :type_class="'primary'" :disabled="isTextAreaDisabled" @action="pushInfo">Добавить</app-button>
    </form>

    <div class="card card-w70">
      <h3 v-if="isSummaryEmpty">Добавьте первый блок, чтобы увидеть результат</h3>
      <template v-else>
        <app-summary :user_name="name" v-if="name"></app-summary>
        <app-avatar :avatar_url="avatar" v-if="avatar"></app-avatar>
        <component v-for="component in componentOptionsList"
                   :is="component.name"
                   :key="component.id"
                   :text="component.text"
                   v-if="componentOptionsList.length"></component>
      </template>
    </div>
  </div>
  <div class="container">
    <p>
      <app-button :type_class="'primary'" @action="loadComments" v-if="!clickedCommentBtn">Загрузить комментарии</app-button>
    </p>
    <app-comment-list :list="responseList" v-if="responseList.length"></app-comment-list>
    <app-loader v-if="loadedComments"></app-loader>
  </div>
</template>

<script>
  import AppButton from './components/AppButton.vue';
  import AppSummary from './components/AppSummary.vue';
  import AppAvatar from './components/AppAvatar.vue';
  import AppSubtitle from './components/AppSubtitle.vue';
  import AppText from './components/AppText.vue';
  import AppSelect from './components/AppSelect.vue';
  import AppTextArea from "./components/AppTextArea.vue";
  import AppLoader from "./components/AppLoader.vue";
  import AppCommentList from "./components/AppCommentList.vue";

  export default {
    data() {
      return {
        loadedComments: false,
        clickedCommentBtn: false,
        responseList: [],
        selected: 'name',
        textArea: '',
        selectFormControl: {
          title: 'Тип блока',
          id: 'type',
          values: [{
            title: 'Заголовок',
            value: 'name',
          },{
            title: 'Аватар',
            value: 'avatar',
          },{
            title: 'Подзаголовок',
            value: 'subtitle',
          },{
            title: 'Текст',
            value: 'text',
          }],
        },
        textAreaFormControl: {
          title: 'Значение',
          id: 'value',
        },
        name: '',
        avatar: '',
        componentOptionsList: [],
      }
    },
    components: {
      AppSummary,
      AppAvatar,
      AppSubtitle,
      AppText,
      AppButton,
      AppSelect,
      AppTextArea,
      AppLoader,
      AppCommentList,
    },
    computed: {
      isTextAreaDisabled() {
        return this.textArea.length <= 3;
      },
      isSummaryEmpty() {
        return !this.componentOptionsList.length && !this.name.length && !this.avatar.length;
      },
    },
    methods: {
      setDefaultState() {
        this.selected = 'name'
        this.textArea = '';
      },
      pushInfo() {
        if (this.selected === 'name' || this.selected === 'avatar') {
          this[`${this.selected}`] = this.textArea;
        }

        if (this.selected === 'subtitle' || this.selected === 'text') {
          this.componentOptionsList.push({
            id: Math.random(),
            name: `app-${this.selected}`,
            text: this.textArea,
          });
        }

        this.setDefaultState();
      },
      loadComments() {
        this.loadedComments = true;
        this.clickedCommentBtn = true;
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.responseList = data;
            this.loadedComments = false;
          });
      },
    },
  }
</script>

<style>

</style>
