class Add {
    private result;
    private answer;

    constructor(answer:number[], result:number){
        for(let i : number = 0; i < 10; i++){
            answer[i] = i+1;
        }
    }

    plus(){
        for(let i:number = 0; i < 10; i++){
            if(this.answer[i] != i)
                this.result += i;
        }
        return this.result;
    }
}

