# Sample

> File templates for daily development.

## 简介

每次在 GitHub 新建一个前端小项目，都要做一些繁琐的重复劳动？那不如把重复工作的归纳成一个项目模板把，把常用文件的框架都写好，以后新建项目时直接复制出来填填改改就可以了。

已经写好的模板文件：

* `README.md` （稍复杂的项目可以选用 `README.full.md`）
* `.gitignore`
* `package.json`
* `bower.json`
* `.editorconfig`

## 兼容性

依赖以下类库：

* Underscore

支持以下浏览器：

* Chrome / Firefox / Safari 等现代浏览器
* IE 6+

## 安装

0. 通过 Bower 安装：

	```sh
	$ bower install {sample}
	```

0. 在页面中加载 {Sample} 的脚本文件及必要的依赖：

	```html
	<script src="bower_components/underscore/underscore.js"></script>
	<script src="bower_components/{sample}/dist/{sample}.js"></script>
	```

## API 文档

所有文档入口在 [Wiki 页面](https://github.com/cssmagic/{sample}/wiki)，快去看吧！

## 单元测试

0. 把本项目的代码 fork 并 clone 到本地。
0. 在本项目的根目录运行 `bower install`，安装必要的依赖。
0. 在浏览器中打开 `test/test.html` 即可运行单元测试。

## 谁在用？

以下网站采用 {Sample} 作为基础组件：

* [百姓网 - 手机版](http://m.baixing.com/)

***

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
