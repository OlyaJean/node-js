const path = require('path');

console.log('Directory name:', path.dirname(__filename));

console.log('File name:', path.basename(__filename));

console.log('File extension:', path.extname(__filename));

const joinPath = path.join('/user','documents', 'node', 'projects')
//it will create and join a path /user/documents/node/projects

console.log('Joined path', joinPath)

const resoledPath = path.resolve('user', 'documents', 'node', 'projects');

console.log('Resoved path', resoledPath)

const normalizePath = path.normalize('/user/.documents/.../node/projects');

console.log("Normalized path", normalizePath)