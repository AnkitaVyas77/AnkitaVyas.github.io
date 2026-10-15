# Ankita Vyas — portfolio

A responsive single-page portfolio hosted on GitHub Pages, with an optional serverless portfolio assistant.

## What's in this repository

- \`index.md\`: the portfolio page and chat widget
- \`assets/css/portfolio.css\`: responsive visual design
- \`assets/js/portfolio.js\`: mobile navigation
- \`assets/js/chat.js\`: chat interface; no API secret is stored in the browser
- \`lambda/handler.py\`: AWS Lambda endpoint that calls Gemini
- \`lambda/knowledge.json\`: facts the assistant is allowed to use
- \`template.yaml\`: AWS SAM deployment template for Lambda and its public Function URL

## Preview the portfolio

The page remains a Jekyll site. GitHub Pages should publish the \`main\` branch from the repository root. The site uses this project Pages URL:

https://ankitavyas77.github.io/AnkitaVyas.github.io/

The chatbot is shown on the page but will display a setup message until its API endpoint is configured.

## Deploy the chatbot on AWS

The assistant backend uses AWS Lambda Function URL and the Gemini Developer API. No API Gateway or database is required for the initial version.

### 1. Create a Gemini API key

Create an API key in Google AI Studio. Check which model is enabled for your project’s Gemini API free tier and its current rate limits. The template defaults to \`gemini-3.5-flash-lite\`; change \`GEMINI_MODEL\` in \`template.yaml\` if your account should use another model.

Do not put this key in any file in this repository or in browser code.

### 2. Install and configure AWS tools

Install the AWS CLI and AWS SAM CLI, then configure AWS credentials for the account and region where you want to deploy. You need permission to create a Lambda function, its execution role, a Function URL, and a CloudFormation stack.

### 3. Build and deploy

From the repository root:

~~~sh
sam build
sam deploy --guided
~~~

Use a stack name such as \`ankita-portfolio-chat\`. For \`AllowedOrigin\`, enter the origin only, without a trailing slash:

~~~text
https://ankitavyas77.github.io
~~~

The SAM output named \`PortfolioChatUrl\` is the endpoint URL.

### 4. Add the API key to Lambda

In AWS Console, open **Lambda → Functions → PortfolioChatFunction → Configuration → Environment variables** and add:

- Key: \`GEMINI_API_KEY\`
- Value: your Gemini API key

Save the configuration. The key is read server-side and is never sent to the browser. You can optionally change \`GEMINI_MODEL\` in the function environment as well.

### 5. Connect the page to Lambda

Edit \`index.md\` and find the opening body tag:

~~~html
<body data-chat-endpoint="">
~~~

Set the attribute value to the \`PortfolioChatUrl\` from the SAM deployment output:

~~~html
<body data-chat-endpoint="https://your-lambda-url.lambda-url.ca-central-1.on.aws/">
~~~

Commit and push that change to \`main\`; GitHub Pages will rebuild the site. Keep the URL’s trailing slash.

### 6. Test

After the site rebuilds:

1. Open the live page and select **Ask about Ankita**.
2. Try one of the suggested questions.
3. Ask an unrelated question and confirm the assistant politely redirects to portfolio topics.
4. Check the Lambda CloudWatch logs if the endpoint returns an error.

## Local checks

Validate the knowledge JSON:

~~~sh
python -m json.tool lambda/knowledge.json
~~~

Compile-check the Lambda source:

~~~sh
python -m py_compile lambda/handler.py
~~~

## Cost and safety notes

- Lambda includes a free request allowance, but AWS usage and free-tier details depend on your account and region.
- Gemini model eligibility, free-tier quotas, and data terms vary by model and can change. Review them in Google AI Studio before launch. Google’s Gemini API pricing page notes that free-tier data may be used to improve Google products.
- The Lambda Function URL is public so the browser can reach it. CORS allows only the portfolio origin, but CORS is not authentication and can be spoofed by non-browser clients. The function caps request body size, input length, output tokens, timeout, and concurrent Lambda executions. Check usage in AWS and Google AI Studio.
- The assistant only receives the recent conversation and the public facts in \`lambda/knowledge.json\`; it does not store chat history.
- Update \`lambda/knowledge.json\` when your public portfolio facts change.
