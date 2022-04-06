export default class Component {
  state;
  $props;
  #target;
  constructor(target, props = {}) {
    this.#target = target;
    this.$props = props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
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
