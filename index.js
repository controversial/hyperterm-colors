const backgroundColor = '#414141'
const foregroundColor = '#ffffff'

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: '#ffffff',
    colors: [
      backgroundColor, // black (background color)
      '#dd6964', // red (normal)
      '#8ee386', // green (normal)
      '#ffd080', // yellow (normal)
      '#4eacff', // blue (normal)
      '#fa9aff', // magenta (normal)
      '#88afff', // cyan (normal)
      '#f1f1f0', // grey (normal)

      '#666666', // black (bright)
      '#f58783', // red (bright)
      '#aafba2', // green (bright)
      '#ffe89c', // yellow (bright)
      '#6ec5f9', // blue (bright)
      '#ffb2ff', // magenta (bright)
      '#b7f0ff', // cyan (bright)
      foregroundColor // white (foreground color)
    ],
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: rgb(51, 51, 51) !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
