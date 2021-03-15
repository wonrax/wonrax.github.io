const visit = require(`unist-util-visit`)
const remove = require(`unist-util-remove`)

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `paragraph`, (node, index, parent) => {
    const hasOnlyImagesNodes = node.children.every(child => {
      return child.type === "html" && child.url && child.alt
    })

    if (!hasOnlyImagesNodes) {
      return
    }

    remove(node, "text")
    console.log(parent.children)
    parent.children.splice(index, 1, ...node.children)
    console.log(parent.children)

    return index
  })
}
