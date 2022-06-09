export default {
  projectName: '', // 要构建的项目名称
  dependenciesWorkspace: 'BUILD_CLI_WORKSPACE', // 依赖项目的工作区，即：存放目录，BUILD_CLI_WORKSPACE 为node的环境变量，如果其不存在，则默认在 homedir
  dependencies: [], // 其他依赖的项目配置
  buildCommand: {
    test: 'npm run build:test',
    staging: 'npm run build:prod'
  }
}
