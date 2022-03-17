(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.erudaOutlinePlugin = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function getRandomColor() {
    var letters = 'ABCDEF0123456789'.split('');
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  function insertClassNameToBody(className) {
    var body = document.querySelector('body');

    if (body.classList.contains(className)) {
      return;
    }

    body.classList.add(className);
  }

  function removeClassNameToBody(className) {
    var body = document.querySelector('body');

    if (!body.classList.contains(className)) {
      return;
    }

    body.classList.remove(className);
  }

  function insertCssToBody(cssSelector, css) {
    var existentEle = document.querySelector(cssSelector);

    if (!existentEle) {
      var style = document.createElement('style');
      style.setAttribute('id', cssSelector);
      style.innerHTML = css;
      document.head.appendChild(style);
      return;
    }

    if (!existentEle.innerHTML) {
      existentEle.innerHTML = css;
    }
  }

  var elementLists = ['body', 'article', 'nav', 'aside', 'section', 'header', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'main', 'address', 'div', 'p', 'hr', 'pre', 'blockquote', 'ol', 'ul', 'li', 'dl', 'dt', 'dd', 'figure', 'figcaption', 'table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'col', 'colgroup', 'button', 'datalist', 'fieldset', 'form', 'input', 'keygen', 'label', 'legend', 'meter', 'optgroup', 'option', 'output', 'progress', 'select', 'textarea', 'details', 'summary', 'command', 'menu', 'del', 'ins', 'img', 'iframe', 'embed', 'object', 'param', 'video', 'audio', 'source', 'canvas', 'track', 'map', 'area', 'a', 'em', 'strong', 'i', 'b', 'u', 's', 'small', 'abbr', 'q', 'cite', 'dfn', 'sub', 'sup', 'time', 'code', 'kbd', 'samp', 'var', 'mark', 'bdi', 'bdo', 'ruby', 'rt', 'rp', 'span', 'br', 'wbr'];

  function getOutlineCss(selector) {
    return elementLists.map(function (ele) {
      return "".concat(selector, " ").concat(ele, " { outline: 1px solid ").concat(getRandomColor(), " !important; } \n");
    }).join(' ');
  }

  var bodyClassName = 'eruda-outline-plugin-body-class';
  var styleClassName = 'eruda-outline-plugin-style-class';

  var template = function template(params) {
    return "<div class=\"outline-plugin-wrap\">\n  <button class='erudaOutlinePlugin-switch-button'>".concat(params.text, "</button>\n</div>");
  };

  var erudaOutlinePlugin = function erudaOutlinePlugin(eruda) {
    var evalCss = eruda.util.evalCss;

    var ErudaOutlinePlugin = /*#__PURE__*/function (_eruda$Tool) {
      _inherits(ErudaOutlinePlugin, _eruda$Tool);

      var _super = _createSuper(ErudaOutlinePlugin);

      function ErudaOutlinePlugin() {
        var _this;

        _classCallCheck(this, ErudaOutlinePlugin);

        _this = _super.call(this);
        _this.name = 'outline';
        _this.status = false;
        evalCss("\n      .outline-plugin-wrap {\n        padding: 20px;\n      }\n      .erudaOutlinePlugin-switch-button {\n        width: 100%;\n        height: 40px;\n        line-height: 40px;\n        border: none;\n        background-color: #8cb8ff;\n        color: white;\n        font-size: 18px;\n      }\n      ");
        return _this;
      }

      _createClass(ErudaOutlinePlugin, [{
        key: "init",
        value: function init($el) {
          this.render($el, {
            status: this.status
          });

          _get(_getPrototypeOf(ErudaOutlinePlugin.prototype), "init", this).call(this, $el);

          this.$el = $el;
          var css = getOutlineCss(".".concat(bodyClassName));
          this.css = css;
          insertCssToBody(".".concat(styleClassName), this.css);
          this.bindEvent();
        }
      }, {
        key: "show",
        value: function show() {
          _get(_getPrototypeOf(ErudaOutlinePlugin.prototype), "show", this).call(this);
        }
      }, {
        key: "hide",
        value: function hide() {
          _get(_getPrototypeOf(ErudaOutlinePlugin.prototype), "hide", this).call(this);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          _get(_getPrototypeOf(ErudaOutlinePlugin.prototype), "destroy", this).call(this);
        }
      }, {
        key: "render",
        value: function render($el, params) {
          $el.html(template({
            text: params.status ? 'Outline ON' : 'Outline OFF'
          }));
        }
      }, {
        key: "bindEvent",
        value: function bindEvent() {
          var _this2 = this;

          var $el = this.$el;
          $el.on('click', '.erudaOutlinePlugin-switch-button', function () {
            if (_this2.status) {
              _this2.status = false;
              removeClassNameToBody(bodyClassName);
            } else {
              _this2.status = true;
              insertClassNameToBody(bodyClassName);
            }

            _this2.render(_this2.$el, {
              status: _this2.status
            });
          });
        }
      }]);

      return ErudaOutlinePlugin;
    }(eruda.Tool);

    return new ErudaOutlinePlugin();
  };

  return erudaOutlinePlugin;

}));
