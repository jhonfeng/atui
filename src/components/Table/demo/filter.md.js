webpackJsonp([44,194],{492:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u5728columns\u9879\u91cc\u589e\u52a0filters\u53ef\u589e\u52a0\u7b5b\u9009\u529f\u80fd\uff0c\u53ef\u8bbe\u7f6e\u591a\u9009\u6216\u5355\u9009\uff0c\u5982\u679c\u6709onFilter\u5219\u5ba2\u6237\u7aef\u8fdb\u884c\u8fc7\u6ee4\uff0c\u5982\u679c\u6ca1\u6709onfilter\u5219\u4f1a\u89e6\u53d1table-change\u4e8b\u4ef6\uff0c\u81ea\u884c\u53bb\u670d\u52a1\u5668\u7aef\u8fdb\u884c\u8fc7\u6ee4"],["pre",{lang:"js",highlighted:'<span class="token keyword">var</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u59d3\u540dss\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  filters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'\u59d3\u674e\u7684\u7684\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u674e\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'\u59d3\u80e1\u7684\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u80e1\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  sorter<span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>\n  width<span class="token punctuation">:</span><span class="token number">150</span><span class="token punctuation">,</span>\n  onFilter<span class="token punctuation">:</span> <span class="token punctuation">(</span>names<span class="token punctuation">,</span> record<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> names<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">return</span> record<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u5e74\u9f84\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n  width<span class="token punctuation">:</span><span class="token number">250</span><span class="token punctuation">,</span>\n  filters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'32\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'32\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'42\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'42\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u5730\u5740\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n  filters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'\u5357\u6e56\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u5357\u6e56\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'\u897f\u6e56\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u897f\u6e56\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  filterMultiple<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  width<span class="token punctuation">:</span><span class="token number">250</span><span class="token punctuation">,</span>\n  onFilter<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> record<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> record<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token operator">>=</span><span class="token number">0</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'\u64cd\u4f5c\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'operation\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>'},["code","var columns = [{\n  title: '\u59d3\u540dss',\n  dataIndex: 'name',\n  filters: [{\n    text: '\u59d3\u674e\u7684\u7684',\n    value: '\u674e',\n  }, {\n    text: '\u59d3\u80e1\u7684',\n    value: '\u80e1',\n  }],\n  sorter:true,\n  width:150,\n  onFilter: (names, record) => {\n    return names.some(function(name){\n      return record.name.indexOf(name) == 0\n    })\n  }\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  width:250,\n  filters: [{\n    text: '32',\n    value: '32',\n  }, {\n    text: '42',\n    value: '42',\n  }]\n}, {\n  title: '\u5730\u5740',\n  dataIndex: 'address',\n  filters: [{\n    text: '\u5357\u6e56',\n    value: '\u5357\u6e56',\n  }, {\n    text: '\u897f\u6e56',\n    value: '\u897f\u6e56',\n  }],\n  filterMultiple: false,\n  width:250,\n  onFilter: (value, record) => {\n    return record.address.indexOf(value)>=0\n  }\n},{\n    title: '\u64cd\u4f5c',\n    key: 'operation'\n  }\n];"]]],"en-US":[]},meta:{order:4,title:{"zh-CN":"\u8fc7\u6ee4","en-US":"Filter"},filename:"src/components/Table/demo/filter.md",id:"src-components-Table-demo-filter"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-table</span> <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gridData<span class="token punctuation">"</span></span> <span class="token attr-name">@table-change</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onTableChange<span class="token punctuation">"</span></span> <span class="token attr-name">:row-expandable</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rowExpandable<span class="token punctuation">"</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gridColumns<span class="token punctuation">"</span></span> <span class="token attr-name">row-key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span> <span class="token attr-name">:slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>operation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"onBtnClick(props.record)"</span><span class="token operator">></span>\u64cd\u4f5c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-table</span><span class="token punctuation">></span></span>'}],preview:'<v-table :data-source="gridData" @table-change="onTableChange" :row-expandable="rowExpandable" :columns="gridColumns" row-key="key" >\n  <template scope="props" :slot="operation">\n    <v-button @click.native="onBtnClick(props.record)">\u64cd\u4f5c</v-button>\n  </template>\n</v-table>',vueScript:"var columns = [{\n  title: '\u59d3\u540dss',\n  dataIndex: 'name',\n  filters: [{\n    text: '\u59d3\u674e\u7684\u7684',\n    value: '\u674e',\n  }, {\n    text: '\u59d3\u80e1\u7684',\n    value: '\u80e1',\n  }],\n  sorter:true,\n  width:150,\n  onFilter: (names, record) => {\n    return names.some(function(name){\n      return record.name.indexOf(name) == 0\n    })\n  }\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  width:250,\n  filters: [{\n    text: '32',\n    value: '32',\n  }, {\n    text: '42',\n    value: '42',\n  }],\n  onFilter: (ages, record) => {\n    return ages.some(function(age){\n      return parseInt(record.age) === parseInt(age)\n    })\n  }\n}, {\n  title: '\u5730\u5740',\n  dataIndex: 'address',\n  filters: [{\n    text: '\u5357\u6e56',\n    value: '\u5357\u6e56',\n  }, {\n    text: '\u897f\u6e56',\n    value: '\u897f\u6e56',\n  }],\n  filterMultiple: false,\n  width:250,\n  onFilter: (value, record) => {\n    return record.address.indexOf(value)>=0\n  }\n},{\n    title: '\u64cd\u4f5c',\n    key: 'operation',\n    render: function(text, record) {\n      if(record) {\n        return '<icon type=\"info-s\"></icon><a href=\"'+ record.key+'.html\" target=\"_blank\">\u8be6\u60c5</a>'\n      }\n    }\n  }\n];\n\nvar data = [{\n  key: '1',\n  name: '\u80e1\u658c',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n}, {\n  key: '2',\n  name: '\u80e1\u5f66\u7956',\n  age: 42,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed12\u53f7',\n}, {\n  key: '3',\n  name: '\u674e\u5927\u5634',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n}, {\n  key: '4',\n  name: '\u674e\u79c0\u83b2\u5927\u5634\u54e5',\n  age: 32,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n},\n{\n  key: '5',\n  name: '\u5218\u5fb7\u534e',\n  age: 54,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed999\u53f7',\n},\n{\n  key: '6',\n  name: '\u6d2a\u91d1\u5b9d',\n  age: 66,\n  address: '\u9999\u6e2f\u5f25\u6566\u90532',\n}]\n\n// \u914d\u7f6e\u9009\u62e9\u6570\u636e\u7684\u9009\u9879\nvar rowSelection = {\n  getCheckboxProps: function(record) {\n    return {\n      disabled: record.name === '\u80e1\u5f66\u7956'    // \u914d\u7f6e\u65e0\u6cd5\u52fe\u9009\u7684\u5217\n    };\n  },\n  onChange: function(selectedRowKeys, selectedRows) {\n    console.log('rowSelection.onChange',selectedRowKeys, selectedRows);\n  },\n  onSelect: function(record, selected, selectedRows) {\n    console.log('rowSelection.onSelect',record, selected, selectedRows);\n  },\n  onSelectAll: function(selected, selectedRows, changeRows) {\n    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);\n  }\n}\n\n\nnew Vue({\n  el: 'body',\n  components: {\n    vTable: atui.Table,\n    vButton: atui.Button,\n    icon: atui.Icon\n  },\n  data () {\n    return {\n      gridData: [],\n      gridColumns: columns,\n      rowSelection:rowSelection\n    }\n  },\n  created () {\n    let me = this\n    setTimeout(function(){\n      me.gridData = data\n    },2000)\n  },\n  methods: {\n    onTableChange(paging,filter,sorter) {\n      console.log('table-change',paging,filter,sorter)\n      //let me = this\n      //me.gridData = me.gridData.reverse()\n    },\n    onBtnClick (record) {\n      console.log(record)\n    },\n    rowExpandable (record, index) {\n      debugger\n      return record.name == '\u674e\u5927\u5634'\n    }\n  }\n})"}}});