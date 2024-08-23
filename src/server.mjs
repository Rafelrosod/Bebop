// server.mjs é responsável apenas por iniciar o servidor

import app from './app.mjs'

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
