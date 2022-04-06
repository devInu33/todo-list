import Component from "./Component";

export class TodoList extends Component {
<<<<<<< HEAD
  template() {
    const { lists } = this.state;
=======

  template() {
    const { list:{title,todos,selected}, idx } = this.$props;
    console.log(todos);
>>>>>>> f6aa78c (FEAT: mockdata 렌더링)
    return `
<div class="todo-title">
            <span class="todo-name">${title}
              <div class="count"><span class="number">${todos.length}</span></div>
            </span>
      <div class="todo-title-btn">
                <span class="add">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105713 7.53033L0.105713 6.46967H6.46967V0.105713H7.53033V6.46967H13.8943V7.53033H7.53033V13.8943H6.46967V7.53033H0.105713Z"
                          fill="#BDBDBD" />
                    </svg>
                </span>
        <span class="delete">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.75L6 5.25L10.5 0.75L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z"
                          fill="#BDBDBD" />
                    </svg>
                </span>
      </div>
    </div>
    ${todos
<<<<<<< HEAD
      .map(
        (todo, idx) => `<div class="todo-card" data-idx=${idx}>    
  </div>`
      )
      .join("")}`;
  }
  mount() {
    for (let i = 0; i < todos.length; i++) {
      new TodoCard(this.select(`.todo-card[data-idx='${i}']`));
    }
=======
      .map((todo, idx) =>`<div class="todo-card" data-idx=${idx}></div>`)
      .join("")}`;
  }
  mount() {
    const{list:{todos}} = this.$props;
    const card = this.select(`.todo-card[data-idx="0"]`)
    for(let i=0; i<todos.length;i++)new TodoCard(this.select(`.todo-card[data-idx="${i}"]`), {todo:todos[i], idx:i})
>>>>>>> f6aa78c (FEAT: mockdata 렌더링)
  }
}
