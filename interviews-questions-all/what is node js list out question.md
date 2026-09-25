Node.js is a powerful, open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. Built on **Chrome's V8 JavaScript engine**, it uses an **event-driven, non-blocking I/O model** that makes it lightweight and efficient, perfect for data-intensive real-time applications.

---

## The Node.js Mega-List: 200 Interview & Concept Questions

I have categorized these to help you navigate from "What is a variable?" to "How do I scale to millions of users?"

### 1. The Fundamentals (1-40)

1. What is Node.js?
2. Is Node.js single-threaded or multi-threaded?
3. What is the V8 engine?
4. Explain the concept of "Non-blocking I/O."
5. What is the Event Loop?
6. What is `npm`?
7. How do you check the version of Node.js installed?
8. What is the difference between Node.js and Ajax?
9. What is `global` object in Node?
10. How is Node.js different from a traditional browser environment?
11. What are the core modules of Node.js?
12. What is `package.json`?
13. What is the purpose of `package-lock.json`?
14. Explain the use of `module.exports`.
15. What is the difference between `require()` and `import`?
16. How do you create a simple HTTP server in Node?
17. What is REPL in Node.js?
18. What is the role of `libuv`?
19. What is the difference between `setImmediate()` and `setTimeout()`?
20. What is `process.nextTick()`?
21. How do you handle file uploads in Node?
22. What are "Error-first callbacks"?
23. What is an EventEmitter?
24. What is the purpose of `__dirname` and `__filename`?
25. How do you exit a Node process?
26. What is the `buffer` class in Node.js?
27. Explain the `fs` module.
28. What is the difference between `readFile` and `createReadStream`?
29. What is `path.join()` vs `path.resolve()`?
30. How do you manage environment variables?
31. What is the `os` module?
32. What are the common HTTP status codes used in APIs?
33. How do you use the `util` module?
34. What is the difference between `dependencies` and `devDependencies`?
35. What is "Callback Hell"?
36. How do you prevent Callback Hell?
37. What are Promises?
38. Explain `async/await` in the context of Node.
39. What is the `url` module used for?
40. How do you debug a Node.js application?

### 2. Express.js & Frameworks (41-80)

41. What is Express.js?
42. How do you define a route in Express?
43. What is Middleware?
44. Explain the types of middleware in Express.
45. What is `app.use()`?
46. How do you handle 404 errors in Express?
47. What is a template engine (e.g., EJS, Pug)?
48. How do you serve static files?
49. What is `req.params`?
50. What is `req.query`?
51. What is `req.body`?
52. How do you use `body-parser`?
53. What is CORS and how do you enable it?
54. How do you implement JWT authentication?
55. What is the difference between `res.send()` and `res.json()`?
56. How do you handle file downloads in Express?
57. What is `res.redirect()`?
58. How do you create a sub-router?
59. What is the purpose of `helmet` middleware?
60. How do you validate request data (e.g., Joi, express-validator)?
61. What is NestJS?
62. How does Fastify compare to Express?
63. What is Koa.js?
64. How do you set headers in a response?
65. What is a "Cookie-parser"?
66. How do you manage sessions in Express?
67. What is Passport.js?
68. How do you implement "Rate Limiting"?
69. What is the `Morgan` logger?
70. How do you handle central error handling in Express?
71. What is the difference between `app.listen()` and `http.createServer(app).listen()`?
72. How do you parse URL-encoded data?
73. What is a "View Engine"?
74. How do you pass data to a view?
75. What is RESTful API design?
76. What are the best practices for folder structure?
77. How do you implement API versioning?
78. What is the `compression` middleware?
79. How do you handle JSONP?
80. What is the difference between `res.end()` and `res.send()`?

### 3. Asynchronous Patterns & Performance (81-120)

