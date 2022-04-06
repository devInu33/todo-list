export default class Component {
  state;
<<<<<<< HEAD
  #el;
  constructor(el) {
    this.#el = el;
=======
  $props;
  #target;
  constructor(target, props = {}) {
    this.#target = target;
    this.$props = props;
    this.setup();
>>>>>>> f6aa78c (FEAT: mockdata 렌더링)
    this.setEvent();
    this.render();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  render() {
    this.#target.innerHTML = this.template();
    this.mount();
  }
  mount() {}
  template() {
    return ``;
  }

  setEvent() {}

  select(selector) {
    return this.#target.querySelector(selector);
  }

  selectAll(selector) {
    return this.#target.querySelectorAll(selector);
  }
}
