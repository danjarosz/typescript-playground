interface Provider {
  id: number;
  sendInfo(numberOfVisits: number): void; 
}

class Example implements Provider {
    public readonly id: number;
    private name: string;
    // protected name: string;
    public generic: Array<number> = [1, 2]
  
    constructor(id: number, name:string, public surname: string) {
      this.id = id;
      this.name = name;
      this.generic = [1, 2, 3, 4];
    }
  
    showId = () => {
      console.log(this.id)
    }
  
    changeId = ( newId: number ) => {
      // Niedozwolone, bo this.id jest readonly:
      // this.id = newId
    }

    sendInfo = (numberOfVisits: number) => {

    }
  }

  export default Example;