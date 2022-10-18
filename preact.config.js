import path from 'path';
import { lstatSync, readdirSync } from 'fs';

export default (config, env, helpers) => {
  const enableAbsoluteImport = () => {
    const isDirectory = source => lstatSync(source).isDirectory();
    const getDirectories = source =>
      readdirSync(source)
        .map(name => path.join(source, name))
        .filter(isDirectory);

    getDirectories('src/').map(dir => {
      config.resolve.alias[dir.replace('src/', '')] = path.resolve(__dirname, dir);
    });
  };

  const enableDevServerProxy = () => {
    config.devServer.proxy = [
      {
        path: '/api',
        target: `http://localhost:${env.pkg.application.server.port}`,
      },
    ];
  };

  enableAbsoluteImport();

  if (env.dev) {
    enableDevServerProxy();
  }
};
