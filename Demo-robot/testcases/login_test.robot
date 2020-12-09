*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${LOGIN URL}      http://localhost:3000/login
${HOME URL}       http://localhost:3000/profile
${BROWSER}        Chrome
${email}             nene199@gmail.com
${password}          2020   
${new_password}      2021

*** Test Cases ***
Valid Login
    Open Browser To DD Dinner Dog
    Input Username    ${email} 
    Input Password    ${password}
    Submit Credentials
    profile Page Should Be Open
    Close Browser
    

Invalid Login
    Open Browser To DD Dinner Dog 
    Input Username    ${email} 
    Input Password1    ${new_password}
    Submit Credentials
    Wait Until Page Contains   Login Fail.
    Close Browser

*** Keywords ***
Open Browser To DD Dinner Dog 
    Open Browser       ${LOGIN URL}      ${BROWSER}
    Title Should Be    DD Dinner Dog
Input Username
    [Arguments]    ${username}
    Input Text     id = username         ${username}
Input Password
    [Arguments]    ${password}
    Input Text     id = password         ${password}
Input Password1
    [Arguments]    ${password}
    Input Text     id = password         ${new_password}
Submit Credentials
    Click Button   id = login_button
Forget Password
    Click Button   id = forgot_password
register Password Should Be Open
    Title Should Be    DD Dinner Dog
profile Page Should Be Open
    Title Should Be    DD Dinner Dog

