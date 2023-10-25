import { CharacterEntity }  from "./api/api.model";
import { CharacterEntityVM } from "./detail.vm";

export const mapMemberToVM = (data: CharacterEntity): CharacterEntityVM => {
  return({
  id: data.id,
  name: data.name,
  status: data.status,
  type: data.type,
  gender: data.gender,
  image: data.image,
})};