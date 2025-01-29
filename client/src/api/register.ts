import * as z from "zod";
import axios from "axios";
import { RegisterSchema } from "../schemas/RegisterSchema";

const API_URL = "http://localhost:3003/api/v1/conf";

export const apiRegister = async (formData: z.infer<typeof RegisterSchema>) => {
  try {
    const res = await axios.post(API_URL, formData);
    return res.data;
  } catch (e: unknown) {
    console.log(e);
  }
  return "ok";
};
