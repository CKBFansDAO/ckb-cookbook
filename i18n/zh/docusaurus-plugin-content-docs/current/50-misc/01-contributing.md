# 贡献指南

## 环境准备

1. 克隆

为了方便改进 CKB Cookbook, 首先需要 fork 到自己的账户下，然后 clone 文档的源码到本地。

```bash
git clone git@github.com:your-username/ckb-cookbook.git
cd ckb-cookbook
```

2. 安装

你的机器上需要预先安装好 Node.js 以及 yarn，安装方式请参看 [yarnpkg](https://yarnpkg.com/getting-started/install)。

然后在项目目录下运行下面的语句安装依赖：

```bash
$ yarn
```

3. 本地热加载开发

在项目目录下运行以下命令：

```bash
$ yarn start
```

这样子默认是启动英文版。如果想热加载其他语言版本，比如中文zh，可以

```bash
$ yarn start --locale zh
```

:::tip 提示
可选的 locales 标识在 `docusaurus.config.js` 中定义。
:::

此命令将自动打开浏览器并跳转到文档首页，当你编写或者修改文档时浏览器会自动刷新。

4. 完整构建文档并浏览

（1）运行以下命令进行完整构建，它同时会构建出多个语言的完整文档：

```bash
$ yarn build
```

（2）运行以下命令，将在本地启动一个 Web 服务：

```bash
$ yarn serve 
```

在浏览器中打开地址 `http://localhost:3000/`，就可以看到完整的文档。如果你指定了 `BASE_URL` 环境变量为 `/ckb-cookbook`，地址将是：`http://localhost:3000/ckb-cookbook`。

5. 提交 Pull Request

（1）创建分支

创建简洁而具有描述性的分支，在该分支上进行编辑修改。

（2）推送

将自己修改好的内容提交并推送到远程仓库，在 GitHub 的页面会看到相应的拉取请求（Pull Request）提示，提交请求即可。

## 文档规范

### 结构规范

1. 文档的目录名和文件名前面都有个数字前缀，比如 `01-build.md`，用来表示文档在左侧菜单中的顺序。
2. 文档目录以及文档名中间的多个词语用 `-` 连接。
3. 每个目录中的 `README.md` 表示该目录的首页。
4. 每个目录中的 `_category_.yaml` 为该目录的配置文件，其中的 `label` 属性表示该目录在左侧菜单中展示的标题。
5. 默认文档是英文，中文文档在 `i18n/zh/docusaurus-plugin-content-docs/current` 目录下，需要建立和英文文件同名的文件。

## 常见问题

1. 如何翻译目录

新增目录后，运行以下命令：

```bash
$ yarn write-translations --locale zh
```

你会发现文件 `i18n/zh/docusaurus-plugin-content-docs/current.json` 已经变更了，新的目录名项目已经增加，编辑该文件进行翻译即可。