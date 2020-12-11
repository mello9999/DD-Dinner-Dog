*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${LOGIN URL}      http://localhost:3000/login
${HOME URL}       http://localhost:3000/home
${BROWSER}        Chrome
${email}             nene199@gmail.com
${new_email}         banklnwza007@test.com 
${password}          2020   
${new_password}      2021

*** Test Cases ***
Valid Login
    Open Browser To DD Dinner Dog
    Input Username    ${email} 
    Input Password    ${password}
    Submit Credentials
    home Page Should Be Open
    Close Browser
    
Invalid Login Case1 : log in with Unregister Email
    Open Browser To DD Dinner Dog 
    Input Username    ${new_email}
    Input Password1    ${new_password}
    Submit Credentials
    Wait Until Page Contains   Login Fail.
    Close Browser

Invalid Login Case2 : log in with Email and Password not matched
    Open Browser To DD Dinner Dog 
    Input Username    ${email} 
    Input Password1    ${new_password}
    Submit Credentials
    Wait Until Page Contains   Login Fail.
    Close Browser

Forget Password
    Open Browser To DD Dinner Dog 
    Forget Password
    Close Browser 

Register New User 
    Open Browser To DD Dinner Dog
    Register Credentials
    register Page Should Be Open
    Close Browser

Switch role user : User to vet
    Open Browser To DD Dinner Dog
    DD vet login 
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
Register Credentials
    Click Link     id = register
DD vet login 
    Click Button   id = DD_veter
register Page Should Be Open
    Title Should Be    DD Dinner Dog
home Page Should Be Open
    Title Should Be    DD Dinner Dog

