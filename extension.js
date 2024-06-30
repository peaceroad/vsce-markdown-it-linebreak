const linebreak = require('@sup39/markdown-it-cjk-breaks')

async function activate (context) {
  return {
    extendMarkdownIt(md) {
      md.use(linebreak, {
        either: true,
      })
      return md
    }
  }
}

exports.activate = activate