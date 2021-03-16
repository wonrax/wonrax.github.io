const visit = require(`unist-util-visit`)
const remove = require(`unist-util-remove`)
const util = require("util")

function toFigure(url, alt) {
  return `<figure class="gatsby-resp-image-figure">
    <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: auto; margin-right: auto;">
      <a class="gatsby-resp-image-link" href="${url}" target="_blank" rel="noopener" style="display: block;">
        <img class="gatsby-resp-image-image" alt="${alt}" src="${url}" style="max-width: 600px;">
      </a>
    </span>
    ${
      alt
        ? `<figcaption class="gatsby-resp-image-figcaption">${alt}</figcaption>`
        : ""
    }
</figure>`
}

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `paragraph`, (node, index, parent) => {
    const hasOnlyImagesNodes = node.children.every(child => {
      // If image is from external link
      if (child.type === "image") {
        child["value"] = toFigure(child["url"], child["alt"])
        child["type"] = "html"
      }

      // If contains only image return true
      return (
        (child.type === "html" && child.url && child.alt) ||
        child.type === "image"
      )
    })

    if (!hasOnlyImagesNodes) {
      return
    }

    // Idk what this does
    remove(node, "text")

    // remove the paragraph node and replace it with its children
    parent.children.splice(index, 1, ...node.children)

    return index
  })
}
