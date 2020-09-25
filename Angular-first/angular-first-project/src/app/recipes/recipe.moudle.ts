export class Recipe{
    public name:string;
    public description:string;
    public imagPath:string;
  
    constructor(name:string,desc:string,imagPath:string){
        this.name = name;
        this.description =desc;
        this.imagPath =imagPath;
    }
  }