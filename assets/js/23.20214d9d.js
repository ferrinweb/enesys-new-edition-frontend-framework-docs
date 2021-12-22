(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{532:function(t,s,n){"use strict";n.r(s);var a=n(8),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"fields-表单字段配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fields-表单字段配置"}},[t._v("#")]),t._v(" Fields 表单字段配置")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性名")]),t._v(" "),n("th",[t._v("属性值说明")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("label")]),t._v(" "),n("td",[t._v("[String] 字段描述")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("field")]),t._v(" "),n("td",[t._v("[String] 字段名称")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("[String] 输入类型"),n("br"),t._v("可选值"),n("br"),t._v("input/select/checkbox/radio/datepicker/timepicker/cascader/split"),n("br"),t._v("设置为 "),n("code",[t._v("split")]),t._v(" 表示在表单此处插入分割线，参考 "),n("RouterLink",{attrs:{to:"/components/common-form/split.html"}},[t._v("表单分段")])],1),t._v(" "),n("td",[t._v("input")])]),t._v(" "),n("tr",[n("td",[t._v("innerType")]),t._v(" "),n("td",[t._v("[String] 内部类型"),n("br"),t._v("对应 element-ui 相应组件的 "),n("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/input#input-attributes",target:"_blank",rel:"noopener noreferrer"}},[t._v("type"),n("OutboundLink")],1),t._v(" 属性配置")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("[String|Number|Boolean|Array|Object] 字段默认值"),n("br"),t._v("如果选单值是基本类型，应设置为空字符串"),n("br"),t._v("如果选单值是数组，应设置为 []")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("options")]),t._v(" "),n("td",[t._v("[Array] 设置候选值"),n("br"),t._v("为 type 值为 select/checkbox/radio/cascader 的字段设置选项列表")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("fetch")]),t._v(" "),n("td",[t._v("[Object] 远程获取候选值"),n("br"),t._v("通过 api 为 type 值 select/checkbox/radio/cascader 的字段获取选项列表"),n("br"),t._v("详细配置参考 "),n("RouterLink",{attrs:{to:"/components/common-form/fetch.html"}},[t._v("fetch")]),t._v(" 配置")],1),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("labelKey")]),t._v(" "),n("td",[t._v("[String] 自定义 label 字段"),n("br"),t._v("当 type 值为 select/checkbox/radio 时可用"),n("br"),t._v("用于指定选项数据中的其他字段作为 label 字段")]),t._v(" "),n("td",[t._v("label")])]),t._v(" "),n("tr",[n("td",[t._v("valueKey")]),t._v(" "),n("td",[t._v("[String] 自定义 value 字段"),n("br"),t._v("当 type 值为 select/checkbox/radio 时可用"),n("br"),t._v("用于指定选项数据中的其他字段作为 label 字段")]),t._v(" "),n("td",[t._v("value")])]),t._v(" "),n("tr",[n("td",[t._v("className")]),t._v(" "),n("td",[t._v("[String] 自定义样式名")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("span")]),t._v(" "),n("td",[t._v("[Number|String] 跨列数"),n("br"),t._v("设置的值不能大于 col 属性设置的值")]),t._v(" "),n("td",[t._v("1")])]),t._v(" "),n("tr",[n("td",[t._v("clearable")]),t._v(" "),n("td",[t._v("[Boolean] 显示清空按钮")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("[Boolean] 是否禁用")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("autofocus")]),t._v(" "),n("td",[t._v("[Boolean] 是否自动获取焦点")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("readonly")]),t._v(" "),n("td",[t._v("[Boolean] 是否只读")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("multiple")]),t._v(" "),n("td",[t._v("[Boolean] 是否多选"),n("br"),t._v("type 值为 select 时有效")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("multipleLimit")]),t._v(" "),n("td",[t._v("[Number] type 值为 select，且多选时，允许选择的项目数")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("min")]),t._v(" "),n("td",[t._v("[Number] type 值为 checkbox 时，表示可选中项目的最少个数;"),n("br"),t._v("type 值为 number 或 innerType 值为 number 时，表示可输入的最小值")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("max")]),t._v(" "),n("td",[t._v("[Number] type 值为 checkbox 时，表示可选中项目的最多个数;"),n("br"),t._v("type 值为 number 或 innerType 值为 number 时，表示可输入的最大值")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("filterable")]),t._v(" "),n("td",[t._v("[Boolean] 是否可筛选"),n("br"),t._v("type 值为 select 时有效")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("filter-method")]),t._v(" "),n("td",[t._v("[Function] 自定义选项筛选方法"),n("br"),t._v("type 值为 select 时有效")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("rule")]),t._v(" "),n("td",[t._v("[String|Object|Array|Function] 字段校验规则配置"),n("br"),t._v("详细配置参考"),n("RouterLink",{attrs:{to:"/components/common-form/form-rules.html"}},[t._v("校验规则配置")])],1),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("link")]),t._v(" "),n("td",[t._v("[Object|Array] 字段关联操作配置"),n("br"),t._v("详细配置参考"),n("RouterLink",{attrs:{to:"/components/common-form/link.html"}},[t._v("关联操作配置")])],1),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("on")]),t._v(" "),n("td",[t._v("[Object] 字段元素事件监听配置"),n("br"),t._v("详细配置参考"),n("a",{attrs:{href:"#%E5%AD%97%E6%AE%B5%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E7%A4%BA%E4%BE%8B"}},[t._v("字段事件监听示例")])]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("order")]),t._v(" "),n("td",[t._v("[Number] 自定义字段排列顺序"),n("br"),t._v("注意：通过情况下不需要改属性配置，因为 fields 配置本身就是有序的")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("...")]),t._v(" "),n("td",[t._v("其他设置属性，参考 element-ui 各个 "),n("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/radio",target:"_blank",rel:"noopener noreferrer"}},[t._v("表单元素"),n("OutboundLink")],1),t._v(" 相关属性设置"),n("br"),t._v("如个别属性未在通用列表获得支持，请提交"),n("RouterLink",{attrs:{to:"/feedback/"}},[t._v("反馈")]),t._v("。")],1),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h2",{attrs:{id:"字段事件监听示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字段事件监听示例"}},[t._v("#")]),t._v(" 字段事件监听示例")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" formFields "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'表具编号'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  field"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meterNo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  on"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 获得焦点事件，事件回调参数列表（下同）：\n     * value {string|number|array|boolean} 字段当前值\n     * config {object} 当前字段配置\n     * event {object} 字段元素 dom 引用，需要注意，input/change 事件回调中不存在该参数\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("focus")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus => '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输入事件")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("input")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input => '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 值改变事件")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("change")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change => '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 失去焦点事件")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("blur")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur => '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br")])]),n("h2",{attrs:{id:"预设表单字段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#预设表单字段"}},[t._v("#")]),t._v(" 预设表单字段")]),t._v(" "),n("p",[t._v("将常用字段配置为"),n("RouterLink",{attrs:{to:"/preset/fields.html"}},[t._v("预设字段")]),t._v("，可极大改善列表、表单、筛选条控件的配置体验。")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);