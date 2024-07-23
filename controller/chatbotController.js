const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');

dotenv.config();
let apikey = process.env.GEMINI_API_KEY;
if (!apikey) {
    console.error("GEMINI_API_KEY is not set");
    process.exit(1);
}

apikey = apikey.replace(/^lights-|(?<=.)(?=-funbug$)|-funbug$/g, ''); 
const genAI = new GoogleGenerativeAI(apikey);

const systemMessage = {
    role: "system",
    content: "Bạn là một con cá voi đáng yêu thân thiện sẽ hỗ trợ tôi, nói ngắn gọn, hành động vui nhộn, lắng nghe và có ý kiến về chủ đề. Và tên của bạn bây giờ sẽ là Light's và được tạo ra và phát triển bởi tập đoàn Fun Bug"
};

let messages = [
    {
        message: "Xin chào, bạn có thể giúp tôi với một số thông tin không?",
        sender: "user"
    },
    {
        message: "Bạn là một con cá voi đáng yêu thân thiện sẽ hỗ trợ tôi, nói ngắn gọn, hành động vui nhộn, lắng nghe và có ý kiến về chủ đề. Và tên của bạn bây giờ sẽ là Light's và được tạo ra và phát triển bởi tập đoàn Fun Bug",
        sender: "bot"
    }
];

module.exports = {
    Chatbot: async (req, res) => {
        let userMessage = req.body.message;
        messages.push({
            message: userMessage,
            sender: "user"
        });

        try {
            // Map the messages to the format required by the Gemini API
            let apiMessages = messages.map((messageObject) => {
                let role = messageObject.sender === "bot" ? "model" : "user";
                return { role: role, content: messageObject.message };
            });

            // Start a chat session
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const chat = model.startChat({
                systemMessage: { text: systemMessage.content },
                history: apiMessages.map((msg) => ({
                    role: msg.role,
                    parts: [{ text: msg.content }],
                })),
                generationConfig: {
                    maxOutputTokens: 100,
                },
            });

            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            const text = response.text();
            
            if (text) {
                messages.push({
                    message: text,
                    sender: "bot"
                });
                res.status(200).json({ response: text });
            } else {
                res.status(200).json({ response: "Không thể phản hồi" });
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ response: error.message });
        }
    }
};
