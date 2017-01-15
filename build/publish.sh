#!/bin/bash

npm update

VERSION=$(node --eval "console.log(require('./package.json').version);")

npm run build

git add .
git commit -m "v$VERSION"
git tag v$VERSION -f
git push --tags -f

npm publish
