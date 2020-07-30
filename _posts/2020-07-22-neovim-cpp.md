---
layout: post
title: "Quick setup for Neovim and C++"
date: "2020-07-22"
categories: ["software"]
---
For some reason, setting up Neovim and adding C++ support took me ages, so I decided to write it down.

Install Neovim and setup a package manager. [Neovim tells you how](https://github.com/neovim/neovim/wiki/Installing-Neovim#ubuntu). [Instructions for installation are also all over the internet](https://medium.com/better-programming/setting-up-neovim-for-web-development-in-2020-d800de3efacd)

In the neovim folder I [create a virtual environment](https://docs.python.org/3/library/venv.html). This way I can more easily track what packages neovim needs and is using and avoid adding packages globally. (You can also do the same for python2).

    python3 -m venv neovim3
    source neovim3/bin/activate
    pip install pynvim

Then add tell neovim about this virtualenv by adding this line to the `init.vim`

    let g:python3_host_prog='/home/{YOUR_USER}/.config/nvim/neovim3/bin/python'

Now for C++ support and autocompletion. I decided to use [deoplete](https://github.com/Shougo/deoplete/) because I liked the authors [arguments for making it](https://github.com/Shougo/deoplete.nvim/blob/master/doc/deoplete.txt#L1990) and had read a few people describe more standard alternatives as a over the top, un-vim-like even. I decided I wanted to be a purist too; despite knowing nothing about any of it. Also I like [the authors writing style](https://github.com/Shougo/deoplete.nvim/blob/master/doc/deoplete.txt#L1973).

I found this [jdhao post](https://jdhao.github.io/2020/04/19/nvim_cpp_and_c_completion/) the most detailed on deoplete, C++ and Neovim. But didn't use much of the same steps they did.

Perhaps I will later discover that building from source is necessary for something, but for now I have no idea why you'd prefer that. [See this SO question](https://stackoverflow.com/a/33573422/6859185). Instead, a simple way:

    sudo apt install llvm
    sudo apt install clang

With the background done, add `deoplete` and [deoplete-clangx](https://github.com/Shougo/deoplete-clangx) to your plugins

      Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
      Plug 'Shougo/deoplete-clangx'

(There is also a plugin, deoplete-clang, but that appears older and less well maintained).

Now close nvim, reopen, and run `:PlugInstall`, then `:checkhealth`. (I forgot :PlugInstall after adding deoplete-clangx and spent many hours "debugging", this was part of the reason I decided to write these steps down...).

At this point when I open a C++ file I see the clangx autocomplete suggestions from deoplete. 

#### Helpful links
- [deoplete-clangx issue for a simple setup](https://github.com/Shougo/deoplete-clangx/issues/8)
- [deoplete debugging](https://github.com/Shougo/deoplete.nvim/blob/master/doc/deoplete.txt#L1543)
