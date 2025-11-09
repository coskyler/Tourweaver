import ai from "../infra/gemini.js"

export default async function askGeminiForDescription(userPrompt, tour, city) {
  const prompt = `
Given the following:
Location = "${city}"
User request = "${userPrompt}"
Tour = "${tour}"

Write a short description of the tour with an emphasis on the tour locations.
Use a positive, energetic tone that matches the tour.
Respond in plain text, and do not include any other information besides the tour description.
`;

  const res = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    responseMimeType: "application/json",
  });

  return res.text;
}