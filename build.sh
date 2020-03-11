#!/bin/sh

ROOT_DIR=$PWD

for dir in *; do
  if [ -d $ROOT_DIR/$dir ] && [ -f $ROOT_DIR/$dir/package.json ] && [ -f $ROOT_DIR/$dir/webpack.config.js ]
  then
    echo $dir
    cd $ROOT_DIR/$dir
    npm run-script webpack
  fi
done