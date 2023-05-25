module.exports = {
  petstore: {
    output: {
      mode: 'tags-split',
      target: 'src/api/petstore.ts',
      schemas: 'src/model',
      client: 'react-query',
      mock: true,
    },
    input: {
      target: './petstore.yaml',
    },
  },
}
