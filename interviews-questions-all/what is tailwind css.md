
# Tailwind CSS - 200 Questions & Interview Guide

## Basics (1-20)
1. What is Tailwind CSS?
2. How does Tailwind differ from Bootstrap?
3. What is a utility-first CSS framework?
4. How do you install Tailwind CSS?
5. What is the Tailwind configuration file?
6. How do you customize Tailwind themes?
7. What are directives in Tailwind CSS?
8. Explain @tailwind directive.
9. What is @apply in Tailwind?
10. How do you use @layer in Tailwind?
11. What is PurgeCSS/content purging?
12. How do you enable dark mode in Tailwind?
13. What are breakpoints in Tailwind?
14. How do responsive prefixes work (sm:, md:, lg:)?
15. What is JIT mode in Tailwind?
16. How do you add custom colors?
17. What is the spacing scale in Tailwind?
18. How do you override Tailwind defaults?
19. What are variants in Tailwind?
20. How do you use hover, focus, and active states?

## Core Concepts (21-50)
21. **[Interview]** Explain the difference between Tailwind and traditional CSS approaches.
22. How do you handle CSS conflicts in Tailwind?
23. What is the box model in Tailwind?
24. How do margin and padding work?
25. What are margin utilities (m-, mt-, mb-, ml-, mr-)?
26. How do padding utilities function?
27. What is the width and height system?
28. How do you set min/max dimensions?
29. What are display utilities?
30. How does flexbox work in Tailwind?
31. How do you use grid in Tailwind?
32. What is justify-content and align-items?
33. How do gap utilities work?
34. **[Interview]** How would you build a responsive layout with Tailwind?
35. What are position utilities (relative, absolute, fixed)?
36. How do z-index layers work?
37. What is overflow handling?
38. How do text utilities function?
39. What font sizes are available?
40. How do font weights work?
41. What is text alignment (text-left, text-center)?
42. How do text color utilities work?
43. What is line height and letter spacing?
44. How do you apply text decoration?
45. What are background utilities?
46. How do background colors work?
47. What is background-size and background-position?
48. How do border utilities work?
49. What are border radius utilities?
50. How do shadow utilities function?

## Advanced Concepts (51-100)
51. **[Interview]** How do you optimize Tailwind CSS file size?
52. What is tree-shaking in Tailwind?
53. How do you use @screen directive?
54. What is container queries support?
55. How do you create custom utilities?
56. What is plugin system in Tailwind?
57. How do you write a Tailwind plugin?
58. **[Interview]** Explain the advantages of utility-first CSS.
59. How do you handle accessibility with Tailwind?
60. What is focus-visible in Tailwind?
61. How do you use sr-only class?
62. What are animation utilities?
63. How do transitions and transforms work?
64. What is scale, rotate, translate?
65. How do skew transformations work?
66. What is backdrop filter?
67. How do blend modes work?
68. What is object-fit and object-position?
69. How does aspect ratio work?
70. What are list utilities?
71. How do table utilities function?
72. What is border collapse in Tailwind?
73. **[Interview]** How would you structure a large Tailwind project?
74. What are component extraction best practices?
75. How do you avoid utility class bloat?
76. What is the @apply pattern and when to use it?
77. How do you create reusable components?
78. What is the slot pattern in Tailwind?
79. How do you handle color schemes?
80. What is CSS variables integration?
81. How do arbitrary values work?
82. What is bracket notation syntax?
83. **[Interview]** How do you debug Tailwind CSS issues?
84. What is Tailwind IntelliSense extension?
85. How do you inspect generated CSS?
86. What are common Tailwind pitfalls?
87. How do you handle vendor prefixes?
88. What is post-processing in Tailwind?
89. How does Autoprefixer work?
90. What is cssnano for optimization?
91. How do you configure PurgeCSS?
92. What content paths are important?
93. How do you prevent class purging?
94. What is safelist configuration?
95. How do template safety work with dynamic classes?
96. What is regex safety for content?
97. **[Interview]** How would you migrate from CSS to Tailwind?
98. What are migration strategies?
99. How do you handle legacy code?
100. What is gradual adoption approach?

