## v0.0.5

- 作品模板文件(work.ejs)改为script内嵌的方式，取消之前的前端ajax获取的方式
- 采用grunt进行合并压缩,成功build之后会生成"show-built"布署目录
- 取消在heroku上运行bower install的的布署方式，改为本地生成后独立仓库(show-built)上传，节省服务器空间

## v0.0.4

- 头部导航调整为蓝色风格
- 首页banner区改为嵌入一个html5游戏

## v0.0.3

- 头部brand区域显示为版本号信息
- 头部增加GitHub链接

## v0.0.2

- 删除原来的文件存储文件，改用mongodb存储数据
- 采用moongose.js驱动
- 优化原来的MVC架构，增加api路由
- 作品展示采用“首屏服务器端渲染，前台滚动异步加载更多”的展现方式
- 作品提交增加邀请码验证