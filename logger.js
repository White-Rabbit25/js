class Logger{    
    log(text){
        console.log(text)
    }
}

class FileLogger{
    log(text){
        const fs = require("fs")
        fs.appendFileSync("log.txt", `\n${text}`)
    }
}

class MultiLogger{
    constructor(loggers){
        this.loggers = loggers
    }

    log (text){
        for(let i = 0; i < this.loggers.length; i++){
            this.loggers[i].log(text)
        }
    }
}


let lgrs = [new FileLogger(), new Logger()]
let newfile = new MultiLogger(lgrs)

newfile.log(' Hello 1')
newfile.log(' Hello 2')
newfile.log(' Hello 3')