## Responsive & States (101-150)
101. How do mobile-first approach work?
102. What is sm, md, lg, xl, 2xl breakpoints?
103. How do you combine multiple breakpoints?
104. **[Interview]** Design a mobile-first responsive card with Tailwind.
105. What are pseudo-class variants (hover, focus, active)?
106. How do before and after pseudo-elements work?
107. What is first-child, last-child selection?
108. How do odd/even utilities function?
109. What is group-hover functionality?
110. How do you use peer utilities?
111. What is state-based styling?
112. How do disabled, enabled variants work?
113. What is read-only variant?
114. How does placeholder-shown work?
115. What is autofill variant?
116. How do you style form inputs?
117. What is appearance utility?
118. **[Interview]** How would you style complex form states?
119. What is dark mode toggling?
120. How do you implement color scheme switching?
121. What is forced-color-adjust?
122. How do print utilities work?
123. What is print:hidden?
124. How do you handle print styles?
125. What is portrait and landscape orientation?
126. How do you target specific device types?
127. What is prefers-reduced-motion?
128. How do accessibility preferences work?
129. What is prefers-color-scheme?
130. How do system color scheme detection work?
131. What is high contrast mode support?
132. How do you test responsive designs?
133. What is Chrome DevTools responsive mode?
134. **[Interview]** How would you implement a dark mode toggle?
135. What is persistent dark mode preference?
136. How do you store theme preference?
137. What is JavaScript integration for themes?
138. How do you sync localStorage with Tailwind?
139. What is SSR considerations for themes?
140. How do you handle CSS-in-JS with Tailwind?
141. What is emotion/styled-components integration?
142. How do you use Tailwind with Next.js?
143. What about Nuxt integration?
144. **[Interview]** What are best practices for theme customization?
145. How do you create design tokens?
146. What is semantic token naming?
147. How do you document custom utilities?
148. What is design system approach?
149. How do you maintain consistency?
150. What is component library setup?

## Performance & Optimization (151-180)
151. **[Interview]** How do you measure Tailwind CSS performance?
152. What is CSS file size impact?
153. How do you minimize CSS bundle?
154. What is critical CSS extraction?
155. How do code splitting work?
156. What is lazy loading stylesheets?
157. How do you use PurgeCSS effectively?
158. What is whitelist configuration?
159. What are content path patterns?
160. **[Interview]** How would you optimize a large Tailwind project?
161. What is component-based architecture?
162. How do you avoid style duplication?
163. What is utility consolidation?
164. How do you cache generated CSS?
165. What is browser caching strategies?
166. How do you use CDN for assets?
167. What is compression (gzip, brotli)?
168. How do you profile CSS performance?
169. What is Chrome Coverage tool?
170. **[Interview]** How do you handle production builds?
171. What is minification process?
172. How do you configure build tools (Webpack, Vite)?
173. What is source map generation?
174. How do you debug production issues?
175. What are build script best practices?
176. How do you monitor CSS metrics?
177. What is Largest Contentful Paint (LCP)?
178. How does CSS affect Core Web Vitals?
179. What is render-blocking CSS?
180. How do you optimize above-the-fold CSS?

## Integration & Tools (181-200)
181. **[Interview]** How do you integrate Tailwind with React?
182. What is Create React App setup?
183. How do you use Next.js with Tailwind?
184. What is Nuxt + Tailwind integration?
185. How do you use Tailwind with Vue?
186. What is Svelte + Tailwind combination?
187. How do you integrate with Angular?
188. **[Interview]** What are IDE extensions for Tailwind?
189. How do Tailwind IntelliSense work?
190. What is VS Code configuration?
191. How do you enable autocomplete?
192. What is VSCode settings.json setup?
193. How do you use browser extensions?
194. What is Tailwind CSS IntelliSense features?
195. **[Interview]** How would you teach Tailwind to a team?
196. What are learning resources?
197. What is Tailwind documentation structure?
198. How do you create style guides?
199. What are Storybook + Tailwind integration?
200. How do you maintain code quality with Tailwind?
