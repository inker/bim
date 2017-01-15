#!/bin/bash

npm update
npm run build

VERSION=$(node ./increment-version)

git add .
git commit -m "v$VERSION"
git tag v$VERSION -f
git push --tags -f

npm publish
