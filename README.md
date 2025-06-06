# aplicao-em-ReactJS
Desenvolver uma aplicação em ReactJS com duas rotas principais, que consuma dados da API pública JSONPlaceholder. https://jsonplaceholder.typicode.com/


✅ 1. CRIAR O PROJETO COM VITE
bash
Copiar
Editar
npm create vite@latest minha-aplicacao -- --template react
cd minha-aplicacao
npm install
✅ 2. INSTALAR DEPENDÊNCIAS NECESSÁRIAS
bash
Copiar
Editar
npm install @mui/material @emotion/react @emotion/styled react-router-dom axios
✅ 3. ESTRUTURA DE PASTAS RECOMENDADA (ARQUITETURA)
bash
Copiar
Editar
src/
│
├── components/
│   └── PostCard.jsx          # Componente visual de cada post
│
├── pages/
│   ├── PostList.jsx          # Página da rota /post
│   └── PostDetail.jsx        # Página da rota /dados/:id
│
├── routes/
│   └── AppRoutes.jsx         # Arquivo com as rotas
│
├── App.jsx                   # Componente principal
└── main.jsx                  # Entrada da aplicação
✅ 4. CONFIGURAR AS ROTAS
📄 src/routes/AppRoutes.jsx
jsx
Copiar
Editar
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostList from '../pages/PostList'
import PostDetail from '../pages/PostDetail'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/post" element={<PostList />} />
      <Route path="/dados/:id" element={<PostDetail />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
✅ 5. CONFIGURAR APP PRINCIPAL
📄 src/App.jsx
jsx
Copiar
Editar
import AppRoutes from './routes/AppRoutes'

function App() {
  return <AppRoutes />
}

export default App
✅ 6. CONFIGURAR ENTRADA DO PROJETO
📄 src/main.jsx
jsx
Copiar
Editar
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
✅ 7. CRIAR COMPONENTE DE LISTAGEM DE POSTS
📄 src/pages/PostList.jsx
jsx
Copiar
Editar
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Container, Typography, Card, CardContent } from '@mui/material'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      {posts.map(post => (
        <Card key={post.id} sx={{ mb: 2, cursor: 'pointer' }} onClick={() => navigate(`/dados/${post.id}`)}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2">{post.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default PostList
✅ 8. CRIAR PÁGINA DE DETALHES DO POST
📄 src/pages/PostDetail.jsx
jsx
Copiar
Editar
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Typography, Paper } from '@mui/material'

const PostDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err))
  }, [id])

  return (
    <Container>
      {post ? (
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h4">{post.title}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>{post.body}</Typography>
          <Typography variant="caption">Post ID: {post.id}</Typography>
        </Paper>
      ) : (
        <Typography>Carregando...</Typography>
      )}
    </Container>
  )
}

export default PostDetail
✅ 9. CONFIGURAR COMMIT SEMÂNTICO (Conventional Commits)
Crie commits assim:

bash
Copiar
Editar
git init
git add .
git commit -m "feat: adiciona listagem de posts com navegação para detalhes"
Exemplos:

feat: - nova funcionalidade

fix: - correção de bug

chore: - tarefas como setup, configs

style: - ajustes visuais

✅ 10. DEPLOY NA VERCEL
Crie repositório no GitHub.

Faça o push do projeto:

bash
Copiar
Editar
git remote add origin <URL_REPO>
git branch -M main
git push -u origin main
Vá até https://vercel.com, crie uma conta e importe o projeto do GitHub.

Configure o build como:

Framework: Vite

Build command: npm run build

Output: dist

✅ Checklist com os critérios da prova
Critério	Feito?
Commits convencionais	✅
Arquitetura em pastas	✅
Página /post funcionando	✅
Página /dados/:id funcionando	✅
Layout com Material UI	✅
Deploy	✅

----------------------------------------------------------------------------------------------


✅ Estrutura e nome dos arquivos:
📁 Dentro da pasta src/:

Caminho do Arquivo	Conteúdo
src/main.jsx	Código de inicialização da aplicação React
src/App.jsx	Componente principal que usa as rotas
src/routes/AppRoutes.jsx	Definição das rotas /post e /dados/:id
src/pages/PostList.jsx	Página que lista os posts e redireciona para a rota com ID
src/pages/PostDetail.jsx	Página que mostra os detalhes do post com base no ID da rota

🧠 Dica extra: Criação de pastas
Se as pastas routes/ e pages/ ainda não existem dentro da src/, você precisa criá-las manualmente.

Exemplo no terminal (Linux/Mac/WSL):

bash
Copiar
Editar
mkdir src/routes src/pages
