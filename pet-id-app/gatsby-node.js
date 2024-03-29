// eslint-disable-next-line no-undef
exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*"
    actions.createPage(page)
  }

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    actions.createPage(page)
  }
}
