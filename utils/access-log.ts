export async function createAccess(formData: FormData): Promise<any> {
  const apiEndpoint = "/api/access_log";

  const moodClicked = formData.get("mood");
  const moodMessage = formData.get("message");

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify({
        access_time: new Date().toISOString(),
        moodClicked,
        moodMessage
      }),
    });
    const response = await res.json();
    return response.message;
  } catch (err) {
    console.log(err);
    throw err;
  }
}