---
layout: post
title: "Setting up Neovim-LSP"
date: "2020-07-23"
categories: ["software"]
---
I found the built in Neovim LSP worked better and more simply than the deoplete-clangx set up I also tried.

First install the latest Neovim by clicking the `Assets` dropdown for the `Nightly` tagged release [here](https://github.com/neovim/neovim/releases). 

Install the [nvim-lsp](https://github.com/neovim/nvim-lsp) plug in.

Now you need to install the "language server". I added servers for Python and C++ and both worked easily. 

### Python
In the Python virtual environment that I point Neovim to ([explained here](https://nickdgreg.github.io/software/2020/07/22/neovim-cpp/)) I installed [pyls](https://github.com/palantir/python-language-server) with their default recommendation `pip install 'python-language-server`. That added all the necessary dependencies too like [Jedi](https://github.com/davidhalter/jedi).

Then added the [deoplete-lsp](https://github.com/Shougo/deoplete-lsp) and [deoplete-jedi](https://github.com/deoplete-plugins/deoplete-jedi) plugins. Added the [default config](https://github.com/neovim/nvim-lsp#pyls) to my `init.vim`. 

    EOF << lua
    require'nvim-lsp'.pyls.setup{}
    EOF

Ran `PlugInstall` closed and opened Neovim (all in the newly downloaded nightly version). And deoplete gives autocomplete suggestions for Python files. 

I decided perhaps I don't need `deoplete-jedi`, removed it. Then tried to run it and got the error 'pyls not executable'. Tried to readd it but have had no luck. So I have no idea how that's working. Will leave for now.

### C++
I had got doeplete and deoplete-clangx to run so I removed the `deoplete-clangx` plugin. Installed clangd-10 as described by [these instructions](https://clangd.llvm.org/installation.html)

    sudo apt install clangd-10
    sudo update-alternatives --install /usr/bin/clangd clangd /usr/bin/clangd-10 100

Added the setup to `init.vim`

    EOF << lua
    require'nvim-lsp'.clangd.setup{}
    EOF

And in cpp files I now get nice snippet suggestions. 

I've not yet done anything with the compile_commands.txt/JSON database things.

### Useful links
- [What exactly is nvim-lsp](https://www.reddit.com/r/neovim/comments/hbnod6/vimlsp_vs_nvimlsp/)
- [Tags and LSP difference?](https://joereynoldsaudio.com/2020/03/17/ctags-lsp.html)