基于Vue和Vuex实现的一个简单带有Markdown功能的笔记应用
======

简介:
----
- 该项目使用Vue.js通过组件化开发完成；
- 使用Vuex状态管理架构对项目中的application state进行统一管理，在组件的DOM节点上触发相应的action时通过dispatch mutation修改state,并在该组件通过getter函数中获取更新后的state，DOM节点根据更新后的state数据重新渲染，使用Vuex的优势是使状态更利于追踪，降低了后期维护成本；
- 使用localstorage对应用数据进行存储
- 使用ESlint对项目代码进行风格统一及校验
- 编辑区内容可使用简单的Markdown语法进行编辑，可通过左侧工具栏第三个按钮查看显示效果；
- 双击标题可修改标题内容
- 使用Karma + jasmine进行简单的测试

项目整体效果
-------
![编辑页](https://github.com/Loogeek/Project_Imgs/blob/master/NoteApp-Vue/1.png)
![Markdown显示](https://github.com/Loogeek/Project_Imgs/blob/master/NoteApp-Vue/2.png)

运行
-------
``` bash
npm install    
npm run dev   # run the counter example
npm test      # run test
```

后期完善
-------
完善代码功能
