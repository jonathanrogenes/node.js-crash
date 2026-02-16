// import fs from 'fs'
import { write } from 'fs';
import fs from 'fs/promises'

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data)

// readFile() - Promise version .then()
// fs.readFile('./test.txt', 'utf8')
// .then((data) => console.log(data))
// .catch((err) => console.log(data))

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
};

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello im writing to the file')
    console.log('File written to...')
  } catch (error) {

  }
}

writeFile()
readFile()
