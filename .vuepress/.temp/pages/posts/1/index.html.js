export const data = JSON.parse("{\"key\":\"v-03d52fd3\",\"path\":\"/posts/1/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Post\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
