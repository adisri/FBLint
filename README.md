# FBLint

## Inspiration

People get angry. When people get angry, they tend to say things they don’t mean
to say. According to the Mental Health Organization, “32% of people say they
have a close friend or relative that has trouble controlling their anger.” This
can lead to broken friendships and workplace harassment, among other things.

We sought to create a filter that could serve as a secondary moral conscience
for times when anger may have got the best of you.

## What it does

FBLint is a Chrome Extension for Facebook messages that analyzes your
conversations in real-time and alerts you if you are about to send an
inappropriate or offensive message. Simply put, FBLint could save your
relationship, career, or image.

## How we built it

We used JavaScript to build a Chrome Extension that monitors what the user is
entering in any chat view. Using the Microsoft Cognitive Services and Dandelion
APIs, we perform sentiment analysis on the text a user has inputted. This gives
us two scores (one from each service) that tells us how positive or negative the
piece of text is. We finally weight these scores and combine them into a single
metric which we use to classify the text as inappropriate or not, sending an
alert to the user if so. We do all this in a performant way, minimizing the
delay to retain the natural conversational flow of Facebook while providing
accurate flagging of inappropriate messages.

## Challenges we ran into

The bulk of the work involved using sentiment analysis to decide whether a piece
of text needed to be flagged or not. This involved lots of testing with
different sentiment analysis APIs to find one that accurately flagged text as
inappropriate while not over-aggressively do so. After testing multiple such
APIs, we decided to integrate both the Microsoft Cognitive Services API and the
Dandelion API into our Chrome Extension. We chose to do this because we found
that Microsoft’s API was quite accurate with structured pieces of language,
while Dandelion’s sentiment analysis was geared to analyze shorter
conversational pieces of text.

It was difficult to decide how to combine the values returned by the Microsoft
Sentiment Analysis API and the Dandelion API. The Microsoft API returned scores
from 0 to 1, whereas the Dandelion API returned scores from -1 to 1, where in
both cases, a lower number indicated a more negative sentiment. We needed to
test the accuracy of each service on conversational text and find a meaningful
way of aggregating the results into a single metric we could use to determine
whether to flag text or not.

To do this, we ran many positive, neutral, and negative conversational phrases
through the APIs and visualized the values returned by each API. We then
performed statistical analysis to find the best way to combine these results
into a single value that accurately decides when to flag text.

## Accomplishments that we're proud of

First, we achieved what we set out to do! We created a filter for Facebook that
could reduce verbal abuse and harassment, which are currently major issues with
social media. We are also proud that we were able to integrate our idea
seamlessly with Facebook, providing the protection we sought to offer without
disrupting the Facebook user experience.

## What we learned

We learned a lot about sentiment analysis and how it can be used to classify a
piece of text as positive or negative. We also learned how to effectively use a
statistical approach to create our own accurate metric for evaluating data.

## What's next for FBLint

In the future, we could train and incorporate a model on top of Microsoft’s API
that focuses on sentiment analysis for conversational text, specifically for
things like slang. Also, we could extend FBLint to other platforms, such as
Slack, to stop workplace harassment. Applying this extension to the work setting
would warn employees BEFORE possible misconduct, clearly classify what is
inappropriate, and help HR automatically detect verbal abuse.
