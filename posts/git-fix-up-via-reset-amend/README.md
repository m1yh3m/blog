# Fixing git commits via reset and amend.

Say you have bunch of commits in repo history.

Latest four is what you want to merge together to form one commit.

```bash

git log --oneline

hash1 WIP
hash2 WIP
hash3 WIP
hash4 Feature commit message

```

## Soft Reset

First `soft reset` top three commits:

`git reset --soft HEAD~3`

## Amend

Then, amend changes to fourth from top. (Now this will be the top one, where you will be adding changes from reset)

`git commit --amend`

You should now have one commit: "Feature commit message" with all the changes from top 4.
