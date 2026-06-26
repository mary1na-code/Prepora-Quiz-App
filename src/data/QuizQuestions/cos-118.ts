import { Topic } from '.'

export const cos118: Topic = {
  topic: 'COS 118 - Gen Ai',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 1200, // estimate (20 min) - source had no time limit, adjust as needed
  questions: [
    {
  question:
    'Instead of processing complete words, LLMs primarily analyze smaller text units known as:',
  choices: ['Phonemes', 'Tokens', 'Pixels', 'Layers'],
  type: 'MCQs',
  correctAnswers: ['Tokens'],
  score: 1,
  rationale:
    'B. Tokens.\n\nLLMs break text into tokens, which may represent whole words, parts of words, or punctuation. This allows them to efficiently process different languages and unfamiliar words.',
},
{
  question: 'The main function of a Large Language Model is to:',
  choices: [
    'Store every webpage on the internet',
    'Predict the next most likely token in a sequence',
    'Translate every language perfectly',
    'Memorize complete books',
  ],
  type: 'MCQs',
  correctAnswers: ['Predict the next most likely token in a sequence'],
  score: 1,
  rationale:
    'B. Predict the next most likely token in a sequence.\n\nLarge Language Models generate text by predicting the most likely next token based on the context provided. Repeating this process one token at a time produces coherent responses.',
},
{
  question:
    'Which learning process enables a neural network to improve by adjusting its internal weights after making mistakes?',
  choices: [
    'Tokenization',
    'Normalization',
    'Decoding',
    'Backpropagation',
  ],
  type: 'MCQs',
  correctAnswers: ['Backpropagation'],
  score: 1,
  rationale:
    'D. Backpropagation.\n\nBackpropagation measures the difference between the model’s prediction and the correct output, then adjusts the network’s internal weights to reduce future errors. This process helps the model learn and improve over time.',
},
{
  question:
    'Which layer serves as the underlying AI model that powers applications like chatbots before any user interface is added?',
  choices: [
    'Foundation Model Layer',
    'Browser Layer',
    'Operating System Layer',
    'Database Layer',
  ],
  type: 'MCQs',
  correctAnswers: ['Foundation Model Layer'],
  score: 1,
  rationale:
    'A. Foundation Model Layer.\n\nThe Foundation Model Layer contains the pretrained AI model responsible for understanding prompts and generating responses. User-facing applications such as chatbots are built on top of this layer.',
},
{
  question:
    'During AI text generation, which stage converts probability calculations into readable human language?',
  choices: [
    'Context Retrieval',
    'Input Analysis',
    'Decoding',
    'Training',
  ],
  type: 'MCQs',
  correctAnswers: ['Decoding'],
  score: 1,
  rationale:
    "C. Decoding.\n\nDecoding converts the selected tokens into fluent, readable text. It is the final stage where the model's predictions become a response users can understand.",
},
{
  question:
    'What is the first micro-step performed by an AI model after receiving a prompt?',
  choices: [
    'Decoding',
    'Probabilistic selection',
    'Input analysis',
    'Context retrieval',
  ],
  type: 'MCQs',
  correctAnswers: ['Input analysis'],
  score: 1,
  rationale:
    "C. Input analysis.\n\nInput analysis is the first step after receiving a prompt. During this stage, the AI identifies the user's request, important keywords, and the context needed to generate an appropriate response.",
},
{
  question:
    'During which micro-step does the AI retrieve relevant information from its learned knowledge?',
  choices: [
    'Input analysis',
    'Context retrieval',
    'Decoding',
    'Fine-tuning',
  ],
  type: 'MCQs',
  correctAnswers: ['Context retrieval'],
  score: 1,
  rationale:
    'B. Context retrieval.\n\nContext retrieval is the stage where the AI identifies the relevant information needed to answer the prompt before predicting the next tokens.',
},
{
  question:
    'Which micro-step involves predicting the most likely next word or token?',
  choices: [
    'Input analysis',
    'Context retrieval',
    'Probabilistic selection',
    'Compression',
  ],
  type: 'MCQs',
  correctAnswers: ['Probabilistic selection'],
  score: 1,
  rationale:
    'C. Probabilistic selection.\n\nProbabilistic selection chooses the next token based on the highest probability calculated from the available context. Repeating this process allows the AI to generate complete responses.',
},
{
  question:
    'Which of the following is NOT one of the four micro-steps an AI performs when processing a prompt?',
  choices: [
    'Input analysis',
    'Context retrieval',
    'Software installation',
    'Decoding',
  ],
  type: 'MCQs',
  correctAnswers: ['Software installation'],
  score: 1,
  rationale:
    'C. Software installation.\n\nSoftware installation is unrelated to how an AI processes prompts. The four processing steps are input analysis, context retrieval, probabilistic selection, and decoding.',
},
{
  question:
    "Why is Meta's Llama model popular among researchers and software developers?",
  choices: [
    'It only runs on cloud servers',
    'It is designed exclusively for spreadsheets',
    'It is open-source and can be deployed locally',
    'It requires Google Search to operate',
  ],
  type: 'MCQs',
  correctAnswers: ['It is open-source and can be deployed locally'],
  score: 1,
  rationale:
    "C. It is open-source and can be deployed locally.\n\nMeta's Llama models can be downloaded, customized, and deployed on local hardware, giving researchers and developers greater flexibility for experimentation and application development.",
},

{
  question: 'Who is the creator of Llama?',
  choices: ['Google', 'OpenAI', 'Meta', 'Microsoft'],
  type: 'MCQs',
  correctAnswers: ['Meta'],
  score: 1,
  rationale:
    'C. Meta.\n\nLlama is a family of Large Language Models developed by Meta for research and AI application development.',
},
{
  question: 'What is the full meaning of "Llama" in AI?',
  choices: [
    'Large Language Model Meta AI',
    'Large Learning Machine Architecture',
    'Logical Language Management AI',
    'Linked Learning Model Application',
  ],
  type: 'MCQs',
  correctAnswers: ['Large Language Model Meta AI'],
  score: 1,
  rationale:
    'A. Large Language Model Meta AI.\n\nLlama stands for Large Language Model Meta AI, reflecting Meta’s family of Large Language Models designed for natural language tasks.',
},
{
  question: 'What does the acronym GPT stand for?',
  choices: [
    'General Processing Technology',
    'Generative Pre-trained Transformer',
    'Global Prompt Technology',
    'Graph Processing Tool',
  ],
  type: 'MCQs',
  correctAnswers: ['Generative Pre-trained Transformer'],
  score: 1,
  rationale:
    'B. Generative Pre-trained Transformer.\n\nGPT is trained on large amounts of text before deployment and uses the Transformer architecture to generate human-like responses.',
},
{
  question: 'Who created GPT?',
  choices: ['Google', 'Meta', 'OpenAI', 'Microsoft'],
  type: 'MCQs',
  correctAnswers: ['OpenAI'],
  score: 1,
  rationale:
    'C. OpenAI.\n\nGPT was developed by OpenAI and is the foundation for AI systems such as ChatGPT.',
},
{
  question: 'Which strength is most associated with GPT?',
  choices: [
    'Real-time web search',
    'Image editing',
    'Reasoning and creativity',
    'Video generation only',
  ],
  type: 'MCQs',
  correctAnswers: ['Reasoning and creativity'],
  score: 1,
  rationale:
    'C. Reasoning and creativity.\n\nGPT is widely recognized for generating detailed text, solving problems, brainstorming ideas, and assisting with creative and analytical tasks.',
},
{
  question: 'Why is GPT often called a "Jack of all trades"?',
  choices: [
    'It only answers programming questions',
    'It was pre-trained on a massive amount of internet text',
    'It only works with Google Search',
    'It is open source',
  ],
  type: 'MCQs',
  correctAnswers: ['It was pre-trained on a massive amount of internet text'],
  score: 1,
  rationale:
    'B. It was pre-trained on a massive amount of internet text.\n\nTraining on diverse text enables GPT to perform a wide range of tasks, including writing, coding, summarization, translation, and question answering.',
},
{
  question: 'Gemini was formerly known as:',
  choices: ['Claude', 'Bard (PaLM)', 'Copilot', 'Jasper'],
  type: 'MCQs',
  correctAnswers: ['Bard (PaLM)'],
  score: 1,
  rationale:
    'B. Bard (PaLM).\n\nGoogle rebranded its Bard AI assistant as Gemini while expanding its capabilities with more advanced AI models.',
},
{
  question: 'Who developed Gemini?',
  choices: ['OpenAI', 'Anthropic', 'Google', 'Meta'],
  type: 'MCQs',
  correctAnswers: ['Google'],
  score: 1,
  rationale:
    "C. Google.\n\nGemini is Google's family of multimodal AI models designed to understand and generate text, images, audio, and other forms of information.",
},
{
  question: 'Which feature is Gemini particularly known for?',
  choices: [
    'Running completely offline',
    'Real-time integration with web information',
    'Creating operating systems',
    'Building databases',
  ],
  type: 'MCQs',
  correctAnswers: ['Real-time integration with web information'],
  score: 1,
  rationale:
    "B. Real-time integration with web information.\n\nGemini can access current web information through Google's ecosystem, making it useful for answering questions about recent events and up-to-date topics.",
},
{
  question: 'What is Prompt Engineering?',
  choices: [
    'The art and science of crafting prompts to guide Generative AI',
    'Training AI models from scratch',
    'Building computer hardware',
    'Writing programming languages',
  ],
  type: 'MCQs',
  correctAnswers: ['The art and science of crafting prompts to guide Generative AI'],
  score: 1,
  rationale:
    "A. The art and science of crafting prompts to guide Generative AI.\n\nPrompt Engineering involves designing clear and effective prompts that help AI generate accurate, relevant, and useful responses.",
},
{
  question:
    'Which formula best describes Prompt Engineering?',
  choices: [
    'Prompt = Question + Answer',
    'Prompt Engineering = Clear Instruction + Context + Constraints + Examples',
    'AI = Data + Internet',
    'Prompt = Keywords + Images',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Prompt Engineering = Clear Instruction + Context + Constraints + Examples',
  ],
  score: 1,
  rationale:
    'B. Prompt Engineering = Clear Instruction + Context + Constraints + Examples.\n\nEffective prompts combine clear instructions, relevant context, appropriate constraints, and examples when needed. These components help the AI produce more accurate and useful responses.',
},
{
  question:
    'Which of the following is NOT one of the learning objectives of the module?',
  choices: [
    'Distinguish between different prompt types',
    'Design effective prompts for various tasks',
    'Build a new Generative AI model',
    'Improve the quality and accuracy of AI-generated text',
  ],
  type: 'MCQs',
  correctAnswers: ['Build a new Generative AI model'],
  score: 1,
  rationale:
    'C. Build a new Generative AI model.\n\nPrompt engineering focuses on using AI effectively through well-designed prompts, not on developing or training new AI models.',
},
{
  question:
    'Which component of a prompt tells the AI exactly what to do?',
  choices: ['Context', 'Constraints', 'Task', 'Format'],
  type: 'MCQs',
  correctAnswers: ['Task'],
  score: 1,
  rationale:
    'C. Task.\n\nThe task clearly states what the AI should accomplish, such as summarizing, explaining, translating, or generating content.',
},
{
  question:
    'Which prompt component provides background information?',
  choices: ['Task', 'Context', 'Format', 'Examples'],
  type: 'MCQs',
  correctAnswers: ['Context'],
  score: 1,
  rationale:
    'B. Context.\n\nContext provides background information that helps the AI better understand the situation and generate a more relevant response.',
},
{
  question:
    'What is the purpose of the Format component in a prompt?',
  choices: [
    'To specify the output structure or tone',
    'To connect to the internet',
    'To limit the AI\'s memory',
    'To improve computer performance',
  ],
  type: 'MCQs',
  correctAnswers: ['To specify the output structure or tone'],
  score: 1,
  rationale:
    'A. To specify the output structure or tone.\n\nThe format tells the AI how the response should be presented, such as a table, bullet points, essay, email, or a specific writing style.',
},
{
  question:
    'What is the purpose of Constraints in a prompt?',
  choices: [
    'To provide examples',
    'To place limits on the response',
    'To describe the audience',
    'To identify the AI model',
  ],
  type: 'MCQs',
  correctAnswers: ['To place limits on the response'],
  score: 1,
  rationale:
    'B. To place limits on the response.\n\nConstraints define boundaries such as word count, tone, style, or content requirements, helping the AI produce responses that meet specific expectations.',
},
{
  question: 'Why are examples included in prompts?',
  choices: [
    'To waste tokens',
    'To show the AI the expected style or output',
    'To replace instructions',
    'To make prompts longer',
  ],
  type: 'MCQs',
  correctAnswers: ['To show the AI the expected style or output'],
  score: 1,
  rationale:
    'B. To show the AI the expected style or output.\n\nExamples help the AI understand the desired format, writing style, or pattern, leading to more consistent and accurate responses.',
},
{
  question:
    'Which prompt engineering technique uses symbols such as triple quotation marks (""") or ### to separate instructions from reference material?',
  choices: [
    'Context Switching',
    'Delimiters',
    'Prompt Chaining',
    'Token Mapping',
  ],
  type: 'MCQs',
  correctAnswers: ['Delimiters'],
  score: 1,
  rationale:
    'B. Delimiters.\n\nDelimiters separate instructions from supporting content, making it easier for the AI to distinguish between what it should do and the information it should use.',
},
{
  question:
    'What is the primary purpose of assigning a role in a prompt, such as "Act as a cybersecurity consultant"?',
  choices: [
    'To reduce the AI\'s processing time',
    'To guide the AI toward using relevant expertise and terminology',
    'To connect the AI to the internet automatically',
    'To increase the number of output tokens',
  ],
  type: 'MCQs',
  correctAnswers: [
    'To guide the AI toward using relevant expertise and terminology',
  ],
  score: 1,
  rationale:
    'B. To guide the AI toward using relevant expertise and terminology.\n\nAssigning a role helps the AI respond from a specific perspective, using language, knowledge, and reasoning appropriate for that role.',
},
{
  question:
    'Why is the prompt "Write something about technology" considered ineffective?',
  choices: [
    'It contains too many technical terms',
    'It lacks sufficient context, audience, and specific instructions',
    'It is too long for an AI model',
    'It prevents the AI from generating creative responses',
  ],
  type: 'MCQs',
  correctAnswers: [
    'It lacks sufficient context, audience, and specific instructions',
  ],
  score: 1,
  rationale:
    'B. It lacks sufficient context, audience, and specific instructions.\n\nA vague prompt gives the AI little guidance, which can lead to broad or irrelevant responses. Adding context and clear instructions produces better results.',
},
{
  question:
    'Providing an AI model with several examples of your desired output before asking it to perform a task is called:',
  choices: [
    'Zero-shot Prompting',
    'Few-shot Prompting',
    'Chain-of-Thought Training',
    'Reinforcement Learning',
  ],
  type: 'MCQs',
  correctAnswers: ['Few-shot Prompting'],
  score: 1,
  rationale:
    'B. Few-shot Prompting.\n\nFew-shot prompting provides the AI with a few examples of the desired output before giving it a new task. These examples help the model better understand the expected format and style.',
},
{
  question:
    'Which statement best explains the phrase "Garbage In, Garbage Out"?',
  choices: [
    'AI always gives incorrect answers',
    'The quality of AI output depends on the quality of the prompt',
    'AI can only answer easy questions',
    'AI should never be trusted',
  ],
  type: 'MCQs',
  correctAnswers: ['The quality of AI output depends on the quality of the prompt'],
  score: 1,
  rationale:
    'B. The quality of AI output depends on the quality of the prompt.\n\nClear, specific prompts produce more accurate and useful responses, while vague or poorly written prompts often lead to poor results.',
},
{
  question:
    'Which prompt type directly tells the AI what to do (e.g. "Summarize this article")?',
  choices: [
    'Instructional Prompt',
    'Role-Based Prompt',
    'Creative Prompt',
    'Comparison Prompt',
  ],
  type: 'MCQs',
  correctAnswers: ['Instructional Prompt'],
  score: 1,
  rationale:
    'A. Instructional Prompt.\n\nAn instructional prompt gives the AI a direct command to perform a specific task, such as summarizing, translating, explaining, or rewriting content.',
},
{
  question:
    '"You are a career coach. Give me interview tips." This is an example of which prompt type?',
  choices: [
    'Creative Prompt',
    'Comparison Prompt',
    'Role-Based Prompt',
    'Question-Answer Prompt',
  ],
  type: 'MCQs',
  correctAnswers: ['Role-Based Prompt'],
  score: 1,
  rationale:
    'C. Role-Based Prompt.\n\nA role-based prompt assigns the AI a specific role or profession, helping it respond with language and expertise appropriate to that role.',
},
{
  question:
    'Which prompt type is most appropriate for writing poems and stories?',
  choices: [
    'Instructional Prompt',
    'Creative Prompt',
    'Step-by-Step Prompt',
    'Comparison Prompt',
  ],
  type: 'MCQs',
  correctAnswers: ['Creative Prompt'],
  score: 1,
  rationale:
    'B. Creative Prompt.\n\nCreative prompts encourage the AI to generate original content such as stories, poems, scripts, or imaginative ideas.',
},
{
  question:
    '"What is photosynthesis? Explain simply." This is an example of which prompt type?',
  choices: [
    'Question-Answer Prompt',
    'Comparison Prompt',
    'Creative Prompt',
    'Role-Based Prompt',
  ],
  type: 'MCQs',
  correctAnswers: ['Question-Answer Prompt'],
  score: 1,
  rationale:
    'A. Question-Answer Prompt.\n\nA question-answer prompt asks the AI to explain or provide information about a specific topic by directly answering a question.',
},
{
  question:
    '"List the steps to brush your teeth properly." This prompt belongs to which category?',
  choices: [
    'Creative Prompt',
    'Step-by-Step Prompt',
    'Comparison Prompt',
    'Role-Based Prompt',
  ],
  type: 'MCQs',
  correctAnswers: ['Step-by-Step Prompt'],
  score: 1,
  rationale:
    'B. Step-by-Step Prompt.\n\nA step-by-step prompt instructs the AI to present information as a sequence of ordered actions or procedures.',
},
{
  question:
    '"Compare WhatsApp and Telegram in a table." This is an example of which prompt type?',
  choices: [
    'Comparison Prompt',
    'Creative Prompt',
    'Instructional Prompt',
    'Question-Answer Prompt',
  ],
  type: 'MCQs',
  correctAnswers: ['Comparison Prompt'],
  score: 1,
  rationale:
    'A. Comparison Prompt.\n\nA comparison prompt asks the AI to identify similarities and differences between two or more items, often using a table for clarity.',
},
{
  question:
    'Which category of AI tools is designed to generate original content from scratch?',
  choices: [
    'Editing & Paraphrasing Tools',
    'Collaboration & Productivity Tools',
    'Content Creation Tools',
    'Security Tools',
  ],
  type: 'MCQs',
  correctAnswers: ['Content Creation Tools'],
  score: 1,
  rationale:
    'C. Content Creation Tools.\n\nContent creation tools generate original text, images, audio, or other creative content from user prompts instead of simply editing existing content.',
},
{
  question:
    'Which of the following is a Content Creation Tool?',
  choices: ['Jasper AI', 'Grammarly', 'QuillBot', 'Microsoft Word'],
  type: 'MCQs',
  correctAnswers: ['Jasper AI'],
  score: 1,
  rationale:
    'A. Jasper AI.\n\nJasper AI is a content creation tool designed to generate original content such as blog posts, marketing copy, emails, and social media content from prompts.',
},
{
  question:
    'Which task is best suited for Content Creation Tools?',
  choices: [
    'Grammar correction',
    'Writing blog posts',
    'Virus scanning',
    'File compression',
  ],
  type: 'MCQs',
  correctAnswers: ['Writing blog posts'],
  score: 1,
  rationale:
    'B. Writing blog posts.\n\nContent Creation Tools are designed to generate original content such as blog posts, articles, emails, and marketing copy from user prompts.',
},
{
  question:
    'What is the primary purpose of Editing & Paraphrasing Tools?',
  choices: [
    'Generate images',
    'Improve, rewrite, or correct text',
    'Create databases',
    'Design websites',
  ],
  type: 'MCQs',
  correctAnswers: ['Improve, rewrite, or correct text'],
  score: 1,
  rationale:
    'B. Improve, rewrite, or correct text.\n\nEditing and paraphrasing tools refine existing text by correcting grammar, improving clarity, rewriting sentences, and preserving the original meaning.',
},
{
  question:
    'Which pair consists entirely of Editing & Paraphrasing Tools?',
  choices: [
    'Jasper AI and Writesonic',
    'Grammarly and QuillBot',
    'Notion AI and Copilot',
    'Gemini and GPT',
  ],
  type: 'MCQs',
  correctAnswers: ['Grammarly and QuillBot'],
  score: 1,
  rationale:
    'B. Grammarly and QuillBot.\n\nGrammarly and QuillBot are designed to improve existing text through grammar checking, rewriting, paraphrasing, and clarity enhancement.',
},
{
  question:
    'A student wants to rewrite an essay to make it clearer without changing its meaning. Which type of AI tool is the best choice?',
  choices: [
    'Content Creation Tool',
    'Editing & Paraphrasing Tool',
    'Collaboration & Productivity Tool',
    'Image Generation Tool',
  ],
  type: 'MCQs',
  correctAnswers: ['Editing & Paraphrasing Tool'],
  score: 1,
  rationale:
    'B. Editing & Paraphrasing Tool.\n\nEditing and paraphrasing tools improve readability while preserving the original meaning, making them ideal for refining essays and other written work.',
},
{
  question:
    'Collaboration & Productivity Tools are mainly designed to:',
  choices: [
    'Help multiple people work together on content',
    'Replace programmers',
    'Train AI models',
    'Generate videos only',
  ],
  type: 'MCQs',
  correctAnswers: ['Help multiple people work together on content'],
  score: 1,
  rationale:
    'A. Help multiple people work together on content.\n\nCollaboration and productivity tools support teamwork by assisting with writing, organizing information, sharing ideas, and managing tasks more efficiently.',
},
{
  question:
    'Which of the following is a Collaboration & Productivity Tool?',
  choices: ['Writesonic', 'Notion AI', 'QuillBot', 'Jasper AI'],
  type: 'MCQs',
  correctAnswers: ['Notion AI'],
  score: 1,
  rationale:
    'B. Notion AI.\n\nNotion AI helps users organize notes, summarize information, generate content, and collaborate within a shared workspace.',
},
{
  question:
    'Microsoft Copilot is best categorized as a:',
  choices: [
    'Content Creation Tool',
    'Editing Tool',
    'Collaboration & Productivity Tool',
    'Search Engine',
  ],
  type: 'MCQs',
  correctAnswers: ['Collaboration & Productivity Tool'],
  score: 1,
  rationale:
    'C. Collaboration & Productivity Tool.\n\nMicrosoft Copilot assists users with tasks across Microsoft 365 applications, helping improve productivity through writing, analysis, summarization, and automation.',
},
{
  question:
    'GitHub Copilot is best described as a:',
  choices: [
    'Citation manager',
    'Programming assistant powered by AI',
    'Grammar checker',
    'Search engine',
  ],
  type: 'MCQs',
  correctAnswers: ['Programming assistant powered by AI'],
  score: 1,
  rationale:
    'B. Programming assistant powered by AI.\n\nGitHub Copilot helps developers write code by suggesting functions, completing code, and generating programming solutions based on context.',
},
{
  question:
    'Rewriting a technical research article into language suitable for primary school pupils is an example of:',
  choices: [
    'Tokenization',
    'Style Transfer',
    'Extractive Summarization',
    'Data Cleaning',
  ],
  type: 'MCQs',
  correctAnswers: ['Style Transfer'],
  score: 1,
  rationale:
    'B. Style Transfer.\n\nStyle transfer changes the tone, complexity, or writing style of a text while preserving its original meaning. In this case, the content is rewritten in simpler language for a younger audience.',
},
{
  question:
    'What distinguishes abstractive summarization from extractive summarization?',
  choices: [
    'It only summarizes images',
    'It copies important sentences exactly',
    'It rewrites ideas using new wording while preserving meaning',
    'It only works with PDFs',
  ],
  type: 'MCQs',
  correctAnswers: [
    'It rewrites ideas using new wording while preserving meaning',
  ],
  score: 1,
  rationale:
    'C. It rewrites ideas using new wording while preserving meaning.\n\nAbstractive summarization creates a concise summary using new sentences, while preserving the original meaning instead of copying text directly.',
}

  ]
}