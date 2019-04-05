#!/bin/bash

export PATH=/root/.pyenv/bin:$PATH
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
pyenv activate neovim2
pip install neovim
pyenv activate neovim3
pip install neovim
