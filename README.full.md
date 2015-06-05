# Sample

> File templates for front-end projects.

## 简介

每次在 GitHub 新建一个前端小项目，都要做一遍繁琐的、重复的 “文案工作”？那不如把常用文件汇总为一个项目模板吧，以后新建项目时直接复制出来填填改改就可以了。

现在可用的模板文件：

* `README.md` （稍复杂的项目可以选用 `README.full.md`）
* `.gitignore`
* `package.json`
* `bower.json`
* `.editorconfig`

## 兼容性

#### 浏览器支持

* 支持以下移动平台的主流浏览器：
    * iOS 5+
    * Android 2.3+

* 同样支持以下桌面浏览器：
    * Firefox (edge)
    * Chrome (edge)
    * Safari (edge)

#### 外部依赖

* Underscore 1.6+
* Zepto 1.1+

## 安装

0. 通过 Bower 安装：

    ```sh
	$ bower install {sample}
    ```

0. 在页面中加载 {Sample} 的样式文件、脚本文件及必要的依赖：

    ```html
	<!DOCTYPE html>
	<html>
	<head>
		...
		<link rel="stylesheet" href="bower_components/{sample}/dist/{sample}.css">
	</head>
	<body>
		...
		<script src="bower_components/zepto.js/dist/zepto.js"></script>
		<script src="bower_components/underscore/underscore.js"></script>
		<script src="bower_components/{sample}/dist/{sample}.js"></script>
	</body>
	</html>
    ```

## API 文档

* {Sample} 提供了简洁易用的 API，[详见此文档](https://github.com/cssmagic/sample/issues/1)。
* 此外，建议阅读 [Wiki](https://github.com/cssmagic/sample/wiki) 来获取更多信息。

## 谁在用？

以下网站采用 {Sample} 作为基础组件：

* [百姓网 - 手机版](http://m.baixing.com/)

***

## 参与开发

#### 构建

0. 把本项目的代码 fork 并 clone 到本地。
0. 在项目根目录执行 `npm install`，安装必要的依赖。
0. 在项目根目录执行 `npm run dist`，运行构建脚本。
0. 构建生成的发布文件将保存到 `/dist` 目录下。

#### 单元测试

0. 把本项目的代码 fork 并 clone 到本地。
0. 在项目根目录执行 `bower install`，安装必要的依赖。
0. 在浏览器中打开以下文件即可运行单元测试：
	* `test/test-dev.html` - 测试源码
	* `test/test-dist.html` - 测试发布文件

***

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
