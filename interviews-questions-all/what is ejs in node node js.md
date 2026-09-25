EJS (Embedded JavaScript) is one of the most popular templating engines for Node.js because it feels like writing plain HTML with "superpowers." It allows you to embed actual JavaScript code directly into your markup.

Here is a list of 50 questions ranging from basic syntax to advanced production patterns.

---

## 🟢 Basics & Setup (1-15)

1. What does **EJS** stand for?
2. How do you install EJS in a Node.js project?
3. How do you tell an Express app to use EJS as its view engine?
4. What is the default directory where Express looks for EJS files?
5. How do you change the default "views" directory to a custom folder?
6. What is the file extension for EJS templates?
7. What is the difference between `<% %>` and `<%= %>`?
8. How do you output "escaped" HTML content to prevent XSS?
9. How do you output "raw" (unescaped) HTML content using EJS?
10. What is the purpose of the `<%- %>` tag?
11. How do you write a comment inside an EJS file that won't appear in the rendered HTML?
12. How do you pass a variable from an Express route to an EJS template?
13. Can you use plain JavaScript functions (like `Math.round()`) inside EJS?
14. What happens if you try to reference a variable in EJS that wasn't passed from the route?
15. How do you set a local variable inside an EJS template itself?

---

## 🟡 Logic & Control Flow (16-30)

16. How do you write an `if/else` statement in EJS?
17. How do you iterate over an array using a `forEach` loop in EJS?
18. How do you use a standard `for` loop (with an index `i`) in EJS?
19. How do you implement a `switch` statement in EJS?
20. Why must you close every JavaScript control block with `<% } %>`?
21. How do you handle empty arrays or null data gracefully in a template?
22. How do you use logical operators (AND/OR) within an EJS tag?
23. Can you use `async/await` directly inside an EJS template?
24. How do you render a list of items as an HTML `<ul>`?
25. How do you conditionally add a CSS class to an HTML element (e.g., an "active" class)?
26. What is the syntax for a `while` loop in EJS?
27. How do you format a Date object inside an EJS template?
28. How do you use the ternary operator for quick conditional rendering?
29. How do you include "Global" variables (like a site title) across all templates?
30. What is `res.locals` and how does it interact with EJS?

---

## 🟠 Partials & Layouts (31-40)

31. What are **Partials** in EJS?
32. How do you include a partial file (like a header or footer) into a main template?
33. What is the difference between `include('file')` and `<%- include('file') %>`?
34. How do you pass specific data to a partial when including it?
35. Can a partial access all variables available to the parent template?
36. How do you create a reusable navigation bar using partials?
37. Does EJS support native "Template Inheritance" (like Jinja2 or Blade)?
38. What is the `ejs-mate` or `express-ejs-layouts` package?
39. How do you define a "Layout" file that wraps around different views?
40. How do you inject specific scripts or styles from a view into a master layout?

---

## 🔴 Advanced Features & Debugging (41-50)

41. How do you change the delimiter from `%` to something else (like `?`)?
42. How do you pre-compile EJS templates for better performance?
43. What is the `client-side` usage of EJS?
44. How do you cache EJS templates in a production environment?
45. How do you debug a "Syntax Error" that occurs inside an EJS file?
46. What is the `rmWhitespace` option in EJS?
47. How do you render an EJS template to a string without sending it as a response?
48. Is EJS faster or slower than other engines like Pug or Handlebars?
49. How do you handle "Internal Server Errors" (500) caused by EJS rendering?
50. Why is it considered a security risk to allow users to provide their own EJS templates?

---

**Would you like me to create a practical example showing how to pass an array of objects to EJS and render them in a table?**