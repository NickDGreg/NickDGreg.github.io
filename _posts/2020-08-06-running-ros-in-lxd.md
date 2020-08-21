---
layout: post
title: "Running ROS in LXD containers"
date: "2020-08-06"
categories: ["software"]
---

I'd been following ROS tutorials and wanted to try out [moveit](https://moveit.ros.org/) but found it wasn't ready for ros-noetic yet. I found [linux containers](https://linuxcontainers.org/lxd/]) as a convinient way to run different versions operating systems that the different libraries need.

I've linked to all the posts I found most useful at the bottom for installing lxd and getting it running. Here I'll just list the commands and configs that I used.

I liked this [post](https://thenewstack.io/how-to-deploy-containers-with-lxd/) for a simple intro to get lxd and lxc installed along with some explanations.

Now we create two files that describe profiles that our containers can use such that we can run all the ROS programs.

The `gui.profile` sets up the container to be able to run GUI and audio programs (see [useful links](#Useful-links) for extra info)
    
    config:
      environment.DISPLAY: :0
      environment.PULSE_SERVER: unix:/home/ubuntu/pulse-native
      user.user-data: |
        #cloud-config
        runcmd:
          - 'sed -i "s/; enable-shm = yes/enable-shm = no/g" /etc/pulse/client.conf'
        packages:
          - x11-apps
          - mesa-utils
          - pulseaudio
        write_files:
          - owner: root:root
            permissions: '0644'
            append: true
            content: |
              PULSE_SERVER=unix:/home/ubuntu/pulse-native
            path: /etc/environment
    description: GUI LXD profile
    devices:
      PASocket1:
        bind: container
        connect: unix:/run/user/1000/pulse/native
        gid: "1000"
        listen: unix:/home/ubuntu/pulse-native
        mode: "0777"
        security.gid: "1000"
        security.uid: "1000"
        type: proxy
        uid: "1000"
      X0:
        bind: container
        connect: unix:@/tmp/.X11-unix/X1
        listen: unix:@/tmp/.X11-unix/X0
        security.gid: "1000"
        security.uid: "1000"
        type: proxy
      mygpu:
        type: gpu
    name: gui
    used_by: []

`ros.profile` adds the ROS repositories and sets the user ids such that we have write permission from within the container. Running `id` in console shows you your user ids.

    # use along with GUI profile for rviz and other graphic programs 
    config:
      raw.idmap: both 1000 1000 # needed for container to have write permissions in shared disk
      user.user-data: |
        #cloud-config
        runcmd:
          - "apt-key adv --fetch-keys 'https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc'"
          - "apt-add-repository 'http://packages.ros.org/ros/ubuntu'"
          - "apt-add-repository 'http://packages.ros.org/ros2/ubuntu'"
    description: ROS
    # if not set with: lxc config device add [<remote>:]instance1 <device-name> disk source=/share/c1 path=opt
    # devices:
    #   share-dir:
    #     path: /home/ubuntu/ 
    #     source: /home/nick/Projects/ros/melodic-moveit  
    #     type: disk
    name: ros

Create the profiles

    ❯ lxc create profile gui
    ❯ lxc create profile ros
    ❯ cat Documents/containers/lxd/gui.profile | lxc profile edit gui
    ❯ cat Documents/containers/lxd/ros.profile | lxc profile edit ros

Create the container 

    ❯ lxc launch ubuntu:18.04 --profile default --profile gui --profile ros ros-melodic

Create alias to easily log into the container 

    ❯ lxc alias add ubuntu 'exec @ARGS@ --user 1000 --group 1000 --env HOME=/home/ubuntu/ -- /bin/bash --login'

Add a shared disk so that you can edit files on the container or your host machine

    ❯ lxc config device add ros-melodic homedir disk source=/home/PATH-TO-FOLDER-YOU-WANT-SHARED/melodic-moveit path=/home/ubuntu/share

Run your container with the alias

    ❯ lxc ubuntu ros-melodic
    
Running `ls` you see pulse audio as well as the `share` folder that is shared with your hostmachine.

Now you can install the ROS programs that you need and run them.

### Useful links
- [Basic intro to lxd](https://thenewstack.io/how-to-deploy-containers-with-lxd/)
- [ROS development with lxd](https://ubuntu.com/blog/ros-development-with-lxd)
- [Installing ROS in lxd](https://ubuntu.com/blog/installing-ros-in-lxd)
- [Running x11 software in lxd containers](https://blog.simos.info/running-x11-software-in-lxd-containers/) (needed for any GUI programs)
- [A working config for pulse-server audio](https://discuss.linuxcontainers.org/t/proxy-device-not-connecting-to-pulseaudio-on-lxd-host/7472/3) (I found the configs in the links above needed this correction)
- [Mounting a shared disk with command line](https://ubuntu.com/blog/mounting-your-home-directory-in-lxd)
- [Mounting a shared disk in a profile config](https://askubuntu.com/questions/610513/how-do-i-share-a-directory-between-an-lxc-container-and-the-host)
