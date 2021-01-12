import express from 'express'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

const app = express()

app.get('/', (req, res) => {
  const html = renderToString(<App />)
  res.send(`
           <!DOCTYPE html>
           <html lang="en">
           <head>
             <meta charset="UTF-8"/>
             <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
             <title>Document</title>
           </head>
           <body>
           <div className="root">${html}</div>
           </body>
           </html>
           `)
})

app.listen(5000, () => console.log('Server runnin'))
