const ARTICLES = {
  "otr": "On the Road: From the fixed gear fanatic's point of view",
  "bh": "Brand History: Pashley Cycles - hand-built in England",
  "fw": "Frame Wars: Innovations in cycle manufacture and repair",
  "sketchbook": "Touring Diary: A sketchbook in your basket",
  "newcomers": "Top Ten Newcomers for 2023: A peek at what's to come",
  "innertube": "InnerTube: The best cycling videos on the web",
  "rw": "Product review: All baskets were not created equal",
  "gp": "Going Public: Out & about with the founder of Public",
  "cld": "Cycle Lane Defence: Know your rights",
  "sptifire": "Bicycle Hall of Fame: The 1958 Schwinn Spitfire",
  "rs2023": "Reader Survey: Share your thoughts with us!",
  "bikegang": "Bicycle Gang: The Evolution of the humble bike chain"
}

const ARTICLE_ID = "id"
const HIDE_CLASS = "hide"

main()

function main() {
  const id = window.location.search
  const urlParams = new URLSearchParams(id)

  if (!urlParams.has(ARTICLE_ID)) {
    clearSite()
    return
  }

  let idValue = urlParams.get(ARTICLE_ID)
  let article = ARTICLES[idValue]

  if (article == null) {
    clearSite()
    return
  }

  let short = article.substring(0, article.indexOf(":"))

  document.title = `Bicycle News | ${short}`

  const pageTitle = document.getElementById("page-title")

  if (pageTitle != null) {
    pageTitle.textContent = article
  }

  setContentHidden(false)
}

function setContentHidden(hidden) {
  const content = document.getElementById("page-content")
  
  if (content == null) {
    return
  }

  if (hidden) {
    if (content.classList.contains(HIDE_CLASS)) {
      return
    }

    content.classList.add(HIDE_CLASS)
  } else {
    content.classList.remove(HIDE_CLASS)
  }
}

function clearSite() {
  document.title = "Bicycle News | 404"

  setContentHidden(true)

  const pageTitle = document.getElementById("page-title")
  if (pageTitle != null) {
    pageTitle.textContent = "404: Article Not Found"
  }
}
