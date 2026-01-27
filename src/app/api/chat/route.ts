// app/api/chat/route.ts

import { streamText } from 'ai'
import { google } from '@ai-sdk/google'

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Create a context about Nick Kulavic for the AI
  const systemMessage = {
    role: 'system',
    content: `You are an AI assistant on Nick Kulavic's portfolio website. Provide helpful information about Nick and his work.

Nick Kulavic is an AI Developer & SaaS Entrepreneur. 
He owns several SaaS companies:
- MyFusion Solutions: Specializes in Infusionsoft integrations and plugins, providing API extensions for the Infusionsoft Campaign Builder environment. It has generated over $1.7M in revenue through industry-leading Infusionsoft extensions, API integrations for marketing automation, and custom plugin development.
- ListBackup.ai: An email list backup service designed to protect valuable marketing assets and ensure business continuity. It features automated email list backups, secure cloud storage, easy restoration process, and cross-platform compatibility.
- MyFusion Helper: A flagship product offering 50+ helper applets that extend the capabilities of Infusionsoft with various integrations. Key features include Facebook Custom Audiences integration, GoTo Webinar Integration, YouTube/Wistia integration, and Set It Helper for Infusionsoft fields.
- YouGonnaLearn.Today: An educational platform focused on delivering practical knowledge and skills for modern professionals. It features interactive learning experiences, expert-led courses, practical skill development, and community-driven content.

Nick currently works as an AI developer at Take Three Technologies, focusing on developing AI solutions for the mortgage lending industry. He's responsible for integrating AI into TheRuleTool™ to expedite the mortgage loan process and reduce costs through automation and intelligent data processing.

He works with various AI technologies including natural language processing (NLP), machine learning models, and AI integration into mortgage lending software.

His SaaS companies have generated over $1.7M in revenue by combining deep technical expertise with a keen business sense.`
  };

  // Add system message to the beginning of the messages array
  const messagesWithContext = [systemMessage, ...messages];

  // Get a language model
  const model = google('gemini-2.0-flash-exp');

  // Call the language model with the prompt
  const result = streamText({
    model,
    messages: messagesWithContext,
  });

  // Respond with a streaming response
  return result.toTextStreamResponse();
}
