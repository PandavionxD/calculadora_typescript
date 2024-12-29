
interface runOptions {
    base:number,
    limit:number,
    showTable:boolean
}

export  class ServerApp {
    static run(options : runOptions){
        console.log("server run!!!")
        console.log({options})
    }

}