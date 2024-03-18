import express from 'express';
import * as dotenv from 'dotenv';
import * as  OpenAI  from 'openai';



dotenv.config();

const router = express.Router();


const config = new Configuration ({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post( async (req , res) => {   // passing prompt form front end to the server
    try {
        const { prompt } = req.body;    // getiing prompt from front end 

        const response = await openai.createImage({   // showing the prompt to ai 

            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'

        });

        const image = response.data.date[0].b64_json; // geting image out of it
        
        res.status(200).json({ photo: image });
        
    } catch (error) {
        consol.error(error);
        res.status(500).json({ message: "Something went wrong "})
        
    }


})      

export default router;