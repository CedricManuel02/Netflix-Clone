"use server";

import axios from "axios";

export default async function loginToTMDB(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const response = await axios.post(
    "https://api.themoviedb.org/3/authentication/token/validate_with_login",
    { data: { username: username, password: password } }
  );
  

}
