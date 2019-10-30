# Retirement Calculator

Let’s plan our retirement! As you’ve probably heard, the magic of “compound interest” is powerful. For example, let’s imagine that you save $5,000/year for 10 years. You’ll have $50k! However, if you invested $5k/year for 10 years with an 8% return on your investement (market rate), you would have almost $80k! So how do we calculate compound interest? Well, it works sort of like this.

_Year 1_
* `5000 * .08 = 400`
* `5000 + 400 = 5400`

After year 1, we now have 5400 to re-invest instead of just 5000. So we do it all again…

* `5400 *.08 = 432`
* `5400 + 432 = 5832`

And so on!

Let’s create a calculator that helps us plan our retirement using this principle. Essentially, we want to write a function (call it `calcInvestment`) that takes several parameters and tells us how much money we’ll have based on those parameters.

For example, let’s imagine that you average a $100,000 salary over 15 years and you invest 20% of post-tax your income (at a 25% tax rate) and your investement sees a return of 8% year over year. At the end of 15 years, you would have $407,281.70.

Based on that, here are our parameters:
* Average salary
* Years of investement
* Percentage of income you plan to invest over the years
* Average return rate

Now create your function! It should console log (for example), “With an average salary of $100,000 over the next 15 years, you will have $408,281.70 if you invest 20% of your post-tax income with an 8% return.” Remember, we'll assume that you pay 25% in taxes (so if your income was $100,000, you'd only have $75,000 to invest with).

To test your code, you can use the following:

```js
calcInvestment(.20, .08, 50000, 20); // With an average salary of $50,000 over the next 20 years, you will have $343,214 if you invest 20% of your post-tax income with an 8% return.

calcInvestment(.20, .08, 120000, 20); // With an average salary of $120,000 over the next 20 years, you will have $823,715 if you invest 20% of your post-tax income with an 8% return.

calcInvestment(.15, .10, 100000, 25); // With an average salary of $100,000 over the next 25 years, you will have $1,106,404 if you invest 15% of your post-tax income with a 10% return.

calcInvestment(.25, .08, 80000, 25); // With an average salary of $80,000 over the next 25 years, you will have $1,096,589 if you invest 25% of your post-tax income with a 10% return.
```
