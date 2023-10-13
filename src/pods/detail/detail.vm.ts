export interface CharacterEntityVM {
    id: string;
    name: string;
    status: string;
    type: string;
    gender: string;
    image: string;
  }
  
  export const createDefaultMemberDetail = (): CharacterEntityVM => ({
    id: "",
    name: "",
    status:"",
    type: "",
    gender:"",
    image: "",
  });
  