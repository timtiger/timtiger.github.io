import{o as a,c as s,d as n}from"./app.198084fd.js";const t='{"title":"认识CSS","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是CSS","slug":"什么是css"},{"level":2,"title":"使用一下CSS","slug":"使用一下css"},{"level":2,"title":"它的语法","slug":"它的语法"},{"level":2,"title":"CSS如何工作","slug":"css如何工作"}],"relativePath":"articles/stylesheet/css.md","lastUpdated":1634868510227}',p={},e=n('<h1 id="认识css"><a class="header-anchor" href="#认识css" aria-hidden="true">#</a> 认识CSS</h1><p>学习CSS之前一定要先学一下html,不然你一脸懵逼。</p><h2 id="什么是css"><a class="header-anchor" href="#什么是css" aria-hidden="true">#</a> 什么是CSS</h2><ol><li>css是一种设置文档样式和布局的语言，可以设置文档字体大小、颜色、间距等等。和HTML,JavaScript 并称为Web三大核心技术。</li><li>它的标准制定有一个专门的组织<a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">CSS Working Group</a>负责。</li><li>你能在<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" target="_blank" rel="noopener noreferrer">CSS reference</a>找到所有CSS可用的属性。</li><li>浏览器会内置一些样式，以便让不同的元素默认就有不同的样式，比如h1字体更大，p有上下边距，button有边框等等。所以即便你不写任何CSS样式，html文档在浏览器中打开时也还是能阅读的。</li></ol><h2 id="使用一下css"><a class="header-anchor" href="#使用一下css" aria-hidden="true">#</a> 使用一下CSS</h2><p>先创建个html文件 index.html</p><div class="language-html"><pre><code>  <span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token name">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Getting started with CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>link</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>I am a level one heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is a paragraph of text. In the text is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>span element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n    and also a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://example.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is the second paragraph. It contains an <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>emphasized<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span> element.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Item <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Item two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Item <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>同目录下创建一个styles.css文件</p><div class="language-css"><pre><code>  <span class="token selector">h1</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre></div><p>在index.html中使用link元素将styles.css链接进来。</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>link</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>浏览器打开index.html 你就能看到h1元素的文字显示成红色了。</p><h2 id="它的语法"><a class="header-anchor" href="#它的语法" aria-hidden="true">#</a> 它的语法</h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Syntax" target="_blank" rel="noopener noreferrer">MDN讲的很清晰</a></p><h2 id="css如何工作"><a class="header-anchor" href="#css如何工作" aria-hidden="true">#</a> CSS如何工作</h2>',15);p.render=function(n,t,p,o,c,l){return a(),s("div",null,[e])};export default p;export{t as __pageData};
