---
slug: Create Your Own Doc io
title: Create Your Own Doc io
author: Evan McDowell
author_title: Software Engineer @ Ware2go
author_url: https://github.com/EvanMcDowell31
author_image_url: https://avatars.githubusercontent.com/u/40528617?s=400&u=1f93b55320b7de438bfb4916e3da747865f4bbcd&v=4
tags: [docusaurus]
---

I know this is kindof meta putting this on a Docusaurus io page, but im going to walk through how to set up your own personal io page with Docusaurus and setup github actions and gh-pages to deploy it to your personal io page.

So Docusaursus is pretty awesome and you can deploy it to your own gh-pages, but ill go through some of the troubles and pitfalls i had.

### Initialising

So if you go to [docusaurus](https://github.com/facebook/docusaurus) theye have an awesome intro read me, and to start a fresh repo its super simple, just use the command

`npx @docusaurus/init@latest init [name] [template]`
Name is the name you want your repo and for template i just went with`classic`

Note that this command creates a folder and structure in the directory you are currently in (in your terminal) so one way to create a new repo is, create one in github, run this command locally and git init inside the folder it creates and set origin to the repo you created in git. ex:

`git remote add origin https://github.com/[UserName]/[repoName].git`

commit files, then push up your repo.
After that you should see your files on github.

### Customizing

From here you can edit the `docusaurus.config.js` file. We should change the url, base url (if needed), project name to line up with the repo name. If its a personal repo your url should be `https://github.com/[UserName]` and base url (if using io for repo) should be `/[RepoName]/`. You can also customise other things to your hearts content, like your own links etc.

### Automating Deployments

So the doc i was following (which was pretty good) [triggering-deployment-with-github-actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) takes you through everything with links to github documentation on how to do things, overall excelent doc, and would suggest following along with me there, i will basically just add some tidbits to this docs flow.

Some of the imidiate things you will see if you are using a Mac is that you may not have xclip for coppying the ssh keys from your terminal to your clipboard. A good alt for this would be [pbcopy](https://coderwall.com/p/osbzzq/copy-files-to-clipboard-using-command-line-on-osx). So for example you can substitute

`pbcopy < ~/.ssh/id_rsa.pub`

for

`xclip -sel clip < ~/.ssh/id_rsa.pub`

So for the first step it links you to [github how to create a new ssh key](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key). For the github actions we want to use thee rsa algorythm. so use

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"` with the email being the email associated with the repo/account aka yours.

This will bring up a prompt in your terminal asking where you want to save the key, usually `~/.ssh/`, but if you already have an id_rsa you can name it something else, just make sure to use that when entering it into github. Next it will ask for a passphrase, just hit enter (no passphrase), alternatively you could add `-N ""` to the ssh-keygen command for empty passphrase.

Step 2: [Deploy Keys](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys) they start you with that link, you can scroll down to step 4 on that page if you are starting on your repo page.
Settings -> Deploy keys -> Add Key

I dont think the name matters here but use the `pbcopy` command to copy the ssh key created earlier onto clipboard so you can paste it in as the key here (in github). make sure to check the checkbox 'Allow write access'.

Step 3: Secrets. Basically the same as deploy keys except under seecret, and using the id_rsa instead or the id_rsa.pub (private key compared to public key). But the name here is important `GH_PAGES_DEPLOY`, this corresponds with the secret name used in `./github/workflows/documentation.yml` line 35. (which is the next step)

Step 4: Documentation.yml file. Stock out of the box this sets up deployment from branch called documentation, but you can edit this to be wichever branch you like. As well as editing the run commands for example if you have nested projects in a monoRepo (if the yarn locks dont conflict or reference a private npm directory that you need tokens for). So if its your personal github you shouldnt need to worry about that, it should just work based on what branch you tell it to build off of.

May have skipped this step, but you need to configure your gh pages under the pages tab in the repo settings. It needs to be configured to gh-pages branch (if theres no one you can make one and push it up). i think if you make one and push it up the pages tab should prefill with gh-pages being the pages target branch.

NOTE: Dont hit choose a theme because then you url will change to a random generated url.

### Conclusion

Thats pretty much it, so whenever you make a PR or push to the branch you specified (documentation if you didnt change it) the github action should build and deploy it to the gh-pages branch and url. I like to put that url in the repo read me, just so i can just click it when i want to see it.

And thats it! Hope this is a helpful walkthrough, hope you can avoid those pitfalls as well.

---

sources:

- [docusaurus](https://github.com/facebook/docusaurus)
- [ssh Keys](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)
- [triggering-deployment-with-github-actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)
- [pbcopy](https://coderwall.com/p/osbzzq/copy-files-to-clipboard-using-command-line-on-osx)
