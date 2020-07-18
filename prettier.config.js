module.exports = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.ts.ejs',
      options: {
        parser: 'typescript',
      },
    },
  ],
}
