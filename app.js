<<<<<<< HEAD
import { TodoList } from "./TodoList";
import { MainSection } from "./core/TodoList";

class App {
  template() {
    const { lists } = this.state;
    return `
          <header class="todo-header">
=======
import Component from "./core/Component.js";

import { Header } from "./core/Header.js";
import { TodoList } from "./core/TodoList.js";

class App extends Component {
  setup() {
    this.state = {
      lists: [
        { title: "오늘 할 일", todos: [{ title: "코드스쿼드", content: "수업듣기", caption: "" }], selected: -1 }
      ]
    };
  }

  template() {
    const { lists } = this.state;
    return`<header class="todo-header" >
>>>>>>> f6aa78c (FEAT: mockdata 렌더링)
          </header>
          ${lists.map((list, idx) => `<section data-idx=${idx}></section>`).join('')}`;
    }
  mount() {
<<<<<<< HEAD
    new Header();
    new MainSection();
  }
}
new App(document.body);



MainSection
this.state = {
  list: [
    TodoList:{
      selected: -1,
      title: "해야할 일",
      todos: [
        TodoCard:{
          title: "",
          contents: "",
          caption: "",
        },
      ],
    },
    {
      selected: -1,
      title: "하고 있는 일",
      todos: [
        {
          title: "",
          contents: "",
          caption: "",
        },
      ],
    },
    {},
  ],
};
=======
    const {lists} =this.state;
    new Header(this.select('.todo-header'));
    for(let i=0; i<lists.length;i++)new TodoList(this.select(`section[data-idx="${i}"`), {list:lists[i], idx:i});
    }
  }
  new App(document.body);
>>>>>>> f6aa78c (FEAT: mockdata 렌더링)
