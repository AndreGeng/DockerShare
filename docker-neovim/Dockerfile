FROM centos:7
MAINTAINER AndreGeng <andregeng2011@gmail.com>

# add this and below command will run without cache
# ARG CACHEBUST=1
RUN yum update -y && yum install -y epel-release
RUN yum --enablerepo=epel install -y neovim \
      cargo \
      the_silver_searcher \
      git
RUN cargo install fd-find
ENV PATH=/root/.cargo/bin:$PATH

###########################################
# Python
###########################################
RUN yum install -y make patch zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel \
openssl-devel xz xz-devel libffi-devel findutils
RUN curl https://pyenv.run | bash
ENV PATH=/root/.pyenv/bin:$PATH
RUN pyenv install 2.7.16 \
  && pyenv install 3.7.3 \
  && pyenv virtualenv 2.7.16 neovim2 \
  && pyenv virtualenv 3.7.3 neovim3
COPY ./python-setup.sh /root/python-setup.sh
RUN bash /root/python-setup.sh

# install vimplug
RUN curl -fLo /root/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
# download neovim config
RUN curl -fLo /root/.config/nvim/init.vim --create-dirs \
      https://raw.githubusercontent.com/AndreGeng/mac-setup/master/mac-config/nvim/init.vim
# Install neovim plugins
RUN nvim -i NONE -c PlugInstall -c quitall
