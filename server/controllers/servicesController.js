const { OpenAIApi } = require("openai"); 
const configuration = require("../config/openaiConfiguration");


// @desc    Creating openAi Instance
const openai = new OpenAIApi(configuration);

// @desc    openAi Completion template
const completion = {
}

// @desc    Get Hashtags
// @route   POST /api/services/hashtag
// @access  Private
const getHashtags = async (req, res) => {

    const openai = new OpenAIApi(configuration);

    try {
        const { hashtag } = req.body;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `give me hashtags about ${hashtag}`,
            temperature: 0, // Higher values means the model will take more risks.
            max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
            top_p: 1, // alternative to sampling with temperature, called nucleus sampling
            frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
            presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
        });

        const result = response.data.choices[0].text.slice(3).split(" ");

        res.status(200).send({
            hashtags: result
        });

    } catch (error) {
        res.status(500);
        res.json({
            message: error.message
        })
    }   
};


// @desc    Get content ideas
// @route   POST /api/services/ideas
// @access  Private
const getContentIdeas = async (req, res) => {

    try {
        const { subject } = req.body;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `give me list for my next content creator video about ${subject}`,
            temperature: 0, // Higher values means the model will take more risks.
            max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
            top_p: 1, // alternative to sampling with temperature, called nucleus sampling
            frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
            presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
        });

        let result = response.data.choices[0].text.split('\n').slice(2).map((e) => e.slice(3).trim().concat('.'))

        res.status(200).send({
            ideas: result
        });

    } catch (error) {
        res.status(500);
        res.json({
            message: error.message
        })
    }   
};

module.exports = { getHashtags , getContentIdeas}