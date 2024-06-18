"use server";

export default async function loginToTMDB(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  console.log(username, password);
}
