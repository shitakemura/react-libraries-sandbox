## Tanstack query Todos

#### references

- https://tanstack.com/query/latest/docs/react/overview
- https://tkdodo.eu/blog/practical-react-query

#### setup

- npm create vite@latest
- npm install -D prettier eslint-config-prettier
- npm install -D eslint-plugin-react eslint-plugin-import
- npm install react-error-boundary

- npm install @tanstack/react-query
- npm install -D @tanstack/eslint-plugin-query
- npm install -D @types/node

- npm install -D msw msw-devtools
- npx msw init public/ --save
- npm install -D @mswjs/data
- npm install axios

- npm install react-hook-form
- npm install zod @hookform/resolvers

- npm install -D jest @types/jest ts-jest ts-node jest-environment-jsdom
- npm install -D @testing-library/jest-dom @testing-library/react @testing-library/user-event
- npm install -D eslint-plugin-testing-library eslint-plugin-jest-dom

- npm install -D @testing-library/react-hooks react-test-renderer --legacy-peer-deps

#### API

- https://github.com/mswjs/data#tohandlers
  - GET /todos
  - GET /todos/:id
  - POST /todos
  - PUT /todos/:id
  - DELETE /todos/:id

#### test

- https://tanstack.com/query/v4/docs/react/guides/testing
