

## Tool Recommend
    - VS Code: (Download and install from https://code.visualstudio.com/Download)  * recommended *
    - IDE: Pycham (Download and install from https://www.jetbrains.com/pycharm/)

## Install python 3.8.xx
    # for Mac OS
    Download Python from https://www.python.org/downloads
        1.1. Install Python3 to local
            Alias will created at: /usr/local/bin/python3

    # for Windows
    You can follow the instructions in this link https://medium.com/readmoreth/install-robot-framework-for-windows-408e3cbdb1c7

    ** Please make sure you installed the correct version via command line
       python3 --version
       pip3 --version

    NOTE: Check the official pip installation guide if there’s an error found >> https://pip.pypa.io/en/stable/installing/

## Install browser driver
    Each browser requires their drivers individually, so it requires installed individually.
    This training would use Chrome driver which is used across company projects.
    ● Ensure your Chrome is up-to-date
    ● Download latest released Chrome driver http://chromedriver.chromium.org/
    ● Extract it to executable path
      Target: /usr/local/bin/

## Install requirements.txt (robot libralies)
    1. Launch VS code or Pycharm and enable Terminal  
    2. Open Demo-robot folder  
    3. Install library via commandline 
       >> pip3 install -r requirements.txt

## Run robot test script by using command via command line
    1. Launch VS code or Pycharm 
    2. Open Demo-robot folder
    3. run 
       >> robot ${dir_path}/testcases/.

