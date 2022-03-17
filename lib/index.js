import getOutlineCss from "./getOutlineCss.js";
import { insertCssToBody, insertClassNameToBody, removeClassNameToBody } from './utils';

const bodyClassName = 'eruda-outline-plugin-body-class';
const styleClassName = 'eruda-outline-plugin-style-class';

const template = (params) => `<div class="outline-plugin-wrap">
  <button class='erudaOutlinePlugin-switch-button'>${params.text}</button>
</div>`;

const erudaOutlinePlugin = (eruda) => {
  let { evalCss } = eruda.util

  class ErudaOutlinePlugin extends eruda.Tool {
    constructor() {
      super()
      this.name = 'outline';
      this.status = false;
      evalCss(`
      .outline-plugin-wrap {
        padding: 20px;
      }
      .erudaOutlinePlugin-switch-button {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: none;
        background-color: #8cb8ff;
        color: white;
        font-size: 18px;
      }
      `);
    }

    init($el) {
      this.render($el, { status: this.status });
      super.init($el);
      this.$el = $el;

      const css = getOutlineCss(`.${bodyClassName}`);
      this.css = css;
      insertCssToBody(`.${styleClassName}`, this.css);
      this.bindEvent();
    }

    show() {
      super.show()
    }

    hide() {
      super.hide()
    }

    destroy() {
      super.destroy()
    }

    render($el, params) {
      $el.html(template({ text: params.status ? 'Outline ON' : 'Outline OFF' }));
    }

    bindEvent() {
      const $el = this.$el;
      $el.on('click', '.erudaOutlinePlugin-switch-button', () => {
        if (this.status) {
          this.status = false;
          removeClassNameToBody(bodyClassName);
        } else {
          this.status = true;
          insertClassNameToBody(bodyClassName);
        }
        this.render(this.$el, { status: this.status });
      });
    }
  }
  return new ErudaOutlinePlugin();
}

export default erudaOutlinePlugin;
