# What is this project?

This is a scolastic project for Develhope, realized for didactic purpose. it's a replica of Electronic Arts's website, developed in an agile environment with a team of 4 student using react.

# scripts

start: it serve react on localhost

# Node & package versions

- node 16.15.0
- npm 8.5.5
- react 18.2.0
- react-dom 18.2.0
- react-icons 4.4.0
- react-router-dom 6.3.0
- react-scripts 5.0.1
- typescript 4.8.2
- autoprefixer 10.4.8
- postcss 8.4.16
- tailwindcss 3.1.8
- @types/react-router-dom 5.3.3
- @headlessui/react 1.7.1
- @types/node 16.11.56
- @types/react 18.0.18
- @types/react-dom 18.0.6

# naming convention

### for components and folder

always start components name with capitalization and successive word doesn't use - or \_ and also use capitalization
so for example TextWrap.tsx

folder instead have all name in lowercase and successive word are separated by -
so for example apex-legend

### for branch and commit

we are partially using git naming convention so
for commit is groupType(optionalScope): small description
for branch is groupType/small-description

commit example: feat: created footer component example 2 fix(homepage): header overflowing to the navbar
branch example: feature/shared-button-component example 2 fix/section-component

list of group type:
feat(commit) or feature(branch): you are creating something new or adding something to something that already existed
fix: bug fix, something is not working visually or functionally or the code is broken and you are fixing it
style: formatting the code, adding comments or improving variables name
docs: modifying something related to documentation (like this file), configs (like tsconfig.json or gitignore) and package json
chore: modifying structure of the project for example moving all component into a folder called components
refactor: total rewrite of pieces of code

# workflow

there is 1 person that manage the work assigning tasks to the other member of the group and everything that is made, changed or deleted is comunicated to this manager so that the manager is the one worrying about the organization and that everything is running smoothly doing code review and applying eventual fixes meanwhile the other member continue with whatever task get assigned this way there is 0 risk of running into conflict and no one depends on the work of someone else, this makes us agile.

we also have a whatsapp group for comunicating important thing and we usually meet on discord every while

# about the structure

we have an src folder where all the components are written, inside of it there is an index.css importing tailwind, an index.tsx that initialize a root for react and render browserRouter and inside of it a Routing component in which will be inserted all routes of the pages for the website. outside of the Routing we insert all components that doesn't need to get rerendered because they are always present (for example the footer and the top navbar)

then we have a components folder inside of which there are 3 folder, config core and shared. into core goes components that are used for part of the pages that are outside the routing (like footer), into shared goes component that are reused multiple times from different components and into config goes all config file (and interfaces) that are used to describe the content of a page
this same logic (less config) is used into contexts and hooks folder also.

now returning to src we have a pages folder, into this folder goes folders that contains all the components of a single page.
for example src/pages/homepage inside of it Homepage.tsx HeaderSection.tsx etc...

if you want to save and use an image locally we are saving those into the public/assets folder, inside there are core, global and pages folder.
into core goes images relative to core components, into global images usable by everyone and into pages images specific to a single page

# some good practice

- when writing a component for props define an interface called Props and use it to type props
- never push changes directly into develop or master branch but rather do a new branch and then make a pull request to develop
- always use tailwind classes as much as possible. so, unless you necessarily need to write normal css, always use tailwind
- comment your code to make it more readable, also use prettier extension for VSC to format your code
