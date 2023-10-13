import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapMembersToVM = (data: am.CharacterEntity[]): vm.CharacterEntity[] =>
  data.map(mapMemberToVM);

const mapMemberToVM = (data: am.CharacterEntity): vm.CharacterEntity => ({
  id: data.results.id,
  name: data.results.name,
  image: data.results.image,
});
