# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned) -[My personal experience during development](#My-personal-experience-during-development)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a page project with a section containing a contact form.

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

This is a single-page form project designed to practice the basics of **HTML**, **CSS**, and **JavaScript**. The form's visual identity revolves around green tones — from dark to light. The form includes a title followed by fields such as text inputs for name, email inputs, radio buttons for options, and checkboxes.

### Screenshot

![](./assets/images/Screenshot%202025-05-12%20at%2014-14-23%20Contact%20Form.png)

## My process

I'm currently taking a Full Stack course and studying advanced HTML. I researched HTML semantics on my own as well. (I won't explain semantics here.) During my research, I came across the idea of **denotational** and **connotational** meaning. For example, the `<main>` tag tells browsers and SEO tools that its content is the "main content" (denotational). But I also created a playful analogy — something like:
“`<main>` = the form” and the form = the main content. That helped me mentally frame the importance of structuring code with purpose. It became a kind of internal guide for abstract thinking while coding.

Then I moved on to CSS. There I noticed how, beyond the analysis phase and skeleton planning in HTML, both HTML and CSS demand **less logical reasoning** and more **execution and performance**. So I worked fast — it's not my first form project, after all.

JavaScript was different this time. I wrote out the logic before coding, almost like a script:

> “When I click the submit button, the empty fields should show error messages below. 1) The first box will show messages inside both text inputs. 2) The email field will show the message below the input. 3) The radio input message comes after the radio container. 4) The message appears after the `<textarea>`. 5) The checkbox message comes after the checkbox box. Six messages for five inputs and one textarea.”

Then I thought:

- Create a `DOMContentLoaded` listener.
- Separate logic into functions.
- Add submit listener to the form.
- In each function, check if a field is empty. If yes, show an error message. If not, remove the message if it exists.
- For radio and checkbox, verify if an option is selected.

This structure made it easier for me to build the JS part. At one point, I even realized I had forgotten a step and my mind naturally pointed it out like, “wait, you missed this part” — that’s where I typed a “no” in my planning which now makes sense in hindsight.

### Built

I had both the Figma file and the `main.*` files. The project uses few files and is located mostly in the root directory. I started in a standard way: working from the largest structures to the smallest (as it's basically a no-scroll page). The hierarchy was simple, and from there, the semantic tags came naturally — after all, it's a form, so it mainly uses `<input>` and `<label>` elements.

### What I learned

I worked on it during moments that felt right and productive. That alone taught me a lot about performance in programming. I completed the HTML, CSS, and JS parts in about a day and a half, including styling and interactivity.

#### My personal experience during development

I was motivated — both because I wanted to warm up and because I had just bought a graphics card to enable three-monitor setups. That investment reignited my drive to code again.

Since the graphics card hadn't arrived yet, I worked using just **one monitor and a tablet**, switching between tabs constantly. I didn’t use other code editors or apps, so I didn’t get to compare tools. But I did feel that **switching tabs often** broke my focus and made it harder to visualize the structure and style, which caused some fatigue and typing errors.

Interestingly, during the JavaScript part, those issues eased. JS required less switching — just code and test. At one point, I encountered a problem I couldn’t solve and used **AI** to help. It reminded me of a concept I once dismissed: **"hack" or "programming hack"**. I now see it as a clever way to solve puzzles and will consider it in future projects.

Programming has become something that **fulfills me**, and sometimes I carry that thinking outside of code — trying to solve real-life problems with logic. But I’m recovering from a mental health crisis, and my environment has been slow, even “frozen” at times. That made me adjust my mindset and allow myself to postpone some tasks — something I don’t usually like to do.

The HTML/CSS days were calm. The JavaScript moments brought intense mental engagement, but I'm happy about that — it shows potential for “bringing work home,” which I now see as something positive. It’s a mindset I believe I can shape and adapt to different scenarios.

During this project, my chair broke, and I had to work on a couch at a table — which felt both unique and funny. It changed how I behaved, but not how I programmed.

I don’t feel the need to drastically change my programming approach. I haven’t yet worked on projects that weren’t designed by myself or under a manager’s guidance. So far, my personal structure works. These small front-end projects have similar foundations in HTML, CSS, and JS, and I’ll keep building on that.

### Continued development

Besides practicing something close to a real-world scenario, this project was a **warm-up** for me. I'm early in the Full Stack course, and I’m still doing simple activities. That bothers me a bit since I want to work on more complex software, so I built this on my own to balance that out.

This “Contact Form” project is focused on **user interaction** with the webpage. That made me reflect on the many contexts where forms are used: from search bars to login/signup, and of course, contact forms. It reminded me that **data exchange** can happen in many forms beyond `<input>`, and there are many tags and technologies involved in this.

## Author

- YouTube - [Valdevorte](https://www.youtube.com/@valdevorte2702)
- Frontend Mentor - [@FredericoGarciasAlves](https://www.frontendmentor.io/profile/FredericoGarciasAlves)
- Twitter - [@FredericoGA70](https://x.com/FredericoGA70)
- Facebook - [Fred Garcias](https://www.facebook.com/fred.garcias.1)
- instagram - [@fred_alves23](https://www.instagram.com/fred_alves23/)
- Linkedin - [frederico garcias alves](https://www.linkedin.com/in/frederico-garcias-alves-8730722b5/)
