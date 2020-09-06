exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions
  
    if (page.path.match(/privacy/)) {
      page.context.layout = "privacy"
      createPage(page)
    }
}