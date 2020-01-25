# git - the stupid content tracker

## initializes a repo

```sh
$ git init
```

## show the status of the repo

```sh
$ git status
```

## add content or changes to be tracked

```sh
$ git add staff
```

## adding all files in current directory

```sh
$ git add .
```

## create a history point for the tracked files

```sh
$ git commit -m "add initial code"
```

## show the repo's history of commits and branches

```sh
$ git log
```

### show the history in a vertical graph mode

```sh
$ git log --graph
```

## showing the config

```sh
$ git config --list
```

### show the global config

```sh
$ git config --list --global
```

## show file changes

```sh
$ git diff
```

## show file changes

```sh
$ git diff
```

### oneliner

```sh
$ git log --graph --oneline
```

### delete remote branch - shortcut

```sh
$ git push origin :feature/title-color
```

### delete remote branch

```sh
$ git push origin --delete feature/hello-world
```

### view tags

```sh
$ git tag --list
```

### view tags

```sh
$ git tag 1.1.0
```

### push tags to remote

```sh
$ git tag --list
```

### stashing

```sh
$ git stash
```

### recovering a stashed stash

```sh
$ git stash pop
```

### fetch current branch from forked upstream

```sh
$ git fetch upstream
```