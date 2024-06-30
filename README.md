# vsce-markdown-it-linebreak

Adjust handling of line breaks in markdown preview html.

Code. Editor 

```md
梅雨時の空はcloudy
で、ra
inが降り続き、
日本のnatureは更に
greenになります。
```

Code. Markdown Preview. 

```HTML
<p>梅雨時の空はcloudyで、ra
inが降り続き、日本のnatureは更にgreenになります。</p>
```

Normally, line breaks within a p element are displayed as half-width spaces.
