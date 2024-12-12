import { type Express, type Request, type Response } from 'express'
import {db} from './database'
import {postsTable} from './db/schema'
import {eq} from 'drizzle-orm'


export const initializeAPI = (app: Express) => {
  let posts = [{ id: 1, content: 'I feel like' }]

// Auswahlfeld oder Menü auf der Root-Seite
app.get('/', (req: Request, res: Response) => {
    res.send(`
        <html>
            <body>
                <h1>Welcome to the Localhost!</h1>
                <form id="navigation-API">
                    <label for="navigation">Choose where to go:</label>
                    <select id="navigation" name="navigation">
                        <option value="posts">Posts</option>
                        <option value="comments">Comments</option>
                        <option value="profile">Profile</option>
                    </select>
                    <button type="submit">Go</button>
                </form>

                <script>
                    document.getElementById('navigation-API').addEventListener('submit', (e) => {
                        e.preventDefault();
                        const selection = document.getElementById('navigation').value;
                        window.location.href = '/api/' + selection;
                    });
                </script>
                <br/>
                <a href="/api/posts">Go to Posts</a>
            </body>
        </html>
    `);
});

app.get('/api/posts', async (req: Request, res: Response) => {
    const posts = await db.select().from(postsTable)
    res.send(posts)
})

app.post('/api/posts', async (req: Request, res: Response) => {
    const newPost = await
    db.insert(postsTable).values(req.body).returning()
    res.send(newPost[0])
})

app.put('/api/posts/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const updatedPost = await
    db.update(postsTable).set(req.body).where(eq(postsTable.id,
    id)).returning()
    res.send(updatedPost[0])
})

app.delete('/api/posts/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    db.delete(postsTable).where(eq(postsTable.id, id)).execute()
    res.send({ id })
})

}
