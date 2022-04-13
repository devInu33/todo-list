import View from "../core/View";
import { Action } from "../types";


export class TodoCard extends View {
  template() {

    const { todo:{title, content, caption, selected}, idx} = this.$props;
    return `${
      selected === true
        ? `<div class="wrapper"><span class="title">${title}</span><span class="content">${content}</span></div>
        <div class="frame">
          <div class="button-left"><span>취소</span></div>
          <div class="button-right"><span>등록</span></div>
        </div>`
        : `<div class="wrapper"><h2 class="card-title">${title}</h2><span class="card-content">${content}</span><span class="card-caption">${caption}</span>
        </div>
        <span class="delete-card">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.75L6 5.25L10.5 0.75L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z"
        fill="#828282" />
        </svg></span>`
    }`;
  }

  setEvent() {
    const {todo, idx, listIdx}= this.$props;
    this.addEvent("dblclick", ".wrapper", (e) => {
      this.store.commit(Action.SELECT, {selected:true, listIdx, idx:Number(this.select()?.dataset.idx)});
    });
    this.addEvent('click', '.button-left', (e)=>{
      this.store.commit(Action.SELECT, {selected:false, listIdx, idx:Number(this.select()?.dataset.idx)});
    });

  }
}
