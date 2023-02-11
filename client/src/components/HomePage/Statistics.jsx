import React from "react";
import { Configuration, OpenAIApi } from "openai";

const runAI = async () => {
  const configuration = new Configuration({
    organization: "org-F9pqlcVUNFT1IFzIylm9ovkQ",
    apiKey: "egjxXW7kX3ekLaoQ0SVeT3BlbkFJwW2K5e4QLM1RH369FPjx",
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt:
        "This is for a crowdfunding platform. Following is the details of the projects that the user Dan has contributed to. You need to create a summary based on this information, which contains the latest updates about those projects. This summary will be displayed on Dan's homepage. So it needs to be conscise and informative. Pretend to talk to Dan in first person. Make sure the sentences are complete and coherent. End the summary with a positive message.\n\nHey Dan, here's an update on the projects you've contributed to. The 'Help the Homeless' project has raised $10,000 so far and is now looking for volunteers to help distribute the funds. The 'Save the Rainforest' project has reached its goal of $50,000 and is now in the process of purchasing land to protect the rainforest. The 'Feed the Hungry' project has raised $20,000 and is now looking for local businesses to partner with to provide food for those in need. It's great to see your contributions making a difference! Keep up the good work!",
      temperature: 0,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.2,
      presence_penalty: 0,
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};

const Statistics = () => {
  runAI();
  return <div className="statsCard__container card">Hello</div>;
};

export default Statistics;
