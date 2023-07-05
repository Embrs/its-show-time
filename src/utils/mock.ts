export const MockStr = (length: number):string => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const MockNum = (length: number):number => {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return Number(result);
};

const nameList: string[] = ["Liam","Emma","Noah","Olivia","Sophia","William","Ava","Isabella","Mia","James","Benjamin","Charlotte","Mason","Amelia","Harper","Evelyn","Elijah","Abigail","Aiden","Emily","Ella","Henry","Elizabeth","Alexander","Sofia","Sebastian","Avery","David","Scarlett","Carter","Grace","Joseph","Victoria","Michael","Madison","Jackson","Luna","Daniel","Chloe","Owen","Penelope","Wyatt","Layla","Matthew","Riley","Samuel","Zoey","Gabriel","Nora","Jack","Lily","Luke","Eleanor","Levi","Hannah","Isaac","Lillian","Oliver","Addison","Jayden","Aubrey","Oscar","Stella","Muhammad","Zoe","Leo","Leah","Julian","Hazel","Aurora","Caleb","Savannah","Lucy","Paisley","Nathan","Brooklyn","Aaron","Audrey","Jeremiah","Claire","Adrian","Skylar","Colton","Bella","Adam","Violet","Eli","Aria","Ezra","Scarlet","Xavier","Natalie","Elias","Kennedy","Hudson","Lucia","Asher","Genevieve","Leighton","Ruby"];
export const MockName = ():string => {
  const index = Math.floor((Math.random()*nameList.length));
  return nameList[index];
};

export const MockeEmail = ():string => {
  return `${MockStr(8)}@${MockStr(6)}.com`;
};

const gnerderList: string[] = ["男","女"];
export const MockeGender = ():string => {
  const index = Math.floor((Math.random()*gnerderList.length));
  return gnerderList[index];
};

export const MockPhone = ():string => {
  return `09${`${MockNum(2)}`.padEnd(2, "0")}-${`${MockNum(6)}`.padEnd(6, "0")}`;
};