81. What is the Thread Pool in Node?
82. How many threads does the Libuv thread pool have by default?
83. How do you increase the thread pool size?
84. What is the difference between Macrotasks and Microtasks?
85. What are Streams?
86. Name the four types of Streams.
87. What is "Piping" in streams?
88. What is "Backpressure" in streams?
89. How do you handle Memory Leaks?
90. What is the Heap Dump?
91. How does Garbage Collection work in V8?
92. What is `worker_threads`?
93. When should you use `worker_threads` vs `child_process`?
94. Explain `child_process.fork()`.
95. Explain `child_process.spawn()` vs `exec()`.
96. What is the Cluster module?
97. How does Load Balancing work in the Cluster module?
98. What is PM2?
99. How do you keep a Node process running forever?
100. What is Zero-downtime deployment?
101. What is the "Event Driven" architecture?
102. How do you handle heavy CPU-bound tasks?
103. Explain the "Reactor Pattern."
104. What is `Object.observe` (and why it’s deprecated)?
105. How do you measure execution time in Node?
106. What is the `dns` module?
107. How do you use `crypto` for hashing passwords?
108. What is the `zlib` module?
109. Explain the "Observer Pattern" in Node.
110. How do you avoid blocking the Event Loop?
111. What is "Hidden Classes" in V8?
112. How do you optimize JavaScript for V8?
113. What is the "Module Wrapper Function"?
114. Explain the "Singleton Pattern" in Node modules.
115. What is `AbortController`?
116. How do you use `AsyncLocalStorage`?
117. What is the `vm` module?
118. What is the difference between `setImmediate` and `process.nextTick` execution order?
119. How do you handle unhandled promise rejections?
120. What is `uncaughtException`?

### 4. Databases & Persistence (121-150)

121. How do you connect Node to MongoDB?
122. What is Mongoose?
123. What is an ORM vs an ODM?
124. How do you connect to MySQL in Node?
125. What is Sequelize?
126. What is Prisma?
127. How do you handle Database Migrations?
128. What is Connection Pooling?
129. How do you use Redis with Node?
130. What is the purpose of caching in Node?
131. How do you handle ACID transactions in Mongoose?
132. How do you perform "Populate" in Mongoose?
133. What is "Virtuals" in Mongoose?
134. How do you execute raw SQL queries?
135. What is the difference between SQL and NoSQL for Node apps?
136. How do you handle massive data imports?
137. How do you use ElasticSearch with Node?
138. What is the `knex.js` query builder?
139. How do you store binary data in a database?
140. What is Sharding?
141. What is Replication?
142. How do you handle race conditions in database updates?
143. What is the "Repository Pattern"?
144. How do you stream data from a database to a client?
145. What is the impact of indexing on Node performance?
146. How do you use Firebase with Node?
147. What is "Data Normalization"?
148. How do you handle soft deletes?
149. What is an "Upsert" operation?
150. How do you log database queries?

### 5. Security & Testing (151-180)

151. What is "XSS" and how to prevent it?
152. What is "SQL Injection"?
153. What is "CSRF" and how to prevent it?
154. How do you use `bcrypt`?
155. What is "Rate Limiting"?
156. How do you secure sensitive information (Secrets)?
157. What is the `dotenv` package?
158. How do you implement HTTPS in Node?
159. What is "Content Security Policy" (CSP)?
160. How do you sanitize user input?
161. What is "Unit Testing"?
162. What is "Integration Testing"?
163. What is Mocha?
164. What is Chai?
165. What is Jest?
166. How do you mock a module in Jest?
167. What is Supertest?
168. What is "Code Coverage"?
169. How do you test asynchronous code?
170. What is TDD (Test Driven Development)?
171. What is BDD (Behavior Driven Development)?
172. How do you use `Sinon.js`?
173. What is "End-to-End" (E2E) testing?
174. How do you test Express middleware?
175. What is the difference between "Spy" and "Stub"?
176. How do you handle security headers?
177. What is "Data Masking"?
178. How do you perform a security audit on `npm` packages?
179. What is `npm audit`?
180. How do you handle "Brute Force" attacks?

### 6. Microservices, Real-time & DevOps (181-200)

181. What is Socket.io?
182. What is the difference between WebSockets and Long Polling?
183. How do you implement "Broadcasting" in Socket.io?
184. What are Microservices?
185. How do Microservices communicate?
186. What is gRPC?
187. What is RabbitMQ?
188. What is Kafka?
189. What is "Message Queue"?
190. How do you Dockerize a Node.js app?
191. What is a "Multi-stage build" in Docker?
192. How do you deploy Node to AWS Lambda (Serverless)?
193. What is the "Serverless Framework"?
194. How do you handle logs in a production environment?
195. What is "Winston" or "Pino"?
196. How do you monitor Node.js performance (e.g., New Relic, Datadog)?
197. What is CI/CD for Node?
198. How do you handle graceful shutdown in a container?
199. What is the difference between Node.js and Deno?
200. What is Bun?

---

**Would you like me to provide a detailed explanation or code example for any specific question from this list?**