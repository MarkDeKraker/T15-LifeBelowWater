import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatOpenAI({
    // model: "gpt-3.5-turbo-instruct", // Defaults to "gpt-3.5-turbo-instruct" if no model provided.
    // temperature: 0.9,
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
    azureOpenAIApiVersion: process.env.OPENAI_API_VERSION,
    azureOpenAIApiInstanceName: process.env.INSTANCE_NAME,
    azureOpenAIApiDeploymentName: process.env.ENGINE_NAME,
});

async function generateResponse() {
    try {
        // const { query } = req.body;

        // console.log(query);

        const system = "Je bent een basisschool docent voor groep 7 en 8. Verwoord je antwoorden op een manier dat het begrijpelijk is voor kinderen van 10 tot 12 jaar oud.";

        const engineeredPrompt = `{ Kun je mij een quizvraag geven over plasticvervuiling in oceaan? Een vraag heeft drie foute antwoorded en één goed antwoord. Geef het antwoord in het volgende JSON formaat en wijk er niet van af. NO YAPPING:
                {
                    "answers": {
                        "A": {
                            "answer": "",
                            "isCorrect": 
                        },
                        "B": {
                            "answer": "",
                            "isCorrect": 
                        },
                        "C": {
                            "answer": "",
                            "isCorrect": 
                        },
                        "D": {
                            "answer": "",
                            "isCorrect": 
                        }
                    },
                    "question": "",
                },
            }`;

        const res = await model.invoke([
            ["system", system],
            ["user", engineeredPrompt]
        ]);

        const jsonResponse = extractJSON(res.content);
        // console.log(res.content);
        console.log(jsonResponse);
    } catch (error) {
        console.error("Error invoking the model:", error);
    }
}

function extractJSON(response) {
    const jsonStart = response.indexOf("{");
    const jsonEnd = response.lastIndexOf("}") + 1;

    if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error("No valid JSON found in response");
    }

    const jsonString = response.slice(jsonStart, jsonEnd);

    try {
        const jsonObject = JSON.parse(jsonString);
        return jsonObject;
    } catch (error) {
        throw new Error("Failed to parse JSON: " + error.message);
    }
}

generateResponse();