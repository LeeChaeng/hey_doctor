import axios from "axios";

export const getHello = async () => {
  console.log("hi");
  const res = await axios.get("http://localhost:4000/getDT");
  console.log("his");
  return res;
};
