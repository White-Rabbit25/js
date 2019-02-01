class Stopwatch{
    constructor(){
        this.startedAt = null
        this.stoppedAt = null
    }
    start(){
        this.startedAt = new Date()
    }
    stop(){
        this.stoppedAt = new Date()
    }
    elapsed(){
        let elapsed = this.stoppedAt - this.startedAt
        return elapsed
    }
}


let sw = new Stopwatch()
sw.start()

console.log(`Hello Alex`)
console.log(`Hello Yanina!!`)

sw.stop()
console.log(sw.elapsed());

