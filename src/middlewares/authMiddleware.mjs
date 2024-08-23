/*
Middleware é uma maneira poderosa e flexível de adicionar funcionalidades, como autenticação, logging, 
tratamento de erros e processamento de dados em um aplicativo web. Eles ajudam a manter o código modular e organizado,
 permitindo que diferentes aspectos do processamento da solicitação sejam separados e gerenciados de forma independente.
*/
function authMiddleware(req, res, next) {
    // Lógica de autenticação
    if (req.isAuthenticated()) {
        return next(); // Usuário autenticado, prossegue para a próxima rota
    }
    res.status(401).send('Não autorizado'); // Usuário não autenticado
}

export default authMiddleware;
