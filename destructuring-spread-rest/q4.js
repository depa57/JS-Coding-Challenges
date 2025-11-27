 const defaultConfig = { dark: false, lang: "en" }
 const userConfig = { dark: true }

const mergedConfig = { ...defaultConfig, ...userConfig };
console.log(mergedConfig);