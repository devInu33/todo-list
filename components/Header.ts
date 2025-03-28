import View from "../core/View";


export class Header extends View {
  template() {
    return `
        <h2 class="todo-header-title">TO-DO List</h2>
        <span class="menu-sidebar-icon"><svg width="17" height="11" viewBox="0 0 17 11" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1V0H17V1H0ZM17 5V6H0V5H17ZM0 10H17V11H0V10Z" fill="black" />
            </svg>
            <span class="menu-sidebar">
            </span>
        </span> 
    `;
  }
}
