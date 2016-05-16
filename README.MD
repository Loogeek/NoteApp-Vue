基于Vue和Vuex实现的一个带有Markdown功能的简单笔记应用
======


简介:
----
- 该项目使用`Vue.js`通过组件化开发完成；
- 使用`Vuex`状态管理架构对项目中的application state进行统一管理，在组件的DOM节点上触发相应的action时通过dispatch mutation修改state,并在该组件通过getter函数获取更新后的state，DOM节点根据更新后的state数据重新渲染，使用Vuex的优势是使状态更利于追踪，降低了后期维护成本；
- 使用`localstorage`对应用数据进行存储；
- 使用`ESlint`对项目代码进行风格统一及校验；
- 使用`marked`让编辑区支持Markdown语法，可通过左侧工具栏第三个按钮查看Markdown显示效果；
- 可添加、标记及删除节点，并可修改标题内容；
- 使用`Karma + jasmine`进行简单的测试；
- 通过`Webpack-dev-server`运行，并支持代码`热替换`

效果展示
----
<a href="http://loogeek.github.io/NoteApp-Vue" target="\_blank">Demo</a>

项目整体效果
-------
<div style="text-align:center;margin-bottom: 40px;">
  <img src="https://github.com/Loogeek/Project_Imgs/blob/master/NoteApp-Vue/1.png" alt="编辑页"/>
</div>
<div style="text-align:center;">
  <img src="https://github.com/Loogeek/Project_Imgs/blob/master/NoteApp-Vue/2.png" alt="编辑页"/>
</div>

运行
-------
npm install安装包后通过npm run dev命令启动服务器，localhost:8080下查看项目，
若想改成其他启动端口可在package.json文件中给scripts下的dev添加--host域名及--port端口

``` bash
npm install    
npm run dev   # run the counter example
npm test      # run test
```

后期完善
-------
完善代码功能
