FROM centos:7

RUN yum update -y && yum install -y epel-release
RUN yum --enablerepo=epel install -y neovim
RUN yum --enablerepo=epel install -y cargo
RUN cargo install fd-find
ENV PATH=/root/.cargo/bin:$PATH
RUN yum --enablerepo=epel install -y the_silver_searcher
RUN yum --enablerepo=epel install -y git
RUN curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
# add this and below command will run without cache
ARG CACHEBUST=1
RUN curl -fLo ~/.config/nvim/init.vim --create-dirs \
      https://raw.githubusercontent.com/AndreGeng/mac-setup/master/mac-config/nvim/init.vim
# Install neovim plugins
RUN nvim -i NONE -c PlugInstall -c quitall > /dev/null 2>&1
