import OpenAI from 'openai';
import { autoAnalyzeObject, LLMAdapters } from 'wishful-search';

const main = async () => {
  const openai = new OpenAI();
  const GPTLLMAdapter = LLMAdapters.getOpenAIAdapter(openai, {
    model: 'gpt-3.5-turbo',
  });
  const results = await autoAnalyzeObject(
    {
      name: 'John Doe',
      age: 25,
      location: 'New York',
      job: 'Software Engineer',
    },
    GPTLLMAdapter.callLLM,
    '.',
  );
  console.log(results)  
}
main()