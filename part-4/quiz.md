## Part 4: Quiz time!


- When you run a command in the terminal, where does BASH look for that command?
  - bash will use a shell variable called $PATH to locate  your executable. The $PATH variable is a list of directories. The directories are separated by colons ( : ). bash will search in each of those directories for a file with the name that you specified.

- On a UNIX computer, how do you stop a running process?
   - `Ctrl-C` if this doesn't work you need to get the PID. This can be done by using the top command to locate the process. Then you can run the kill command</br>
   kill - Kill a process by ID</br>
   killall - Kill a process by name

- What packages do you have installed via homebrew?
 ```
 a2ps			brew-cask-completion	gmp			icu4c			libpng			libvorbis		nettle			pcre			sdl			xz
 abuse			emacs			gnutls			imagemagick		libtasn1		lua			node			pkg-config		sdl_mixer		zsh
 bash			freetype		go			jpeg			libtiff			mas			openssl			postgresql		trash			zsh-completions
 bash-completion		gdbm			highlight		libffi			libtool			mongodb			openssl@1.1		rcm			tree
 boost			git			hub			libogg			libunistring		mysql			p11-kit			readline		wget
 ```

- On a UNIX computer, how do you find the process id of a running process?
  - You will need to open another terminal and use the  `top` or `ps` command.

- In a terminal, what does control-c do?
  -  `Control+C` is used to kill a process with the signal  SIGINT, and can be intercepted by a program so it can clean its self up
    before exiting, or not exit at all.

- What would be the result of typing the following commands?
```sh
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
```
 - you will be in your home directory called steve
   you then make a directory called foo
   you then make a file in the steve directory called bar
   you will change into directory foo
   then create a file called bar
   pwd returns /Users/steve/foo
- How do you set an environment variable in your shell?
  - I would first use the `env` command to see the default variable list. Then you can modify each environmental variable using  
   the `export` command.
- What keyboard shortcut do you use to split the screen in your editor?
  - I should be able to use `Cmd+k` and the arrows but alas
   that has never worked for me (silly spectacle). I just  - drag and drop the file onto the left lower screen.
- How do you create an alias in your shell?
  - `alias -p name="value"` for example alias `-p gco="git check out"` creates an alais for me to use gco as a keyboard shortcut.
- When a terminal command completes, how can you tell if it was successful or not?
  - A green arrow at the beginning of the next command line - indicates the terminal command was successful. Also the `history`
   command will show you all the successful commands during the current session.
- What does your `~/.gitconfig` have in it? (paste the whole file here)
   ```
    [alias]
      co = checkout
      ci = commit
      st = status --short --branch
      l  = log --oneline --decorate --graph --relative-date --show-signature
      ls-untracked-files = !git-ls-files -o --exclude-standard
      ls-ignored-files = !git-ls-files --others -i --exclude-standard
      ls-modified-files = !git-ls-files -m
    [color]
      editor = atom --wait
      status = auto
      diff = auto
      branch = auto
      interactive = auto
      ui = auto
      pager = true
    [color "status"]
      added = green
      changed = yellow
      untracked = red
    [user]
      name = Stephani McGrath
      email = silentsoundz1977@gmail.com
    [core]
      excludesfile = ~/.gitignore
      autocrlf = false
      pager = less -F -X
      whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eol
    [apply]
      whitespace = fix
    [push]
      default = upstream
    [branch]
      autosetuprebase = always
      autosetupmerge = true
    [mergetool "diffmerge"]
      cmd = diffmerge --merge --result=$MERGED $LOCAL $BASE $REMOTE
      trustExitCode = false
    [rebase]
      autosquash = true
    [rerere]
      enabled = true
      autoupdate = true
    [help]
      autocorrect = 50
    ```

- What is the difference between a relative and absolute path?
  - An absolute path is defined as the specifying the location of a file or directory from the root directory. Relative path is defined as path related to the present working directory(pwd).
- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?
    - `cp README.md ../pinterest-for-dogs`

- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
  - `open <filename>`
- What files or folders do you want all git repositories to ignore?
  - this is what I have in my .gitignore
```
    # Numerous always-ignore extensions
    *.diff
    *.err
    *.log
    *.orig
    *.rej
    *.swo
    *.swp
    *.vi
    *.zip
    *~

    # OS or Editor files
    ._*
    .cache
    .DS_Store
    .idea
    .project
    .settings
    .tmproj
    *.esproj
    *.sublime-project
    *.sublime-workspace
    .irb-save-history
    .pairs
    .tags
    .tags_sorted_by_file
    .irb-save-history
    .gems
    .bin
    .tags
    .tags_sorted_by_file
    .apdisk
    .DS_Store
    .sass-cache
    .fseventsd
    .bundle
    chromedriver.log
    .pryrc
    .irbrc
    libpeerconnection.log
    .irb-save-history
    .eslintcache
    .scss-lint-cache

    # Folders to ignore
    bower_components
    node_modules
    .sass-cache
    /tmp
```
- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?
  - The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. The `forEach()` method executes a provided function once for each array element.
