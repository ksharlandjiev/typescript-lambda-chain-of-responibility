#!/bin/sh
display_usage() { 
	echo "Usage: ./build.sh BUILD_ENV...\n" 
  echo "Custom script to test & build SAM template\n"
  echo "Build Environments: \n"
	echo "  prod   Build using production env" 
  echo "  dev    Build using dev env\n" 
} 
if [  $# -ne 1 ] 
then 
  display_usage
  exit 1
fi 

ROOT_DIR=$PWD

for dir in *; do
  if [ -d $ROOT_DIR/$dir ] && [ -f $ROOT_DIR/$dir/package.json ] && [ -f $ROOT_DIR/$dir/webpack.config.js ]
  then
    echo $dir
    cd $ROOT_DIR/$dir
    npm run-script webpack
  fi
done

cd $ROOT_DIR 
sam build -t template-$1.yaml