// eslint-disable-next-line no-global-assign
require = require('esm')(module /*, options*/);
const bodyParser = require('body-parser');

const { ensureStorageDir } = require('./utils');
const {
  APP_DEVELOPMENT_BASENAME,
  DASHBOARD_BASENAME,
} = require('../../../packages/shared/src/constants');
const {
  datamodelGetPath,
  datamodelPath,
  userCurrentPath,
  datamodelsPath,
  createDatamodelPath,
  remainingSessionTimePath,
  repoInitialCommitPath,
  frontendLangPath,
  repoMetaPath,
  serviceConfigPath,
  serviceNamePath,
} = require('../../../packages/shared/src/api-paths');
const devServerConfig = require('../config.json');

module.exports = (middlewares, devServer) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined');
  }
  const { app } = devServer;
  ensureStorageDir();
  app.use(bodyParser.json());

  const startUrl = {
    dashboard: DASHBOARD_BASENAME,
    'app-development': `${APP_DEVELOPMENT_BASENAME}/someorg/someapp`,
    'app-preview': '/preview/someorg/someapp',
  }[process.env.npm_package_name];

  app.delete(datamodelPath(':owner', ':repo'), require('./routes/del-datamodel'));
  app.get('/', (req, res) => res.redirect(startUrl));
  app.get('/designer/:owner/:repo', require('./routes/get-index-html'));
  //prettier-ignore
  app.get(datamodelGetPath(':owner', ':repo', '/App/models/:filename'), require('./routes/get-datamodel'));
  app.get(datamodelsPath(':owner', ':repo'), require('./routes/get-datamodels'));
  //prettier-ignore
  app.get(frontendLangPath(':locale'), (req, res) => res.json(require(`../../../language/src/${req.params.locale}.json`)));
  app.get(remainingSessionTimePath(), (req, res) => res.send('9999'));
  app.get(repoInitialCommitPath(':owner', ':repo'), (req, res) => res.sendStatus(204));
  app.get(repoMetaPath(':owner', ':repo'), require('./routes/get-repo-data'));
  app.get(serviceConfigPath(':owner', ':repo'), (req, res) => res.sendStatus(204));
  //prettier-ignore
  app.get(serviceNamePath(':owner', ':repo'), (req, res) => res.send(req.params.repo.toUpperCase()));
  app.get(userCurrentPath(), require('./routes/user-current'));
  app.post(createDatamodelPath(':owner', ':repo'), require('./routes/create-model'));
  app.put(datamodelsPath(':owner', ':repo'), require('./routes/put-datamodel'));

  app.get('/designer/api/:org/:app/preview-status', require('./routes/preview-get'));
  return middlewares;
};
