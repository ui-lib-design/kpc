require("source-map-support").install();
exports.ids = [3];
exports.modules = {

/***/ "./components/button/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _group = __webpack_require__("./components/button/group.vdt");

var _group2 = _interopRequireDefault(_group);

__webpack_require__("./components/button/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var ButtonGroup = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(ButtonGroup, _Intact);

    function ButtonGroup() {
        (0, _classCallCheck3.default)(this, ButtonGroup);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    ButtonGroup.prototype.defaults = function defaults() {
        return {
            vertical: false,
            value: undefined,
            radio: false, // @deprecated: use checkType instead of
            checkType: 'none' // radio | checkbox | none
        };
    };

    ButtonGroup.prototype._init = function _init() {
        /* istanbul ignore if */
        if (this.get('radio')) {
            this.set('checkType', 'radio', { silent: true });
        }
    };

    (0, _createClass3.default)(ButtonGroup, [{
        key: 'template',
        get: function get() {
            return _group2.default;
        }
    }]);
    return ButtonGroup;
}(_intact2.default), _class2.propTypes = {
    vertical: Boolean,
    radio: Boolean,
    checkType: ['radio', 'checkbox', 'none']
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = ButtonGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./components/button/group.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        vertical = _self$get.vertical,
        style = _self$get.style,
        children = _self$get.children,
        value = _self$get.value,
        fluid = _self$get.fluid,
        checkType = _self$get.checkType;

    var classNameObj = (_classNameObj = {
        'k-btns': true,
        'k-vertical': vertical
    }, _classNameObj[className] = className, _classNameObj['k-fluid'] = fluid, _classNameObj);

    return h('div', {
        'style': function () {
            try {
                return style;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, function () {
        try {
            return checkType !== 'none' ? __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
                if (vNode.tag === _2.default) {
                    vNode.props = (0, _extends3.default)({}, vNode.props, {
                        _value: value,
                        _checkType: checkType
                    });
                }
                return vNode;
            }) : children;
        } catch (e) {
            _e(e);
        }
    }.call($this), _className(function () {
        try {
            return classNameObj;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

var _ = __webpack_require__("./components/button/index.js");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ButtonGroup = exports.Button = exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value2, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/button/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _group = __webpack_require__("./components/button/group.js");

var _group2 = _interopRequireDefault(_group);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/button/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Button = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Button, _Intact);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Button.prototype.defaults = function defaults() {
        return {
            type: 'default', // primary | warning | danger
            size: 'default', // small | mini
            icon: false,
            circle: false,
            loading: false,
            disabled: false,
            fluid: false,
            htmlType: 'button',
            tagName: 'button',
            tagProps: undefined,
            value: undefined,
            name: undefined,
            tabindex: '0',

            _value: undefined,
            _checkType: 'none'
        };
    };

    Button.prototype._mount = function _mount() {
        var parentVNode = this.parentVNode;

        while (parentVNode && parentVNode.tag !== _group2.default) {
            parentVNode = parentVNode.parentVNode;
        }

        if (parentVNode) {
            this.group = parentVNode.children;

            this.set({
                _checkType: this.group.get('checkType'),
                _value: this.group.get('value')
            });
        }
    };

    Button.prototype._beforeUpdate = function _beforeUpdate() {
        if (this.group) {
            this.set({
                _checkType: this.group.get('checkType'),
                _value: this.group.get('value')
            }, { silent: true });
        }
    };

    Button.prototype.showLoading = function showLoading() {
        this.set('loading', true);
    };

    Button.prototype.hideLoading = function hideLoading() {
        this.set('loading', false);
    };

    Button.prototype.disable = function disable() {
        this.set('disabled', true);
    };

    Button.prototype.enable = function enable() {
        this.set('disabled', false);
    };

    Button.prototype._onClick = function _onClick(e) {
        if (this.get('disabled') || this.get('loading')) {
            return e.preventDefault();
        }

        if (this.group) {
            var _get = this.get(),
                _checkType = _get._checkType,
                value = _get.value,
                _value = _get._value;

            if (value !== undefined) {
                if (_checkType === 'radio') {
                    this.group.set('value', value);
                } else if (_checkType === 'checkbox') {
                    if (!Array.isArray(_value)) {
                        _value = [];
                    }
                    _value = _value.slice(0);
                    var index = _value.indexOf(value);
                    if (!~index) {
                        _value.push(value);
                    } else {
                        _value.splice(index, 1);
                    }
                    this.group.set('value', _value);
                }
            }
        }

        e.component = this;
        this.trigger('click', e);
    };

    Button.prototype._blur = function _blur() {
        // when click, blur it to remove the focus style
        this.element.blur();
    };

    (0, _createClass3.default)(Button, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Button;
}(_intact2.default), _class2.propTypes = {
    type: String,
    size: String,
    icon: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    fluid: Boolean,
    htmlType: String,
    tagName: [String, Function],
    tagProps: Object,
    name: String,
    tabindex: [String, Number]
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Button;
exports.Button = Button;
exports.ButtonGroup = _group2.default;

/***/ }),

/***/ "./components/button/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305755154
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/button/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        type = _self$get.type,
        className = _self$get.className,
        size = _self$get.size,
        icon = _self$get.icon,
        circle = _self$get.circle,
        ref = _self$get.ref,
        key = _self$get.key,
        tabindex = _self$get.tabindex,
        tagName = _self$get.tagName,
        htmlType = _self$get.htmlType,
        fluid = _self$get.fluid,
        children = _self$get.children,
        loading = _self$get.loading,
        disabled = _self$get.disabled,
        value = _self$get.value,
        _value = _self$get._value,
        name = _self$get.name,
        tagProps = _self$get.tagProps,
        _checkType = _self$get._checkType,
        rest = (0, _objectWithoutProperties3.default)(_self$get, ['type', 'className', 'size', 'icon', 'circle', 'ref', 'key', 'tabindex', 'tagName', 'htmlType', 'fluid', 'children', 'loading', 'disabled', 'value', '_value', 'name', 'tagProps', '_checkType']);

    var checked = value !== undefined ? _checkType === 'radio' ? value === _value : _checkType === 'checkbox' ? Array.isArray(_value) && !!~_value.indexOf(value) : false : false;

    var classNameObj = (_classNameObj = {
        'k-btn': true
    }, _classNameObj['k-' + type] = type !== 'default', _classNameObj['k-btn-icon'] = icon, _classNameObj['k-' + size] = size !== 'default', _classNameObj[className] = className, _classNameObj['k-circle'] = circle, _classNameObj['k-loading'] = loading, _classNameObj['k-fluid'] = fluid, _classNameObj['k-active'] = checked, _classNameObj['k-disabled'] = disabled || loading, _classNameObj);

    var Button = function Button(props) {
        if (props.href && tagName === 'button') {
            tagName = 'a';
        }
        if (tagName === 'button') {
            // set type of html button
            props.type = htmlType;
        }
        // disable button when loading
        /* if (loading) props.disabled = true; */
        return h(tagName, props, props.children);
    };

    // hack for loading transition of width
    if (!icon && Array.isArray(children)) {
        children.forEach(function (child, index) {
            if (child) {
                if (child.type === 1 || (0, _utils.isStringOrNumberNotEmpty)(child)) {
                    // is a text node
                    // wrap text node with span
                    children[index] = h('span', null, function () {
                        try {
                            return child;
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this));
                }
                // whether the icon is on the left side or right
                if (index === 0) {
                    if (child.className && child.className.indexOf('icon') > -1) {
                        classNameObj['k-icon-left'] = true;
                    }
                } else if (index === children.length - 1) {
                    if (child.className && child.className.indexOf('icon') > -1) {
                        classNameObj['k-icon-right'] = true;
                    }
                }
            }
        });
    } else if ((0, _utils.isStringOrNumberNotEmpty)(children)) {
        // wrap text node with span
        children = h('span', null, function () {
            try {
                return children;
            } catch (e) {
                _e(e);
            }
        }.call($this));
    }

    return h(Button, (0, _extends3.default)({
        'className': _className(function () {
            try {
                return classNameObj;
            } catch (e) {
                _e(e);
            }
        }.call($this))
    }, function () {
        try {
            return rest;
        } catch (e) {
            _e(e);
        }
    }.call($this), function () {
        try {
            return tagProps;
        } catch (e) {
            _e(e);
        }
    }.call($this), {
        'tabindex': function () {
            try {
                return disabled || loading ? "-1" : tabindex;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'children': [function () {
            try {
                return loading ? classNameObj['k-icon-right'] ? [children, h('i', null, null, 'k-icon ion-load-c icon-loading', 'k-loading')] : [h('i', null, null, 'k-icon ion-load-c icon-loading', 'k-loading'), children] : children;
            } catch (e) {
                _e(e);
            }
        }.call($this), function () {
            try {
                return _checkType !== 'none';
            } catch (e) {
                _e(e);
            }
        }.call($this) ? h('input', {
            'type': function () {
                try {
                    return _checkType;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'name': function () {
                try {
                    return name;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'checked': function () {
                try {
                    return checked;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'tabindex': '-1'
        }) : undefined],
        '_context': $this,
        'ev-click': function () {
            try {
                return self._onClick;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ev-mouseup': function () {
            try {
                return self._blur;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }));
};

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/checkbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Checkbox = exports.default = undefined;

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/checkbox/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/checkbox/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isArray = _intact2.default.Vdt.utils.isArray;
var Checkbox = (_temp = _class = function (_Intact) {
    (0, _inherits3.default)(Checkbox, _Intact);

    function Checkbox() {
        (0, _classCallCheck3.default)(this, Checkbox);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Checkbox.prototype.defaults = function defaults() {
        return {
            disabled: false,
            value: false,
            trueValue: true,
            falseValue: false,
            indeterminate: false
        };
    };

    // set value to falseValue when destroy
    Checkbox.prototype._destroy = function _destroy() {
        // we should not change data in _destroy

        // we must use _context to get value, because it maybe has changed
        // const model = this.get('v-model');
        // if (!model) return;

        // let value = this.get('_context').data.get(model);
        // if (!value) return;
        // const trueValue = this.get('trueValue');
        // if (this.isChecked()) {
        // if (isArray(value)) {
        // value = value.slice(0);
        // const index = value.indexOf(trueValue);
        // value.splice(index, 1);
        // this.set('value', value);
        // } else {
        // this.set('value', this.get('falseValue'));
        // }
        // }
    };

    Checkbox.prototype.isChecked = function isChecked() {
        var value = this.get('value');
        var trueValue = this.get('trueValue');
        return isArray(value) ? value.indexOf(trueValue) > -1 : value === trueValue;
    };

    Checkbox.prototype._onKeypress = function _onKeypress(e) {
        if (e.keyCode === 13) {
            this.refs.input.click();
        }
    };

    (0, _createClass3.default)(Checkbox, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Checkbox;
}(_intact2.default), _class.propTypes = {
    disabled: Boolean,
    indeterminate: Boolean }, _temp);
exports.default = Checkbox;
exports.Checkbox = Checkbox;

/***/ }),

/***/ "./components/checkbox/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305756718
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/checkbox/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        disabled = _self$get.disabled,
        falseValue = _self$get.falseValue,
        children = _self$get.children,
        value = _self$get.value,
        trueValue = _self$get.trueValue,
        style = _self$get.style,
        ref = _self$get.ref,
        key = _self$get.key,
        indeterminate = _self$get.indeterminate,
        rest = (0, _objectWithoutProperties3.default)(_self$get, ['className', 'disabled', 'falseValue', 'children', 'value', 'trueValue', 'style', 'ref', 'key', 'indeterminate']);

    var classNameObj = (_classNameObj = {
        'k-checkbox': true,
        'k-disabled': disabled,
        'k-checked': self.isChecked()
    }, _classNameObj[className] = className, _classNameObj['k-indeterminate'] = indeterminate, _classNameObj);

    var events = [
    // do not bind click to label, otherwise it will trigger click event twice
    /* 'ev-click', */
    'ev-mouseenter', 'ev-mouseleave'].reduce(function (memo, name) {
        if (rest[name]) {
            memo[name] = rest[name];
            delete rest[name];
        }
        return memo;
    }, {});

    return h('label', (0, _extends3.default)({
        'style': function () {
            try {
                return style;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'tabindex': function () {
            try {
                return disabled ? null : "0";
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, function () {
        try {
            return events;
        } catch (e) {
            _e(e);
        }
    }.call($this), {
        'ev-keypress': function () {
            try {
                return self._onKeypress;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }), [h('span', null, h('input', (0, _extends3.default)({
        'type': 'checkbox',
        'disabled': function () {
            try {
                return disabled;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'value': function () {
            try {
                return trueValue;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'tabindex': '-1'
    }, function () {
        try {
            return rest;
        } catch (e) {
            _e(e);
        }
    }.call($this), {
        'checked': _detectCheckboxChecked(self, 'value', function () {
            try {
                return trueValue;
            } catch (e) {
                _e(e);
            }
        }.call($this)),
        'ev-change': function evChange(__e) {
            _setCheckboxModel(self, 'value', function () {
                try {
                    return trueValue;
                } catch (e) {
                    _e(e);
                }
            }.call($this), function () {
                try {
                    return falseValue;
                } catch (e) {
                    _e(e);
                }
            }.call($this), __e, $this);
        }
    }), null, null, null, function (i) {
        widgets['input'] = i;
    }), 'k-wrapper'), function () {
        try {
            return children;
        } catch (e) {
            _e(e);
        }
    }.call($this) ? h('span', null, function () {
        try {
            return children;
        } catch (e) {
            _e(e);
        }
    }.call($this), 'k-text') : undefined], _className(function () {
        try {
            return classNameObj;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/dropdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _utils = __webpack_require__("./components/utils.js");

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/dropdown/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var h = _intact2.default.Vdt.miss.h;

var Dropdown = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Dropdown, _Intact);

    function Dropdown() {
        (0, _classCallCheck3.default)(this, Dropdown);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Dropdown.template = function template(data) {
        return data.get('children');
    };

    Dropdown.prototype.defaults = function defaults() {
        return {
            trigger: 'hover',
            disabled: false
        };
    };

    Dropdown.prototype._init = function _init() {
        var _this2 = this;

        this.on('$receive:children', function () {
            _this2._saveOriginalEvents();
        }, { keep: true });
    };

    Dropdown.prototype._saveOriginalEvents = function _saveOriginalEvents() {
        var _get = this.get(),
            children = _get.children,
            trigger = _get.trigger,
            className = _get.className,
            rest = (0, _objectWithoutProperties3.default)(_get, ['children', 'trigger', 'className']);

        if (Array.isArray(children)) {
            children = children[0];
        }
        if ((0, _utils.isTextVNode)(children)) {
            children = h('span', rest, children, className);
        }

        // save the original event
        var originProps = (0, _extends3.default)({}, children.props);
        var hasSaved = false;
        if (!originProps._hasSaved) {
            if (originProps.vueVNode) {
                // for vue element
                var data = originProps.vueVNode.data;
                var on = data && data.on || {};
                originProps._evClick = on.click;
                originProps._evMouseEnter = on.mouseenter;
                originProps._evMouseLeave = on.mouseleave;
            } else {
                originProps._evClick = originProps['ev-click'];
                originProps._evMouseEnter = originProps['ev-mouseenter'];
                originProps._evMouseLeave = originProps['ev-mouseleave'];
            }
            hasSaved = true;
        }
        var props = {};
        // if (trigger === 'click') {
        props['ev-click'] = this.show.bind(this, originProps._evClick);
        // } else {
        if (trigger === 'hover') {
            props['ev-mouseenter'] = this.show.bind(this, originProps._evMouseEnter);
            props['ev-mouseleave'] = this.hide.bind(this, originProps._evMouseLeave);
        }
        if (hasSaved) {
            props._hasSaved = true;
        }
        children.props = (0, _extends3.default)({}, originProps, props);
        this.set('children', children, { silent: true });
    };

    Dropdown.prototype._mount = function _mount() {
        // the next sibling is DropdownMenu
        // we can not get the menu by call get('menu') directly,
        // because the vNode may be cloned
        // 
        // we only handle it when mount 
        // so you can not change the DropdownMenu by key
        // ohterwise it can not be found 
        var siblings = this.parentVNode.children;
        var index = siblings.indexOf(this.vNode);
        var menu = siblings[index + 1];
        menu.children.dropdown = this;
        this.menu = menu;
    };

    Dropdown.prototype.show = function show(fn, e, isFocus) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        var menu = this.menu.children;
        menu.show();

        if (isFocus) {
            menu.focusItemByIndex(0);
        }
    };

    Dropdown.prototype.hide = function hide(fn, e, immediately) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        var menu = this.menu.children;
        menu.hide(immediately);
    };

    return Dropdown;
}(_intact2.default), _class2.propTypes = {
    trigger: ['hover', 'click'],
    disabled: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _class)), _class));
exports.default = Dropdown;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DropdownItem = exports.DropdownMenu = exports.Dropdown = undefined;

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _item = __webpack_require__("./components/dropdown/item.js");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var h = _intact2.default.Vdt.miss.h;

function Wrapper(props, inVue) {
    var children = props.children,
        position = props.position,
        key = props.key,
        ref = props.ref,
        rest = (0, _objectWithoutProperties3.default)(props, ['children', 'position', 'key', 'ref']);


    var element = children[0];
    var menu = children[1];

    menu.props = (0, _extends3.default)({
        position: position,
        key: key == null ? key : key + '.menu'
    }, rest, menu.props);

    return !inVue ? [h(_dropdown2.default, (0, _extends3.default)({
        key: key == null ? key : key + '.trigger',
        ref: ref,
        children: element
    }, rest)), menu] : h(DropdownVueWrapper, (0, _extends3.default)({
        children: [h(_dropdown2.default, (0, _extends3.default)({
            key: key == null ? key : key + '.trigger',
            ref: ref,
            children: [element]
        }, rest)), menu]
    }, rest));
}

// Vue only support return one element from functional component,
// so we wrap them. This will lead to damage the dom struction,
// because we must wrap them with a div
var _className = _intact2.default.Vdt.utils.className;

var DropdownVueWrapper = function (_Intact) {
    (0, _inherits3.default)(DropdownVueWrapper, _Intact);

    function DropdownVueWrapper() {
        (0, _classCallCheck3.default)(this, DropdownVueWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    DropdownVueWrapper.prototype.template = function template(data) {
        var _className2;

        var _data$get = data.get(),
            className = _data$get.className,
            children = _data$get.children,
            rest = (0, _objectWithoutProperties3.default)(_data$get, ['className', 'children']);

        return h('div', rest, children, _className((_className2 = {
            'k-dropdown': true
        }, _className2[className] = className, _className2)));
    };

    return DropdownVueWrapper;
}(_intact2.default);

var _Wrapper = _intact2.default.functionalWrapper ? _intact2.default.functionalWrapper(Wrapper) : Wrapper;

exports.default = _Wrapper;
exports.Dropdown = _Wrapper;
exports.DropdownMenu = _menu2.default;
exports.DropdownItem = _item2.default;

/***/ }),

/***/ "./components/dropdown/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305759413
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/dropdown/item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _item = __webpack_require__("./components/dropdown/item.vdt");

var _item2 = _interopRequireDefault(_item);

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var DropdownItem = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(DropdownItem, _Intact);

    function DropdownItem() {
        (0, _classCallCheck3.default)(this, DropdownItem);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    DropdownItem.prototype.defaults = function defaults() {
        return {
            disabled: false,
            hideOnSelect: true,

            _isFocus: false
        };
    };

    DropdownItem.prototype._init = function _init() {
        var _this2 = this;

        // if selected hide all dropdown menu
        this.on('select', function () {
            if (_this2.get('hideOnSelect')) {
                var ancestor = _this2._findAncestorDropdownMenu();
                ancestor.hide(true);
            }
        });
    };

    DropdownItem.prototype._mount = function _mount() {
        var parent = this.parent = this._findAncestorDropdownMenu(true);
        if (parent) {
            parent.items.push(this);
        }
    };

    DropdownItem.prototype._onClick = function _onClick(e) {
        if (this.get('disabled')) return;

        this.trigger('click', e);

        // is not a sub dropdown trigger
        if (this.parentVNode.tag !== _dropdown2.default) {
            this.trigger('select', this, e);
        }
    };

    DropdownItem.prototype._onMouseEnter = function _onMouseEnter(e) {
        this.trigger('mouseenter', e);

        if (this.get('disabled')) return;

        this.parent.focusItem(this);
    };

    DropdownItem.prototype._onMouseLeave = function _onMouseLeave(e) {
        this.trigger('mouseleave', e);
        this.parent.unFocusLastItem();
        // if (this.get('disabled')) return;
    };

    DropdownItem.prototype.select = function select(e) {
        // is not a sub dropdown trigger
        var dropdown = this._isSubMenu();
        this.trigger('click', e);
        if (!dropdown) {
            this.trigger('select', this);
        } else {
            dropdown.show();
        }
    };

    DropdownItem.prototype.focus = function focus() {
        this.set('_isFocus', true);

        var elRect = this.element.getBoundingClientRect();
        var pEl = this.parent.refs.menu.element;
        var pElRect = pEl.getBoundingClientRect();
        var bottomOverflowDistance = elRect.bottom - pElRect.bottom;
        var topOverflowDistance = elRect.top - pElRect.top;

        if (bottomOverflowDistance > 0) {
            pEl.scrollTop += bottomOverflowDistance;
        } else if (topOverflowDistance < 0) {
            pEl.scrollTop += topOverflowDistance;
        }
    };

    DropdownItem.prototype.unFocus = function unFocus() {
        return this.set('_isFocus', false);

        // const dropdown = this._isSubMenu();
        // if (dropdown) {
        // dropdown.hide(null, null, true);
        // }
    };

    DropdownItem.prototype.showMenuAndFocus = function showMenuAndFocus() {
        var dropdown = this._isSubMenu();
        if (dropdown) {
            dropdown.show(null, null, true);
        }
    };

    DropdownItem.prototype.hideMenu = function hideMenu() {
        var dropdown = this._isSubMenu();
        if (dropdown) {
            dropdown.hide(null, null, true);
        }
    };

    DropdownItem.prototype._isSubMenu = function _isSubMenu() {
        if (this.parentVNode.tag === _dropdown2.default) {
            return this.parentVNode.children;
        }
    };

    DropdownItem.prototype._findAncestorDropdownMenu = function _findAncestorDropdownMenu(isFirst) {
        return (0, _utils.findParentComponent)(_menu2.default, this, isFirst);
    };

    DropdownItem.prototype._destroy = function _destroy() {
        if (this.parent) {
            var items = this.parent.items;
            items.splice(items.indexOf(this), 1);
        }
    };

    return DropdownItem;
}(_intact2.default), _class2.template = _item2.default, _class2.propTypes = {
    disabled: Boolean,
    hideOnSelect: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = DropdownItem;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/item.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    /* import {proxyEvent} from '../utils'; */

    var _self$get = self.get(),
        children = _self$get.children,
        disabled = _self$get.disabled,
        className = _self$get.className,
        _isFocus = _self$get._isFocus,
        style = _self$get.style;

    var classNameObj = (_classNameObj = {
        'k-item': true,
        'k-disabled': disabled
    }, _classNameObj[className] = className, _classNameObj['k-hover'] = _isFocus, _classNameObj['k-no-padding'] = children && (children.tag === _checkbox.Checkbox || children.tag === _radio.Radio), _classNameObj);

    return h('div', {
        'style': function () {
            try {
                return style;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ev-click': function () {
            try {
                return self._onClick;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ev-mouseenter': function () {
            try {
                return self._onMouseEnter;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ev-mouseleave': function () {
            try {
                return self._onMouseLeave;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, function () {
        try {
            return children;
        } catch (e) {
            _e(e);
        }
    }.call($this), _className(function () {
        try {
            return classNameObj;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

var _checkbox = __webpack_require__("./components/checkbox/index.js");

var _radio = __webpack_require__("./components/radio/index.js");

module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _menu = __webpack_require__("./components/dropdown/menu.vdt");

var _menu2 = _interopRequireDefault(_menu);

var _position2 = __webpack_require__("./components/moveWrapper/position.js");

var _position3 = _interopRequireDefault(_position2);

var _utils = __webpack_require__("./components/utils.js");

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var DropdownMenu = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(DropdownMenu, _Intact);

    function DropdownMenu() {
        (0, _classCallCheck3.default)(this, DropdownMenu);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    DropdownMenu.prototype.defaults = function defaults() {
        return {
            value: false,
            trigger: 'hover',
            position: {},
            transition: 'c-slidedown',
            of: 'self', // self | parent
            container: undefined
        };
    };

    DropdownMenu.prototype._init = function _init() {
        var _this2 = this;

        this.subDropdowns = [];
        this.items = [];
        this.focusIndex = -1;
        this.locked = false;

        this.on('$changed:value', function (c, value) {
            if (value) {
                _this2.trigger('show', _this2);
            } else {
                _this2.trigger('hide', _this2);
            }
        });
        this.on('$changed:of', function () {
            if (_this2.get('value')) {
                _this2.position();
            }
        });
    };

    DropdownMenu.prototype._mount = function _mount() {
        var parent = this._findParentDropdownMenu();
        if (parent) parent.subDropdowns.push(this);

        // because the DropdownMenu can be changed by key
        // and it can not be found in Dropdown
        // so we handle it here again
        if (!this.dropdown) {
            // for contextmenu usage
            // 1. the parentVNode is undefined in vue
            if (!this.parentVNode) return;

            // 2. the children of parentVNode does not contain Dropdown

            // the previous sibling is Dropdown
            var siblings = this.parentVNode.children;
            if (!Array.isArray(siblings)) return;
            var index = siblings.indexOf(this.vNode);
            var dropdown = siblings[index - 1];
            if (dropdown && dropdown.tag === _dropdown2.default) {
                this.dropdown = dropdown.children;
                dropdown.menu = this.vNode;
            }
        }

        // if (this.get('show')) {
        // this._onShow();
        // this.show();
        // }
    };

    DropdownMenu.prototype._findParentDropdownMenu = function _findParentDropdownMenu() {
        return (0, _utils.findParentComponent)(DropdownMenu, this, true);
    };

    DropdownMenu.prototype.show = function show() {
        clearTimeout(this.timer);
        this.set('value', true);
        var parent = this._findParentDropdownMenu();
        if (parent) {
            var showedMenu = parent._showedMenu;
            if (showedMenu && showedMenu !== this) {
                showedMenu.hide(true);
            }
            parent._showedMenu = this;
            // hide last showed menu will unlock the parent
            // so we lock it here when show this menu
            parent.locked = true;

            // because parent will hide when click outside
            // we call parent show method to clear the timer of hiding
            parent.show();
        }
    };

    DropdownMenu.prototype.hide = function hide(immediately) {
        var _this3 = this;

        if (!immediately) {
            this.timer = setTimeout(function () {
                _this3.set('value', false);
            }, 200);
        } else {
            this.set('value', false);
        }
    };

    DropdownMenu.prototype.toggle = function toggle() {
        this.set('value', !this.get('value'));
    };

    DropdownMenu.prototype.position = function position() {
        var _this4 = this;

        // if the dropdown menu is nested, then show the parent first
        // and show the child menu later
        var p = function p(_of, transition) {
            var _using2 = void 0;
            (0, _position3.default)(_this4.refs.menu.element, (0, _extends3.default)({
                my: 'center top+8',
                at: 'center bottom',
                of: _of,
                using: function using(feedback) {
                    _using2 = function _using() {
                        // let the child menu has the same transition with parent menu
                        _this4.set('transition', transition || (0, _utils.getTransition)(feedback));
                        _using2 = null;
                    };
                    // if it is the first menu, getTransition immediately
                    if (!transition) {
                        _using2();
                    }
                }
            }, _this4.get('position')));
            _this4.positioned = true;
            _this4.trigger('positioned', transition);
            _using2 && _using2();
        };

        var _of = this.get('of');
        if (_of === 'parent') {
            var parent = this._findParentDropdownMenu();
            if (parent) {
                _of = parent.refs.menu.element;
                if (parent.positioned) {
                    p(_of);
                } else {
                    parent.one('positioned', function (transition) {
                        p(_of, transition || parent.get('transition'));
                    });
                }
            }
        } else if (_of === 'self') {
            _of = this.dropdown.element;
            p(_of);
        } else {
            p(_of);
        }
    };

    DropdownMenu.prototype._onShow = function _onShow() {
        this.focusIndex = -1;
        this._addDocumentEvents();
        this.position();
    };

    DropdownMenu.prototype._addDocumentEvents = function _addDocumentEvents() {
        var parent = this._findParentDropdownMenu();
        if (!parent) {
            // no matter what the trigger is
            // we should let the layer hide when click document. #52

            // if (this.get('trigger') === 'click') {
            document.addEventListener('click', this._onDocumentClick);
            // }
        } else {
            parent.locked = true;
        }

        document.addEventListener('keydown', this._onKeydown);
    };

    DropdownMenu.prototype._removeDocumentEvents = function _removeDocumentEvents() {
        this.positioned = false;
        var parent = this._findParentDropdownMenu();
        if (!parent) {
            // if (this.get('trigger') === 'click') {
            document.removeEventListener('click', this._onDocumentClick);
            // }
        } else {
            parent.locked = false;
        }

        document.removeEventListener('keydown', this._onKeydown);
    };

    DropdownMenu.prototype._onDocumentClick = function _onDocumentClick(e) {
        var target = e.target;
        var menu = this.refs.menu.element;

        // is a dropdown menu
        if (menu === target || menu.contains(target)) return;
        // is click on sub menu
        if (this._isClickSubMenu(target, this.subDropdowns)) return;
        // custom flag to indicate that the event does not lead to close menu
        if (e._dropdown) return;

        this.hide(true);
    };

    DropdownMenu.prototype._onKeydown = function _onKeydown(e) {
        if (this.locked) {
            return;
        }
        switch (e.keyCode) {
            // down
            case 40:
                this._focusNextItem(e);
                break;
            // up
            case 38:
                this._focusPrevItem(e);
                break;
            // right
            case 39:
                this._showSubMenu(e);
                break;
            // left
            case 37:
                this._hideSubMenu(e);
                break;
            // enter
            case 13:
                this._selectItem(e);
                break;
        }
    };

    DropdownMenu.prototype._focusNextItem = function _focusNextItem(e) {
        // const parent = this._findParentDropdownMenu();
        // if (parent && this.focusIndex < 0) {
        // return;
        // }
        e.preventDefault();
        this.focusItemByIndex(this.focusIndex + 1, 'down');
    };

    DropdownMenu.prototype._focusPrevItem = function _focusPrevItem(e) {
        // const parent = this._findParentDropdownMenu();
        // if (parent && this.focusIndex < 0) {
        // return;
        // }
        e.preventDefault();
        this.focusItemByIndex(this.focusIndex - 1, 'up');
    };

    DropdownMenu.prototype.focusItemByIndex = function focusItemByIndex(index) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'down';

        var items = this.items;
        var max = items.length - 1;

        this.unFocusLastItem();

        function fixIndex(index) {
            if (index > max) {
                index = 0;
            } else if (index < 0) {
                index = max;
            }
            return index;
        }

        index = fixIndex(index);

        var i = 0;
        while (i <= max && items[index] && items[index].get('disabled')) {
            index = fixIndex(direction === 'down' ? index + 1 : index - 1);
            i++;
        }

        // all items are disabled
        if (i > max) return;

        this.focusIndex = index;

        items[index].focus();
    };

    DropdownMenu.prototype.unFocusLastItem = function unFocusLastItem() {
        var oldIndex = this.focusIndex;
        var items = this.items;

        if (oldIndex > -1 && items[oldIndex]) {
            items[oldIndex].unFocus();
            this.focusIndex = -1;
        }
    };

    DropdownMenu.prototype._selectItem = function _selectItem(e) {
        this._showSubMenu(e);
        if (this.focusIndex > -1) {
            e.preventDefault();
            this.items[this.focusIndex] && this.items[this.focusIndex].select(e);
        }
    };

    DropdownMenu.prototype._showSubMenu = function _showSubMenu(e) {
        var parent = this._findParentDropdownMenu();
        if (!parent && this.focusIndex < 0) return;

        e.preventDefault();
        if (parent && this.focusIndex < 0) {
            this.focusItemByIndex(0);
        } else if (this.focusIndex > -1) {
            // maybe the items has been filtered, #50
            this.items[this.focusIndex] && this.items[this.focusIndex].showMenuAndFocus();
        }
    };

    DropdownMenu.prototype._hideSubMenu = function _hideSubMenu(e) {
        if (this.focusIndex > -1) {
            e.preventDefault();
            this.items[this.focusIndex].hideMenu();

            var parent = (0, _utils.findParentComponent)(DropdownMenu, this, true);
            if (parent) {
                this.dropdown.hide(null, null, true);
            }
        }
    };

    DropdownMenu.prototype.focusItem = function focusItem(item) {
        var index = this.items.indexOf(item);
        this.focusItemByIndex(index);
    };

    DropdownMenu.prototype._isClickSubMenu = function _isClickSubMenu(target, subMenus) {
        var ret = false;
        for (var i = 0; i < subMenus.length; i++) {
            var subMenu = subMenus[i].refs.menu;
            if (subMenu) {
                if (target === subMenu.element || subMenu.element.contains(target)) {
                    ret = true;
                    break;
                } else {
                    ret = this._isClickSubMenu(target, subMenus[i].subDropdowns);
                    if (ret) break;
                }
            }
        }
        return ret;
    };

    DropdownMenu.prototype._destroy = function _destroy() {
        var parent = this._findParentDropdownMenu();
        if (parent) {
            var subDropdowns = parent.subDropdowns;
            subDropdowns.splice(subDropdowns.indexOf(this), 1);
        }
        clearTimeout(this.timer);
        this._removeDocumentEvents();
    };

    return DropdownMenu;
}(_intact2.default), _class2.template = _menu2.default, _class2.propTypes = {
    value: Boolean,
    trigger: ['hover', 'click'],
    position: Object,
    transition: String,
    // Event is undefined in NodeJs
    of: ['self', 'parent', Object /* Intact Event */, typeof Event === 'undefined' ? undefined : Event],
    container: [String, Function]
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = DropdownMenu;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/menu.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        value = _self$get.value,
        trigger = _self$get.trigger,
        className = _self$get.className,
        transition = _self$get.transition,
        container = _self$get.container;

    var events = {};
    // no matter what the trigger is, we should show menu when enter it.
    // for this case: hover trigger nests click trigger
    events['ev-mouseenter'] = self.show;
    if (trigger === 'hover') {
        events['ev-mouseleave'] = self.hide.bind(self, false);
    }

    return h(_moveWrapper2.default, {
        'ref': function ref(i) {
            widgets['wrapper'] = i;
        },
        '_parent': function () {
            try {
                return self;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'container': function () {
            try {
                return container;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'children': function () {
            try {
                return value;
            } catch (e) {
                _e(e);
            }
        }.call($this) ? h(Animate, (0, _extends3.default)({
            'className': _className(function () {
                try {
                    var _ref;

                    return _ref = { "k-dropdown-menu": true }, _ref[className] = className, _ref;
                } catch (e) {
                    _e(e);
                }
            }.call($this)),
            'a:transition': function () {
                try {
                    return transition;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'a:appear': function () {
                try {
                    return true;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'ref': function ref(i) {
                widgets['menu'] = i;
            }
        }, function () {
            try {
                return events;
            } catch (e) {
                _e(e);
            }
        }.call($this), {
            'a:delayDestroy': function () {
                try {
                    return false;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'children': (_blocks['children'] = function (parent) {
                return function () {
                    try {
                        return children;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this);
            }) && (__blocks['children'] = function (parent) {
                var args = arguments;
                return blocks['children'] ? blocks['children'].apply($this, [function () {
                    return _blocks['children'].apply($this, args);
                }].concat(__slice.call(args, 1))) : _blocks['children'].apply($this, args);
            }) && __blocks['children'].apply($this, [__noop]),
            '_context': $this,
            'ev-$destroyed': function () {
                try {
                    return self._removeDocumentEvents;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'ev-$mounted': function () {
                try {
                    return self._onShow;
                } catch (e) {
                    _e(e);
                }
            }.call($this)
        })) : undefined,
        '_context': $this
    });
};

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/col.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _col = __webpack_require__("./components/grid/col.vdt");

var _col2 = _interopRequireDefault(_col);

var _utils = __webpack_require__("./components/utils.js");

var _utils2 = __webpack_require__("./components/grid/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Col = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Col, _Intact);

    function Col() {
        (0, _classCallCheck3.default)(this, Col);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Col.prototype.defaults = function defaults() {
        return {
            span: undefined,
            offset: 0,
            gutter: 0,
            order: 0,
            pull: 0,
            push: 0,
            // responsive
            xs: undefined,
            sm: undefined,
            md: undefined,
            lg: undefined,
            xl: undefined,
            xxl: undefined
        };
    };

    Col.prototype._init = function _init() {
        var _this2 = this;

        _utils2.breakpoints.forEach(function (item) {
            _this2.on('$receive:' + item, function (c, v) {
                if (!v) {
                    _this2[item] = undefined;
                } else if ((0, _utils.isStringOrNumber)(v)) {
                    _this2[item] = {
                        span: +v
                    };
                } else {
                    _this2[item] = v;
                }
            });
        });
    };

    (0, _createClass3.default)(Col, [{
        key: 'template',
        get: function get() {
            return _col2.default;
        }
    }]);
    return Col;
}(_intact2.default), _class2.propTypes = (0, _extends3.default)({
    gutter: [String, Number],
    span: [String, Number],
    offset: [String, Number],
    order: [String, Number],
    pull: [String, Number],
    push: [String, Number]
}, _utils2.breakpoints.reduce(function (memo, item) {
    memo[item] = [String, Number, Object];
    return memo;
}, {})), _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Col;
module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/col.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        span = _self$get.span,
        className = _self$get.className,
        order = _self$get.order,
        style = _self$get.style,
        gutter = _self$get.gutter,
        offset = _self$get.offset,
        push = _self$get.push,
        pull = _self$get.pull;

    var xs = self.xs,
        sm = self.sm,
        md = self.md,
        lg = self.lg,
        xl = self.xl;


    var hasGutter = gutter > 0;
    if (hasGutter) {
        style = (0, _utils2.default)(gutter, style, 'padding');
    }

    var classNameObj = (_classNameObj = {
        'k-col': true
    }, _classNameObj['k-' + span] = span, _classNameObj[className] = className && !hasGutter, _classNameObj['k-offset-' + offset] = offset > 0, _classNameObj['k-pull-' + pull] = pull, _classNameObj['k-push-' + push] = push, _classNameObj['k-order-' + order] = order, _classNameObj);
    // add responsive class
    _utils.breakpoints.forEach(function (item) {
        var obj = self[item];
        if (!obj) return;
        var prefix = item === 'xs' ? 'k-' : 'k-' + item + '-';
        if (!(0, _utils3.isNullOrUndefined)(obj.span)) {
            classNameObj['' + prefix + obj.span] = true;
        }
        ['order', 'offset', 'pull', 'push'].forEach(function (prop) {
            if (!(0, _utils3.isNullOrUndefined)(obj[prop])) {
                classNameObj['' + prefix + prop + '-' + obj[prop]] = true;
            }
        });
    });

    return h('div', {
        'style': function () {
            try {
                return style;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, function () {
        try {
            return hasGutter ? h('div', null, function () {
                try {
                    return children;
                } catch (e) {
                    _e(e);
                }
            }.call($this), _className(function () {
                try {
                    return className;
                } catch (e) {
                    _e(e);
                }
            }.call($this))) : children;
        } catch (e) {
            _e(e);
        }
    }.call($this), _className(function () {
        try {
            return classNameObj;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

var _utils = __webpack_require__("./components/grid/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _utils3 = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Col = exports.Row = undefined;

var _row = __webpack_require__("./components/grid/row.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__("./components/grid/col.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/grid/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Row = _row2.default;
exports.Col = _col2.default;

/***/ }),

/***/ "./components/grid/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305755589
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/grid/mediaMatch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function () {
    'use strict';

    /* istanbul ignore else */

    if (window.matchMedia) {
        return window.matchMedia;
    } else {
        // Internal globals
        var win = window,
            _doc = win.document,
            _viewport = _doc.documentElement,
            _queries = [],
            _queryID = 0,
            _type = '',
            _features = {},

        // only screen
        // only screen and
        // not screen
        // not screen and
        // screen
        // screen and
        _typeExpr = /\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,

        // (-vendor-min-width: 300px)
        // (min-width: 300px)
        // (width: 300px)
        // (width)
        // (orientation: portrait|landscape)
        _mediaExpr = /^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,
            _timer = 0,


        // Helper methods

        /*
            _matches
         */
        _matches = function _matches(media) {
            // screen and (min-width: 400px), screen and (max-width: 500px)
            var mql = media.indexOf(',') !== -1 && media.split(',') || [media],
                mqIndex = mql.length - 1,
                mqLength = mqIndex,
                mq = null,


            // not screen, screen
            negateType = null,
                negateTypeFound = '',
                negateTypeIndex = 0,
                negate = false,
                type = '',


            // (min-width: 400px), (min-width)
            exprListStr = '',
                exprList = null,
                exprIndex = 0,
                exprLength = 0,
                expr = null,
                prefix = '',
                length = '',
                unit = '',
                value = '',
                feature = '',
                match = false;

            if (media === '') {
                return true;
            }

            do {
                mq = mql[mqLength - mqIndex];
                negate = false;
                negateType = mq.match(_typeExpr);

                if (negateType) {
                    negateTypeFound = negateType[0];
                    negateTypeIndex = negateType.index;
                }

                if (!negateType || mq.substring(0, negateTypeIndex).indexOf('(') === -1 && (negateTypeIndex || !negateType[3] && negateTypeFound !== negateType.input)) {
                    match = false;
                    continue;
                }

                exprListStr = mq;

                negate = negateType[1] === 'not';

                if (!negateTypeIndex) {
                    type = negateType[2];
                    exprListStr = mq.substring(negateTypeFound.length);
                }

                // Test media type
                // Test type against this device or if 'all' or empty ''
                match = type === _type || type === 'all' || type === '';

                exprList = exprListStr.indexOf(' and ') !== -1 && exprListStr.split(' and ') || [exprListStr];
                exprIndex = exprList.length - 1;
                exprLength = exprIndex;

                if (match && exprIndex >= 0 && exprListStr !== '') {
                    do {
                        expr = exprList[exprIndex].match(_mediaExpr);

                        if (!expr || !_features[expr[3]]) {
                            match = false;
                            break;
                        }

                        prefix = expr[2];
                        length = expr[5];
                        value = length;
                        unit = expr[7];
                        feature = _features[expr[3]];

                        // Convert unit types
                        if (unit) {
                            if (unit === 'px') {
                                // If unit is px
                                value = Number(length);
                            } else if (unit === 'em' || unit === 'rem') {
                                // Convert relative length unit to pixels
                                // Assumed base font size is 16px
                                value = 16 * length;
                            } else if (expr[8]) {
                                // Convert aspect ratio to decimal
                                value = (length / expr[8]).toFixed(2);
                            } else if (unit === 'dppx') {
                                // Convert resolution dppx unit to pixels
                                value = length * 96;
                            } else if (unit === 'dpcm') {
                                // Convert resolution dpcm unit to pixels
                                value = length * 0.3937;
                            } else {
                                // default
                                value = Number(length);
                            }
                        }

                        // Test for prefix min or max
                        // Test value against feature
                        if (prefix === 'min-' && value) {
                            match = feature >= value;
                        } else if (prefix === 'max-' && value) {
                            match = feature <= value;
                        } else if (value) {
                            match = feature === value;
                        } else {
                            match = !!feature;
                        }

                        // If 'match' is false, break loop
                        // Continue main loop through query list
                        if (!match) {
                            break;
                        }
                    } while (exprIndex--);
                }

                // If match is true, break loop
                // Once matched, no need to check other queries
                if (match) {
                    break;
                }
            } while (mqIndex--);

            return negate ? !match : match;
        },


        /*
            _setFeature
         */
        _setFeature = function _setFeature() {
            // Sets properties of '_features' that change on resize and/or orientation.
            var w = win.innerWidth || _viewport.clientWidth,
                h = win.innerHeight || _viewport.clientHeight,
                dw = win.screen.width,
                dh = win.screen.height,
                c = win.screen.colorDepth,
                x = win.devicePixelRatio;

            _features.width = w;
            _features.height = h;
            _features['aspect-ratio'] = (w / h).toFixed(2);
            _features['device-width'] = dw;
            _features['device-height'] = dh;
            _features['device-aspect-ratio'] = (dw / dh).toFixed(2);
            _features.color = c;
            _features['color-index'] = Math.pow(2, c);
            _features.orientation = h >= w ? 'portrait' : 'landscape';
            _features.resolution = x && x * 96 || win.screen.deviceXDPI || 96;
            _features['device-pixel-ratio'] = x || 1;
        },


        /*
            _watch
         */
        _watch = function _watch() {
            clearTimeout(_timer);

            _timer = setTimeout(function () {
                var query = null,
                    qIndex = _queryID - 1,
                    qLength = qIndex,
                    match = false;

                if (qIndex >= 0) {
                    _setFeature();

                    do {
                        query = _queries[qLength - qIndex];

                        if (query) {
                            match = _matches(query.mql.media);

                            if (match && !query.mql.matches || !match && query.mql.matches) {
                                query.mql.matches = match;

                                if (query.listeners) {
                                    for (var i = 0, il = query.listeners.length; i < il; i++) {
                                        if (query.listeners[i]) {
                                            query.listeners[i].call(win, query.mql);
                                        }
                                    }
                                }
                            }
                        }
                    } while (qIndex--);
                }
            }, 10);
        },


        /*
            _init
         */
        _init = function _init() {
            var head = _doc.getElementsByTagName('head')[0],
                style = _doc.createElement('style'),
                info = null,
                typeList = ['screen', 'print', 'speech', 'projection', 'handheld', 'tv', 'braille', 'embossed', 'tty'],
                typeIndex = 0,
                typeLength = typeList.length,
                cssText = '#mediamatchjs { position: relative; z-index: 0; }',
                eventPrefix = '',
                addEvent = win.addEventListener || (eventPrefix = 'on') && win.attachEvent;

            style.type = 'text/css';
            style.id = 'mediamatchjs';

            head.appendChild(style);

            // Must be placed after style is inserted into the DOM for IE
            info = win.getComputedStyle && win.getComputedStyle(style) || style.currentStyle;

            // Create media blocks to test for media type
            for (; typeIndex < typeLength; typeIndex++) {
                cssText += '@media ' + typeList[typeIndex] + ' { #mediamatchjs { position: relative; z-index: ' + typeIndex + ' } }';
            }

            // Add rules to style element
            if (style.styleSheet) {
                style.styleSheet.cssText = cssText;
            } else {
                style.textContent = cssText;
            }

            // Get media type
            _type = typeList[info.zIndex * 1 || 0];

            head.removeChild(style);

            _setFeature();

            // Set up listeners
            addEvent(eventPrefix + 'resize', _watch, false);
            addEvent(eventPrefix + 'orientationchange', _watch, false);
        };

        _init();

        /*
            A list of parsed media queries, ex. screen and (max-width: 400px), screen and (max-width: 800px)
        */
        return function (media) {
            var id = _queryID,
                mql = {
                matches: false,
                media: media,
                addListener: function addListener(listener) {
                    _queries[id].listeners || (_queries[id].listeners = []);
                    listener && _queries[id].listeners.push(listener);
                },
                removeListener: function removeListener(listener) {
                    var query = _queries[id],
                        i = 0,
                        il = 0;

                    if (!query) {
                        return;
                    }

                    il = query.listeners.length;

                    for (; i < il; i++) {
                        if (query.listeners[i] === listener) {
                            query.listeners.splice(i, 1);
                        }
                    }
                }
            };

            if (media === '') {
                mql.matches = true;
                return mql;
            }

            mql.matches = _matches(media);

            _queryID = _queries.push({
                mql: mql,
                listeners: null
            });

            return mql;
        };
    }
};

module.exports = exports['default']; /*! MediaMatch v.2.0.3 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */

/***/ }),

/***/ "./components/grid/mediaQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "smMinWidth": "576px",
    "mdMinWidth": "768px",
    "lgMinWidth": "992px",
    "xlMinWidth": "1200px",
    "xxlMinWidth": "1600px"
};

/***/ }),

/***/ "./components/grid/row.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends4 = __webpack_require__("babel-runtime/helpers/extends");

var _extends5 = _interopRequireDefault(_extends4);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _row = __webpack_require__("./components/grid/row.vdt");

var _row2 = _interopRequireDefault(_row);

var _mediaQuery = __webpack_require__("./components/grid/mediaQuery.js");

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

var _utils = __webpack_require__("./components/utils.js");

var _col = __webpack_require__("./components/grid/col.js");

var _col2 = _interopRequireDefault(_col);

var _utils2 = __webpack_require__("./components/grid/utils.js");

var _mediaMatch = __webpack_require__("./components/grid/mediaMatch.js");

var _mediaMatch2 = _interopRequireDefault(_mediaMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var enquire = void 0;
if (typeof window !== 'undefined') {
    window.matchMedia = (0, _mediaMatch2.default)();
    enquire = __webpack_require__("enquire.js");
}

var responsiveMap = {
    xxl: '(min-width: 0)',
    xl: '(min-width: ' + _mediaQuery2.default.xlMinWidth + ')',
    lg: '(min-width: ' + _mediaQuery2.default.lgMinWidth + ')',
    md: '(min-width: ' + _mediaQuery2.default.mdMinWidth + ')',
    sm: '(min-width: ' + _mediaQuery2.default.smMinWidth + ')',
    xs: '(max-width: ' + _mediaQuery2.default.xsMaxWidth + ')'
};

var Row = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Row, _Intact);

    function Row() {
        (0, _classCallCheck3.default)(this, Row);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Row.prototype.defaults = function defaults() {
        return {
            gutter: 0,
            justify: undefined,
            flex: false,
            align: undefined,

            _gutter: undefined
        };
    };

    Row.prototype._init = function _init() {
        var _this2 = this;

        this.useFlex = false;
        ['justify', 'align', 'flex', 'children'].forEach(function (item) {
            _this2.on('$receive:' + item, function (c, v) {
                var _get = _this2.get(),
                    flex = _get.flex,
                    justify = _get.justify,
                    align = _get.align,
                    children = _get.children;

                _this2.useFlex = flex || justify || align;

                // detect the order property of children
                if (!_this2.useFlex && children) {
                    var _children = children;
                    if (!Array.isArray(children)) {
                        _children = [children];
                    }

                    for (var i = 0; i < _children.length; i++) {
                        var vNode = _children[i];
                        if (vNode && vNode.tag === _col2.default) {
                            var props = vNode.props;
                            if (props.order != null) {
                                _this2.useFlex = true;
                            } else {
                                for (var _i = 0; _i < _utils2.breakpoints.length; _i++) {
                                    var breakpoint = _utils2.breakpoints[_i];
                                    if (props[breakpoint] && props[breakpoint].order != null) {
                                        _this2.useFlex = true;
                                        break;
                                    }
                                }
                            }
                            if (_this2.useFlex) break;
                        }
                    }
                }
            });
        });
    };

    Row.prototype._create = function _create() {
        var _this3 = this;

        var _loop = function _loop(key) {
            enquire.register(responsiveMap[key], {
                match: function match() {
                    var _get2 = _this3.get(),
                        gutter = _get2.gutter;

                    if ((0, _utils.isObject)(gutter)) {
                        var _extends2;

                        _this3.set('_matches', (0, _extends5.default)({}, _this3.get('_matches'), (_extends2 = {}, _extends2[key] = true, _extends2)), { async: true });
                    }
                },
                unmatch: function unmatch() {
                    var _get3 = _this3.get(),
                        gutter = _get3.gutter;

                    if ((0, _utils.isObject)(gutter)) {
                        var _extends3;

                        _this3.set('_matches', (0, _extends5.default)({}, _this3.get('_matches'), (_extends3 = {}, _extends3[key] = false, _extends3)), { async: true });
                    }
                }
            });
        };

        for (var key in responsiveMap) {
            _loop(key);
        }
    };

    Row.prototype._getGutter = function _getGutter() {
        var _get4 = this.get(),
            gutter = _get4.gutter;

        if ((0, _utils.isObject)(gutter)) {
            for (var i = 0; i < _utils2.breakpoints.length; i++) {
                var breakpoint = _utils2.breakpoints[i];
                if (this.get('_matches.' + breakpoint) && gutter[breakpoint] != null) {
                    return gutter[breakpoint];
                }
            }
            return 0;
        }
        return gutter;
    };

    (0, _createClass3.default)(Row, [{
        key: 'template',
        get: function get() {
            return _row2.default;
        }
    }]);
    return Row;
}(_intact2.default), _class2.propTypes = {
    gutter: [String, Number, Object],
    justify: ['start', 'end', 'center', 'between', 'around', 'evenly'],
    align: ['top', 'bottom', 'middle', 'stretch', 'baseline'],
    flex: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Row;
module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/row.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        className = _self$get.className,
        style = _self$get.style,
        justify = _self$get.justify,
        align = _self$get.align;

    var useFlex = self.useFlex;

    var gutter = self._getGutter();
    var hasGutter = gutter > 0;
    if (hasGutter) {
        style = (0, _utils3.default)(gutter, style);
    }

    var classNameObj = (_classNameObj = {
        'k-row': true
    }, _classNameObj[className] = className, _classNameObj['k-gutter'] = hasGutter, _classNameObj['k-flex'] = useFlex, _classNameObj['k-justify-' + justify] = justify, _classNameObj['k-align-' + align] = align, _classNameObj);

    /* if (Array.isArray(children)) { */
    /* // order the children by order property like flex's order */
    /* children.sort((a, b) => { */
    /* return (a && a.props && a.props.order || 0) -  */
    /* (b && b.props && b.props.order || 0); */
    /* }); */
    /* } */

    return h('div', {
        'style': function () {
            try {
                return style;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, function () {
        try {
            return (0, _utils.mapChildren)(children, function (vNode) {
                if (vNode && vNode.tag === _col2.default) {
                    vNode.props = (0, _extends3.default)({}, vNode.props, { gutter: gutter });
                }
                return vNode;
            });
        } catch (e) {
            _e(e);
        }
    }.call($this), _className(function () {
        try {
            return classNameObj;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

var _col = __webpack_require__("./components/grid/col.js");

var _col2 = _interopRequireDefault(_col);

var _utils = __webpack_require__("./components/utils.js");

var _utils2 = __webpack_require__("./components/grid/utils.js");

var _utils3 = _interopRequireDefault(_utils2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.breakpoints = undefined;

var _extends3 = __webpack_require__("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

exports.default = gutterStyle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gutterStyle(gutter, style) {
    var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'margin';

    var margin = gutter / 2;
    var sign = prop === 'margin' ? '-' : '';
    if (!style) style = '';
    if (typeof style === 'string') {
        style = '' + style + (!style || /;\s*$/.test(style) ? '' : ';') + prop + '-left: ' + sign + margin + 'px; ' + prop + '-right: ' + sign + margin + 'px;';
    } else {
        var _extends2;

        style = (0, _extends4.default)((_extends2 = {}, _extends2[prop + 'Left'] = '' + sign + margin + 'px', _extends2[prop + 'Right'] = '' + sign + margin + 'px', _extends2), style);
    }
    return style;
}

var breakpoints = exports.breakpoints = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

/***/ }),

/***/ "./components/input/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Input = exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/input/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/input/index.styl");

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Input = (_dec = _intact2.default.template, (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Input, _Intact);

    function Input() {
        (0, _classCallCheck3.default)(this, Input);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Input.prototype.defaults = function defaults() {
        return {
            type: 'text', // text | textarea
            name: undefined,
            value: undefined,
            defaultValue: undefined,
            placeholder: undefined,
            readonly: false,
            clearable: false,
            disabled: false,
            size: 'default',
            rows: 2,
            spellcheck: false,
            autoWidth: false,
            fluid: false,
            width: undefined,
            tabindex: undefined,
            autocomplete: undefined
        };
    };

    Input.prototype._init = function _init() {
        this.on('$changed:value', this._adjustWidth);
        this.on('$changed:placeholder', this._adjustWidth);
    };

    Input.prototype._mount = function _mount() {
        this.input = this.refs.input;
        this._adjustWidth();
    };

    Input.prototype._adjustWidth = function _adjustWidth() {
        if (this.get('autoWidth')) {
            var width = this.refs.fake.offsetWidth || 1;
            this.refs.input.style.width = width + 1 + 'px';
        }
    };

    Input.prototype.clear = function clear(e) {
        this.set('value', '');
        this.focus();
        this.trigger('clear', e);
    };

    Input.prototype.select = function select() {
        (0, _utils.selectInput)(this.refs.input);
    };

    Input.prototype.focus = function focus() {
        this.refs.input.focus();
    };

    Input.prototype.blur = function blur() {
        this.refs.input.blur();
    };

    Input.prototype._onInput = function _onInput(e) {
        this.set('value', e.target.value);
        this.trigger('input', e);
    };

    Input.prototype._proxyEvent = function _proxyEvent(name, e) {
        this.trigger(name, e);
    };

    Input.prototype._destroy = function _destroy() {
        if (this.get('autoWidth')) {
            this.input.style.width = '';
        }
    };

    return Input;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    type: String,
    name: String,
    value: [String, Number],
    defaultValue: [String, Number],
    placeholder: String,
    readonly: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    size: ['large', 'default', 'small', 'mini'],
    rows: [Number, String],
    spellcheck: Boolean,
    autoWidth: Boolean,
    fluid: Boolean,
    width: [Number, String],
    tabindex: [Number, String],
    autocomplete: String
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Input;
exports.Input = Input;

/***/ }),

/***/ "./components/input/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305758623
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/input/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        type = _self$get.type,
        name = _self$get.name,
        value = _self$get.value,
        placeholder = _self$get.placeholder,
        tabindex = _self$get.tabindex,
        readonly = _self$get.readonly,
        clearable = _self$get.clearable,
        disabled = _self$get.disabled,
        size = _self$get.size,
        rows = _self$get.rows,
        spellcheck = _self$get.spellcheck,
        defaultValue = _self$get.defaultValue,
        style = _self$get.style,
        className = _self$get.className,
        autoWidth = _self$get.autoWidth,
        fluid = _self$get.fluid,
        width = _self$get.width,
        autocomplete = _self$get.autocomplete;

    var classNameObj = (_classNameObj = {
        'k-input': true
    }, _classNameObj['k-' + size] = size !== 'default', _classNameObj['k-group'] = blocks.prepend || blocks.append, _classNameObj['k-disabled'] = disabled, _classNameObj['k-with-prefix'] = blocks.prefix, _classNameObj['k-with-suffix'] = blocks.suffix, _classNameObj['k-clearable'] = clearable, _classNameObj['k-auto-width'] = autoWidth, _classNameObj['k-fluid'] = fluid, _classNameObj[className] = className, _classNameObj);

    var events = ['keydown', 'keyup', 'change', 'keypress', 'focus', 'blur'].reduce(function (memo, name) {
        memo['ev-' + name] = self._proxyEvent.bind(self, name);
        return memo;
    }, {});

    var wrapperEvents = ['click', 'mouseenter', 'mouseleave'].reduce(function (memo, name) {
        memo['ev-' + name] = self._proxyEvent.bind(self, name);
        return memo;
    }, {});

    return h('div', (0, _extends3.default)({
        'style': function () {
            try {
                return width != null ? (0, _utils.addStyle)(style, { width: width + 'px' }) : style;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, function () {
        try {
            return wrapperEvents;
        } catch (e) {
            _e(e);
        }
    }.call($this)), [function () {
        var _this = this;

        try {
            return function () {
                if (blocks.prepend) {
                    // if the children of this block is text node
                    // we add a padding to the wrapper node
                    // so we handle this block manually
                    var children = blocks.prepend.call(_this, function () {});
                    return h('div', null, function () {
                        try {
                            return children;
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this), _className(function () {
                        try {
                            return {
                                "k-prepend": true,
                                "k-padding": (0, _utils.isTextVNode)(children)
                            };
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this)));
                }
            }();
        } catch (e) {
            _e(e);
        }
    }.call($this), h('div', null, [function () {
        try {
            return blocks.prefix;
        } catch (e) {
            _e(e);
        }
    }.call($this) ? h('div', null, (_blocks['prefix'] = function (parent) {
        return null;
    }) && (__blocks['prefix'] = function (parent) {
        var args = arguments;
        return blocks['prefix'] ? blocks['prefix'].apply($this, [function () {
            return _blocks['prefix'].apply($this, args);
        }].concat(__slice.call(args, 1))) : _blocks['prefix'].apply($this, args);
    }) && __blocks['prefix'].apply($this, [__noop]), 'k-prefix') : undefined, function () {
        try {
            return type !== 'textarea';
        } catch (e) {
            _e(e);
        }
    }.call($this) ? h('input', (0, _extends3.default)({
        'type': function () {
            try {
                return type;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'name': function () {
            try {
                return name;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'value': function () {
            try {
                return value;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'defaultValue': function () {
            try {
                return defaultValue;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'readOnly': function () {
            try {
                return readonly;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'placeholder': function () {
            try {
                return placeholder;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'disabled': function () {
            try {
                return disabled;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'tabindex': function () {
            try {
                return tabindex;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'autocomplete': function () {
            try {
                return autocomplete;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, function () {
        try {
            return events;
        } catch (e) {
            _e(e);
        }
    }.call($this), {
        'ev-input': function () {
            try {
                return self._onInput;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }), null, 'k-inner', null, function (i) {
        widgets['input'] = i;
    }) : h('textarea', (0, _extends3.default)({
        'value': function () {
            try {
                return value;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'defaultValue': function () {
            try {
                return defaultValue;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'name': function () {
            try {
                return name;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'readOnly': function () {
            try {
                return readonly;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'placeholder': function () {
            try {
                return placeholder;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'disabled': function () {
            try {
                return disabled;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'rows': function () {
            try {
                return rows;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'spellcheck': function () {
            try {
                return spellcheck;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'tabindex': function () {
            try {
                return tabindex;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, function () {
        try {
            return events;
        } catch (e) {
            _e(e);
        }
    }.call($this), {
        'ev-input': function () {
            try {
                return self._onInput;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }), null, 'k-inner k-textarea', null, function (i) {
        widgets['input'] = i;
    }), function () {
        try {
            return blocks.suffix || clearable;
        } catch (e) {
            _e(e);
        }
    }.call($this) ? h('div', null, [function () {
        try {
            return clearable;
        } catch (e) {
            _e(e);
        }
    }.call($this) ? h('i', {
        'ev-click': function () {
            try {
                return self.clear;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, null, _className(function () {
        try {
            return {
                "k-clear k-icon ion-ios-close": true,
                "k-show": value
            };
        } catch (e) {
            _e(e);
        }
    }.call($this))) : undefined, function () {
        try {
            return ' ';
        } catch (e) {
            _e(e);
        }
    }.call($this), (_blocks['suffix'] = function (parent) {
        return null;
    }) && (__blocks['suffix'] = function (parent) {
        var args = arguments;
        return blocks['suffix'] ? blocks['suffix'].apply($this, [function () {
            return _blocks['suffix'].apply($this, args);
        }].concat(__slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
    }) && __blocks['suffix'].apply($this, [__noop])], 'k-suffix') : undefined, function () {
        try {
            return autoWidth;
        } catch (e) {
            _e(e);
        }
    }.call($this) ? h('div', null, function () {
        try {
            return value == null || value === '' ? placeholder : value;
        } catch (e) {
            _e(e);
        }
    }.call($this), 'k-fake', null, function (i) {
        widgets['fake'] = i;
    }) : undefined], 'k-wrapper'), function () {
        var _this2 = this;

        try {
            return function () {
                if (blocks.append) {
                    var children = blocks.append.call(_this2, function () {});
                    return h('div', null, function () {
                        try {
                            return children;
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this), _className(function () {
                        try {
                            return {
                                "k-append": true,
                                "k-padding": (0, _utils.isTextVNode)(children)
                            };
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this)));
                }
            }();
        } catch (e) {
            _e(e);
        }
    }.call($this)], _className(function () {
        try {
            return classNameObj;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/link/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Link = exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/link/index.vdt");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Link = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Link, _Intact);

    function Link() {
        (0, _classCallCheck3.default)(this, Link);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Link.prototype.defaults = function defaults() {
        return {
            href: undefined,
            name: undefined,
            isReplace: false
        };
    };

    Link.prototype.to = function to(e) {
        e.preventDefault();
        this.trigger('click', e);
        var href = this.get('href');
        var name = this.get('name');
        var history = Link.history;
        var url = void 0;
        if (href != null) {
            url = href;
        } else if (name != null) {
            if (Array.isArray(name)) {
                url = Link.url.apply(Link.url, name);
            } else {
                url = Link.url(name);
            }
        }
        if (url) {
            // if the href is equal to the current href, then do nothing
            var _history$location = history.location,
                pathname = _history$location.pathname,
                search = _history$location.search;

            if (pathname + search === url) return;

            if (this.get('isReplace')) {
                history.replace(url);
            } else {
                history.push(url);
            }
        }
    };

    (0, _createClass3.default)(Link, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Link;
}(_intact2.default), _class2.history = undefined, _class2.propTypes = {
    href: String,
    name: [String, Array],
    isReplace: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Link;
exports.Link = Link;

/***/ }),

/***/ "./components/link/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        name = _self$get.name,
        isReplace = _self$get.isReplace,
        rest = (0, _objectWithoutProperties3.default)(_self$get, ['name', 'isReplace']);

    return h('a', (0, _extends3.default)({}, function () {
        try {
            return rest;
        } catch (e) {
            _e(e);
        }
    }.call($this), {
        'ev-click': function () {
            try {
                return self.to;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }), function () {
        try {
            return self.get('children');
        } catch (e) {
            _e(e);
        }
    }.call($this));
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/moveWrapper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MoveWrapper = exports.default = undefined;

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoveWrapper = (_temp = _class = function (_Intact) {
    (0, _inherits3.default)(MoveWrapper, _Intact);

    function MoveWrapper() {
        (0, _classCallCheck3.default)(this, MoveWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    MoveWrapper.prototype.template = function template(self, Vdt) {
        var children = self.get('children');
        return children || Vdt.miss.hc('MoveWrapper');
    };

    MoveWrapper.prototype.defaults = function defaults() {
        return {
            autoDestroy: true,
            container: undefined
        };
    };

    MoveWrapper.prototype.init = function init() {
        var _Intact$prototype$ini;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        (_Intact$prototype$ini = _Intact.prototype.init).call.apply(_Intact$prototype$ini, [this].concat(args));
        return this.placeholder = document.createComment("placeholder");
    };

    MoveWrapper.prototype.hydrate = function hydrate() {
        var _Intact$prototype$hyd;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        (_Intact$prototype$hyd = _Intact.prototype.hydrate).call.apply(_Intact$prototype$hyd, [this].concat(args));
        return this.placeholder = document.createComment('placeholder');
    };

    MoveWrapper.prototype.update = function update(lastVNode, nextVNode) {
        _Intact.prototype.update.call(this, lastVNode, nextVNode);
        return this.placeholder;
    };

    MoveWrapper.prototype.destroy = function destroy() {
        if (this.get('autoDestroy')) {
            this._$destroy.apply(this, arguments);
        }
    };

    /**
     * @brief override super destroy 
     *
     * MoveWraper component has changed the dom struction.
     * It is always the top level dom, so we should 
     * remove it from parent dom. By passing the container
     * to remove function can do this. We can't remove it
     * directly by calling removeChild method, beacause it
     * maybe have leave animation.
     *
     * @param ...args
     */


    MoveWrapper.prototype._$destroy = function _$destroy(lastVNode, nextVNode) {
        // if (this.destroyed) {
        // return console.warn('destroyed multiple times');
        // }
        if (this.rendered && (!nextVNode || !(nextVNode.type & _intact2.default.Vdt.miss.Types.ComponentClassOrInstance) || nextVNode.key !== lastVNode.key)) {
            _intact2.default.Vdt.miss.remove(this.vdt.vNode, this.container);
        }
        this._destroy(lastVNode, nextVNode);
        this.destroyed = true;
        this.trigger('$destroyed', this);
        this.off();
    };

    MoveWrapper.prototype._mount = function _mount(lastVNode, nextVNode) {
        var container = this.get('container');
        if (container) {
            if (typeof container === 'string') {
                this.container = document.querySelector(container);
            } else {
                this.container = container(this.placeholder);
            }
        }
        if (!this.container) {
            // find the closest dialog if exists
            var dom = this.placeholder;
            var found = void 0;
            while ((dom = dom.parentNode) && dom.nodeType === 1) {
                if (dom.className && dom.className.split(' ').indexOf('k-dialog') > -1) {
                    found = dom;
                    break;
                }
            }
            this.container = found || document.body;
        }
        this.container.appendChild(this.element);
    };

    return MoveWrapper;
}(_intact2.default), _class.propTypes = {
    autoDestroy: Boolean,
    container: [Function, String]
}, _temp);
exports.default = MoveWrapper;
exports.MoveWrapper = MoveWrapper;

/***/ }),

/***/ "./components/moveWrapper/position.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.position = undefined;

var _assign = __webpack_require__("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.getDocumentOrWindowRect = getDocumentOrWindowRect;
exports.scrollbarWidth = scrollbarWidth;
exports.default = position;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var max = Math.max;
var abs = Math.abs;
var rHorizontal = /left|center|right/;
var rVertical = /top|center|bottom/;
var rOffset = /[\+\-]\d+(\.[\d]+)?%?/;
var rPosition = /^\w+/;
var rPercent = /%$/;

function getDimensions(elem) {
    if (elem.nodeType === 9) {
        // document
        var _getDocumentOrWindowR = getDocumentOrWindowRect(elem),
            width = _getDocumentOrWindowR.width,
            height = _getDocumentOrWindowR.height;

        return {
            width: width,
            height: height,
            offset: {
                top: 0,
                left: 0
            }
        };
    } else if (elem === window) {
        var _getDocumentOrWindowR2 = getDocumentOrWindowRect(elem),
            _width = _getDocumentOrWindowR2.width,
            _height = _getDocumentOrWindowR2.height;

        return {
            width: _width,
            height: _height,
            offset: {
                top: elem.pageYOffset,
                left: elem.pageXOffset
            }
        };
    } else if (elem.preventDefault) {
        // event
        return {
            width: 0,
            height: 0,
            offset: {
                top: elem.pageY,
                left: elem.pageX
            }
        };
    }
    // dom
    var rect = elem.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
        offset: {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        }
    };
}

function getDocumentOrWindowRect(elem) {
    if (elem === window) {
        var _d = elem.document.documentElement;
        return {
            width: _d.clientWidth,
            height: _d.clientHeight
        };
    }
    var d = elem.documentElement;
    var b = elem.body;
    return {
        width: max(b.scrollWidth, d.scrollWidth, b.offsetWidth, d.offsetWidth, d.clientWidth),
        height: max(b.scrollHeight, d.scrollHeight, b.offsetHeight, d.offsetHeight, d.clientHeight)
    };
}

function getOffsets(offsets, width, height) {
    return [parseFloat(offsets[0]) * (rPercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rPercent.test(offsets[1]) ? height / 100 : 1)];
}

// reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
var _scrollBarWidth = void 0;
function scrollbarWidth() {
    if (_scrollBarWidth !== undefined) {
        return _scrollBarWidth;
    }

    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return _scrollBarWidth = widthNoScroll - widthWithScroll;
}

function getScrollInfo(within) {
    var overflowX = within.isWindow || within.isDocument ? '' : within.element.style.overflowX;
    var overflowY = within.isWindow || within.isDocument ? '' : within.element.style.overflowY;
    var hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element.scrollWidth;
    var hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element.scrollHeight;

    return {
        width: hasOverflowY ? scrollbarWidth() : 0,
        height: hasOverflowX ? scrollbarWidth() : 0
    };
}

function getWithinInfo(element) {
    element || (element = window);
    var isWindow = element === window;
    var isDocument = element.nodeType === 9;
    var hasOffset = !isWindow && !isDocument;

    var ret = { element: element, isWindow: isWindow, isDocument: isDocument };
    if (hasOffset) {
        var rect = element.getBoundingClientRect();
        ret.offset = {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        };
        ret.width = rect.width;
        ret.height = rect.height;
        ret.scrollLeft = element.scrollLeft;
        ret.scrollTop = element.scrollTop;
    } else {
        ret.offset = { top: 0, left: 0 };
        var _rect = getDocumentOrWindowRect(element);
        ret.width = _rect.width;
        ret.height = _rect.height;
        ret.scrollLeft = window.pageXOffset;
        ret.scrollTop = window.pageYOffset;
    }

    return ret;
}

function parseCss(style, property) {
    return parseInt(style[property], 10) || 0;
}

function position(elem, options) {
    options = (0, _assign2.default)({}, options);

    var target = options.of || window;
    if (target.preventDefault) {
        options.at = "left top";
    }

    var _getDimensions = getDimensions(target),
        targetWidth = _getDimensions.width,
        targetHeight = _getDimensions.height,
        targetOffset = _getDimensions.offset;

    var basePosition = (0, _assign2.default)({}, targetOffset);
    var collision = (options.collision || 'flip').split(' ');
    var offsets = {};
    var within = getWithinInfo(options.within);
    var scrollInfo = getScrollInfo(within);

    ['my', 'at'].forEach(function (item) {
        var pos = (options[item] || '').split(' ');

        if (pos.length === 1) {
            pos = rHorizontal.test(pos[0]) ? pos.concat(['center']) : rVertical.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
        }
        pos[0] = rHorizontal.test(pos[0]) ? pos[0] : 'center';
        pos[1] = rVertical.test(pos[1]) ? pos[1] : 'center';

        var horizontalOffset = rOffset.exec(pos[0]);
        var verticalOffset = rOffset.exec(pos[1]);
        offsets[item] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];

        options[item] = [rPosition.exec(pos[0])[0], rPosition.exec(pos[1])[0]];
    });

    if (collision.length === 1) {
        collision[1] = collision[0];
    }

    var at = options.at;
    if (at[0] === 'right') {
        basePosition.left += targetWidth;
    } else if (at[0] === 'center') {
        basePosition.left += targetWidth / 2;
    }
    if (at[1] === 'bottom') {
        basePosition.top += targetHeight;
    } else if (at[1] === 'center') {
        basePosition.top += targetHeight / 2;
    }

    var atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
    basePosition.left += atOffset[0];
    basePosition.top += atOffset[1];

    var elemWidth = elem.offsetWidth;
    var elemHeight = elem.offsetHeight;
    var position = (0, _assign2.default)({}, basePosition);
    var myOffset = getOffsets(offsets.my, elemWidth, elemHeight);
    var computedStyle = window.getComputedStyle(elem);
    var marginLeft = parseCss(computedStyle, 'marginLeft');
    var marginTop = parseCss(computedStyle, 'marginTop');
    var collisionWidth = elemWidth + marginLeft + parseCss(computedStyle, 'marginRight') + scrollInfo.width;
    var collisionHeight = elemHeight + marginTop + parseCss(computedStyle, 'marginBottom') + scrollInfo.height;
    var collisionPosition = { marginLeft: marginLeft, marginTop: marginTop };

    var my = options.my;
    if (my[0] === 'right') {
        position.left -= elemWidth;
    } else if (my[0] === 'center') {
        position.left -= elemWidth / 2;
    }
    if (my[1] === 'bottom') {
        position.top -= elemHeight;
    } else if (my[1] === 'center') {
        position.top -= elemHeight / 2;
    }
    position.left += myOffset[0];
    position.top += myOffset[1];

    var collisionDirection = options.collisionDirection || ['left', 'top'];
    collisionDirection.forEach(function (dir, i) {
        var coll = collision[i];
        if (rules[coll]) {
            rules[coll][dir](position, {
                targetWidth: targetWidth,
                targetHeight: targetHeight,
                elemWidth: elemWidth,
                elemHeight: elemHeight,
                collisionPosition: collisionPosition,
                collisionWidth: collisionWidth,
                collisionHeight: collisionHeight,
                offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
                my: options.my,
                at: options.at,
                within: within,
                elem: elem
            });
        }
    });

    if (options.using) {
        var left = targetOffset.left - position.left;
        var right = left + targetWidth - elemWidth;
        var top = targetOffset.top - position.top;
        var bottom = top + targetHeight - elemHeight;
        var feedback = {
            target: {
                element: target,
                left: targetOffset.left,
                top: targetOffset.top,
                width: targetWidth,
                height: targetHeight
            },
            element: {
                element: elem,
                left: position.left,
                top: position.top,
                width: elemWidth,
                height: elemHeight
            },
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
        };
        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
        }
        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
        }

        if (position.top + elemHeight <= targetOffset.top || position.top >= targetOffset.top + targetHeight) {
            feedback.important = 'vertical';
        } else if (position.left + elemWidth <= targetOffset.left || position.left >= targetOffset.left + targetWidth) {
            feedback.important = 'horizontal';
        } else if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
        } else {
            feedback.important = 'vertical';
        }

        options.using(feedback, position);
    }

    var style = elem.style;
    if (computedStyle.position === 'static') {
        style.position = 'relative';
    }
    var curOffset = getDimensions(elem).offset;
    var curCSSTop = computedStyle.top;
    var curCSSLeft = computedStyle.left;
    style.left = position.left - curOffset.left + (parseFloat(curCSSLeft) || 0) + 'px';
    style.top = position.top - curOffset.top + (parseFloat(curCSSTop) || 0) + 'px';
}

var rules = {
    fit: {
        left: function left(position, data) {
            var within = data.within;
            var withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
            var outerWidth = within.width;
            var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
            var overLeft = withinOffset - collisionPosLeft;
            var overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
            var newOverRight = void 0;

            if (data.collisionWidth > outerWidth) {
                if (overLeft > 0 && overRight <= 0) {
                    newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                    position.left += overLeft - newOverRight;
                } else if (overRight > 0 && overLeft <= 0) {
                    position.left = withinOffset;
                } else if (overLeft > overRight) {
                    position.left = withinOffset + outerWidth - data.collisionWidth;
                } else {
                    position.left = withinOffset;
                }
            } else if (overLeft > 0) {
                position.left += overLeft;
            } else if (overRight > 0) {
                position.left -= overRight;
            } else {
                position.left = max(position.left - collisionPosLeft, position.left);
            }
        },
        top: function top(position, data) {
            var within = data.within;
            var withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
            var outerHeight = data.within.height;
            var collisionPosTop = position.top - data.collisionPosition.marginTop;
            var overTop = withinOffset - collisionPosTop;
            var overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
            var newOverBottom = void 0;

            if (data.collisionHeight > outerHeight) {
                if (overTop > 0 && overBottom <= 0) {
                    newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                    position.top += overTop - newOverBottom;
                } else if (overBottom > 0 && overTop <= 0) {
                    position.top = withinOffset;
                } else if (overTop > overBottom) {
                    position.top = withinOffset + outerHeight - data.collisionHeight;
                } else {
                    position.top = withinOffset;
                }
            } else if (overTop > 0) {
                position.top += overTop;
            } else if (overBottom > 0) {
                position.top -= overBottom;
            } else {
                position.top = max(position.top - collisionPosTop, position.top);
            }
        }
    },

    flip: {
        left: function left(position, data) {
            var within = data.within;
            var withinOffset = within.offset.left + within.scrollLeft;
            var outerWidth = within.width;
            var offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
            var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
            var overLeft = collisionPosLeft - offsetLeft;
            var overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
            var myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0;
            var atOffset = data.at[0] === 'left' ? data.targetWidth : data.at[0] === 'right' ? -data.targetWidth : 0;
            var offset = -2 * data.offset[0];
            var newOverRight = void 0;
            var newOverLeft = void 0;

            if (overLeft < 0) {
                newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                    position.left += myOffset + atOffset + offset;
                }
            } else if (overRight > 0) {
                newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                // the same to top
                // if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                if (newOverLeft > 0) {
                    position.left += myOffset + atOffset + offset;
                }
            }
        },
        top: function top(position, data) {
            var within = data.within;
            var withinOffset = within.offset.top + within.scrollTop;
            var outerHeight = within.height;
            var offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
            var collisionPosTop = position.top - data.collisionPosition.marginTop;
            var overTop = collisionPosTop - offsetTop;
            var overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
            var myOffset = data.my[1] === 'top' ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0;
            var atOffset = data.at[1] === 'top' ? data.targetHeight : data.at[1] === 'bottom' ? -data.targetHeight : 0;
            var offset = -2 * data.offset[1];
            var newOverTop = void 0;
            var newOverBottom = void 0;

            if (overTop < 0) {
                newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                    position.top += myOffset + atOffset + offset;
                }
            } else if (overBottom > 0) {
                newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                // because window can scroll down, when it beyond the top border,
                // we can not scroll it to view. Don't flip it in this case
                // if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                if (newOverTop > 0) {
                    position.top += myOffset + atOffset + offset;
                }
            }
        }
    },

    flipfit: {
        left: function left() {
            var _rules$flip, _rules$fit;

            (_rules$flip = rules.flip).left.apply(_rules$flip, arguments);
            (_rules$fit = rules.fit).left.apply(_rules$fit, arguments);
        },
        top: function top() {
            var _rules$flip2, _rules$fit2;

            (_rules$flip2 = rules.flip).top.apply(_rules$flip2, arguments);
            (_rules$fit2 = rules.fit).top.apply(_rules$fit2, arguments);
        }
    }
};

exports.position = position;

/***/ }),

/***/ "./components/radio/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Radio = exports.default = undefined;

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/radio/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/radio/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = (_temp = _class = function (_Intact) {
    (0, _inherits3.default)(Radio, _Intact);

    function Radio() {
        (0, _classCallCheck3.default)(this, Radio);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Radio.prototype.defaults = function defaults() {
        return {
            disabled: false,
            value: false,
            trueValue: true
        };
    };

    Radio.prototype.isChecked = function isChecked() {
        return this.get('value') === this.get('trueValue');
    };

    Radio.prototype._destroy = function _destroy() {
        // we should not change data in _destroy
        // if (this.isChecked()) {
        // this.set('value', undefined);
        // }
    };

    Radio.prototype._onKeypress = function _onKeypress(e) {
        if (e.keyCode === 13) {
            this.refs.input.click();
        }
    };

    (0, _createClass3.default)(Radio, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Radio;
}(_intact2.default), _class.propTypes = {
    disabled: Boolean
}, _temp);
exports.default = Radio;
exports.Radio = Radio;

/***/ }),

/***/ "./components/radio/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305761294
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/radio/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        disabled = _self$get.disabled,
        trueValue = _self$get.trueValue,
        style = _self$get.style,
        children = _self$get.children,
        value = _self$get.value,
        ref = _self$get.ref,
        key = _self$get.key,
        rest = (0, _objectWithoutProperties3.default)(_self$get, ['className', 'disabled', 'trueValue', 'style', 'children', 'value', 'ref', 'key']);

    var classNameObj = (_classNameObj = {
        'k-radio': true,
        'k-disabled': disabled,
        'k-checked': self.isChecked()
    }, _classNameObj[className] = className, _classNameObj);

    return h('label', {
        'style': function () {
            try {
                return style;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'tabindex': function () {
            try {
                return disabled ? "-1" : "0";
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ev-keypress': function () {
            try {
                return self._onKeypress;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, [h('span', null, h('input', (0, _extends3.default)({
        'type': 'radio',
        'disabled': function () {
            try {
                return disabled;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'value': function () {
            try {
                return trueValue;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'tabindex': '-1'
    }, function () {
        try {
            return rest;
        } catch (e) {
            _e(e);
        }
    }.call($this), {
        'checked': _getModel(self, 'value') === function () {
            try {
                return trueValue;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ev-change': function evChange(__e) {
            _setModel(self, 'value', __e.target.checked ? function () {
                try {
                    return trueValue;
                } catch (e) {
                    _e(e);
                }
            }.call($this) : false, $this);
        }
    }), null, null, null, function (i) {
        widgets['input'] = i;
    }), 'k-wrapper'), function () {
        try {
            return children;
        } catch (e) {
            _e(e);
        }
    }.call($this) ? h('span', null, function () {
        try {
            return children;
        } catch (e) {
            _e(e);
        }
    }.call($this), 'k-text') : undefined], _className(function () {
        try {
            return classNameObj;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _group = __webpack_require__("./components/select/group.vdt");

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var OptionGroup = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(OptionGroup, _Intact);

    function OptionGroup() {
        (0, _classCallCheck3.default)(this, OptionGroup);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    OptionGroup.prototype.defaults = function defaults() {
        return {
            label: '',

            _card: false
        };
    };

    return OptionGroup;
}(_intact2.default), _class2.template = _group2.default, _class2.propTypes = {
    label: [String, Number, _intact2.default.VNode]
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = OptionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./components/select/group.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, _Vdt, blocks, $callee) {
    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        label = _self$get.label,
        _card = _self$get._card,
        className = _self$get.className;

    return h('div', null, [function () {
        try {
            return !_card;
        } catch (e) {
            _e(e);
        }
    }.call($this) ? h('div', null, (_blocks['label'] = function (parent) {
        return function () {
            try {
                return label;
            } catch (e) {
                _e(e);
            }
        }.call($this);
    }) && (__blocks['label'] = function (parent) {
        var args = arguments;
        return blocks['label'] ? blocks['label'].apply($this, [function () {
            return _blocks['label'].apply($this, args);
        }].concat(__slice.call(args, 1))) : _blocks['label'].apply($this, args);
    }) && __blocks['label'].apply($this, [__noop]), 'k-label') : undefined, function () {
        try {
            return children;
        } catch (e) {
            _e(e);
        }
    }.call($this)], _className(function () {
        try {
            var _ref;

            return _ref = { "k-group": true }, _ref[className] = className, _ref;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.OptionGroup = exports.Option = exports.Select = exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/select/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/select/index.styl");

var _option = __webpack_require__("./components/select/option.js");

var _option2 = _interopRequireDefault(_option);

var _group = __webpack_require__("./components/select/group.js");

var _group2 = _interopRequireDefault(_group);

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Select = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Select, _Intact);

    function Select() {
        (0, _classCallCheck3.default)(this, Select);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Select.prototype.defaults = function defaults() {
        return {
            data: [],
            value: '',
            multiple: false, // 是否支持多选
            disabled: false,
            clearable: false, // 是否可清空 
            filterable: false, // 搜索筛选
            filter: function filter(keywords, props) {
                var valid = false;
                var tmp = void 0;
                if (keywords == null || props.label && ~props.label.toLowerCase().indexOf(tmp = keywords.toLowerCase()) || (0, _utils.isStringOrNumber)(props.value) && ~String(props.value).toLowerCase().indexOf(tmp)) {
                    valid = true;
                }

                return valid;
            },
            keywords: undefined,
            placeholder: undefined,
            size: 'default',
            fluid: false,
            width: undefined,
            allowUnmatch: false,
            card: false, // 卡片式分组
            container: undefined,
            inline: false,

            _show: false,
            _activeLabel: undefined
        };
    };

    Select.prototype._init = function _init() {
        var _this2 = this;

        this.on('$changed:value', function () {
            if (_this2.get('multiple') && _this2.get('_show')) {
                _this2.refs.menu.position();
            }
        });
    };

    Select.prototype._onClear = function _onClear(e) {
        e.stopPropagation();
        this.set('value', '');
    };

    Select.prototype._onSelect = function _onSelect(value) {
        if (!this.get('multiple')) {
            this.set('value', value, { async: true });
        } else {
            var values = this.get('value');
            values = (0, _utils.toggleArray)(values, value);
            this.set('value', values, { async: true });
            this._focusInput();
        }
        this._resetSearch();
    };

    Select.prototype._onSearch = function _onSearch(e) {
        this.set('keywords', e.target.value.trim());
        // always show menu on searching
        this.refs.menu.show();
        this.refs.menu.focusItemByIndex(0);
        // the position may be flip, and the select input height my change height too,
        // so we should reset the position
        this.refs.menu.position();
    };

    Select.prototype._resetSearch = function _resetSearch() {
        this.set('keywords', undefined, { async: true });
    };

    Select.prototype._onChangeShow = function _onChangeShow(c, value) {
        this.set('_show', value);
        // reset the _activeLabel if show
        this._setActiveLabelSilent(undefined);
    };

    /**
     * @brief let the blur method be called after select
     * if we have selected the option, then the keywords have been set to undefined
     * in this case, we do nothing, otherwise we reset it
     */


    Select.prototype._onBlur = function _onBlur() {
        var _this3 = this;

        var _get = this.get(),
            keywords = _get.keywords,
            allowUnmatch = _get.allowUnmatch;

        if (allowUnmatch && keywords != null) {
            this.set({
                value: keywords
            });
        }

        this.timer = setTimeout(function () {
            if (_this3.get('keywords') != null) {
                _this3._resetSearch();
            }
        }, 200);
    };

    Select.prototype._selectInput = function _selectInput(e) {
        (0, _utils.selectInput)(e.target);
    };

    Select.prototype._onFocus = function _onFocus(e) {
        clearTimeout(this.timer);
    };

    Select.prototype._onFocusout = function _onFocusout() {
        this.refs.dropdown.hide();
    };

    Select.prototype._delete = function _delete(value, e) {
        e.stopPropagation();
        var values = this.get('value').slice(0);
        var index = values.indexOf(value);
        values.splice(index, 1);
        this.set('value', values);
        this._focusInput();
    };

    Select.prototype._focusInput = function _focusInput() {
        if (this.get('filterable')) {
            this.refs.input.focus();
        }
    };

    Select.prototype._position = function _position() {
        var menuElement = this.refs.menu.vdt.vNode.children.element;
        var width = this.element.offsetWidth;
        var menuWidth = menuElement.offsetWidth;
        if (width > menuWidth) {
            menuElement.style.width = width + 'px';
        }
    };

    Select.prototype._onKeypress = function _onKeypress(e) {
        if (e.keyCode === 13) {
            this.refs.wrapper.click();
        }
    };

    Select.prototype._onKeydown = function _onKeydown(e) {
        if (e.keyCode === 9) {
            // tab
            this.refs.dropdown.hide();
        }
    };

    Select.prototype._clearValue = function _clearValue() {
        this.set('value', '', { update: false });
    };

    Select.prototype._setActiveLabelSilent = function _setActiveLabelSilent(label) {
        this.set('_activeLabel', label, { silent: true });
    };

    Select.prototype.handleProps = function handleProps(props, labelObj) {
        var _get2 = this.get(),
            multiple = _get2.multiple,
            value = _get2.value,
            filterable = _get2.filterable,
            keywords = _get2.keywords,
            filter = _get2.filter;

        var active = false;
        var valid = false;

        if (!multiple) {
            if (props.value === value) {
                // set label
                labelObj.label = props.label;
                active = true;
            } else {
                active = false;
            }
        } else if (Array.isArray(value)) {
            var index = value.indexOf(props.value);
            if (~index) {
                // keep order consistent
                labelObj.labels[index] = props.label;
                active = true;
            } else {
                active = false;
            }
        }

        if (!filterable || filter.call(this, keywords, props)) {
            valid = true;
        }

        return { active: active, valid: valid };
    };

    return Select;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    data: Array,
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    filter: Function,
    keywords: String,
    placeholder: String,
    size: ['large', 'default', 'small', 'mini'],
    fluid: Boolean,
    width: [Number, String],
    allowUnmatch: Boolean,
    card: Boolean,
    container: [Function, String],
    inline: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Select;
exports.Select = Select;
exports.Option = _option2.default;
exports.OptionGroup = _group2.default;

/***/ }),

/***/ "./components/select/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305756493
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/select/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        clearable = _self$get.clearable,
        data = _self$get.data,
        value = _self$get.value,
        multiple = _self$get.multiple,
        disabled = _self$get.disabled,
        filterable = _self$get.filterable,
        keywords = _self$get.keywords,
        _show = _self$get._show,
        placeholder = _self$get.placeholder,
        size = _self$get.size,
        style = _self$get.style,
        name = _self$get.name,
        children = _self$get.children,
        fluid = _self$get.fluid,
        width = _self$get.width,
        allowUnmatch = _self$get.allowUnmatch,
        card = _self$get.card,
        hideIcon = _self$get.hideIcon,
        container = _self$get.container,
        inline = _self$get.inline;

    var _activeLabel = self.get('_activeLabel');

    var _placeholder = placeholder == null ? allowUnmatch && filterable ? (0, _utils._$)('请输入或选择') : (0, _utils._$)('请选择') : placeholder;

    var classNameObj = (_classNameObj = {
        'k-select': true
    }, _classNameObj[className] = className, _classNameObj[scope.className] = scope.className, _classNameObj['k-disabled'] = disabled, _classNameObj['k-show'] = _show, _classNameObj['k-clearable'] = clearable, _classNameObj['k-' + size] = size !== 'default', _classNameObj['k-fluid'] = fluid, _classNameObj['k-with-prefix'] = blocks.prefix, _classNameObj['k-with-suffix'] = !hideIcon, _classNameObj['k-inline'] = inline, _classNameObj);

    var hasValue = value != null && (!multiple && value !== '' || multiple && value.length);
    var isGroup = Array.isArray(self.get('data.0.data'));

    var labelObj = scope.labelObj || {
        // only show value as label when allowUnmatch is true, #40
        label: allowUnmatch && (0, _utils.isStringOrNumber)(value) ? value : null,
        labels: []
    };
    var groupIndex = 0;

    var Options = function Options(props) {
        var data = props.data;
        var ret = [];
        data.forEach(function (item, index) {
            // deprecate text, use label instead of
            if (item.text) item.label = item.text;

            var _self$handleProps = self.handleProps(item, labelObj),
                valid = _self$handleProps.valid,
                active = _self$handleProps.active;

            if (valid) {
                ret.push(h(_dropdown.DropdownItem, {
                    'disabled': function () {
                        try {
                            return item.disabled;
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this),
                    'className': _className(function () {
                        try {
                            return { 'k-active': active };
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this)),
                    'hideOnSelect': function () {
                        try {
                            return !multiple;
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this),
                    'children': function () {
                        try {
                            return item.template ? item.template(item, index) : item.label;
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this),
                    '_context': $this,
                    'ev-select': function () {
                        try {
                            return self._onSelect.bind(self, item.value);
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this)
                }));

                // for card type groups, we need to highlight the parent label
                if (active && card) {
                    if (_activeLabel == null && _show) {
                        _activeLabel = groupIndex;
                        self._setActiveLabelSilent(_activeLabel);
                    }
                }
            }
        });

        return ret;
    };

    var OptionsVNodes = function OptionsVNodes(_ref) {
        var children = _ref.children;

        return __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
            if (vNode.tag === _option2.default) {
                var props = vNode.props;
                props = (0, _extends3.default)({}, props, {
                    'ev-select': self._onSelect.bind(self, props.value),
                    hideOnSelect: !multiple,
                    label: props.label || (0, _utils.getTextByChildren)(props.children),
                    children: props.children || props.label
                });

                var _self$handleProps2 = self.handleProps(props, labelObj),
                    active = _self$handleProps2.active,
                    valid = _self$handleProps2.valid;

                if (!valid) {
                    return hc('');
                } else {
                    var _className2;

                    props.className = _className((_className2 = {}, _className2[props.className] = props.className, _className2['k-active'] = active, _className2));
                }

                // for card type groups, we need to highlight the parent label
                if (active && card) {
                    if (_activeLabel == null && _show) {
                        _activeLabel = groupIndex;
                        self._setActiveLabelSilent(_activeLabel);
                    }
                }

                // if the multiple select option is active
                // add a √ icon
                if (active && multiple) {
                    props.children = [props.children, h('i', null, null, 'k-checkmark ion-ios-checkmark-empty')];
                }

                // return the cloned vNode
                return h(_option2.default, props);
            } else if (vNode.tag === _group2.default) {
                var _props = vNode.props;
                _props = (0, _extends3.default)({}, _props, {
                    children: h(OptionsVNodes, {
                        'children': function () {
                            try {
                                return _props.children;
                            } catch (e) {
                                _e(e);
                            }
                        }.call($this),
                        '_context': $this
                    })
                });
                groupIndex++;
                return h(_group2.default, _props);
            }

            return vNode;
        });
    };

    var labelList = [];

    var Menu = scope.Menu || h(_dropdown.DropdownMenu, {
        'ref': function ref(i) {
            widgets['menu'] = i;
        },
        'className': _className(function () {
            try {
                return {
                    "k-select-dropdown": true,
                    "k-card": card
                };
            } catch (e) {
                _e(e);
            }
        }.call($this)),
        'children': function () {
            try {
                return function () {
                    var _children = [];
                    if (!isGroup) {
                        _children.push(h(Options, {
                            'data': function () {
                                try {
                                    return data;
                                } catch (e) {
                                    _e(e);
                                }
                            }.call($this),
                            '_context': $this
                        }));
                    } else {
                        _children.push(__m(function () {
                            try {
                                return data;
                            } catch (e) {
                                _e(e);
                            }
                        }.call($this), function (value, key) {
                            return h(_group2.default, {
                                'label': function () {
                                    try {
                                        return value.label;
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call($this),
                                'children': h(Options, {
                                    'data': function () {
                                        try {
                                            return value.data;
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call($this),
                                    'parentLabel': function () {
                                        try {
                                            return value.label;
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call($this),
                                    '_context': $this
                                }),
                                '_context': $this
                            });
                        }, $this));
                    }
                    _children.push(h(OptionsVNodes, {
                        'children': function () {
                            try {
                                return children;
                            } catch (e) {
                                _e(e);
                            }
                        }.call($this),
                        '_context': $this
                    }));

                    // if it is card type group, we extract the label as navBar
                    if (card) {
                        var _flatten = function _flatten(children) {
                            children.forEach(function (vNode) {
                                if (Array.isArray(vNode)) {
                                    _flatten(vNode);
                                } else if (vNode) {
                                    if (vNode.tag === _group2.default) {
                                        var props = vNode.props;
                                        var label = (props._blocks || {}).label || props.label;
                                        labelList.push({ label: label });
                                        vNode.props = (0, _extends3.default)({}, props, { _card: true });

                                        // if the _activeLabel is undefined
                                        // we active the first label
                                        if (_activeLabel == null && _show) {
                                            _activeLabel = index;
                                            self._setActiveLabelSilent(index);
                                        }

                                        // only render the active options
                                        if (_activeLabel === index) {
                                            vNodes.push(vNode);
                                        }
                                        index++;
                                    } else {
                                        vNodes.push(vNode);
                                    }
                                }
                            });
                        };

                        var vNodes = [];
                        var index = 0;

                        _flatten(_children);
                        return [h(_tabs.Tabs, {
                            'vertical': function () {
                                try {
                                    return true;
                                } catch (e) {
                                    _e(e);
                                }
                            }.call($this),
                            'type': 'border-card',
                            'children': __m(function () {
                                try {
                                    return labelList;
                                } catch (e) {
                                    _e(e);
                                }
                            }.call($this), function (value, key) {
                                return h(_tabs.Tab, {
                                    'value': function () {
                                        try {
                                            return key;
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call($this),
                                    'children': function () {
                                        try {
                                            return typeof value.label === 'function' ?
                                            // pass by block
                                            value.label(function () {}) :
                                            // pass by property
                                            value.label;
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call($this),
                                    '_context': $this
                                });
                            }, $this),
                            '_context': $this,
                            'value': _getModel(self, '_activeLabel'),
                            'ev-$change:value': function ev$changeValue(__c, __n) {
                                _setModel(self, '_activeLabel', __n, $this);
                            }
                        }), h('div', null, function () {
                            try {
                                return vNodes;
                            } catch (e) {
                                _e(e);
                            }
                        }.call($this), 'k-groups')];
                    } else {
                        return _children;
                    }
                }();
            } catch (e) {
                _e(e);
            }
        }.call($this),
        '_context': $this,
        'ev-$changed:value': function () {
            try {
                return self._position;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ev-$change:value': function () {
            try {
                return self._onChangeShow;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    });

    // if the value is not in options, then set hasValue to false
    if (hasValue && labelObj.label == null && !labelObj.labels.length) {
        hasValue = false;
        // if this is a value, but the value does not exist in options
        // we set it to empty, #41
        self._clearValue();
    }

    return h('div', {
        'style': function () {
            try {
                return width != null ? (0, _utils.addStyle)(style, { width: width + 'px' }) : style;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'tabindex': function () {
            try {
                return disabled ? "-1" : "0";
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ev-keypress': function () {
            try {
                return self._onKeypress;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ev-keydown': function () {
            try {
                return self._onKeydown;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, h(_dropdown2.default, {
        'position': function () {
            try {
                return { my: 'left top+8', at: 'left bottom' };
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'trigger': 'click',
        'disabled': function () {
            try {
                return disabled;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'ref': function ref(i) {
            widgets['dropdown'] = i;
        },
        'container': function () {
            try {
                return container;
            } catch (e) {
                _e(e);
            }
        }.call($this),
        'children': [h('div', {
            'tabindex': '-1',
            'ev-click': function () {
                try {
                    return self._focusInput;
                } catch (e) {
                    _e(e);
                }
            }.call($this)
        }, [function () {
            try {
                return blocks.prefix;
            } catch (e) {
                _e(e);
            }
        }.call($this) ? h('div', null, (_blocks['prefix'] = function (parent) {
            return null;
        }) && (__blocks['prefix'] = function (parent) {
            var args = arguments;
            return blocks['prefix'] ? blocks['prefix'].apply($this, [function () {
                return _blocks['prefix'].apply($this, args);
            }].concat(__slice.call(args, 1))) : _blocks['prefix'].apply($this, args);
        }) && __blocks['prefix'].apply($this, [__noop]), 'k-prefix') : undefined, h('div', null, [h('input', {
            'type': 'hidden',
            'value': function () {
                try {
                    return value;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'name': function () {
                try {
                    return name;
                } catch (e) {
                    _e(e);
                }
            }.call($this)
        }), function () {
            try {
                return !multiple && filterable;
            } catch (e) {
                _e(e);
            }
        }.call($this) ? h(_input2.default, {
            'value': function () {
                try {
                    return keywords == null ? labelObj.label : keywords;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'disabled': function () {
                try {
                    return disabled;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'placeholder': function () {
                try {
                    return _placeholder;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'ref': function ref(i) {
                widgets['input'] = i;
            },
            'size': function () {
                try {
                    return size;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'fluid': function () {
                try {
                    return true;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            '_context': $this,
            'ev-input': function () {
                try {
                    return self._onSearch;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'ev-blur': function () {
                try {
                    return self._onBlur;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'ev-focus': function () {
                try {
                    return self._selectInput;
                } catch (e) {
                    _e(e);
                }
            }.call($this)
        }) : function () {
            try {
                return !filterable && !hasValue;
            } catch (e) {
                _e(e);
            }
        }.call($this) ? h('span', null, function () {
            try {
                return _placeholder;
            } catch (e) {
                _e(e);
            }
        }.call($this), 'k-placeholder c-ellipsis') : function () {
            try {
                return !multiple;
            } catch (e) {
                _e(e);
            }
        }.call($this) ? h('span', null, function () {
            try {
                return labelObj.label;
            } catch (e) {
                _e(e);
            }
        }.call($this), 'k-value c-ellipsis') : h(Animate, {
            'a:tag': 'span',
            'a:disabled': function () {
                try {
                    return true;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'className': 'k-values',
            'children': [__m(function () {
                try {
                    return labelObj.labels;
                } catch (e) {
                    _e(e);
                }
            }.call($this), function (item, index) {
                return h(Animate, {
                    'a:tag': 'span',
                    'className': 'k-select-tag',
                    'key': function () {
                        try {
                            return value[index];
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this),
                    'a:transition': 'c-fade',
                    'children': [h('span', null, function () {
                        try {
                            return item;
                        } catch (e) {
                            _e(e);
                        }
                    }.call($this), 'k-text'), h('i', {
                        'ev-click': function () {
                            try {
                                return self._delete.bind(self, value[index]);
                            } catch (e) {
                                _e(e);
                            }
                        }.call($this)
                    }, null, 'k-icon ion-ios-close-empty')],
                    '_context': $this
                });
            }, $this), function () {
                try {
                    return filterable;
                } catch (e) {
                    _e(e);
                }
            }.call($this) ? h(_input2.default, {
                'value': function () {
                    try {
                        return keywords;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this),
                'disabled': function () {
                    try {
                        return disabled;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this),
                'placeholder': function () {
                    try {
                        return !hasValue ? _placeholder : '';
                    } catch (e) {
                        _e(e);
                    }
                }.call($this),
                'ref': function ref(i) {
                    widgets['input'] = i;
                },
                'autoWidth': function () {
                    try {
                        return true;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this),
                'size': function () {
                    try {
                        return size;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this),
                '_context': $this,
                'ev-input': function () {
                    try {
                        return self._onSearch;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this),
                'ev-blur': function () {
                    try {
                        return self._onBlur;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this),
                'ev-focus': function () {
                    try {
                        return self._onFocus;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this)
            }) : undefined],
            '_context': $this
        })], 'k-main'), function () {
            try {
                return !hideIcon || clearable;
            } catch (e) {
                _e(e);
            }
        }.call($this) ? h('span', null, [function () {
            try {
                return clearable;
            } catch (e) {
                _e(e);
            }
        }.call($this) ? h('i', {
            'ev-click': function () {
                try {
                    return self._onClear;
                } catch (e) {
                    _e(e);
                }
            }.call($this)
        }, null, _className(function () {
            try {
                return { "k-clear ion-ios-close": true, "k-show": hasValue };
            } catch (e) {
                _e(e);
            }
        }.call($this))) : undefined, function () {
            try {
                return !hideIcon;
            } catch (e) {
                _e(e);
            }
        }.call($this) ? h('i', null, null, 'k-arrow ion-arrow-down-b') : undefined], 'k-suffix') : undefined], 'k-wrapper', null, function (i) {
            widgets['wrapper'] = i;
        }), function () {
            try {
                return Menu;
            } catch (e) {
                _e(e);
            }
        }.call($this)],
        '_context': $this
    }), _className(function () {
        try {
            return (0, _extends3.default)({}, classNameObj, { 'k-has-value': hasValue });
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _utils = __webpack_require__("./components/utils.js");

var _option = __webpack_require__("./components/select/option.js");

var _option2 = _interopRequireDefault(_option);

var _group = __webpack_require__("./components/select/group.js");

var _group2 = _interopRequireDefault(_group);

var _tabs = __webpack_require__("./components/tabs/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/option.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = __webpack_require__("./components/dropdown/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = function (_DropdownItem) {
  (0, _inherits3.default)(Option, _DropdownItem);

  function Option() {
    (0, _classCallCheck3.default)(this, Option);
    return (0, _possibleConstructorReturn3.default)(this, _DropdownItem.apply(this, arguments));
  }

  return Option;
}(_dropdown.DropdownItem);

exports.default = Option;
module.exports = exports['default'];

/***/ }),

/***/ "./components/tabs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Tab = exports.Tabs = exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _tab = __webpack_require__("./components/tabs/tab.js");

var _tab2 = _interopRequireDefault(_tab);

var _index = __webpack_require__("./components/tabs/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/tabs/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Tabs = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Tabs, _Intact);

    function Tabs() {
        (0, _classCallCheck3.default)(this, Tabs);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Tabs.prototype.defaults = function defaults() {
        return {
            data: undefined,
            value: undefined,
            vertical: false,
            size: 'default',
            type: 'default',

            _activeBarStyle: undefined
        };
    };

    Tabs.prototype._changeTab = function _changeTab(item) {
        // if exits 'to', we don't change the value,
        // while let the page to change it by pass value prop
        if (!item.to) {
            this.set('value', item.value);
        } else {
            window.location.href = item.to;
        }
    };

    Tabs.prototype._mount = function _mount() {
        this.on('$changed:value', this._setActiveBarStyle);
        this._setActiveBarStyle();
    };

    Tabs.prototype._setActiveBarStyle = function _setActiveBarStyle() {
        if (this.get('type') !== 'default') return;

        var vertical = this.get('vertical');
        var activeTab = this.element.querySelector('.k-tab.k-active');

        if (activeTab) {
            if (!vertical) {
                var width = activeTab.offsetWidth;
                var left = activeTab.offsetLeft;
                this.set('_activeBarStyle', { left: left + 'px', width: width + 'px' });
            } else {
                var height = activeTab.offsetHeight;
                var top = activeTab.offsetTop;
                this.set('_activeBarStyle', { top: top + 'px', height: height + 'px' });
            }
        }
    };

    (0, _createClass3.default)(Tabs, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Tabs;
}(_intact2.default), _class2.propTypes = {
    data: Array,
    vertical: Boolean,
    size: ['large', 'default', 'small', 'mini'],
    type: ['default', 'card', 'border-card', 'no-border-card']
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Tabs;
exports.Tabs = Tabs;
exports.Tab = _tab2.default;

/***/ }),

/***/ "./components/tabs/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305758429
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/tabs/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        data = _self$get.data,
        value = _self$get.value,
        children = _self$get.children,
        style = _self$get.style,
        vertical = _self$get.vertical,
        size = _self$get.size,
        type = _self$get.type,
        _activeBarStyle = _self$get._activeBarStyle;

    var classNameObj = (_classNameObj = {
        'k-tabs': true
    }, _classNameObj[className] = className, _classNameObj['k-' + size] = size !== 'default', _classNameObj['k-vertical'] = vertical, _classNameObj['k-card'] = type === 'no-border-card', _classNameObj['k-' + type] = type !== 'default', _classNameObj);

    return h('div', {
        'style': function () {
            try {
                return style;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, [__m(function () {
        try {
            return data;
        } catch (e) {
            _e(e);
        }
    }.call($this), function (item, key) {
        return h('a', {
            'ev-click': function () {
                try {
                    return self._changeTab.bind(self, item);
                } catch (e) {
                    _e(e);
                }
            }.call($this)
        }, function () {
            try {
                return item.text;
            } catch (e) {
                _e(e);
            }
        }.call($this), _className(function () {
            try {
                return {
                    'k-tab': true,
                    'k-active': item.value === value
                };
            } catch (e) {
                _e(e);
            }
        }.call($this)));
    }, $this), function () {
        try {
            return __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
                if (vNode.tag === _tab2.default) {
                    vNode.props = (0, _extends3.default)({}, vNode.props, { _value: value, _parent: self });
                }
                return vNode;
            });
        } catch (e) {
            _e(e);
        }
    }.call($this), function () {
        try {
            return type === 'default';
        } catch (e) {
            _e(e);
        }
    }.call($this) ? h('div', {
        'style': function () {
            try {
                return _activeBarStyle;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, null, 'k-active-bar') : undefined], _className(function () {
        try {
            return classNameObj;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

var _tab = __webpack_require__("./components/tabs/tab.js");

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/tabs/tab.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _tab = __webpack_require__("./components/tabs/tab.vdt");

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Tab = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Tab, _Intact);

    function Tab() {
        (0, _classCallCheck3.default)(this, Tab);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Tab.prototype.defaults = function defaults() {
        return {
            value: undefined,
            to: undefined,
            disabled: false,

            // passed by parent
            _value: undefined,
            _parent: undefined
        };
    };

    Tab.prototype._isActive = function _isActive() {
        var value = this.get('value');
        return value !== undefined && value === this.get('_value');
    };

    Tab.prototype._changeTab = function _changeTab(e) {
        if (this.get('disabled')) {
            e.preventDefault();
        } else {
            this.get('_parent')._changeTab(this.get());
            this.trigger('click', e);
        }
    };

    (0, _createClass3.default)(Tab, [{
        key: 'template',
        get: function get() {
            return _tab2.default;
        }
    }]);
    return Tab;
}(_intact2.default), _class2.propTypes = {
    disabled: Boolean,
    to: String
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Tab;
module.exports = exports['default'];

/***/ }),

/***/ "./components/tabs/tab.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, _Vdt, blocks, $callee) {
    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        value = _self$get.value,
        children = _self$get.children,
        _value = _self$get._value,
        className = _self$get.className,
        size = _self$get.size,
        disabled = _self$get.disabled;

    return h('a', {
        'ev-click': function () {
            try {
                return self._changeTab;
            } catch (e) {
                _e(e);
            }
        }.call($this)
    }, function () {
        try {
            return self.get('children');
        } catch (e) {
            _e(e);
        }
    }.call($this), _className(function () {
        try {
            var _ref;

            return _ref = {
                'k-tab': true,
                'k-active': value !== undefined && value === _value
            }, _ref[className] = className, _ref['k-disabled'] = disabled, _ref;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

module.exports = exports['default'];

/***/ }),

/***/ "./site/src/imgs/page1.png":
/***/ (function(module, exports) {

module.exports = "/kpc/fonts/page1.png";

/***/ }),

/***/ "./site/src/imgs/page2.png":
/***/ (function(module, exports) {

module.exports = "/kpc/fonts/page2.png";

/***/ }),

/***/ "./site/src/pages/index/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./site/src/pages/index/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _layout = __webpack_require__("./site/src/pages/layout.js");

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__("./site/src/pages/index/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Layout) {
    (0, _inherits3.default)(_default, _Layout);

    function _default() {
        (0, _classCallCheck3.default)(this, _default);
        return (0, _possibleConstructorReturn3.default)(this, _Layout.apply(this, arguments));
    }

    _default.prototype.defaults = function defaults() {
        return (0, _extends3.default)({}, _Layout.prototype.defaults.call(this), {
            current: 'one'
        });
    };

    _default.prototype._page1 = function _page1() {
        this.set('current', 'one');
    };

    _default.prototype._page2 = function _page2() {
        this.set('current', 'two');
    };

    _default.prototype._mountAA = function _mountAA() {
        var self = this;
        var X = void 0,
            Y = void 0,
            startX = void 0,
            startY = void 0,
            moveEndX = void 0,
            moveEndY = void 0;
        window.onmousewheel = function (e) {
            var data = e.wheelDelta || 0;
            console.log(data);
            if (data > 0) {
                self.set('current', 'one');
            } else if (data < 0) {
                self.set('current', 'two');
            }
            // debugger
        };
        window.ontouchstart = function (e) {
            e.preventDefault();
            startX = e.changedTouches[0].pageX;
            startY = e.changedTouches[0].pageY;
        };
        window.ontouchmove = function (e) {
            e.preventDefault();
            moveEndX = e.changedTouches[0].pageX;
            moveEndY = e.changedTouches[0].pageY;

            X = moveEndX - startX;
            Y = moveEndY - startY;

            if (Math.abs(X) > Math.abs(Y) && X > 0) {
                console.log("left 2 right");
            } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
                console.log("right 2 left");
            } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
                self.set('current', 'one');
                console.log("top 2 bottom");
            } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
                self.set('current', 'two');
                console.log("bottom 2 top");
            } else {
                console.log("just touch");
            }
        };

        // var one = document.querySelector('.pages');
        var one = document.getElementById('page');

        function addEvent(elem, type, showAll) {
            type = type.split(' ');

            type.forEach(function (item) {
                elem.addEventListener(item, function (ev) {
                    console.log(item, showAll ? ev : ev.type);
                });
            });
        }

        addEvent(one, 'tap click touchstart touchmove touchend touchcancel swipe swipeLeft swipeRight swipeUp swipeDown longTap singleTap doubleTap mousewheel', true);
    };

    _default.prototype._destroy = function _destroy() {
        window.onmousewheel = null;
    };

    return _default;
}(_layout2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;
module.exports = exports['default'];

/***/ }),

/***/ "./site/src/pages/index/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305754195
      var cssReload = require("!../../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./site/src/pages/index/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, _Vdt, blocks, $callee) {
    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    return function () {
        var _obj = {
            'className': 'index-page',
            'pageIndex': 'index'
        };
        return parent.call($this, _obj, _Vdt, function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks['header'] = function (parent) {
                return [function () {
                    try {
                        return parent();
                    } catch (e) {
                        _e(e);
                    }
                }.call($this), h('div', null, null, 'circle-bg right')];
            }) && (__blocks['header'] = function (parent) {
                var args = arguments;
                return blocks['header'] ? blocks['header'].apply($this, [function () {
                    return _blocks['header'].apply($this, args);
                }].concat(__slice.call(args, 1))) : _blocks['header'].apply($this, args);
            }) && (_blocks['content'] = function (parent) {
                return [h('div', null, [h(_grid.Row, {
                    'className': 'first-page',
                    'align': 'stretch',
                    'justify': 'center',
                    'children': [h(_grid.Col, {
                        'className': 'first-page-left',
                        'lg': '11',
                        'children': [h('h1', null, 'KPC'), h('p', null, '支持多框架的前端高质量组件库'), h('div', null, [h(_button.Button, {
                            'tagName': function () {
                                try {
                                    return _link.Link;
                                } catch (e) {
                                    _e(e);
                                }
                            }.call($this),
                            'type': 'primary',
                            'tagProps': function () {
                                try {
                                    return {
                                        href: "/kpc" + '/docs/getting-started/'
                                    };
                                } catch (e) {
                                    _e(e);
                                }
                            }.call($this),
                            'className': 'button',
                            'children': '开始使用',
                            '_context': $this
                        }), h(_button.Button, {
                            'href': 'https://github.com/ksc-fe/kpc',
                            'className': 'button',
                            'target': '_blank',
                            'children': 'GitHub',
                            '_context': $this
                        })], 'actions')],
                        '_context': $this
                    }), h(_grid.Col, {
                        'className': 'first-page-right',
                        'lg': '11',
                        'children': h('img', {
                            'src': function () {
                                try {
                                    return _page2.default;
                                } catch (e) {
                                    _e(e);
                                }
                            }.call($this)
                        }),
                        '_context': $this
                    })],
                    '_context': $this
                }), h(_grid.Row, {
                    'align': 'stretch',
                    'justify': 'center',
                    'children': [h(_grid.Col, {
                        'className': 'second-page-left',
                        'lg': '11',
                        'children': h('img', {
                            'src': function () {
                                try {
                                    return _page4.default;
                                } catch (e) {
                                    _e(e);
                                }
                            }.call($this)
                        }),
                        '_context': $this
                    }), h(_grid.Col, {
                        'className': 'second-page-right',
                        'lg': '11',
                        'children': h('div', null, [h('div', null, [h('h2', null, '支持多框架'), h('div', null, '\n                                同时支持Intact和Vue框架\n                            ')], 'feature'), h('div', null, [h('h2', null, '忠于原生，增强原生'), h('div', null, '\n                                在保持浏览器原生特性的基础上，增强交互能力\n                            ')], 'feature'), h('div', null, [h('h2', null, '便捷开发'), h('div', null, '\n                                支持按需加载，主题定制，国际化等特性\n                            '), h('div', null, '\n                                并且提供了配套的脚手架方便快速初始化项目\n                            ')], 'feature')], 'info'),
                        '_context': $this
                    })],
                    '_context': $this
                })], 'pages'), h('div', null, null, 'circle-bg left')];
            }) && (__blocks['content'] = function (parent) {
                var args = arguments;
                return blocks['content'] ? blocks['content'].apply($this, [function () {
                    return _blocks['content'].apply($this, args);
                }].concat(__slice.call(args, 1))) : _blocks['content'].apply($this, args);
            }), __blocks;
        }.call($this, blocks), parent);
    }.call($this);
};

var _button = __webpack_require__("./components/button/index.js");

var _link = __webpack_require__("./components/link/index.js");

var _grid = __webpack_require__("./components/grid/index.js");

var _page = __webpack_require__("./site/src/imgs/page1.png");

var _page2 = _interopRequireDefault(_page);

var _page3 = __webpack_require__("./site/src/imgs/page2.png");

var _page4 = _interopRequireDefault(_page3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/src/pages/layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _layout = __webpack_require__("./site/src/pages/layout.vdt");

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__("./site/src/pages/layout.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var theme = void 0;
function changeTheme(newTheme, oldTheme) {
    var link = document.querySelector('link[rel=stylesheet]');
    if (!link) return;

    link.href = link.href.replace('theme-' + oldTheme, 'theme-' + newTheme);
    theme = newTheme;
    localStorage.setItem('theme', newTheme);
}

if (process.browser) {
    theme = localStorage.getItem('theme') || 'kpc';

    if (theme !== 'kpc') {
        changeTheme(theme, 'kpc');
    }
} else {
    theme = 'kpc';
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(_default, _Intact);

    function _default() {
        (0, _classCallCheck3.default)(this, _default);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    _default.prototype.defaults = function defaults() {
        return {
            theme: theme,
            version: 'v1.1.1'
        };
    };

    _default.prototype._init = function _init() {
        this.on('$change:theme', function (c, v, o) {
            changeTheme(v, o);
        });
    };

    _default.prototype._mount = function _mount() {
        this.border = this.element.querySelector('.border');
        this._updateBorder();
    };

    _default.prototype._updateBorder = function _updateBorder() {
        var nav = this.element.querySelector('.active');
        var width = 0;
        var left = 0;
        if (nav) {
            left = nav.offsetLeft;
            width = nav.offsetWidth;
        }
        this.border.classList.add('transition');
        this.border.style.width = width + 'px';
        this.border.style.left = left + 'px';
    };

    return _default;
}(_intact2.default), _class2.template = _layout2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;
module.exports = exports['default'];

/***/ }),

/***/ "./site/src/pages/layout.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543305754177
      var cssReload = require("!../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./site/src/pages/layout.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, _Vdt, blocks, $callee) {
    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __slice = __u.slice,
        __noop = __u.noop,
        __m = __u.map,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var nav = [{
        title: '设计',
        href: '/docs/design/language/',
        index: 'design'
    }, {
        title: '组件',
        href: '/docs/getting-started/',
        index: 'document'
    }, {
        title: 'Blog',
        href: '/docs/blogs/design/',
        index: 'blog'
    }];

    return h('div', null, [h('div', null, h('header', null, (_blocks['header'] = function (parent) {
        return [h('div', null, [h(_link2.default, {
            'className': 'logo',
            'href': '/',
            '_context': $this
        }), h(_link2.default, {
            'className': 'king',
            'href': '/',
            'children': 'KPC',
            '_context': $this
        })], 'king-logo'), h('div', null, [h('nav', null, [__m(function () {
            try {
                return nav;
            } catch (e) {
                _e(e);
            }
        }.call($this), function (value, key) {
            return h(_link2.default, {
                'className': _className(function () {
                    try {
                        return {
                            active: value.index === scope.navIndex
                        };
                    } catch (e) {
                        _e(e);
                    }
                }.call($this)),
                'href': function () {
                    try {
                        return '' + "/kpc" + value.href;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this),
                'children': function () {
                    try {
                        return value.title;
                    } catch (e) {
                        _e(e);
                    }
                }.call($this),
                '_context': $this
            });
        }, $this), h('div', null, null, 'border')]), h('div', null, null, 'line'), function () {
            try {
                return null;
            } catch (e) {
                _e(e);
            }
        }.call($this), h(_select.Select, {
            'inline': function () {
                try {
                    return true;
                } catch (e) {
                    _e(e);
                }
            }.call($this),
            'children': [h(_select.Option, {
                'value': 'kpc',
                'children': '默认主题',
                '_context': $this
            }), h(_select.Option, {
                'value': 'ksyun',
                'children': 'ksyun',
                '_context': $this
            })],
            '_context': $this,
            'value': _getModel(self, 'theme'),
            'ev-$change:value': function ev$changeValue(__c, __n) {
                _setModel(self, 'theme', __n, $this);
            }
        })], 'right')];
    }) && (__blocks['header'] = function (parent) {
        var args = arguments;
        return blocks['header'] ? blocks['header'].apply($this, [function () {
            return _blocks['header'].apply($this, args);
        }].concat(__slice.call(args, 1))) : _blocks['header'].apply($this, args);
    }) && __blocks['header'].apply($this, [__noop])), _className(function () {
        try {
            return {
                'header-wrapper': true,
                'header-shadow': scope.pageIndex !== 'index'
            };
        } catch (e) {
            _e(e);
        }
    }.call($this)), null, function (i) {
        widgets['header'] = i;
    }), h('div', null, (_blocks['content'] = function (parent) {
        return null;
    }) && (__blocks['content'] = function (parent) {
        var args = arguments;
        return blocks['content'] ? blocks['content'].apply($this, [function () {
            return _blocks['content'].apply($this, args);
        }].concat(__slice.call(args, 1))) : _blocks['content'].apply($this, args);
    }) && __blocks['content'].apply($this, [__noop]), 'content-wrapper', null, function (i) {
        widgets['wrapper'] = i;
    })], _className(function () {
        try {
            var _ref;

            return _ref = { 'main-wrapper': true }, _ref[scope.className] = scope.className, _ref;
        } catch (e) {
            _e(e);
        }
    }.call($this)));
};

var _link = __webpack_require__("./components/link/index.js");

var _link2 = _interopRequireDefault(_link);

var _select = __webpack_require__("./components/select/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

};;