# GhibliAI - 吉卜力风格图像生成器 (Ghibli Style Image Generator)

GhibliAI是一个基于AI的图像生成工具，能够将文本描述或上传图像转换成美丽的吉卜力工作室风格的艺术作品。

## 项目概述

GhibliAI利用先进的人工智能技术，让用户轻松创建具有吉卜力工作室独特艺术风格的图像。不需要艺术技能，只需输入文本描述或上传图片，即可获得梦幻般的吉卜力风格艺术作品。

### 功能特点

- **吉卜力风格转换**：将任何图像或文本提示转换为吉卜力动画的独特风格
- **可定制设置**：调整光线、调色板、场景构图和角色设计等参数
- **即时生成**：几秒钟内生成精美的吉卜力风格作品
- **高分辨率导出**：下载高分辨率作品用于打印、分享或创意项目
- **艺术变体**：探索不同的艺术变化和风格
- **云存储**：保存喜欢的作品到个人画廊，随时随地访问

### 技术栈

- HTML5, CSS3, JavaScript
- Tailwind CSS
- 响应式设计，适配移动和PC浏览器
- 集成HuggingFace Spaces模型

## 快速开始

1. 克隆仓库：
```bash
git clone https://github.com/niemingxing/ghiblistyleimagegenerator.git
cd ghiblistyleimagegenerator
```

2. 使用本地服务器打开项目：
```bash
# 如果安装了python
python -m http.server 8000
# 或使用npm的serve包
npx serve
```

3. 在浏览器中访问：`http://localhost:8000`或服务器指定的URL

## 使用指南

1. **输入提示**：描述想要创建的场景或上传图像
2. **自定义设置**：调整风格参数以匹配您的想法和偏好
3. **生成并下载**：点击生成按钮，等待AI创建您的吉卜力风格作品，然后下载

## 项目结构

```
/
├── index.html           # 主页
├── generate.html        # 图像生成页面
├── privacy.html         # 隐私政策
├── terms.html           # 服务条款
├── css/
│   └── styles.css       # 自定义样式
├── js/
│   └── main.js          # JavaScript功能
└── images/              # 图像资源
    ├── favicon.ico
    ├── favicon.svg
    ├── ghibli-pattern.svg
    └── logo.svg
```

## 许可证信息

- 所有使用本服务生成的图像仅授权用于个人、非商业用途
- 有关详细信息，请查阅我们的[服务条款](terms.html)

## 联系方式

如有任何问题或建议，请联系：
- 邮件：niemingxing1988@gmail.com

## 隐私安全

我们重视您的隐私。上传的图像和文本提示将被安全处理，不会与第三方共享。详情请查看我们的[隐私政策](privacy.html)。
