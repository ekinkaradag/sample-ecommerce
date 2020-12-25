# E-Commerce Website

This is an e-commerce website that I built with [React](https://reactjs.org/). The sole purpose of this project is to demonstrate my React skills on my portfolio.

You can view the current state of the website by visiting [ekinkaradag.github.io/sample-commerce](https://ekinkaradag.github.io/sample-ecommerce)

## To run it on your machine locally

Navigate to the project folder and run these commands on your machine in order:

```bash
npm install
npm start
```

Then you can view the website on [http://localhost:3000](http://localhost:3000) with your browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---

# Changelog

## 25 December 2020

- Added a [SignUp component](src/components/sign-up/) for users to sign up and sign in with their email and password combinations.

## 22 November 2020

- Because Facebook requires a legitimate permission from the developer, I have disabled displaying profile photos for Facebook users.

## 21 November 2020

- "Sign In with Google" & "Sign In with Facebook" buttons have been implemented
    - In order to maintain stability in Firebase, a user with the same registered email address, can only sign in with a single preffered method. Now a proper alert message is displayed, if the user attempts to sign in with a different method which has the same registered email address.
- Google user's profile photo is displayed.

## 20 November 2020

- A "Hide" button is implemented inside the Disclaimer ([Disclaimer](src/components/disclaimer/)).

## 19 November 2020

- Added a disclaimer bar on the top of the page ([Disclaimer](src/components/disclaimer/)).
    - In the future, a "Hide" button will be implemented inside it.

## 18 November 2020

- Added a custom input class for the forms ([FormInput](src/components/form-input/)).
- Added a custom button component which can be used on any part of the site ([CustomButton](src/components/custom-button/)).
- Added a page component for both signing in and signing up ([SignInAndSignUpPage](src/pages/sign-in-and-sign-up)).
- Added a "Sign In" component ([Sign In](src/components/sign-in)).
    - Now the sign in component is visible at "/signin" <code>href</code>.
    

## 16 November 2020

- Fixed routing.
- Added a header as a navigation bar.

## 15 November 2020

- Added routing for future developments.
- Added new items and their preview page.

## 14 November 2020

- Made the final look and functionality for the HomePage component.
