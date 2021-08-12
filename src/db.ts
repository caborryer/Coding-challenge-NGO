import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

type HumanitarianAid = {
  year: string;
  ngo: string;
  aid: string;
};

type Schema = {
  humanitarianAid: HumanitarianAid[];
};

let db: lowdb.LowdbSync<Schema>;

export const createConnection = async () => {
  const adapter = new FileSync<Schema>("db.json");
  db = lowdb(adapter);
  db.defaults({ HumanitarianAid: [] }).write();
};

export const getConnection = () => db;