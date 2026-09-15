import path from 'path';
import express from 'express';
import { todos } from './todos';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/todos/:id/toggle', (req, res) => {
  const todo = todos.find((item) => item.id === Number(req.params.id));

  if (!todo) {
    res.sendStatus(404);
    return;
  }

  todo.done = !todo.done;
  res.redirect('/');
});

app.get('/', (_req, res) => {
  res.render('index', { todos });
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`ToDo app listening on port ${port}`);
});
