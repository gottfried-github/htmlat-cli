# htmlat CLI using `htmlat-nodejs`
## Install
### Global
`npm i -g htmlat-cli`
### Local
`npm i htmlat-cli`

## Usage
### Global
Syntax:

`htmlat <input pathname> <output pathname> [--wrap] [--raw]`

Example. From a project folder:

`htmlat src/my-blogpost.semtext dist/my-blogpost.html --wrap`

## `--wrap` option
Whether to wrap the resulting html in an html document (i.e., `<!DOCTYPE html><html><body>your content here</body></html>`).
