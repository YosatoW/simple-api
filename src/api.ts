import { type Express, type Request, type Response } from 'express'

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

    app.get('/api/posts', (req: Request, res: Response) =>{
    res.send(posts)
})

app.post('/api/posts', (req: Request, res: Response) => {
    const newPost = req.body;
    newPost.id = posts[posts.length - 1].id + 1;
    posts.push(newPost);
    res.send(newPost);
})

app.put('/api/posts/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const updatedPost = req.body
    const existingPost = posts.find((post) => post.id === id)
    if (!existingPost) {
    res.status(404).send('Post not found')
    return
    }
    updatedPost.id = id
    posts = posts.map((post) => (post.id === id ? updatedPost : post))
    res.send(updatedPost)
    })

    app.delete('/api/posts/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id); 
    posts = posts.filter((post) => post.id !== id);
    res.send(posts);
})
}
