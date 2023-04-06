---
to: packages/<%= folder %>/babel.config.js
---
module.exports ={
    "presets": [
      [
        "@babel/preset-env",
      ],
    ],
    "plugins": [
      [
        "component",
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]
    ]
}