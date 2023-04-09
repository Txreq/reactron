![REACTRON_BANNER](https://i.ibb.co/kKDWMCZ/Frame-16.png)

# reactron

`reactron` is a project template that leverages [Electron Forge](https://www.electronforge.io/), a powerful framework for building desktop applications using web technologies. It also integrates [TailwindCSS](https://tailwindcss.com/), a popular CSS utility library that simplifies styling, and [TypeScript](https://www.typescriptlang.org/), a superset of JavaScript that adds type annotations and other features for enhanced developer productivity and code quality. With these tools, `reactron` enables developers to quickly spin up a modern, well-designed desktop application.

### Commands

- ### `start`

The `start` script is used to start the Electron application using the `electron-forge start` command. When you run `yarn start`, Electron Forge will start the application in development mode, which allows you to see any changes you make to your code in real-time. This is particularly useful during development, as it allows you to quickly iterate and test your code.

- ### `package`

The `package` script is used to package the Electron application for distribution using the `electron-forge package` command. When you run `npm run package`, Electron Forge will create a distributable package for your application, which can then be installed and run on other machines.

- ### `make`

The `make` script is used to create distributable installers for the Electron application using the `electron-forge make` command. When you run `yarn make`, Electron Forge will create installers for your application that can be distributed to users. These installers can be customized to suit your needs, such as including branding or setting up default options.

- ### `publish`

The `publish` script is used to publish the packaged Electron application to a distribution channel using the `electron-forge publish` command. When you run `yarn publish`, Electron Forge will publish your packaged application to a distribution channel, such as GitHub Releases or npm. This makes it easy for users to download and install your application.

### File Structure

- ### `./configs`
  a directory in a project that contains all the configuration files required for the project's build process, particularly the webpack configuration files. These files provide the necessary instructions and settings for webpack to bundle the project's assets and prepare them for deployment. Having a dedicated folder for configuration files helps maintain a clear separation of concerns and makes it easier to manage and update these files.
- ### `./core`
  contains the primary Electron process files, including the `index.ts` file, which is the entry point for the main process. It also includes the `renderer.tsx` and `preload.ts` file.
- ### `./public`

  holds the static assets that will be served alongside the React application such as images or JSON static data.
  When you want to use an image that is stored in the `public` folder, in your React component, you can reference the image using its file name and path relative to the `public` folder. For example, if you have an image named `kys.png` in a subfolder called `images` in the `public` directory, you would reference it like this:

  ```tsx
  <img src={"public/images/kys.png"} />
  ```

- ### `./src`
  directory that holds the source code of the React web interface of your application. This folder contains the main entry point of the application, typically named `main.tsx`.
