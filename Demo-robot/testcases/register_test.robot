*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${REGISTER URL}   http://localhost:3000/register
${LOGIN URL}      http://localhost:3000/login
${HOME URL}       http://localhost:3000/profile
${BROWSER}        Chrome
${old_email}            nene199@gmail.com 
${old_password}         2020    
${old_nickname}         nene 

${email}                bank1333@gmail.com
${password}             1333
${nickname}             bankNatchapol

*** Test Cases ***
Valid Register
    Open Browser To DD Dinner Dog
    Input Email               ${email} 
    Input Password            ${password}
    Input Confirm Password    ${password}
    Input Nickname            ${nickname}
    Submit Credentials
    login Page Should Be Open 
    Close Browser

Invalid Register
    Open Browser To DD Dinner Dog
    Input Email               ${old_email}  
    Input Password            ${old_password}
    Input Confirm Password    ${old_password}
    Input Nickname1           ${old_nickname}
    Submit Credentials
    Wait Until Page Contains   Registration Fail.
    

*** Keywords ***
Open Browser To DD Dinner Dog 
    Open Browser    ${REGISTER URL}     ${BROWSER}
    Title Should Be    DD Dinner Dog 

Input Email
    [Arguments]    ${email}
    Input Text     id = email            ${email}       ${old_email}  

Input Password
    [Arguments]    ${password}
    Input Text     id = password         ${password}    ${old_password}

Input Confirm Password
    [Arguments]    ${password}
    Input Text     id = confirm          ${password}    ${old_password}

Input Nickname
    [Arguments]    ${password}
    Input Text     id = nickname         ${nickname}    

Input Nickname1
    [Arguments]    ${password}
    Input Text     id = nickname         ${old_nickname}

Submit Credentials
    Click Button    id = register_button

login Page Should Be Open
    Title Should Be    DD Dinner Dog



