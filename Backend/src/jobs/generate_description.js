import ai from "../infra/gemini.js"

export default async function askGeminiForDescription(userPrompt, tour, city) {
  const prompt = `
Given the following:
Location = "${city}"
User request = "${userPrompt}"
Tour = "${tour}"

Write a natural, short description of the tour with an emphasis on the tour locations.
Use a light tone that matches the tour and adds a hint anticipation.
ONLY IF THE TOUR IS AN EMPTY LIST: Briefly explain directly to the user why their request wasn’t clear enough to generate a tour. Do not ask follow-up questions, simply state why it was too vague to generate a tour.
Ensure that you do not sound unnaturally excited or overly positive.
Respond in plain text, and do not include any formatting or any information besides the tour description.
`;

  const res = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    responseMimeType: "application/json",
  });

  return res.text;
}