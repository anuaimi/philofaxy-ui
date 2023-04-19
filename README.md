# Philofaxy UI

The source code for [https://philofaxy-ui.pages.dev](https://philofaxy-ui.pages.dev). The website is an easier way to view and select the various planner inserts available from [https://philofaxy.blogspot.com](https://philofaxy.blogspot.com).

The site allows you to print your own planner inserts in a variety of formats. There are inserts for the years 2023.

## Development

In the project directory, you can run the following command.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```bash
npm start
```

Note, the web page will reload if you make edits. You will also see any lint errors in the console.

To build the version of the site to deploy, run the following command

```bash
npm run build
```

The production version of the site will be in the `build` folder.

### Data

The original data came from [https://philofaxy.com](https://philofaxy.com).  If you need to download newer versions of the files, use the script below.

```bash
tsc scripts/cleanup_lists.ts
node scripts/cleanup_lists.js
```
