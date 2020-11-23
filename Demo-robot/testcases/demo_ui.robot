*** Settings ***
Library             SeleniumLibrary

*** Variables ***
${browser}          chrome


${login_url}                 http://the-internet.herokuapp.com/login

*** Test Cases ***
TC_002 Login Fail
    Open Browser  ${login_url}   ${browser}
    Input text  name=username    abcd
    Input text  name=password    abcd
    Submit Form
    Wait Until Page Contains   Your username is invalid!
    Close Browser



