# Angular on the Desktop with Electron
* Electron API Demo for great examples of OS interop.   
  https://github.com/electron/electron-api-demos
* Not many options for integrating Angular with Electron.

## Toolkit
* Not totally solid yet; needs more work.
* Install `electron-angular-toolkit` into the project development dependencies.
* Run `electron-angular-toolkit prepare` to integrate electron with the Angular project.
   * Updates packages and creates **src/electron/electron.js** as the entry point.

## Processes
* **Renderer** process handles running the "web page" and **Main** process handles the "back end".
* Inter-process communication is through IPC.
   * Main process handles event requests for OS stuff from the renderer.
* Application lifecycle events can be handled in the main process.
