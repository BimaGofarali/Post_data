import { POST_DATA_BEGIN } from "./type";

export const postData = (
  firstname,
  lastname,
  alamat,
  pendidikan,
  pengalamankerja,
  keahlian
) => {
  return {
    type: POST_DATA_BEGIN,
    firstname,
    lastname,
    alamat,
    pendidikan,
    pengalamankerja,
    keahlian,
  };
};
