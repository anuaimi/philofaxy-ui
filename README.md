# Philofaxy UI

The source code for [https://philofaxy-ui.pages.dev](https://philofaxy-ui.pages.dev). The website is an easier way to view and select the various planner inserts available from [https://philofaxy.blogspot.com](https://philofaxy.blogspot.com).

The site allows you to print your own planner inserts in a variety of formats. There are inserts for the years 2023.

## Development

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Data Management

most of the data came from philofaxy.com which makes sense as this project is just a fancy UI for their planner inserts

To get the latest data, there is a script in the scripts subdirectory

```bash
tsc scripts/cleanup_lists.ts
node scripts/cleanup_lists.js
```
