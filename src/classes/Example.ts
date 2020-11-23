interface Provider {
  id: number;
  sendInfo(numberOfVisits: number): void; 
}

class Example implements Provider {
    public readonly id: number;
    private name: string;
    // protected name: string;
  
    constructor(id: number, name:string, public surname: string) {
      this.id = id;
      this.name = name;
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