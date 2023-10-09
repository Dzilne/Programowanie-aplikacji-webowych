import * as stream from 'stream'
import * as fs from 'fs'

async function * generatorRandomNumerkuf (){
    for(let y = 0; y<20 ; y++){
        let x = Math.floor((Math.random() * 2137) - 420);
        yield x
    }
}

const readable = stream.Readable.from(generatorRandomNumerkuf())

const file = fs.createWriteStream(`random-${Date.now()}.txt`)

readable.on('data', (chunk) =>{
    file.write(chunk.toString()+'\n')
})


