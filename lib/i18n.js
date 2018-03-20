const path = require("path");
const i18n = require("i18n");
const config = require("./config");

const i18nConfig = config.i18n.toJS();
i18nConfig.directory = path.normalize(`${config.getRoot()}/${i18nConfig.directory}`);
i18nConfig.locales = i18nConfig.locales.filter(locale => locale.available).map(locale => locale.code); // for locales option we need only codes
i18n.configure(i18nConfig);

module.exports = i18n;
