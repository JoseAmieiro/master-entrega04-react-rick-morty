export interface CharacterEntityVM {
    id: number;
    name: string;
    status: string;
    type: string;
    gender: string;
    image: string;
  }
  
  export const createDefaultMemberDetail = (): CharacterEntityVM => ({
    id: 0,
    name: "",
    status:"",
    type: "",
    gender:"",
    image: "",
  });
  