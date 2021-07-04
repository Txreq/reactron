install dependencies with:
`yarn install` or `npm install`
then edit it and make somthing awsome,
you can run it using `yarn run dev` or `npm run dev`

#### packaging ?
You can use `npm run package` or `yarn run package`
But for me, I like using the 
`electron-packager` CLI tool, and there is my config
`electron-packager . --asar --ignore=config.ini <process name> --platform=win32 --icon=<icon path> --out=release-builds --version-string.CompanyName=CE --version string.FileDescription=CE --version-string.ProductName="<product name>" --overwrite `
