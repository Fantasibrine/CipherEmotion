export default async function handler(req, res) {

const HF_API_KEY = process.env.HF_API_KEY;

const response = await fetch(
"https://router.huggingface.co/hf-inference/models/j-hartmann/emotion-english-distilroberta-base",
{
method: "POST",
headers: {
Authorization: `Bearer ${HF_API_KEY}`,
"Content-Type": "application/json",
},
body: JSON.stringify(req.body),
}
);

const data = await response.json();

res.status(200).json(data);

}