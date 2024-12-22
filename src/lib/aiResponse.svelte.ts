import {promiseFor} from 'promise-for-wrapper'

interface ResponseSchema{
    status:string
    message:{
        sentiment:"Good" | "Bad" | "Great"
        title:string
        tags: string[]
    }

}

export class AiResponse {
    private readonly _data: Partial<ResponseSchema>[]  = $state([]);
    private _journalText: string = $state("");
    private isLoading:boolean=  $state(false);
    private _error: unknown = $state(null);


    constructor() {
        localStorage.getItem("journal") && (this._data = JSON.parse(localStorage.getItem("journal")!))
    }

    async addJournal() {
        this.isLoading = true;

        const[data,error] = await promiseFor<Response,ResponseSchema>(fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userInput: this._journalText })
        }),
            async (response) => response.json()

        ).finally(() => {this.isLoading = false})

        if(data !== null){
             const {status,...rest}  = data
             this._data.push(rest);
            localStorage.setItem("journal", JSON.stringify(this._data));
            return
        }
        this._error = error;
    }

    deleteJournal(index:number){
        this._data.splice(index,1)
        localStorage.setItem("journal", JSON.stringify(this._data));
    }




    get loading(){
        return this.isLoading
    }

    get data(){
        return this._data
    }
    get error(){
        return this._error
    }
    set journalText(value: string){
        this._journalText = value;
    }
}